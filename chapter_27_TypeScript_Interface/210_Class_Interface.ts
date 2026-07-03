interface Executable {
    name: string;
    run(): void;
    getStatus(): string
}

class TestCase implements Executable {
    name: string
    constructor(name: string) {
        this.name = name
    }
    run(): void {
        console.log("Running test: " + this.name)
    }
    getStatus(): string {
        return "PASS"
    }
}

let tc: Executable = new TestCase("Login with valid cred")

tc.run()
console.log(tc.getStatus());