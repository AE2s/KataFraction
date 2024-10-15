export default class Fraction {
  constructor(nominator, denominator) {
    this.nominator = nominator;
    this.denominator = denominator;
  }

  add = (fraction) => {
    if (this.denominator === 0 || fraction.denominator === 0) return null;
    return this.nominator + fraction.nominator;
  };
}
