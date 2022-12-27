// much more cleaner syntax to define properties for the class

/*class Employee {
    name: string;
    email: string;
    phone: number;

    constructor(name: string, email: string, phone: number) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): string {
        return `${this.name}, ${this.email}, ${this.phone}`;
    }
}

const emp = new Employee('Vaishnav', 'v@gmail.com', 9834649878);
console.log(emp);*/

class Employee {
    
    constructor(
        public name: string,
        private email: string,
        private phone: number) {
    }

    getDetails(): string {
        return `${this.name}, ${this.email}, ${this.phone}`;
    }

    get getEmail(): string {
        return this.email;
    }

    set setEmail(email: string) {
        this.email = email; 
    }
}

const emp = new Employee('Vaishnav', 'v@gmail.com', 9834649878);
// console.log(emp);
// console.log(emp.getDetails());
console.log(emp.getEmail);
emp.setEmail = 'b@gmail.com';
console.log(emp.getEmail);

// review it's .js file