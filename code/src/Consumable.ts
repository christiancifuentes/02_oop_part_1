import { Item } from "./Item";
export abstract class Consumable extends Item{
    private consumed: boolean;
    private spoiled: boolean;

    public constructor(name:string, value:number, weight:number, spoiled: boolean){
        super(name,value,weight);
        this.spoiled=spoiled;
        this.consumed=false;
    }

    public setConsumed(consumed:boolean){
        this.consumed=consumed;
    }

    public setSpoiled(spoiled:boolean){
        this.spoiled=spoiled;
    }

    public getConsumed(){
        return this.consumed;
    }

    public getSpoiled(){
        return this.spoiled;
    }

    public use(){
        if(!this.consumed&&!this.spoiled){ 
            return this.eat();
        }else{
            return `There is nothing left of the ${this.getName()} to consume. Or it is spoiled`
        }

    }

    public eat(){
        var sickMessage=``;
        if(this.spoiled){
            sickMessage=`You feel sick.`
        }
        if(this.consumed){
            return `There is nothing left of the ${this.getName()} to consume.`
        }
        return `You eat ${this.getName()}. ${sickMessage}`;
    }
    public isConsumed(){
        this.consumed=true;
    }

    public isSpoiled(){
        this.spoiled=true;
    }

    public toString(){
        return super.toString();
    }
}