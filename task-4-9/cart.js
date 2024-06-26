const cart = {
  items: [],
  get totalPrice() {
   return this.calculateItemPrice();
  },
  count: 0,

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    return this.items.reduce((sum, item) => {
      return sum + item.productPrice
    }, 0)
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
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log(str);
    console.log(`Общая сумма корзины ${this.totalPrice} денег.`);
  },
};

cart.print();
cart.add('Бумеранг', 12);
cart.print();
cart.add('BFG 9000', 99999999, 1);
cart.print();
cart.add('Слезы бывшей', 1, 99999999);
cart.print();
cart.clear();
cart.print();