// abstract classes
// TODO: looks js generated code of the below program

abstract class ICC {
    getRules(): string {
        return 'Rules defined by Board'
    }

    abstract chooseVenues(): string[]
}

class BCCI extends ICC {
    chooseVenues(): string[] {
        return ['Chennai', 'Mumbai', 'Pune', 'Delhi'];
    }
}

// can't create an ICC's object
new ICC();

const iplTournament = new BCCI();
console.log(iplTournament.getRules());
console.log(iplTournament.chooseVenues());