import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'freight-result-row',
    templateUrl: './freight-result-row.component.html',
    styleUrls: ['./freight-result-row.component.less']
})
export class FreightResultRowComponent implements OnInit{

    constructor() { }

    @Input() legInfo: any;

    ngOnInit(){

    }

}