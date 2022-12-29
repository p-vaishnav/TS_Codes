// Generic Classes in Type-Script
// lets code, my mind is getting hazy

// <Type> this is called the type variable

function anotherFunction<K, V>(key: K, value: V): object {
    return {
        key: value
    };
}

console.log(anotherFunction('Motto', 'Excellence'));

function anotherModifiedFunction<K, V extends string>(key: K, value: V): object {
    return {
        key: value
    };
}

// console.log(anotherModifiedFunction('Motto', 100));
console.log(anotherModifiedFunction('Motto', 'Excellence'));

// another way to use generics extend keyword
interface Car {
    name: string,
    price: number
}

function getCarDetails<K, C extends Car>(carNo: K, details: C): object {
    return {carNo: details};
}

getCarDetails('MH34AA1882', {name: 'Creta', price: 1200000});