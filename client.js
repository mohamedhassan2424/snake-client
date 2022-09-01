const net = require("net");
const { setTimeout, setInterval } = require("timers/promises");
const { IP, PORT } = require("./constants");
const connect = function () {
    const movingUp="Move: up";
    const movingDown = "Move: down"
    const movingLeft = "Move: left"
    const movingRight ="Move: right"
    
    const conn = net.createConnection({
        host: IP,// IP address here,
        port: PORT// PORT number here,
      });
    conn.setEncoding("utf8");

    setTimeout(()=>{
        conn.write(`${movingUp}`)},500);
    setTimeout(()=>{
        conn.write(`${movingDown}`)},500);
    setTimeout(()=>{
        conn.write(`${movingLeft}`)},500);
    setTimeout(()=>{
        conn.write(`${movingRight}`)},500);
    
    conn.on("connect", () => {
        console.log('Connection has been succesfully establised');
        conn.write('Name: MOH');
        conn.write('Everything is all Good :)')
    });
    conn.write('Everything is all Good :)')
    conn.on("data", (data) => {
        console.log("Message from server side: ", data);
    });

    return conn;
  };
//console.log("Connecting ...");
//connect();
module.exports= {connect};
// establishes a connection with the game server
