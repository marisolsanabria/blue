const app=require('./app');
//const port=3000;
const http=require("http");

const normalizePort=(val) =>{
    var port=parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port >=0){
        return port;
    }
    return false;

};

const onError = (error) =>{
    if(error.syscall !== "listen"){
        throw error;
    }
    const bind= typeof PORT === "string" ? "pipe" + PORT : "port" +PORT;
    switch(error.code){
        case "EACCES":
            console.error(bind + "requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console-error(bind + "  is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () =>{
    const addr= server.address();
    const bind= typeof PORT === "string" ? "pipe" + PORT : "port" + PORT;
    console.log(`Backend app listening at ${addr.address}:${PORT}`);
};

const PORT = normalizePort(process.env.PORT || "3000");
app.set('port', PORT);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(PORT);



/*app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  */
