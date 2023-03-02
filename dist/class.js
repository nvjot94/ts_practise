var Server = /** @class */ (function () {
    function Server(port, address) {
        this.port = port;
        this.address = address;
    }
    Server.prototype.startServer = function () {
        console.log("Server is running on ".concat(this.address, ":").concat(this.port));
    };
    return Server;
}());
;
var someServer = new Server(3000, "localhost");
someServer.startServer();
