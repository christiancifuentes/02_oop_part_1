import { Item } from "./Item";

export abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE: number = 0.05;
    baseDamage:number;
    damageModifier:number;
    baseDurability:number;
    durabilityModifier:number;

    constructor(name:string, baseDamage:number, baseDurability:number, value:number, weight:number){
        super(name,value,weight);
        this.baseDamage=baseDamage;
        this.baseDurability=baseDurability;
        this.damageModifier=0;
        this.durabilityModifier=0;
    }

    toString(){
        return `${this.getId()}: ${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${((Math.round(this.getDamage() * 100) / 100).toFixed(2))}, Durability: ${((Math.round((this.getDurability()*100) * 100) / 100).toFixed(2))}%.\n`
    }
    getBaseDamage(){
        return this.baseDamage;
    }
    getDamageModifier(){
        return this.damageModifier;
    }
    getBaseDurability(){
        return this.baseDurability;
    }
    getDurabilityModifier(){
        return this.durabilityModifier;
    }
    getDamage(){
        return this.getBaseDamage()+this.getDamageModifier();
    }
    getDurability(){
        return this.getBaseDurability()+this.getDurabilityModifier();
    }

    setBaseDurability(baseDurability:number){
        this.baseDurability=baseDurability;
    }
    setDurabilityModifier(durabilityModifier:number){
        this.durabilityModifier=durabilityModifier;
    }
    setBaseDamage(baseDamage:number){
        this.baseDamage=baseDamage;
    }
    setDamageModifier(damageModifier:number){
        this.damageModifier=damageModifier;
    }
    polish(){}

    use(){
        if(this.getDurability()<=0){
            return `You can't use the ${this.getName()}, it is broken.`
        }else {
            this.setDurabilityModifier(this.getDurabilityModifier()-Weapon.MODIFIER_CHANGE_RATE);
            var brokenText = ``;
            if(this.getDurability()<=0){
                brokenText = ` The ${this.getName()} breaks.`;
            }
            return `You use the ${this.getName()}, dealing ${((Math.round(this.getDamage() * 100) / 100).toFixed(2))} points of damage.${brokenText}`
        }
    }


  }
  