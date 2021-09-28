import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private static numberOfItems: number;
    private id: number;
    private value: number;
    private name: string;
    private weight: number;

    public constructor( name:string, value:number, weight:number ){
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

    public toString(){
        return `${this.getId()}: ${this.name} - Value: ${this.getValue()}, Weight: ${this.getWeight()}.\n`
    }
    public getId(){
        return this.id;
    }
    public getValue(){
        return this.value;
    }
    public getName(){
        return this.name;
    }
    public getWeight(){
        return this.weight;
    }
    public setValue(value:number){
        this.value=value;
    }
    public setName(name:string){
        this.name=name;
    }
    public setWeight(weight:number){
        this.weight=weight
    }

    public use(){}
    public polish(){}

    public static reset(){
        id=0;
    }
}
