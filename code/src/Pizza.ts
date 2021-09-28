import {Consumable} from './Consumable'
export class Pizza extends Consumable{
    numberOfSlices: number;
    slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean, value?:number, weight?:number){
        if(typeof value != 'undefined' && typeof weight != 'undefined'){
            super("pizza",value,weight,spoiled);
        }else{
            super("pizza",99,numberOfSlices*100,spoiled);
        }
        this.numberOfSlices=numberOfSlices;
        this.slicesEaten=0;
    }

    eat(){
        var sickMessage=` You feel sick.`
        var eatMessage=`You eat a slice of the ${this.getName()}.`;
 
        if(this.slicesEaten<this.numberOfSlices){
            this.slicesEaten++
        
            if(this.slicesEaten>=this.numberOfSlices){
                this.setConsumed(true);
            }
            if(this.spoiled){
            eatMessage+=sickMessage;
            }  
            return eatMessage;
        }else{
            return ``;
        }

    }
}