import _ from 'lodash';
import Aqueduct from './aqueduct';


export default class Alert {
    public static accessors: Array<Alert> = [];
    public static aqueductTitle = "msg";
    public buttons = [];
    public tmpButtons = [];
    public name;

    private constructor(name: string) {
        this.name = name;
    }

    public static initialize(name: string) {
        Alert.accessors[name] = new Alert(name);
    }


    public static instance(name: string): any {
        if (!name) name = "alert";
        return Alert.accessors[name];
    }

    // public title(title: string): Alert {
    //     Aqueduct.instance("alert").pour({ title });
    //     return this;
    // }

    public plain(title: string, msg: string, timout: number = 0): Alert {
        Aqueduct.instance("alert").flood({ title, msg, type: 'plain' }, timout);
        return this;
    }

    public error(title: string, msg: string, timout: number = 0): Alert {
        Aqueduct.instance("alert").flood({ title, msg, type: 'error' }, timout);
        return this;
    }
    public info(title: string, msg: string, timout: number = 0): Alert {
        Aqueduct.instance("alert").flood({ title, msg, type: 'info' }, timout);
        return this;
    }
    public success(title: string, msg: string, timout: number = 0): Alert {
        Aqueduct.instance("alert").flood({ title, msg, type: 'success' }, timout);
        return this;
    }

    public keepButtons() {
        this.buttons = this.tmpButtons;
        Aqueduct.instance("alert").pour({ buttons: this.buttons });
    }

    public then(callback): Alert {
        Aqueduct.instance("alert").then(callback);
        return this;
    }

    public button(content: string, variant: string = 'default', customClass: string = ''): Alert {
        this.buttons.push({ content, variant, customClass });
        Aqueduct.instance("msg").pour({ buttons: this.buttons });
        return this;
    }

    public destroy() {
        Aqueduct.instance("msg").flood();
        this.buttons = [];
    }

}