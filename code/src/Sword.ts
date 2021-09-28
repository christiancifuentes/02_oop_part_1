import {Weapon} from './Weapon'
export class Sword extends Weapon{

    constructor(baseDamage:number, baseDurability:number, value:number, weight:number){
        super("sword",baseDamage,baseDurability,value,weight);
    }

    polish(){
        this.setDamageModifier(this.getDamageModifier()+Weapon.MODIFIER_CHANGE_RATE);
        var currentDamage = this.getBaseDamage();
        var damageIncrease = ((currentDamage*25)/100);
        var newDamageValue = currentDamage+damageIncrease;
        if(newDamageValue>125){
            newDamageValue=125;
        }
        this.setBaseDamage(newDamageValue);
    }
}