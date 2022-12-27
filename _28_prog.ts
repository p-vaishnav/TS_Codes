// extending an interface
interface Movie {
    readonly name: string,
    cast: string[],
    budget: number,
    director: string 
}

interface Series extends Movie {
    seasons: number
}

const trw: Series = {
    name: '13 reasons why',
    cast: ['Katherine Langford', 'Dylan Minnette'],
    budget: 999,
    director: 'Selena Gomez',
    seasons: 3
}

// it works same as a type as well
console.log(trw);