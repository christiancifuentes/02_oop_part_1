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
exports.Weapon = void 0;
var Item_1 = require("./Item");
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, baseDamage, baseDurability, value, weight) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.baseDamage = baseDamage;
        _this.baseDurability = baseDurability;
        _this.damageModifier = 0;
        _this.durabilityModifier = 0;
        return _this;
    }
    Weapon.prototype.toString = function () {
        return this.getId() + ": " + this.getName() + " - Value: " + this.getValue() + ", Weight: " + this.getWeight() + ", Damage: " + ((Math.round(this.getDamage() * 100) / 100).toFixed(2)) + ", Durability: " + ((Math.round((this.getDurability() * 100) * 100) / 100).toFixed(2)) + "%.\n";
    };
    Weapon.prototype.getBaseDamage = function () {
        return this.baseDamage;
    };
    Weapon.prototype.getDamageModifier = function () {
        return this.damageModifier;
    };
    Weapon.prototype.getBaseDurability = function () {
        return this.baseDurability;
    };
    Weapon.prototype.getDurabilityModifier = function () {
        return this.durabilityModifier;
    };
    Weapon.prototype.getDamage = function () {
        return this.getBaseDamage() + this.getDamageModifier();
    };
    Weapon.prototype.getDurability = function () {
        return this.getBaseDurability() + this.getDurabilityModifier();
    };
    Weapon.prototype.setBaseDurability = function (baseDurability) {
        this.baseDurability = baseDurability;
    };
    Weapon.prototype.setDurabilityModifier = function (durabilityModifier) {
        this.durabilityModifier = durabilityModifier;
    };
    Weapon.prototype.setBaseDamage = function (baseDamage) {
        this.baseDamage = baseDamage;
    };
    Weapon.prototype.setDamageModifier = function (damageModifier) {
        this.damageModifier = damageModifier;
    };
    Weapon.prototype.polish = function () { };
    Weapon.prototype.use = function () {
        if (this.getDurability() <= 0) {
            return "You can't use the " + this.getName() + ", it is broken.";
        }
        else {
            this.setDurabilityModifier(this.getDurabilityModifier() - Weapon.MODIFIER_CHANGE_RATE);
            var brokenText = "";
            if (this.getDurability() <= 0) {
                brokenText = " The " + this.getName() + " breaks.";
            }
            return "You use the " + this.getName() + ", dealing " + ((Math.round(this.getDamage() * 100) / 100).toFixed(2)) + " points of damage." + brokenText;
        }
    };
    Weapon.MODIFIER_CHANGE_RATE = 0.05;
    return Weapon;
}(Item_1.Item));
exports.Weapon = Weapon;
