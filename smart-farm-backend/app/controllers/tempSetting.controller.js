const DbTempSetting = require("../models/DbTempSetting.model");
const uuid4 = require("uuid4");

exports.create = async (req, res, next) => {
  let { id, temperature, duration, relay_1, relay_2, relay_3, relay_4 } =
    req.body;

  try {
    let tempSettingData = new DbTempSetting("");
    tempSettingData.id = id ? id : uuid4();
    tempSettingData.temperature = temperature ? temperature : "";
    tempSettingData.duration = duration ? duration : "";
    tempSettingData.relay_1 = relay_1 ? relay_1 : "0";
    tempSettingData.relay_2 = relay_2 ? relay_2 : "0";
    tempSettingData.relay_3 = relay_3 ? relay_3 : "0";
    tempSettingData.relay_4 = relay_4 ? relay_4 : "0";
    console.log(">>>> tempSettingData: ", tempSettingData);

    await DbTempSetting.create(tempSettingData);
    res.status(200).json({ message: "create success" });
  } catch (err) {
    console.log(err);
  }
};

exports.search = async (req, res, next) => {
  let {} = req.body;

  try {
    let [tempSettingData] = await DbTempSetting.search();
    res.status(200).json(tempSettingData);
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res, next) => {
  let { id } = req.body;
  try {
    await DbTempSetting.delete(id);
    res.status(200).json({ message: "delete success" });
  } catch (err) {
    console.log(err);
  }
};
