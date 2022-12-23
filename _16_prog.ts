// type aliases
// try to map _15_prog.ts inside the _16prog.ts
// with the help of these you can create your own type

type User = {
    name: string;
    email: string;
    isPaid: boolean;
};

function createUser(user: User) {}

const user: User = {name: 'Vaishnav', email: 'v@success.com', isPaid: true}; 
createUser(user);
createUser({name: 'Vaishnav', email: 'v@success.com', isPaid: true});

// create a type for the course
type Course = {
    name: string;
    price: 999
};

function createCourse(): Course {return {name: 'react-native', price: 999}};
