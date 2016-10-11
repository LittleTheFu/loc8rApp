var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');

var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
//router.get( '/', ctrlMain.index );

/* Location page */
router.get( '/', ctrlLocations.homelist );
router.get( '/location', ctrlLocations.locationInfo );
router.get( '/location/review/new', ctrlLocations.addReview );

/* Other page */
router.get( '/about', ctrlOthers.about );

module.exports = router;