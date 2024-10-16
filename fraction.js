import pgcd from "./pgcd";
export default class Fraction {
  constructor(nominator, denominator) {
    this.nominator = nominator;
    this.denominator = denominator;
  }

  add = (fraction) => {
    if (this.denominator === 0 || fraction.denominator === 0) return null;
    const nominator = this.nominator * fraction.denominator + fraction.nominator * this.denominator;
    const denominator = this.denominator * fraction.denominator;
    const result = new Fraction(nominator, denominator);
    return result.simplify().toString();
  };

  minus = (fraction) => {
    if (this.denominator === 0 || fraction.denominator === 0) return null;
    const nominator = this.nominator * fraction.denominator - fraction.nominator * this.denominator;
    const denominator = this.denominator * fraction.denominator;
    const result = new Fraction(nominator, denominator);
    return result.simplify().toString();
  };

  simplify = () => {
    const _pgcd = pgcd(this.nominator, this.denominator);
    return new Fraction(this.nominator / _pgcd, this.denominator / _pgcd);
  };

  toString = () => {
    return this.denominator === 1 ? `${this.nominator}` : `${this.nominator}/${this.denominator}`;
  };
}
