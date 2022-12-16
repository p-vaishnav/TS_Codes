function _add(a: number, b: number): number {
    return a + b;
}

_add(2, 3);
// gives an error but get's compiled
_add(2, 'a');