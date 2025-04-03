const express = require("express");

const { ServerConfig } = require("./config"); // index.js file automatically required
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started server on PORT: ${ServerConfig.PORT}`);
});
