// generics are additional params to fn, class, obj

// T is dynamic type that we pass during function execution
function returnKeys<T>(arg: T): T {
    return arg;
}


console.log(returnKeys<string>("navjot"))


// T is dynamic type that we pass during function execution
function returnArray<T>(arg: Array<T>): Array<T> {
    return arg;
}


console.log(returnArray<string>(["navjot"]));


// PROMISES with Generics

