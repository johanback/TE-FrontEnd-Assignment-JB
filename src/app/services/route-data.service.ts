import { TRANSPORT_MODE } from './../shared/transport-mode.enum';
import { UNIT_SIZE } from './../shared/unit-size.enum';
import { RouteData } from './../shared/route-data.model';
import { Injectable } from '@angular/core';
import { RouteLocation } from '../shared/route-location.model';

@Injectable()
export class RouteDataService {

    private allCities: Array<RouteLocation> = [];
    private routeCollection: Array<RouteData> = [];

    constructor() {

        this.allCities.push(new RouteLocation('Stockholm', 'STO', 'SE'));
        this.allCities.push(new RouteLocation('Gothenburg', 'GOT', 'SE'));
        this.allCities.push(new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Fl'));
        this.allCities.push(new RouteLocation('Savannah', 'SVH', 'USA', 'Ga'));
        this.allCities.push(new RouteLocation('Orlando', 'ORL', 'USA', 'Fl'));
        this.allCities.push(new RouteLocation('Rotterdam', 'ROT', 'NL'));


        this.routeCollection.push(new RouteData(new RouteLocation('Stockholm', 'STO', 'SE'), new RouteLocation('Gothenburg', 'GOT', 'SE'), TRANSPORT_MODE.Road, 1, UNIT_SIZE.Fourty, 430));            
        this.routeCollection.push(new RouteData(new RouteLocation('Stockholm',  'STO', 'SE'), new RouteLocation('Gothenburg', 'GOT', 'SE'), TRANSPORT_MODE.Road, 1, UNIT_SIZE.Sixty, 630));            
        this.routeCollection.push(new RouteData(new RouteLocation('Gothenburg', 'GOT', 'SE'), new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Orlando'), TRANSPORT_MODE.Ocean, 22, UNIT_SIZE.Fourty, 1623));            
        this.routeCollection.push(new RouteData(new RouteLocation('Gothenburg', 'GOT', 'SE'), new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Orlando'), TRANSPORT_MODE.Ocean, 22, UNIT_SIZE.Sixty, 2500));            
        this.routeCollection.push(new RouteData(new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Fl'), new RouteLocation('Orlando', 'ORL', 'USA', 'Fl'), TRANSPORT_MODE.Road, 1, UNIT_SIZE.Fourty, 600));            
        this.routeCollection.push(new RouteData(new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Fl'), new RouteLocation('Orlando', 'ORL', 'USA', 'Fl'), TRANSPORT_MODE.Road, 1, UNIT_SIZE.Sixty, 900));            
        this.routeCollection.push(new RouteData(new RouteLocation('Gothenburg', 'GOT', 'SE'), new RouteLocation('Savannah', 'SVH', 'USA', 'Fl'), TRANSPORT_MODE.Ocean, 23, UNIT_SIZE.Fourty, 1765));            
        this.routeCollection.push(new RouteData(new RouteLocation('Gothenburg', 'GOT', 'SE'), new RouteLocation('Savannah', 'SVH', 'Fl'), TRANSPORT_MODE.Ocean, 23, UNIT_SIZE.Sixty, 2600)); 
        this.routeCollection.push(new RouteData(new RouteLocation('Savannah', 'SVH', 'USA', 'Ga'), new RouteLocation('Orlando', 'ORL', 'USA', 'Fl'), TRANSPORT_MODE.Road, 1, UNIT_SIZE.Fourty, 600));            
        this.routeCollection.push(new RouteData(new RouteLocation('Savannah', 'SVH', 'USA', 'Ga'), new RouteLocation('Orlando', 'ORL', 'USA', 'Fl'), TRANSPORT_MODE.Road, 1, UNIT_SIZE.Sixty, 900));            
        this.routeCollection.push(new RouteData(new RouteLocation('Stockholm', 'STO', 'SE'), new RouteLocation('Rotterdam', 'ROT', 'NL'), TRANSPORT_MODE.Road, 3, UNIT_SIZE.Fourty, 1430));            
        this.routeCollection.push(new RouteData(new RouteLocation('Stockholm', 'STO', 'SE'), new RouteLocation('Rotterdam', 'ROT', 'NL'), TRANSPORT_MODE.Road, 3, UNIT_SIZE.Sixty, 2600));            
        this.routeCollection.push(new RouteData(new RouteLocation('Rotterdam', 'ROT', 'NL'), new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Fl'), TRANSPORT_MODE.Ocean, 18, UNIT_SIZE.Fourty, 1623));            
        this.routeCollection.push(new RouteData(new RouteLocation('Rotterdam', 'ROT', 'NL'), new RouteLocation('Ft. Lauderdale', 'FTL', 'USA', 'Fl'), TRANSPORT_MODE.Ocean, 18, UNIT_SIZE.Sixty, 2600));            
    }

    public getMatchingRoute(from: string, to: string, unitSize) { 
        for (let route of this.routeCollection) { 
            if (route.FromLocation.Name == from && route.ToLocation.Name == to && route.UnitSize == unitSize) { 
                return route;
            }
        }
    }

    public get RouteCollection(): Array<RouteData> {
        return this.routeCollection;
    }

    public get AllCities(): Array<RouteLocation> {
        return this.allCities;
    }
}