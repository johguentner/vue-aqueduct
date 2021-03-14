import Viaduct from "./viaduct";
// import VueViaduct from "./VueViaduct.vue";
export default {
    install: function (app, options) {
        options = {};
        // app.component("Viaduct", VueViaduct);
        app.config.globalProperties.$viaduct = Viaduct;
    }
};
//# sourceMappingURL=index.js.map