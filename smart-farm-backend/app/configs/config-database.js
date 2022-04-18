const environment = process.env;

const env = environment.NODE_ENV; // 'dev' or 'test'

module.exports = function () {
  switch (environment.NODE_ENV) {
    default:
      return {
        app: {
          port: 3000,
        },
        db: {
          host: "mysql-service.default.svc.cluster.local",
          port: 3306,
          user: "root",
          password: "super-secret-password",
          database: "smart_farm",
        },
        // db: {
        //   host: "127.0.0.1",
        //   port: 3306,
        //   user: "root",
        //   password: "",
        //   database: "smart_farm",
        // },
      };
  }
};
