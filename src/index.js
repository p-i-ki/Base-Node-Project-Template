const express = require("express");

const { ServerConfig } = require("./config"); // index.js file automatically required
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started server on PORT: ${ServerConfig.PORT}`);
});

// ORM vs ODM
// ORM is used to connect OOP language to Relational dbs like sql. ex -> sequelize
// ODM is used to connect OOP langs with non-Relational dbs like mongoose . ex -> mongoose
// Using this ORM and ODM we can use objects or object oriented syntext to directly interact with DBs..

// Now we will use sequelize ORM here. for this wwe first need to install a driver to cummicate with a DB (like mysql,sqlite,mariadb) then install sequalize
// Driver will helps ORM to communicate with a particular DB , different drivers required for diffrent DBs

// Working with squalize is not so easy like working with those ORM rails or others.
// To make our life easy we will use sequelize-cli ->
