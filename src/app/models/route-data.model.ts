import { TRANSPORT_MODE } from '../shared/transport-mode.enum';
import { UNIT_SIZE } from '../shared/unit-size.enum';
import { RouteLocation } from './route-location.model';


export class RouteData {

    constructor(
        private fromLocation: RouteLocation,
        private toLocation: RouteLocation,
        private transportMode: TRANSPORT_MODE,
        private duration: number,
        private unitSize: UNIT_SIZE,
        private cost: number) {}

    public get FromLocation(): RouteLocation {
        return this.fromLocation;
    }

    public get ToLocation(): RouteLocation {
        return this.toLocation;
    }

    public get TransportMode(): TRANSPORT_MODE {
        return this.transportMode;
    }

    public get Duration(): number {
        return this.duration;
    }

    public get UnitSize(): UNIT_SIZE {
        return this.unitSize;
    }

    public get Cost(): number {
        return this.cost;
    }

}

