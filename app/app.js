System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.fruits = ["Apple", "Banana", "Pear"];
                }
                App.prototype.addFruit = function (fruit) {
                    this.fruits.push(fruit);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h4>My favourite fruits</h4>\n      <h5>All the fruits I know: <span class=\"badge\">{{fruits.length}}</span></h5>\n      <ul class=\"list-group\">\n        <li *ngFor=\"#fruit of fruits\" class=\"list-group-item\">\n          {{fruit}}\n        </li>\n      </ul>\n      <div class=\"form-inline\">\n        <input class=\"form-control\" #fruitText>\n        <button class=\"btn btn-default\" (click)=\"addFruit(fruitText.value)\">Add fruit</button>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map