import { Injectable } from '@angular/core';
import { RouteCalculation } from '../helpers/route-path-calculator';
import { RouteOption } from '../models/route-option';
import { RouteLocation } from '../shared/route-location.model';
import { RouteData } from '../shared/route-data.model';
import { TERMS } from '../shared/terms.enum';
import { UNIT_SIZE } from '../shared/unit-size.enum';
import { RouteDataService } from './route-data.service';


@Injectable()
export class RouteCalculationService {

    routeDataService: RouteDataService;
    routeDataSet: Array<RouteData> = [];
    cityDataSet: Array<RouteLocation> = [];
    

    constructor(service: RouteDataService) { 
        this.routeDataService = service;
        this.routeDataSet = service.RouteCollection;
        this.cityDataSet = service.AllCities;
    }

    calcRoute(source: string, destination: string, unitSize: UNIT_SIZE, terms: TERMS) { 

        let cityList: Array<string> = new Array<string>();
        this.cityDataSet.forEach(element => cityList.push(element.Name));
        
        if (!cityList.includes(source) || !cityList.includes(destination)) { 
            return [];
        }

        // Add all possible routes 
        var routeCalculation: RouteCalculation = new RouteCalculation(this.cityDataSet.length);

        for (let route in this.routeDataSet) {
            if (this.routeDataSet[route].UnitSize == UNIT_SIZE.Fourty) { 
                routeCalculation.addRoute(this.routeDataSet[route].FromLocation.Name, this.routeDataSet[route].ToLocation.Name)
            }
        }

        //Call calc method in helper class
        // console.log(routeCalculation.calculateAllRoutes(source, destination));
         return this.getResultSet(routeCalculation.calculateAllRoutes(source, destination), unitSize, terms);
    }

    getResultSet(routes: Array<Array<string>>, unitSize: UNIT_SIZE, terms: TERMS) { 
        var resultSet: Array<RouteOption> = [];

        var optionCounter = 1;
        //Loop through every route
        for (let route of routes) { 

            var routeOption = new RouteOption();

            routeOption.OptionId = optionCounter;
            routeOption.Route = route;
            routeOption.Terms = terms;

            //Loop through every leg on one route
            for (let i = 0; i < route.length - 1; i++) {
                let from = route[i];
                let to = route[i + 1];
                routeOption.TransportLegs.push(this.routeDataService.getMatchingRoute(from, to, unitSize));
            }

            //Calc total price and days
            for (let leg of routeOption.TransportLegs) { 
                routeOption.TotalCost += leg.Cost;
                routeOption.TotalDays += leg.Duration;
            }

            optionCounter++;
            //Add option to result set
            resultSet.push(routeOption);
        } 
     
        return resultSet;
    }


}