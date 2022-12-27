// implementing an interface

interface User {
    name: string,
    email: string,
    phone: number,
    getDetails(): string
}

class Employee implements User {
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
console.log(emp);