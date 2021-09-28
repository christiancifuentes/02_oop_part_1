// Create the inventory
import {Inventory} from './code/src/Inventory'
import {Item} from './code/src/Item'
import {Sword} from './code/src/Sword'
import {Pizza} from './code/src/Pizza'
import {ItemWeightComparator} from './code/src/ItemWeightComparator'
import { Bow } from './code/src/Bow'

const inventory: Inventory = new Inventory();

// Create a set of items
const a: Item = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Item = new Sword(40, 0.7893, 200, 2);
const c: Item = new Sword(40, 1, 100, 3);
const d: Item = new Sword(99, 0.01,999,4);
const pizza: Item = new Pizza(12, false,100,2.045456);
const bow: Item = new Bow(15,0.7891,150,1.054);

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
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log(inventory.toString());

// Use the sword
console.log(a.use());
console.log(a.use());
console.log(pizza.use());
console.log(bow.use());
console.log(d.use());
console.log(d.use());

