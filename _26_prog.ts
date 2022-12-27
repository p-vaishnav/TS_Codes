// interfaces

// TODO:
// write an Interface
// extend, reopen, create an object, implement and interface

// create an object with an interface
interface Movie {
    readonly name: string,
    cast: string[],
    budget: number 
}

const fightClub: Movie = {name: 'Fight Club', cast: ['Edward Norton', 'Brad Pitt'], budget: 10000};

// it works same as a type as well
console.log(fightClub);