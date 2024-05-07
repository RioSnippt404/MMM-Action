const NodeHelper = require("node_helper");
const { exec } = require("child_process");

module.exports = NodeHelper.create({
  // Start method
  start: function() {
    console.log("Starting module: " + this.name);
  },

  // Socket notification handler
  socketNotificationReceived: function(notification, payload) {
    if (notification === "EXECUTE_SHELL_CODE") {
      // Execute Python code
      exec("/path/to/your/shell file", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Python code: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Python script returned an error: ${stderr}`);
          return;
        }
        console.log(`Python script output: ${stdout}`);
        // Send any output back to the module if needed
      });
    }
  }
});
