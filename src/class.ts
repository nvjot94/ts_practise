
class Server {

    port: number;
    private address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    startServer(){
        console.log(`Server is running on ${this.address}:${this.port}`)
    }
};

let someServer = new Server(3000,"localhost");
    someServer.startServer();

// make members private which you dont want to be accessed outside the class
// X someServer.address;

// to access it outside do below trick
console.log((someServer as any).address);