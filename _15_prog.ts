// object's in the typescript

const user = {name: 'vaishnav', email: 'v@gmail.com', isPaid: false};

// function accepting an object
function createUser(user: {name: string, email: string, isPaid: boolean}) {}
createUser(user);

// function returning an object
function getUser(): {name: string, email: string, isPaid: boolean } {return user}

// some fishiness about the object behavior which still persists
function createCourse({name: string, price: number}) {}
createCourse({name: 'react.js', price: 999});
// passing hard-coded does generate the below error
createCourse({name: 'react-native', price: 1000, mobileDevelopment: true});

const course = {name: 'react-native', price: 1000, mobileDevelopment: true};
createCourse(course);

export {}