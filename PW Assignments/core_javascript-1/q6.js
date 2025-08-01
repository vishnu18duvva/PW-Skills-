//Payment processing fee (Switch Case)

let paymentMethod = "credit card";

switch (paymentMethod) {
    case "credit card": 
        console.log("Processing fee: $2.00");
        break;  
    case "debit card":
        console.log("Processing fee: $1.50");       
        break;
    case "PayPal":
        console.log("Processing fee: $2.50");   
        break;
    default:
        console.log("Invalid payment - Processing fee: $0.00"); 
        
}// For cash or other methods