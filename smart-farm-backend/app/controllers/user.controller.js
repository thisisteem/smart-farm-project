const DbUser = require("../models/DbUser.model");

exports.search = async (req, res, next) => {
  let { username, password, name } = req.body;

  if (username) {
    try {
      let [userData] = await DbUser.searchByUsername(username);
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
    }
    // } else if (password) {
    // } else if (name) {
  } else {
    try {
      let [userData] = await DbUser.search();
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
    }
  }
};

exports.create = async (req, res, next) => {
  let { username, password, name } = req.body;

  try {
    let userData = new DbUser("");
    userData.username = username ? username : "";
    userData.password = password ? password : "";
    userData.name = name ? name : "";
    console.log(">>>> userData: ", userData);

    await DbUser.create(userData);
    res.status(200).json({ message: "create success" });
  } catch (err) {
    console.log(err);
  }
};

// exports.update = async (req, res, next) => {
//   let {
//     informationId,
//     firstName,
//     lastName,
//     address,
//     city,
//     postalCode,
//     country,
//     phoneNumber,
//     isDefault,
//   } = req.body;
//   try {
//     let [oldData] = await DbInformation.searchById(informationId);
//     let informationData = new DbInformation(oldData[0]);
//     informationData.firstName = firstName ? firstName : oldData[0].firstName;
//     informationData.lastName = lastName ? lastName : oldData[0].lastName;
//     informationData.address = address ? address : oldData[0].address;
//     informationData.city = city ? city : oldData[0].city;
//     informationData.postalCode = postalCode
//       ? postalCode
//       : oldData[0].postalCode;
//     informationData.country = country ? country : oldData[0].country;
//     informationData.phoneNumber = phoneNumber
//       ? phoneNumber
//       : oldData[0].phoneNumber;
//     informationData.isDefault = isDefault ? isDefault : oldData[0].isDefault;
//     await DbInformation.update(informationData);
//     res.status(201).json({ message: "update success" });
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.delete = async (req, res, next) => {
//   let { informationId } = req.body;
//   try {
//     await DbInformation.delete(informationId);
//     res.status(200).json({ message: "delete success" });
//   } catch (err) {
//     console.log(err);
//   }
// };
