import Mongoose = require("mongoose");

interface IPropertyModel extends Mongoose.Document {
    propertyId: number;
    proeprtyName: string,
    description: string,
    bedrooms: number,
    bathrooms: number,
    sqFeet: number,
    address: string,
    averageRating: number
}

export {IPropertyModel};
