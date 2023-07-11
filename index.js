function receivesAFunction(func1) {
    return func1()
}

function returnsANamedFunction() {
    let func1 = x => x*x
    return func1
}

function returnsAnAnonymousFunction() {
    return x => x*x
}