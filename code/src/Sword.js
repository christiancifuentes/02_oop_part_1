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
exports.Sword = void 0;
var Weapon_1 = require("./Weapon");
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword(baseDamage, baseDurability, value, weight) {
        return _super.call(this, "sword", baseDamage, baseDurability, value, weight) || this;
    }
    Sword.prototype.polish = function () {
        this.setDamageModifier(this.getDamageModifier() + Weapon_1.Weapon.MODIFIER_CHANGE_RATE);
        var currentDamage = this.getBaseDamage();
        var damageIncrease = ((currentDamage * 25) / 100);
        var newDamageValue = currentDamage + damageIncrease;
        if (newDamageValue > 125) {
            newDamageValue = 125;
        }
        this.setBaseDamage(newDamageValue);
    };
    return Sword;
}(Weapon_1.Weapon));
exports.Sword = Sword;
