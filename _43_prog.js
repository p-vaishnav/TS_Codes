// TODO: complete printAll wala use case
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
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
