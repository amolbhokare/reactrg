let customer = {
    name: 'John',
    email: 'john@gmail.com',
};

let ncustomer = { ...customer, name: 'Winston', cell: '656565' };
console.log(customer);
console.log(ncustomer);

