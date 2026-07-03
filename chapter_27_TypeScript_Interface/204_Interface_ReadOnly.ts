interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 20 };
// point.x = 5; This is not possible. 

// ReadonlyArray
interface Data {
    readonly items:  number[];
}

const arrayData: Data = {
    items: [67, 89, 69]
}

console.log(arrayData.items[0])
//arrayData.items[0]=89;//Index signature in type 'readonly number[]' only permits reading
console.log(arrayData.items[0])