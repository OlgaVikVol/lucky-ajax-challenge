class Die {
  constructor(sides) {
    if (!sides || sides < 0) {
      this.sides = 6;
    } else {
      this.sides = sides;
    }
  }

  roll() {
    return Math.floor(Math.random() * (this.sides)) + 1;
  }
}

module.exports = Die;
