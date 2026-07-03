enum Severity{
    LOW,
    MEDIUM,
    HIGH,
    CRITICAL
}

console.log(Severity.CRITICAL)//3

enum Environment{
    Dev="https://dev.api.com",
    Staging="https://staging.api.com",
    QA="https://qa.api.com",
    Prod="https://prod.api.com"
}

console.log(Environment.QA)