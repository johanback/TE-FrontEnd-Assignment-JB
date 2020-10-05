import { RouteCalculationService } from './../../services/route-calculation.service';
import { RouteLocation } from '../../models/route-location.model';
import { RouteData } from '../../models/route-data.model';
import { RouteDataService } from './../../services/route-data.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouteOption } from 'src/app/models/route-option.model';



@Component({
    selector: 'freight-search',
    templateUrl: './freight-search.component.html',
    styleUrls: ['./freight-search.component.less']
})
export class FreightSearchComponent implements OnInit{

    routeDataService: RouteDataService;
    routeCalculationService: RouteCalculationService;
    routeDataSet: Array<RouteData> = [];
    cityDataSet: Array<RouteLocation> = [];

    submitted = false;


    //Form Controls
    from = new FormControl('', Validators.required); 
    to = new FormControl('', Validators.required); 
    unitSize = new FormControl('', Validators.required); 
    terms = new FormControl('', Validators.required);

    //Both sent to child component for displaying result
    result: Array<RouteOption>;
    isValidResult: boolean;


    constructor(dataService: RouteDataService, routeCalculationService : RouteCalculationService) { 
        this.routeDataService = dataService;
        this.routeDataSet = dataService.RouteCollection;
        this.cityDataSet = dataService.AllCities;
        this.routeCalculationService = routeCalculationService;
    }
    
    ngOnInit(){
    }

    // Sends current inputs from form to calculate possible routs
    submitSearch(event) { 

        this.submitted = true;

        // stop here if form is invalid
        if (this.from.invalid || this.to.invalid || this.unitSize.invalid || this.terms.invalid ) {
            return;
        }

        //Send inputs to calc
        this.result = this.routeCalculationService.calcRoute(this.from.value, this.to.value, this.unitSize.value, this.terms.value);  
    
        //See if valid input
        if (this.result.length == 0)
            this.isValidResult = false;
        else
            this.isValidResult = true;
    
    }

}