class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        return `${this.name}`
    }

    showStats(){
        return `Ninja Name: ${this.name} Hp: ${this.health} Str: ${this.strength} Spd: ${this.speed}`;
    }

    drinkSake(){
        this.health += 10;
        return `${this.name} drank Sake, added 10Hp.`
    }
}

const ninja1 = new Ninja("Hyabusa");

console.log(ninja1.sayName());
console.log(ninja1.drinkSake());
console.log(ninja1.showStats());
