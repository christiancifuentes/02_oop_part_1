"use strict";
exports.__esModule = true;
exports.Inventory = void 0;
var Inventory = /** @class */ (function () {
    function Inventory(items) {
        if (typeof items != 'undefined') {
            this.items = items;
        }
        else {
            this.items = new Array();
        }
    }
    Inventory.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Inventory.prototype.sort = function (comparator) {
        if (typeof comparator != 'undefined') {
            this.items.sort(function (a, b) {
                return comparator.compare(a, b);
            });
        }
        else {
            this.items.sort(function (a, b) {
                if (a.value > b.value) {
                    return 1;
                }
                if (a.value < b.value) {
                    return -1;
                }
                return 0;
            });
        }
    };
    Inventory.prototype.toString = function () {
        return this.items.toString();
    };
    return Inventory;
}());
exports.Inventory = Inventory;
