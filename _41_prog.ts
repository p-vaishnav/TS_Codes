// Generic example of classes
// pretty good example of generics
interface TShirt {
    name: string,
    size: number,
    brand: string
}

interface Book {
    name: string,
    price: number,
    author: string
}

class Sellable<T> {
    protected products: T[] = [];

    addToProducts(t: T) {
        this.products.push(t);
    }

    getProducts() {
        return this.products;
    }
}

const tProducts = new Sellable<TShirt>();
tProducts.addToProducts({name: 'Cool', size: 42, brand: 'Tommy Hilfigher'});
tProducts.addToProducts({name: 'Pretty', size: 36, brand: 'Lee'});
console.log(tProducts);