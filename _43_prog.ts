// TODO: complete printAll wala use case


function printAll(strs: string | string[] | null): void {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

printAll(['Success', 'Excellence', 'Patience', 'Detachment to result']);
console.log('--------------------------------');
printAll('Calm');
console.log('--------------------------------');

printAll(null);
console.log('--------------------------------');