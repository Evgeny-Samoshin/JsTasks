const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    };
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    };
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const price = this.items.reduce((sum, item) => sum + item.productPrice, 0);
    const discountSum = price * this.discount / 100;
    return price - discountSum;
  },

  add(productName, productPrice, productCount = 1) {
    this.items.push({
      productName,
      productPrice,
      productCount,
    });

    this.increaseCount(productCount);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
    this.discount = 0;
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log(str);
    console.log(`Скидка ${this.discount}%`);
    console.log(`Общая сумма корзины ${this.totalPrice} денег.`);
  },
};

cart.print();
cart.add('Бананы', 12);
cart.print();
cart.add('Апельсины', 10, 110);
cart.print();
cart.setDiscount = 'METHED';
cart.add('Некрономикон', 1000, 1);
cart.print();
cart.clear();
cart.print();
