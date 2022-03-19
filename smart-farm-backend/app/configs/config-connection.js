const environment = process.env.NODE_ENV;
const Config = require("./config-database");

var env_config = new Config();

// This will be in some JSON config we'll say
var dbOptions = {
  port: env_config.db.port,
  host: env_config.db.host,
  database: env_config.db.database,
  user: env_config.db.user,
  // password: env_config.db.password,
};

var MySQL = require("mysql2");
var connectionPool = MySQL.createPool(dbOptions);

connectionPool.getConnection(function (err, connection) {
  console.log("environment confic => ", env_config);
  if (err) {
    console.log("Error connecting to mysql Db: ", err);
    return;
  }
  console.log("Connected to mysql db!");
  // connectionPool.getConnection(connection);
});

// module.exports = connectionPool;
module.exports = connectionPool.promise();
