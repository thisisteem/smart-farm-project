const environment = process.env;

const env = environment.NODE_ENV; // 'dev' or 'test'

module.exports = function () {
  switch (environment.NODE_ENV) {
    // case "development":
    //   return {
    //     app: {
    //       port: parseInt(environment.DEV_APP_PORT) || 1000,
    //     },
    //     db: {
    //       host: environment.DEV_DB_HOST || '"smart-farm-project',
    //       port: parseInt(environment.DEV_DB_PORT) || 3306,
    //       user: environment.DEV_DB_USER || "root",
    //       password: environment.DEV_DB_PASSWORD || "root",
    //       database: environment.DEV_DB_DATABASE || "smart_farm",
    //     },
    //   };

    // case "production":
    //   return {
    //     app: {
    //       port: parseInt(environment.PROD_APP_PORT) || 1000,
    //     },
    //     db: {
    //       host: environment.PROD_DB_HOST || "common-maria",
    //       port: parseInt(environment.PROD_DB_PORT) || 3306,
    //       user: environment.PROD_DB_USER || "root",
    //       password: environment.PROD_DB_PASSWORD || "root",
    //       database: environment.PROD_DB_DATABASE || "smart_farm",
    //     },
    //   };
    default:
      return {
        app: {
          port: parseInt(environment.TEST_APP_PORT) || 1000,
        },
        db: {
          host: environment.TEST_DB_HOST || "localhost",
          port: parseInt(environment.TEST_DB_PORT) || 3306,
          user: environment.TEST_DB_USER || "root",
          password: environment.TEST_DB_PASSWORD || "super-secret-password",
          database: environment.TEST_DB_DATABASE || "smart_farm",
        },
      };
  }
};
