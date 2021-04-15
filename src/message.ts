import _ from 'lodash';
import Aqueduct from './aqueduct';


export default class Messager {
    public static accessors: Array<Messager> = [];
    public static aqueductTitle = "msg";
    public buttons = [];
    public tmpButtons = [];
    public name;

    private constructor(name: string) {
        this.name = name;
    }

    public static initialize(name: string) {
        Messager.accessors[name] = new Messager(name);
    }


    public static instance(name: string): any {
        if (!name) name = "msg";
        return Messager.accessors[name];
    }

    public title(title: string): Messager {
        Aqueduct.instance("msg").pour({ title });
        return this;
    }

    public plain(msg: string, timout: number = 0): Messager {
        this.tmpButtons = this.buttons;
        this.buttons = [];
        Aqueduct.instance("msg").pour({ msg, buttons: this.buttons }, timout);
        return this;
    }

    public keepButtons() {
        this.buttons = this.tmpButtons;
        Aqueduct.instance("msg").pour({ buttons: this.buttons });
    }

    public then(callback): Messager {
        Aqueduct.instance("msg").then(callback);
        return this;
    }

    public callback(e, destroy) {
        
    }

    public button(content: string, variant: string = 'default', customClass: string = ''): Messager {
        this.buttons.push({ content, variant, customClass });
        Aqueduct.instance("msg").pour({ buttons: this.buttons });
        return this;
    }

    public destroy() {
        Aqueduct.instance("msg").flood();
        this.buttons = [];
    }

}