// client.js

const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // connection event handler
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ckats123");
  });

  return conn;
};

module.exports = { connect };
