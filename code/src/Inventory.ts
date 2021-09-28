import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory{
    items: Array<Item>;

    constructor();
    constructor(items?: Array<Item>){
        if( typeof items != 'undefined') {
            this.items=items;
        }else{
            this.items = new Array<Item>();
        }
    }

    addItem(item: Item){
        this.items.push(item);
    }

    sort(comparator?: ItemComparator){
        if(typeof comparator != 'undefined'){
            this.items.sort(function(a,b){
                return comparator.compare(a,b);
            });
        }else{
            this.items.sort(function(a,b){
                if(a.value>b.value){
                    return 1;
                }
                if(a.value<b.value){
                    return -1
                }
                return 0
            });
        }
    }

    toString(){
        return this.items.toString();
    }

}