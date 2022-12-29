// Narrowing of Types in Typescript
// TODO: read about narrowing of types in typescript
// in node
// typeof [] gives object
// typeof string gives string

// basically an extra type check should always be present when multiple types are being provided to an function

function _check(val: string | number): string | number {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }

    return val.toFixed(2);
}

console.log(_check('SUCCESS')); console.log(_check(100.9999));

function getInfoById(val: number | null) {
    if (!val) {
        console.log('Invalid Id');
        return;
    }

    return val.toFixed(2);
}

// another good example taken from the documentation
