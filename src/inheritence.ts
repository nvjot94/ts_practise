// access modifiers - private, protected, public members. 
// abstract, super, static.

// private - can only be accessed inside class.
// protected - can be accessed in class as well as class which extends it.
// public - accessed anywhere.

// static - can be used / called with instantiating it.

// abstract class - can only be extended , cannot be instatiated.


abstract class BaseServer {
    protected port: number;
    protected address: string;

    static fn (){
        console.log("i am static fn");
    };

    abstract absFn () : void;

    constructor (port:number, address: string) {
        this.port = port;
        this.address = address;

    }
}

class DBserver extends BaseServer {

    constructor (port: number, address: string) {
        super(port,address);
    }

    absFn() : void {
        console.log(BaseServer.fn())
    }
}

let server = new DBserver(8080,"localhost");

console.log(server.absFn())