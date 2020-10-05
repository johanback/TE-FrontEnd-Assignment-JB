import { TERMS } from '../shared/terms.enum';
import { RouteData } from './../shared/route-data.model';

export class RouteOption {
    private optionId: number;
    private route: Array<string>;
    private transportLegs: Array<RouteData>;
    private totalCost: number;
    private totalDays: number;
    private terms: TERMS;

    constructor() {
        this.transportLegs = [];
        this.totalCost = 0;
        this.totalDays = 0;
        this.OptionId = 0;
    }
    
    public get OptionId(): number {
        return this.optionId;
    }
    public set OptionId(value: number) {
        this.optionId = value;
    }

    public get Route(): Array<string> {
        return this.route;
    }
    public set Route(value: Array<string>) {
        this.route = value;
    }

    public get TransportLegs(): Array<RouteData> {
        return this.transportLegs;
    }
    public set TransportLegs(value: Array<RouteData>) {
        this.transportLegs = value;
    }

    public get TotalCost(): number {
        return this.totalCost;
    }
    public set TotalCost(value: number) {
        this.totalCost = value;
    }

    
    public get TotalDays(): number {
        return this.totalDays;
    }
    public set TotalDays(value: number) {
        this.totalDays = value;
    }

    public get Terms(): TERMS {
        return this.terms;
    }
    public set Terms(value: TERMS) {
        this.terms = value;
    }

}