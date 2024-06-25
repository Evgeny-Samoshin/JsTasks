const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, item) => {
      return sum + item.productPrice
    }, 0)
  },

  add(productName, productPrice, productCount = 1) {
    this.items.push({
      productName,
      productPrice,
      productCount,
    });

    this.calculateItemPrice();

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
    console.log(`Общая сумма корзины ${this.getTotalPrice()} денег.`);
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