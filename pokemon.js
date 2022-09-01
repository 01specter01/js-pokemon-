console.log("Lets Play POKEMOOOONNNNNN!!!!!!!!!!!!!!!");

class Pokemon {
    constructor(namen, gesundheit, magie, Array) {
        this.namen = namen;
        this.gesundheit = gesundheit;
        this.magie = magie;
        this.SkillsArray = Array;
    }
    learnAttackSkill(skill, wert) {
        if (AttackSkill == truefy) {
            return this.SkillsArray.push(skill, wert);
        }
    }
}

let pikachu = new Pokemon("Pikatue", 400, 300, []);
console.log(pikachu);
pikachu.learnAttackSkill(`Dragon`, `50`);

class AttackSkill {
    constructor(attacke, schadenhöhe, magie) {
        this.attacke = attacke;
        this.schadenhöhe = schadenhöhe;
        this.magie = magie;
    }
}
let lightning = new AttackSkill("lightning", 40, 30);
console.log(lightning);
pikachu.learnAttackSkill(lightning);
