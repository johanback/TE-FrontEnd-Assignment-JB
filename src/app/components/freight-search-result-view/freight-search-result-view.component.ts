import { TERMS } from 'src/app/shared/terms.enum';
import { RouteCalculationService } from '../../services/route-calculation.service';
import { Component, Input, OnInit } from '@angular/core';
import { UNIT_SIZE } from 'src/app/shared/unit-size.enum';

import { RouteOption } from 'src/app/models/route-option';
import { Route } from '@angular/router';


@Component({
    selector: 'freight-search-result-view',
    templateUrl: './freight-search-result-view.component.html',
    styleUrls: ['./freight-search-result-view.component.less']
})
export class FreightSearchResultViewComponent implements OnInit{

    routeCalculationService: RouteCalculationService;

    @Input() result: Array<RouteOption>;
    @Input() isValidResult: boolean;

    constructor(routeCalculationService: RouteCalculationService) {
        this.routeCalculationService = routeCalculationService;
    }

    ngOnInit() {
        this.result = [];
        this.isValidResult = true;
    }

}