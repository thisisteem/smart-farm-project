const { query } = require("../configs/config-connection");
const db = require("../configs/config-connection");

module.exports = class DbSystemSetting {
  constructor(dataInfo) {
    this.id = dataInfo.id || "";
    this.wifiName = dataInfo.wifiName || "";
    this.wifiPassword = dataInfo.wifiPassword || "";
    this.plantCategory = dataInfo.plantCategory || "";
    this.boardNumber = dataInfo.boardNumber || "";
  }

  static search() {
    return db.query(
      `
      SELECT          *
      FROM            system_setting`
    );
  }

  static update(dataInfo) {
    return db.query(
      `
        UPDATE          system_setting
        SET             wifiName = ?,
                        wifiPassword = ?,
                        plantCategory = ?,
                        boardNumber = ?
        WHERE           id = ?`,
      [
        dataInfo.wifiName,
        dataInfo.wifiPassword,
        dataInfo.plantCategory,
        dataInfo.boardNumber,
        dataInfo.id,
      ]
    );
  }

  // static create(dataInfo) {
  //   return db.query(
  //     `
  //             INSERT INTO     user
  //             SET             ?`,
  //     [dataInfo]
  //   );
  // }

  // static searchByUsername(username) {
  //   return db.query(
  //     `
  //               SELECT          *
  //               FROM            user
  //               WHERE           username = ?`,
  //     [username]
  //   );
  // }

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
