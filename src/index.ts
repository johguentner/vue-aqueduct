import Aqueduct from "./aqueduct";
// import VueViaduct from "./VueViaduct.vue";

export default {
    install(app: any) {
        app.config.globalProperties.$aqueduct = (name?: string): Aqueduct => {
            return Aqueduct.instance(name);
        };
    }
}


