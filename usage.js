"use strict";
exports.__esModule = true;
// Create the inventory
var Inventory_1 = require("./code/src/Inventory");
var Sword_1 = require("./code/src/Sword");
var Pizza_1 = require("./code/src/Pizza");
var ItemWeightComparator_1 = require("./code/src/ItemWeightComparator");
var Bow_1 = require("./code/src/Bow");
var inventory = new Inventory_1.Inventory();
// Create a set of items
var a = new Sword_1.Sword(30.4219, 0.7893, 300, 2.032);
var b = new Sword_1.Sword(40, 0.7893, 200, 2);
var c = new Sword_1.Sword(40, 1, 100, 3);
var d = new Sword_1.Sword(99, 0.01, 999, 4);
var pizza = new Pizza_1.Pizza(12, false, 100, 2.045456);
var bow = new Bow_1.Bow(15, 0.7891, 150, 1.054);
// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(d);
inventory.addItem(pizza);
inventory.addItem(bow);
// Display the inventory
console.log(inventory.toString());
// Sort by natural order
inventory.sort();
// Display the new inventory
console.log(inventory.toString());
// Sort by weight
inventory.sort(new ItemWeightComparator_1.ItemWeightComparator());
// Display the inventory again
console.log(inventory.toString());
// Use the sword
console.log(a.use());
console.log(a.use());
console.log(pizza.use());
console.log(bow.use());
console.log(d.use());
console.log(d.use());
