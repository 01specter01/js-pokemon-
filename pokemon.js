console.log("Lets Play POKEMOOOONNNNNN!!!!!!!!!!!!!!!");

class Pokemon {
    constructor(namen, gesundheit, magie, Array) {
        this.namen = namen;
        this.gesundheit = gesundheit;
        this.magie = magie;
        this.Array = Array;
    }
}
class AttackSkill {
    constructor(attacke, schadenhöhe, magie) {
        this.attacke = attacke;
        this.schadenhöhe = schadenhöhe;
        this.magie = magie;
    }
}
let lightning = new AttackSkill("lightning", 40, 30);
console.log(lightning);
