// read-only & optional in typescript

// TODO:
// make read-only as an array and an object
// carddetails one is also good example try to code it

type User = {
    _id: string
    name: string
    email: string
    creditCard?: string
}

function createUser(user: User) {}
createUser({_id: '123Success', name: 'vaishnav', email: 'v@gmail.com'});
// creditCard number can be given or not it depends on us
createUser({_id: '123Success', name: 'vaishnav', email: 'v@gmail.com', creditCard: 'adsad'});

// TODO: revisit it
type creditNumber = {type: number};
type creditCountry = {type: string};
type CreditCard = creditNumber & creditCountry & {
    creditCVV: string
}

const creditCard: CreditCard = {
    creditNumber: 9834649878,
    creditCountry: 'India',
    creditCVV: '123'
}