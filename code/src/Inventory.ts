import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory{
    private items: Array<Item>;

    public constructor();
    public constructor(items?: Array<Item>){
        if( typeof items != 'undefined') {
            this.items=items;
        }else{
            this.items = new Array<Item>();
        }
    }

    public addItem(item: Item){
        this.items.push(item);
    }

    public sort(comparator?: ItemComparator){
        if(typeof comparator != 'undefined'){
            this.items.sort(function(a,b){
                return comparator.compare(a,b);
            });
        }else{
            this.items.sort(function(a,b){
                if(a.getValue()>b.getValue()){
                    return 1;
                }
                if(a.getValue()<b.getValue()){
                    return -1
                }
                return 0
            });
        }
    }

    public toString(){
        return this.items.toString();
    }

}