const { query } = require("../configs/config-connection");
const db = require("../configs/config-connection");

module.exports = class DbTempSetting {
  constructor(dataInfo) {
    this.id = dataInfo.id || "";
    this.temperature = dataInfo.temperature || "";
    this.duration = dataInfo.duration || "";
    this.relay_1 = dataInfo.relay_1 || "";
    this.relay_2 = dataInfo.relay_2 || "";
    this.relay_3 = dataInfo.relay_3 || "";
    this.relay_4 = dataInfo.relay_4 || "";
  }

  static create(dataInfo) {
    return db.query(
      `
            INSERT INTO     temp_setting
            SET             ?`,
      [dataInfo]
    );
  }

  static search() {
    return db.query(
      `
            SELECT          *
            FROM            temp_setting
            ORDER    BY     temperature`
    );
  }

  static delete(id) {
    return db.query(
      `
            DELETE          temp_setting.*
            FROM            temp_setting
            WHERE           id = ?`,
      [id]
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
