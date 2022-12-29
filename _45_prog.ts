// generic classes one more example

class GenericAddition<Type> {
    public accumalator: Type;
    public add: (val: Type) => Type;
    
    // this below one works in Type only
    // add(val: Type): Type;

    constructor(accumalator: Type) {
        this.accumalator = accumalator;
    }
}

const numberAddition = new GenericAddition<number>(0);
numberAddition.add = function(val) {
    return this.accumalator + val;
}

numberAddition.add(10); numberAddition.add(20); numberAddition.add(30);
console.log(numberAddition.accumalator);