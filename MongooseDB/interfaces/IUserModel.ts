import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
  userId: number,
  fName: string,
  lName: string,
  password: string,
  email: string,
  phoneNumber: string,
  locationPreferences: array,
  datePreferences: array,
  properties: array
}

export {IUserModel};
