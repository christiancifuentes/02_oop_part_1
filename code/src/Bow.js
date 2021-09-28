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
exports.Bow = void 0;
var Weapon_1 = require("./Weapon");
var Bow = /** @class */ (function (_super) {
    __extends(Bow, _super);
    function Bow(baseDamage, baseDurability, value, weight) {
        return _super.call(this, "bow", baseDamage, baseDurability, value, weight) || this;
    }
    Bow.prototype.polish = function () {
        var currentDurabilityModifier = this.getDurabilityModifier();
        var newDurabilityModifier = currentDurabilityModifier + Weapon_1.Weapon.MODIFIER_CHANGE_RATE;
        if (newDurabilityModifier > 1) {
            newDurabilityModifier = 1;
        }
        this.setDurabilityModifier(newDurabilityModifier);
    };
    return Bow;
}(Weapon_1.Weapon));
exports.Bow = Bow;
