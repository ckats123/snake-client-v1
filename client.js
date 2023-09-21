// client.js

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
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

    conn.write("Move: up");
  });

  return conn;
};

module.exports = { connect };
