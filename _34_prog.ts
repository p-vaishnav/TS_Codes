// protected Variable


// huh protected is not working as expected
class ICC {
    protected rules: string;
    constructor(rules: string) {
        this.rules = rules;
    }
}

class BCCI extends ICC {
    

    updateRules(rules: string): void {
        this.rules = rules;
    }

    getRules(): string {
        return this.rules;
    }
}

class IPL extends BCCI {
    test() {
        this.rules;
    }
}

const iplTournament = new IPL('');