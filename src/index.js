const express = require("express");
const { ServerConfig } = require("./config"); // index.js file automatically required
const apiRoutes = require("./routes");
const { where } = require("sequelize");

const app = express();

app.use(express.json()); // else req.body will be undefined
app.use(express.urlencoded({ extended: true })); // to parse %20=space, !=%31  etc type url encoding.. extended true means use 'qs' library that can parse nested objects

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started server on PORT: ${ServerConfig.PORT}`);
});
