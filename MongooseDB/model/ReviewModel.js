"use strict";
exports.__esModule = true;
exports.PropertyModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var PropertyModel = /** @class */ (function () {
    function PropertyModel() {
        this.createSchema();
        this.createModel();
    }
    PropertyModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            reviewerId: Number,
            propertyName: String,
            comment: String,
            rating: Number
        }, { collection: 'reviews' });
    };
    PropertyModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Review", this.schema);
    };
    PropertyModel.prototype.retrieveAllReviews = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    PropertyModel.prototype.retrieveReviewDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    PropertyModel.prototype.retrieveReviewCount = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, innerReviewList) {
            if (err) {
                console.log('error retrieving count');
            }
            else {
                if (innerReviewList == null) {
                    response.status(404);
                    response.json('{count: -1}');
                }
                else {
                    console.log('number of reviews: ' + innerReviewList.reviews.length);
                    response.json('{count:' + innerReviewList.reviews.length + '}');
                }
            }
        });
    };
    return PropertyModel;
}());
exports.PropertyModel = PropertyModel;
