// making a readonly type as an array and pushing values inside of it

type Team = {
    readonly worldCup: Array<string>;
}

const India: Team = {worldCup: ['1983', '2011']}
console.log(India);
India.worldCup.push('2007');
console.log(India);
