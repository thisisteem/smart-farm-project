const DbSystemSetting = require("../models/DbSystemSetting.model");

exports.search = async (req, res, next) => {
  try {
    let [systemSettingData] = await DbSystemSetting.search();
    res.status(200).json(systemSettingData[0]);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res, next) => {
  let { id, wifiName, wifiPassword, plantCategory, boardNumber } = req.body;

  try {
    let [oldData] = await DbSystemSetting.search();
    let systemSettingData = new DbSystemSetting(oldData[0]);
    systemSettingData.id = id ? id : oldData[0].id;
    systemSettingData.wifiName = wifiName ? wifiName : oldData[0].wifiName;
    systemSettingData.wifiPassword = wifiPassword
      ? wifiPassword
      : oldData[0].wifiPassword;
    systemSettingData.plantCategory = plantCategory
      ? plantCategory
      : oldData[0].plantCategory;
    systemSettingData.boardNumber = boardNumber
      ? boardNumber
      : oldData[0].boardNumber;
    console.log(systemSettingData);
    await DbSystemSetting.update(systemSettingData);
    res.status(201).json({ message: "update success" });
  } catch (err) {
    console.log(err);
  }
};
