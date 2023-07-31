class Warrior {
  strength: number;
  agility: number;
  constructor(strength: number, agility: number) {
    this.strength = strength;
    this.agility = agility; 
  } 
  fight () {
    return this.strength * this.agility;
  }
}