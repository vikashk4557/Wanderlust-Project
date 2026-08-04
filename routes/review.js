const express= require("express");
const router= express.Router({mergeParams: true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review= require("../models/review.js");
const Listing= require("../models/listing.js");
const {validateReview, isOwner, isLoggedIn, isReviewAuthor}=require("../middleware.js");


const reviewController= require("../controller/review.js");
const review=require("../models/review.js");



//review
//post rout
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview ));
//Delete rout
router.delete("/:reviewid",isReviewAuthor, wrapAsync( reviewController.destroyReview));

module.exports= router;