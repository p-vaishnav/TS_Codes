// managing generics inform of the array

function getValues<T>(values: T[]): T {
    return values[2];
}

const getMoreValues = <T>(values: T[]): T => {
    return values[0];
}

const values = ['Success', 'Excellence', 'Patience', 'Calm', 'Enthusiasm'];
console.log(getValues<string>(values));
console.log(getMoreValues<string>(values));