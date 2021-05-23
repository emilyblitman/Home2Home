import Mongoose = require("mongoose");

interface IBookingModel extends Mongoose.Document {
    bookingId: number;
    userA: number;
    userB: number;
    propertyA: number;
    propertyB: number;
    tripDates: string;
    dateRequested: string;
    dateConfirmed: string;
}

export {IBookingModel};
