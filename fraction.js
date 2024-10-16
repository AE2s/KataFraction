export default class Fraction {
  constructor(nominator, denominator) {
    this.nominator = nominator;
    this.denominator = denominator;
  }

  pgcd(a, b) {
    if (b) {
      return this.pgcd(b, a % b);
    } else {
      return Math.abs(a);
    }
  }

  add = (fraction) => {
    if (this.denominator === 0 || fraction.denominator === 0) return null;
    const nominator = this.nominator * fraction.denominator + fraction.nominator * this.denominator;
    const denominator = (this.denominator * fraction.denominator);
    var result = new Fraction(nominator, denominator);
    return result.simplify();
  };

  simplify = () => {
    const pgcd = this.pgcd(this.nominator, this.denominator);
    return new Fraction(this.nominator / pgcd, this.denominator / pgcd);
  };
}
