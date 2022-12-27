// defining a function in an interface

interface User {
    getName: () => string,
    getPhoneNumber(): number // much preferred way
}