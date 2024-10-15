export default class Fraction {
  constructor(nominator, denominator) {
    this.nominator = nominator;
    this.denominator = denominator;
  }

  add = (fraction) => {
    if (this.denominator === 0 || fraction.denominator === 0) return null;
    const nominator = this.nominator * fraction.denominator + fraction.nominator * this.denominator;
    const denominator = this.denominator === fraction.denominator ? this.denominator : this.denominator * fraction.denominator;
    return new Fraction(nominator, denominator);
  };
}
