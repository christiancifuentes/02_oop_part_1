import {Weapon} from './Weapon'
export class Bow extends Weapon{

    constructor(baseDamage:number, baseDurability:number, value:number, weight:number){
        super("bow",baseDamage,baseDurability,value,weight);
    }

    polish(){
        var currentDurabilityModifier = this.getDurabilityModifier();
        var newDurabilityModifier = currentDurabilityModifier+Weapon.MODIFIER_CHANGE_RATE;
        if(newDurabilityModifier>1){
            newDurabilityModifier = 1;
        }
        this.setDurabilityModifier(newDurabilityModifier);
    }
}