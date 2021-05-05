import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
  userId: number,
  fName: string,
  lName: string,
  password: string,
  email: string,
  phoneNumber: string,
  locationPreferences: [{city:string}],
  datePreferences: [{dates:Date}],
  properties: [{propertyId:number}],
}

export {IUserModel};
