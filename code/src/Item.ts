import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static numberOfItems: number;
    id: number;
    value: number;
    name: string;
    weight: number;

    constructor( name:string, value:number, weight:number ){
        this.name=name;
        this.value=value;
        this.weight=weight;
        this.id=id;
        id++
        if (typeof Item.numberOfItems !== 'undefined') {
            Item.numberOfItems=id;
        }else{
            Item.numberOfItems=1;
        }
    }
    public compareTo(other: Item): number {
        if(this.value>other.getValue()){
            return 1;
        }else{
            if(this.value<other.getValue()){
                return -1
            }else{
                return this.name.localeCompare(other.getName());
            }
        }
    }

    toString(){
        return `${this.getId()}: ${this.name} - Value: ${this.getValue()}, Weight: ${this.getWeight()}.\n`
    }

    getId(){
        return this.id;
    }
    getValue(){
        return this.value;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    setValue(value:number){
        this.value=value;
    }
    setName(name:string){
        this.name=name;
    }
    setWeight(weight:number){
        this.weight=weight
    }

    use(){}
    polish(){}

    static reset(){
        id=0;
    }
}
