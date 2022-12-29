function identity<Type>(val: Type): Type {
    return val;
}

// explicit type specification
let var1 = identity<string>('Success');
let var2 = identity<number>(999);
let var3 = identity<boolean>(true);

// this too works
let var7 = identity<string[]>(['Excellence', 'Patience', 'Calm', 'Enthusiasm']);

// impilcit infering (conclusion)
let var4 = identity('Excellence');
let var5 = identity(999);
let var6 = identity(true);
