// input.js

// Stores the active TCP connection object.
let connection;

const cannedMessages = {
  1: "Hi",
  2: "This is fun",
  3: "Is that the best you got",
  4: "You gonn crash",
  5: "Ha",
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    // terminates game from ctrl + c input
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (cannedMessages[key]) {
    connection.write(`Say: ${cannedMessages[key]}`);
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener for stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };
