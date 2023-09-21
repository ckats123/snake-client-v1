// play.js

const { connect } = require("./client");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    // terminates game from ctrl + c input
    process.exit();
  }
};

const stdin = setupInput();

console.log("Connecting ...");
connect();
