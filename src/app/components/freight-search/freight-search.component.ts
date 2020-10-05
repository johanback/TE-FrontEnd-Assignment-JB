import { RouteCalculationService } from './../../services/route-calculation.service';
import { RouteLocation } from '../../shared/route-location.model';
import { RouteData } from './../../shared/route-data.model';
import { RouteDataService } from './../../services/route-data.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouteOption } from 'src/app/models/route-option';


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

    

    from = new FormControl('', Validators.required); 
    to = new FormControl('', Validators.required); 
    unitSize = new FormControl('', Validators.required); 
    terms = new FormControl('', Validators.required);
    
    result: Array<RouteOption> = [];


    constructor(dataService: RouteDataService, routeCalculationService : RouteCalculationService) { 
        this.routeDataService = dataService;
        this.routeDataSet = dataService.RouteCollection;
        this.cityDataSet = dataService.AllCities;
        this.routeCalculationService = routeCalculationService;
    }
    
    ngOnInit(){
    }

    submitSearch(event) { 

        this.submitted = true;

        // stop here if form is invalid
        if (this.from.invalid) {
            return;
        }

        console.log(this.from.value, this.to.value, this.unitSize.value, this.terms.value);
        this.result = this.routeCalculationService.calcRoute(this.from.value, this.to.value, this.unitSize.value, this.terms.value);  
    }

}