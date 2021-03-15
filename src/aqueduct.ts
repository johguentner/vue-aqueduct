export default class Aqueduct {
    public static accessors: Array<any> = [];
    public component: any;
    public name: string;

    public static initialize(name: string, component: any) {
        Aqueduct.accessors[name] = new Aqueduct(name, component);
    }

    public static instance(name: string): any {
        return Aqueduct.accessors[name];
    }

    public instance(name: string): any {
        return Aqueduct.accessors[name];
    }

    private constructor(name: string, component: any) {
        this.name = name;
        this.component = component;
    }

    public pour(data: any): void {
        this.component.data = { ...this.component.data, ...data };
    }

    public flood(data: any): void {
        this.component.data = data;
    }
}