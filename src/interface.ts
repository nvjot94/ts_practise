interface Iserver {
    startServer(): void,
    stopServer(): void
};

class AppServer implements Iserver {
    port: number;
    address: string;

    constructor(port: number,address: string){
        this.port = port;
        this.address = address;
    }

    startServer(): void {
        console.log();
    }

    stopServer(): void {
        
    }
}