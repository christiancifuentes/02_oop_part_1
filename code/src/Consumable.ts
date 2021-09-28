import { Item } from "./Item";
export abstract class Consumable extends Item{
    consumed: boolean;
    spoiled: boolean;

    constructor(name:string, value:number, weight:number, spoiled: boolean){
        super(name,value,weight);
        this.spoiled=spoiled;
        this.consumed=false;
    }

    setConsumed(consumed:boolean){
        this.consumed=consumed;
    }

    setSpoiled(spoiled:boolean){
        this.spoiled=spoiled;
    }

    getConsumed(){
        return this.consumed;
    }

    getSpoiled(){
        return this.spoiled;
    }

    use(){
        if(!this.consumed&&!this.spoiled){ 
            return this.eat();
        }else{
            return `There is nothing left of the ${this.getName()} to consume. Or it is spoiled`
        }

    }

    eat(){
        var sickMessage=``;
        if(this.spoiled){
            sickMessage=`You feel sick.`
        }
        if(this.consumed){
            return `There is nothing left of the ${this.getName()} to consume.`
        }
        return `You eat ${this.getName()}. ${sickMessage}`;
    }
    isConsumed(){
        this.consumed=true;
    }

    isSpoiled(){
        this.spoiled=true;
    }

    toString(){
        return super.toString();
    }
}