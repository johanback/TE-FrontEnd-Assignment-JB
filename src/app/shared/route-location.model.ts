export class RouteLocation {


    constructor(
        private name: string,
        private code: string,
        private country: string,
        private state?: string
    ) {}

    public get State(): string {
        return this.state;
    }

    public get Country(): string {
        return this.country;
    }

    public get Name(): string {
        return this.name;
    }

    public get Code(): string {
        return this.code;
    }
}

