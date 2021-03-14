var Viaduct = /** @class */ (function () {
    function Viaduct(name, component) {
        this.name = name;
        this.component = component;
    }
    Viaduct.initialize = function (name, component) {
        Viaduct.accessors[name] = new Viaduct(name, component);
    };
    Viaduct.instance = function (name) {
        return Viaduct.accessors[name];
    };
    Viaduct.prototype.pour = function (data) {
        this.component.data = data;
    };
    Viaduct.accessors = [];
    return Viaduct;
}());
export default Viaduct;
//# sourceMappingURL=viaduct.js.map