function getCustomersPurchasesSum(customersPurchases) {
    let customersPurchasesSum = 0;
    customersPurchases.forEach(customerPurchasesSum => {
      customersPurchasesSum += customerPurchasesSum;
    });
    return customersPurchasesSum;
  }
  
let customersPurchases = [10000, 20000, 30000];
console.log(getCustomersPurchasesSum(customersPurchases));