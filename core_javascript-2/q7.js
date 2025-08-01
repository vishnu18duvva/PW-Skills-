const calculator = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; },
  multiply(a, b) { return a * b; },
  calculate(operation, a, b) { return this[operation](a, b); }
};

console.log("Call:", calculator.calculate.call(calculator, "add", 10, 5));
console.log("Apply:", calculator.calculate.apply(calculator, ["multiply", 3, 4]));

const discountCalculator = {
  discount: 0.2,
  applyDiscount(price) {
    return price * (1 - this.discount);
  }
};

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log("Price after discount:", calculateDiscount(100));
i