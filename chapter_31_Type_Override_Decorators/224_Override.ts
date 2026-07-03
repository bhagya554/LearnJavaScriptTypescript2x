class BaseTest {
    setUp(): void {
        console.log("[BASE] Open browser");
    }
    tearDown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {
    override setUp(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }

    override tearDown(): void {
        console.log("[LoginTest] Close browser");
    }
}

class APITest extends BaseTest {
    override setUp(): void {
        console.log("[APITest] Open browser");
        console.log("[APITest] Maximize");
    }


    override tearDown(): void {
        console.log("[APITest] Close browser");
    }
}

let test1 = new LoginTest();
test1.setUp();
test1.tearDown()

let apitest = new APITest();
apitest.setUp();

