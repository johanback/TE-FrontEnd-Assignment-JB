import { TERMS } from 'src/app/shared/terms.enum';
import { RouteCalculationService } from './../../services/route-calculation.service';
import { Component, Input, OnInit } from '@angular/core';
import { UNIT_SIZE } from 'src/app/shared/unit-size.enum';

import { RouteOption } from 'src/app/models/route-option';


@Component({
    selector: 'freight-search-result',
    templateUrl: './freight-search-result.component.html',
    styleUrls: ['./freight-search-result.component.less']
})
export class FreightSearchResultComponent implements OnInit{

    constructor(routeCalculationService: RouteCalculationService) {
    }

    @Input() routeOption: any;


    ngOnInit(){  
    }

}