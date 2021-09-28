"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pizza = void 0;
var Consumable_1 = require("./Consumable");
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza(numberOfSlices, spoiled, value, weight) {
        var _this = this;
        if (typeof value != 'undefined' && typeof weight != 'undefined') {
            _this = _super.call(this, "pizza", value, weight, spoiled) || this;
        }
        else {
            _this = _super.call(this, "pizza", 99, numberOfSlices * 100, spoiled) || this;
        }
        _this.numberOfSlices = numberOfSlices;
        _this.slicesEaten = 0;
        return _this;
    }
    Pizza.prototype.getSlicesEaten = function () {
        return this.slicesEaten;
    };
    Pizza.prototype.getNumberOfSlices = function () {
        return this.numberOfSlices;
    };
    Pizza.prototype.setSlicesEaten = function (slicesEaten) {
        this.slicesEaten = slicesEaten;
    };
    Pizza.prototype.setNumberOfSlices = function (numberOfSlices) {
        this.numberOfSlices = numberOfSlices;
    };
    Pizza.prototype.eat = function () {
        var sickMessage = " You feel sick.";
        var eatMessage = "You eat a slice of the " + this.getName() + ".";
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }
            if (this.getSpoiled()) {
                eatMessage += sickMessage;
            }
            return eatMessage;
        }
        else {
            return "";
        }
    };
    return Pizza;
}(Consumable_1.Consumable));
exports.Pizza = Pizza;
