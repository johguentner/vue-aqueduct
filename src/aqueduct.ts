export default class Aqueduct {
    public static accessors: Array<Aqueduct> = [];
    public components: Array<any> = [];
    public name: string;
    public callback: Function;

    public static initialize(name: string, component: any) {
        if (Aqueduct.accessors[name]) {
            Aqueduct.accessors[name].components.push(component);
        }
        else {
            Aqueduct.accessors[name] = new Aqueduct(name, component);
        }
    }

    public static instance(name: string): any {
        if (!name) name = "__global__";
        return Aqueduct.accessors[name];
    }

    public instance(name: string): any {
        if (!name) name = "__global__";
        return Aqueduct.accessors[name];
    }

    private constructor(name: string, component: any) {
        this.name = name;
        this.components.push(component);
    }

    public pour(data: any): Aqueduct {
        this.components.forEach((component) => component.data = { ...component.data, ...data });
        return this;
    }

    public flood(data: any = null): Aqueduct {
        this.components.forEach((component) => component.data = data);
        return this;
    }

    public then(callback: Function): Aqueduct {
        this.callback = callback;
        this.components.forEach((component) => component.callback = callback);
        return this;
    }


}