import { Item } from "./Item";

export abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE: number = 0.05;
    private baseDamage:number;
    private damageModifier:number;
    private baseDurability:number;
    private durabilityModifier:number;

    public constructor(name:string, baseDamage:number, baseDurability:number, value:number, weight:number){
        super(name,value,weight);
        this.baseDamage=baseDamage;
        this.baseDurability=baseDurability;
        this.damageModifier=0;
        this.durabilityModifier=0;
    }

    public toString(){
        return `${this.getId()}: ${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${((Math.round(this.getDamage() * 100) / 100).toFixed(2))}, Durability: ${((Math.round((this.getDurability()*100) * 100) / 100).toFixed(2))}%.\n`
    }
    public getBaseDamage(){
        return this.baseDamage;
    }
    public getDamageModifier(){
        return this.damageModifier;
    }
    public getBaseDurability(){
        return this.baseDurability;
    }
    public getDurabilityModifier(){
        return this.durabilityModifier;
    }
    public getDamage(){
        return this.getBaseDamage()+this.getDamageModifier();
    }
    public getDurability(){
        return this.getBaseDurability()+this.getDurabilityModifier();
    }
    public setBaseDurability(baseDurability:number){
        this.baseDurability=baseDurability;
    }
    public setDurabilityModifier(durabilityModifier:number){
        this.durabilityModifier=durabilityModifier;
    }
    public setBaseDamage(baseDamage:number){
        this.baseDamage=baseDamage;
    }
    public setDamageModifier(damageModifier:number){
        this.damageModifier=damageModifier;
    }
    abstract polish();

    public use(){
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
  