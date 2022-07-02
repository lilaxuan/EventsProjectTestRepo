const mongoose = require('mongoose');

const ReviewSchema = require('../schema/review.schema');

const ReviewModel = mongoose.model("Review", ReviewSchema);

function createReview(review) {
    return ReviewModel.create(review);
}

function getAllReviews() {
    return ReviewModel.find().exec();
}

/*
function getReviewById(id) {
    return ReviewModel.find(id).exec();
}
*/
function getReviewByRestaurantId(RestaurantId) {
    return ReviewModel.find({
        restaurantId: RestaurantId
    }).exec();
}

function updateReviewByReviewId(id, updatedReview) {
    return ReviewModel.findByIdAndUpdate(id, {
        review: updatedReview
    }).exec();
}

function deleteReviewByRestaurantId(RestaurantId) {
    return ReviewModel.deleteMany({
        restaurantId: RestaurantId
    }).exec();
}

function deleteReviewByReviewId(id) {
    return ReviewModel.findByIdAndDelete(id).exec();
}

module.exports = {
    createReview,
    getAllReviews,
   // getReviewById,
    getReviewByRestaurantId,
    updateReviewByReviewId,
    deleteReviewByRestaurantId,
    deleteReviewByReviewId,
}