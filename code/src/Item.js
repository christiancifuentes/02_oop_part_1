"use strict";
exports.__esModule = true;
exports.Item = void 0;
var id = 0;
var Item = /** @class */ (function () {
    function Item(name, value, weight) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = id;
        id++;
        if (typeof Item.numberOfItems !== 'undefined') {
            Item.numberOfItems = id;
        }
        else {
            Item.numberOfItems = 1;
        }
    }
    Item.prototype.compareTo = function (other) {
        if (this.value > other.getValue()) {
            return 1;
        }
        else {
            if (this.value < other.getValue()) {
                return -1;
            }
            else {
                return this.name.localeCompare(other.getName());
            }
        }
    };
    Item.prototype.toString = function () {
        return this.name + " - Value: " + this.getValue() + ", Weight: " + ((Math.round(this.getWeight() * 100) / 100).toFixed(2)) + ".\n";
    };
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getValue = function () {
        return this.value;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getWeight = function () {
        return this.weight;
    };
    Item.prototype.setValue = function (value) {
        this.value = value;
    };
    Item.prototype.setName = function (name) {
        this.name = name;
    };
    Item.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Item.reset = function () {
        id = 0;
    };
    return Item;
}());
exports.Item = Item;
