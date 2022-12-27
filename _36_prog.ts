// generics
// create four methods
// pass type as a primitive type as well as a user-defined type

function identityOne(val: number | string): number | string {
    return val;
}

// identityOne(true);
identityOne('true');

function identityTwo(val: any): any {
    return val;
}

identityTwo('Success'); identityTwo(999); identityTwo(true);

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree('Success'); identityThree(999); identityThree(true);

interface Company {
    name: string,
    count: number
}
function identityFour<T>(val: T): T {
    return val;
}

identityFour<Company>({name: 'Fynd', count: 999});