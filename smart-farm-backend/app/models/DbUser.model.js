const { query } = require("../configs/config-connection");
const db = require("../configs/config-connection");

module.exports = class DbUser {
  constructor(dataInfo) {
    this.username = dataInfo.username || "";
    this.password = dataInfo.password || "";
    this.name = dataInfo.name || "";
  }

  static create(dataInfo) {
    return db.query(
      `
            INSERT INTO     user
            SET             ?`,
      [dataInfo]
    );
  }

  static search() {
    return db.query(
      `
            SELECT          *
            FROM            user`
    );
  }

  static searchByUsername(username) {
    return db.query(
      `
                SELECT          *
                FROM            user
                WHERE           username = ?`,
      [username]
    );
  }

  //   static update(dataInfo) {
  //     return db.query(
  //       `
  //                 UPDATE          DbInformation
  //                 SET             firstName = ?,
  //                                 lastName = ?,
  //                                 address = ?,
  //                                 city = ?,
  //                                 postalCode = ?,
  //                                 country = ?,
  //                                 phoneNumber = ?,
  //                                 isDefault = ?
  //                 WHERE           informationId = ?`,
  //       [
  //         dataInfo.firstName,
  //         dataInfo.lastName,
  //         dataInfo.address,
  //         dataInfo.city,
  //         dataInfo.postalCode,
  //         dataInfo.country,
  //         dataInfo.phoneNumber,
  //         dataInfo.isDefault,
  //         dataInfo.informationId,
  //       ]
  //     );
  //   }

  //   static delete(informationId) {
  //     return db.query(
  //       `
  //                 DELETE          DbInformation.*
  //                 FROM            DbInformation
  //                 WHERE           informationId = ?`,
  //       [informationId]
  //     );
  //   }
};
