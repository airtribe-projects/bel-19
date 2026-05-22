class PaymentMethod {
    processPayment(amount) {
        console.log(`Processing payment of amount: ${amount}`);
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing credit card payment of amount: ${amount}`);
    }
}

class DebitCardPayment extends PaymentMethod {      
    processPayment(amount) {
        console.log(`Processing debit card payment of amount: ${amount}`);
    }
}

class BitcoinPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Processing bitcoin payment of amount: ${amount}`);
    }
}

class FreePayment extends PaymentMethod {
    processPayment(amount) {
        throw new Error("This is a free payment");
    }
}


class OrderService {
    // OrderService is composed of PaymentMethod
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    createOrder(orderDetails) {
        // Logic to create an order
        console.log("Order created:", orderDetails);
        this.paymentMethod.processPayment(orderDetails.amount);
    }   
}

// Main
const creditCardPayment = new CreditCardPayment();
const order1 = new OrderService(creditCardPayment);
order1.createOrder({ amount: 100 });   


// PM: 

const FreePayment = new FreePayment();
const order2 = new OrderService(FreePayment);
// Breaks LSP
order2.createOrder({ amount: 0 }); // Error: Free payment can't process payment


