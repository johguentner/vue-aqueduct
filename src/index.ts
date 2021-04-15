import Aqueduct from "./aqueduct";
import Alert from "./alert";
import Message from "./message";
// import VueViaduct from "./VueViaduct.vue";

export default {
    install(app: any) {
        app.config.globalProperties.$aqueduct = (name?: string): Aqueduct => {
            return Aqueduct.instance(name);
        };
        Message.initialize("msg");
        app.config.globalProperties.$msg = Message.instance("msg");
        Alert.initialize("alert");
        app.config.globalProperties.$alert = Alert.instance("alert");
    }
}


