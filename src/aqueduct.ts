import _ from 'lodash';

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

    private put(data: any, timeout: number = 0, pour: boolean = false): Aqueduct {
        let componentsData = this.components.map(o => o.data);

        let uid = _.times(10, () => _.random(35).toString(36)).join('');
        let position = 0;

        for (let component of this.components) {
            if (component.data == null || !Array.isArray(component.data)) component.data = [];
            if (component.isCollection) {
                position = component.data.push({ ...data, uid, _created: new Date() });
            }
            else {
                if (pour) {
                    component.data = { ...component.data, ...data };
                }
                else {
                    component.data = data;
                }
            }
        }


        if (timeout != 0) {
            setTimeout(() => {
                let index = 0;
                for (let component of this.components) {
                    if (component.isCollection) {
                        let spliceI = _.findIndex(component.data, function (item) { return item.uid == uid });
                        if (spliceI != -1) component.data.splice(spliceI, 1);
                    }
                    else {
                        if (pour) {
                            component.data = componentsData[index];
                        }
                        else {
                            component.data = null;
                        }
                    }
                    index++;
                }

            }, timeout)
        }
        return this;
    }

    public pour(data: any, timeout: number = 0): Aqueduct {
        return this.put(data, timeout, true);
    }

    public flood(data: any = null, timeout: number = 0): Aqueduct {
        return this.put(data, timeout);
    }

    public destroy(uid): void {
        for (let component of this.components) {
            if (component.isCollection) {
                component.data.splice(_.findIndex(component.data, function (item) { return item.uid == uid }), 1);
            }
            else {
                component.data = null;
            }
        }
    }

    public then(callback: Function): Aqueduct {
        this.callback = callback;
        this.components.forEach((component) => component.callback = callback);
        return this;
    }


}