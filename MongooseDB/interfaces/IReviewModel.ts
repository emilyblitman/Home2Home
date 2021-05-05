import Mongoose = require("mongoose");

interface IReviewModel extends Mongoose.Document {
    reveiwId: number;
    reveiwerId: number;
    proeprtyId: number;
    comment: string;
    ratting: number;
}

export {IReviewModel};
