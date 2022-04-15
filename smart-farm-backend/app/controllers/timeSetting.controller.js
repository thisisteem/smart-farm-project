const DbTimeSetting = require("../models/DbTimeSetting.model");
const uuid4 = require("uuid4");

exports.create = async (req, res, next) => {
  let {
    id,
    day,
    duration,
    startTime_hour,
    startTime_minute,
    relay_1,
    relay_2,
    relay_3,
    relay_4,
  } = req.body.dataInfo;

  try {
    let timeSettingData = new DbTimeSetting("");
    timeSettingData.id = id ? id : uuid4();
    timeSettingData.day = day ? day : "";
    timeSettingData.duration = duration ? duration : "";
    timeSettingData.startTime_hour = startTime_hour ? startTime_hour : "";
    timeSettingData.startTime_minute = startTime_minute ? startTime_minute : "";
    timeSettingData.relay_1 = relay_1 ? relay_1 : "0";
    timeSettingData.relay_2 = relay_2 ? relay_2 : "0";
    timeSettingData.relay_3 = relay_3 ? relay_3 : "0";
    timeSettingData.relay_4 = relay_4 ? relay_4 : "0";

    await DbTimeSetting.create(timeSettingData);
    res.status(200).json({ message: "create success" });
  } catch (err) {
    console.log(err);
  }
};

exports.search = async (req, res, next) => {
  let {} = req.body;

  try {
    let [timeSettingData] = await DbTimeSetting.search();
    res.status(200).json(timeSettingData);
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res, next) => {
  let { id } = req.body;
  try {
    await DbTimeSetting.delete(id);
    res.status(200).json({ message: "delete success" });
  } catch (err) {
    console.log(err);
  }
};
