console.log("Lets Play POKEMOOOONNNNNN!!!!!!!!!!!!!!!");

class Pokemon {
    constructor(namen, gesundheit, magie) {
        this.namen = namen;
        this.gesundheit = gesundheit;
        this.magie = magie;
        this.skillsArray = [];
    }
    learnAttackSkill(skill) {
        this.skillsArray.push(skill);
        console.log(`${skill.attacke}`);
        return `${this.namen} hat den skill ${skill.attacke} erlernt`;
    }
    showStatus() {
        return `Pokemon ${this.namen} hat noch ${this.gesundheit} Gesundheit,${this.magie} Magie und ${this.skillsArray} Skills! `;
    }
    attack(opponent) {
        if (this.magie > this.skillsArray[0].magie && opponent.gesundheit > 0) {
            if (opponent.gesundheit > this.skillsArray[0].schadenhöhe) {
                return `Pokemon ${this.namen} attackiert ${opponent.namen}. Pokomon ${this.namen} fügt ${opponent.namen} ${this.skillsArray[0].schadenhöhe} Schaden hinzu, aber ${opponent.namen} lebt noch!`;
            } else {
                opponent.gesundheit = 0;
                return `Pokomon ${opponent.namen} ist gestorben`;
            }
        } else {
            return `Pokemon ${this.namen} kann nicht ${opponent.namen} angreifen, er hat zu wenig magie! `;
        }
    }
    getMagic() {
        console.log(
            `Der Pokemon ${this.name} hat jetzt 350 mehr Gesundheists Punkte bekommen`
        );
        return (this.gesundheit += 350);
    }
}

let pikachu = new Pokemon("Pikachu", 200, 300, []);
console.log(pikachu);
let zaidoor = new Pokemon("Zaidoor", 100, 200, []);
console.log(zaidoor);

class AttackSkill {
    constructor(attacke, schadenhöhe, magie) {
        this.attacke = attacke;
        this.schadenhöhe = schadenhöhe;
        this.magie = magie;
    }
}
let lightning = new AttackSkill("lightning", 40, 30);
console.log(lightning);
console.log(pikachu.learnAttackSkill(lightning));
let kampfschrei = new AttackSkill("kampfschrei", 200, 10);
console.log(kampfschrei);
console.log(zaidoor.learnAttackSkill(kampfschrei));
console.log(pikachu.showStatus());
console.log(pikachu.attack(zaidoor));
console.log(pikachu.attack(zaidoor));
console.log(pikachu.getMagic());
console.log(pikachu.attack(zaidoor));
console.log(pikachu.attack(zaidoor));
console.log(pikachu.attack(zaidoor));
