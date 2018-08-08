export default class Human {
    constractor(name=null) { this._name = name; }
    get Name() { return this._name; }
    set Name(v) { if (v) { this._name = v; } }
    Speak() {
        console.log("name: " + this._name);
        alert("name: " + this._name);
    }
};
