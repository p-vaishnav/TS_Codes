// public and private in type-script

class User {
    name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

const user = new User('Vaishnav', 'v@gmail.com');
console.log(user.name);

// private variables can't be accessed from outside of the class
console.log(user.email);