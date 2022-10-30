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
        return `Name: ${this.name} Hp: ${this.health} Str: ${this.strength} Spd: ${this.speed}`;
    }

    drinkSake(){
        this.health += 10;
        return `${this.name} drank Sake, added 10Hp.`
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake()
        return "What one programmer can do in one month, two programmers can do in two months. Hic."
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
console.log(superSensei.speakWisdom());
// -> "What one programmer can do in one month, two programmers can do in two months."
console.log(superSensei.showStats());
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
