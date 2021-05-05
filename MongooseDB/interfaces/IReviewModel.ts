import Mongoose = require("mongoose");

interface IReviewModel extends Mongoose.Document {
    reveiwerId: number;
    proeprtyId: number;
    comment: string;
    rating: number;
}

export {IReviewModel};
