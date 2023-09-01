// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}
 
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }


    receiveDamage(damage) {
        
        this.health -= damage;
        if (this.health > 0) {
            const message1 = `${this.name} has received ${damage} points of damage`;
            console.log(message1);
            return message1;
        } else {
            const message2 = `${this.name} has died in act of combat`;
            console.log(message2);
            return message2;
        }

    }

    battleCry() {
        return "Odin Owns You All!";
    }
   
  
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            const message1 = `A Saxon has received ${damage} points of damage`;
            console.log(message1);
            return message1;
        } else {
            const message2 = `A Saxon has died in combat`;
            console.log(message2);
            return message2;
        }
    }


}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        const randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length);
        console.log(randomIndexSaxon);
        this.saxonArmy[randomIndexSaxon].receiveDamage(this.vikingArmy[randomIndexViking].strength);
        console.log(`${this.saxonArmy[randomIndexSaxon].name} has received ${this.vikingArmy[randomIndexViking].strength} points of damage`);
        if (this.saxonArmy[randomIndexSaxon].health < 0) {
            this.saxonArmy.splice(randomIndexSaxon,1);
        }
        
    }
    saxonAttack() {
        const randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        
        const randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length);

        this.vikingArmy[randomIndexViking].receiveDamage(this.saxonArmy[randomIndexSaxon].strength);
        console.log(`${this.vikingArmy[randomIndexViking].name} has received ${this.saxonArmy[randomIndexSaxon].strength} points of damage`);
        if (this.vikingArmy[randomIndexViking].health < 0) {
            this.vikingArmy.splice(randomIndexViking,1);
        }
        
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            console.log("Vikings have won the war of the century!");
        }
        else if (this.vikingArmy.length === 0){
            console.log("Saxons have fought for their lives and survived another day...");
        } else {
            console.log("Vikings and Saxons are still in the thick of battle.");
        }
    }
}



let war = new War();

viking1 = new Viking("V1", 20, 4);
viking2 = new Viking("V2", 30, 3);
viking3 = new Viking("V3", 150, 6);

saxon1 = new Saxon(4, 1);
saxon2 = new Saxon(7,1);
saxon3 = new Saxon(7,1);
saxon4 = new Saxon(7,1);

war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);

war.addViking(viking1);
war.addViking(viking2);
war.addViking(viking3);


while(war.vikingArmy.length > 0 && war.saxonArmy.length > 0) {
    
    
    war.vikingAttack();
    if (war.saxonArmy.length > 0) {
        war.saxonAttack();
    }
    war.showStatus();

}