class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    display() {
        setTimeout(() => {
            console.log(this.name + " : " + this.email);
        }, 3000);
    }
}
let c = new Customer('Jack', 'jack@gmail.com');
c.display();
