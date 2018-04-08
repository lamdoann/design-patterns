/* IProduct {
  getName() { },
  getPrice() { }
} */

// Implement IProduct
class Foam {
  getName() {
    return 'Foam';
  }

  getPrice() {
    return 100;
  }
}

class Shampoo {
  getName() {
    return 'Shampoo';
  }

  getPrice() {
    return 200;
  }
}

class Factory {
  /**
   * create IProduct instance
   * @returns {IProduct}
   */
  static createProduct(type) {
    if (type === 'foam') {
      return new Foam();
    }
    return new Shampoo();
  }
}

const foam = Factory.createProduct('foam');
const name = foam.getName();
const price = foam.getPrice();

console.log(name, price);