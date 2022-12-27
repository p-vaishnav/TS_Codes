// reopening an interface
interface Movie {
    readonly name: string,
    cast: string[],
    budget: number 
}

interface Movie {
    director: string
}

const fightClub: Movie = {name: 'Fight Club', cast: ['Edward Norton', 'Brad Pitt'], budget: 10000, director: 'Davide Fincher'};

// it works same as a type as well
console.log(fightClub);