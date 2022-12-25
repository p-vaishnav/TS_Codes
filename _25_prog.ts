// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
// tuple is a finite ordered list of elements

const _allRounderStats: [string, number, number] = ['Ben Stokes', 45.6, 20];
console.log(_allRounderStats);

_allRounderStats[0] = 'Sam Curran';

// below line should will given an error
// _allRounderStats[1] = 'Ben Stokes';

// type script doesn't catch arrray methods like push and manipulates it
// hence order of this particular tuple is hampered
_allRounderStats.push('Excellence');

console.log(_allRounderStats);