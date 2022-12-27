// public and private in javascript

class User {
    name; #email;
    constructor(name, email) {
        this.name = name;
        this.#email = email;
    }
}

const user = new User('Vaishnav', 'v@gmail.com');
console.log(user.name);
// can't be accessed from outside of the class
console.log(user.#email);