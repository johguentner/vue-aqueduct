export default class Viaduct {
    static accessors: Array<any>;
    component: any;
    name: string;
    static initialize(name: string, component: any): void;
    static instance(name: string): any;
    constructor(name: string, component: any);
    pour(data: any): void;
}
