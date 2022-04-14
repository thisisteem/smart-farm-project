const { query } = require("../configs/config-connection");
const db = require("../configs/config-connection");

module.exports = class DbTimeSetting {
  constructor(dataInfo) {
    this.id = dataInfo.id || "";
    this.day = dataInfo.day || "";
    this.duration = dataInfo.duration || "";
    this.startTime_hour = dataInfo.startTime_hour || "";
    this.startTime_minute = dataInfo.startTime_minute || "";
    this.relay_1 = dataInfo.relay_1 || "";
    this.relay_2 = dataInfo.relay_2 || "";
    this.relay_3 = dataInfo.relay_3 || "";
    this.relay_4 = dataInfo.relay_4 || "";
  }

  static create(dataInfo) {
    return db.query(
      `
            INSERT INTO     time_setting
            SET             ?`,
      [dataInfo]
    );
  }

  static search() {
    return db.query(
      `
            SELECT          *
            FROM            time_setting`
    );
  }

  static delete(id) {
    return db.query(
      `
            DELETE          time_setting.*
            FROM            time_setting
            WHERE           id = ?`,
      [id]
    );
  }

  // static searchByUsername(username) {
  //   return db.query(
  //     `
  //               SELECT          *
  //               FROM            user
  //               WHERE           username = ?`,
  //     [username]
  //   );
  // }

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
};
