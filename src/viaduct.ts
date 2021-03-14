export default class Viaduct {
    public static accessors: Array<any> = [];
    public component: any;
    public name: string;

    public static initialize(name: string, component: any) {
        Viaduct.accessors[name] = new Viaduct(name, component);
    }

    public static instance(name: string): any {
        return Viaduct.accessors[name];
    }
    public constructor(name: string, component: any) {
        this.name = name;
        this.component = component;
    }

    public pour(data: any): void {
        this.component.data = data;
    }

    // public show(title, subtitle, closeable): void {
    //     this.component.title = title;
    //     this.component.subtitle = subtitle;
    //     this.component.closeable = closeable;
    //     this.component.visible = true;
    //     this.component.alert = null;
    // }

    // public alert(title, subtitle, variant) {
    //     this.component.alert.title = title;
    //     this.component.alert.subtitle = subtitle;
    //     this.component.alert.variant = variant;
    // }

    // public hide(): void {
    //     this.component.visible = false;
    // }


}