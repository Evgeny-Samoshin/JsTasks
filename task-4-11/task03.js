const rectangle = {
  _width: 5,
  _higth: 5,
  get width() {
    return this._width || 5;
  },
  set width(w) {
    this._width = w || 5;
  },
  get hight() {
    return this._hight || 5;
  },
  set hight(h) {
    this._hight = h || 5;
  },
  get perimeter() {
    return `${(this.width + this.hight) * 2}см`;
  },
  get square() {
    return `${this.width * this.hight}см`;
  },
};

rectangle.width = 10;

console.log(rectangle.square);
console.log(rectangle.perimeter);
