// function codes
// ? stands for optional parameter
function _greet(greeting: string, name?: string) {
    return greeting + ' ' + name + '.';
}
console.log(_greet('Hola', 'Success'));
console.log(_greet('Hello'));