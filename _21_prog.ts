// typescript is smart, for sure

// this will give an compilation error
function getDbId(id: number | string) {
    id.toLowerCase();
}

// below one has not throwed error, because a check has been made
function getDbIdImproved(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}