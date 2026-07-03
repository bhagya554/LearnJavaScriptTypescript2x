class TestDataStorage<T> {
    items: T[] = []

    add(item: T): void {
        this.items.push(item)
    }

    getFirst(): T {
        return this.items[0]!;
    }

    getAll(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length
    }


}

let statusCodeStore = new TestDataStorage<number>()
statusCodeStore.add(200)
statusCodeStore.add(404)
statusCodeStore.add(500)

console.log(statusCodeStore.getFirst());
console.log(statusCodeStore.getAll());
console.log(statusCodeStore.count());

let testNameStore = new TestDataStorage<string>()
testNameStore.add("Login Test")
testNameStore.add("Reg Test")
testNameStore.add("Cart Test")
testNameStore.add("Checkout Test")

console.log(testNameStore.getFirst());
console.log(testNameStore.getAll());
console.log(testNameStore.count());

