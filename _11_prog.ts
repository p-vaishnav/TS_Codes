let anyVariable;
// Typescript has a type named as 'any' it should be used with the variable where we don't want compiler to
// throw any type-checking errors 
function getName() {
    return 'Success'
}

anyVariable = getName();