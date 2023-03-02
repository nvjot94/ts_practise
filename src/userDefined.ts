
type job = 'BA' | "DEV";
interface Person {
    firstName: string,
    lastName: string,
    job?: job   // optional param
}

const generateEmail = (input: Person) : string | undefined=>{
    if(input.job) return;
    return `${input.firstName}.${input.lastName}@gmail.com`;
}

console.log(generateEmail({firstName: "navjot", lastName: "singh", job: "DEV"}));

// Use type guards to ensure the data received from an api is type Person before calling generateEmail

const isPerson = (input: any) : boolean => {
    if('firstName' in input && 'lastName' in input) return true;
    else return false;
};

const printEmailIfPerson = (input: any) : void => {
    if(isPerson(input)) 
        console.log(generateEmail(input));
}
console.log(printEmailIfPerson({firstName: "navjot", lastName: "singh", job: "DEV"}));