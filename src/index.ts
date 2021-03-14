import Viaduct from "./viaduct";
// import VueViaduct from "./VueViaduct.vue";

export default {
    install(app: any) {
        app.config.globalProperties.$viaduct = Viaduct;
    }
}


