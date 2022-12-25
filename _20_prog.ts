// union is a way to avoid/write any type
// this is much useful

let _creditScore: number | string = 33;
_creditScore = '99';

type User = {
    name: string
}

type Admin = {
    username: string,
    _authKey: number
}

let user: User | Admin = {name: 'Vaishnav'};
user = {username: 'Admin', _authKey: 9654};

// function acception two or more type of arguments
function getDbId(id: number | string): void {}

getDbId(999); getDbId('99av7cd');