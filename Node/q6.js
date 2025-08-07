const args = process.argv.slice(2);

const a = parseFloat(args[0]);
const operator = args[1];
const b = parseFloat(args[2]);

switch (operator) {
  case '+':
    console.log("Result:", a + b);
    break;
  case '-':
    console.log("Result:", a - b);
    break;
  case '*':
    console.log("Result:", a * b);
    break;
  case '/':
    console.log("Result:", a / b);
    break;
  default:
    console.log("Invalid operator");
}
