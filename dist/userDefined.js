var generateEmail = function (input) {
    if (input.job)
        return;
    return "".concat(input.firstName, ".").concat(input.lastName, "@gmail.com");
};
console.log(generateEmail({ firstName: "navjot", lastName: "singh", job: "DEV" }));
// Use type guards to ensure the data received from an api is type Person before calling generateEmail
var isPerson = function (input) {
    if ('firstName' in input && 'lastName' in input)
        return true;
    else
        return false;
};
var printEmailIfPerson = function (input) {
    if (isPerson(input))
        console.log(generateEmail(input));
};
console.log(printEmailIfPerson({ firstName: "navjot", lastName: "singh", job: "DEV" }));
