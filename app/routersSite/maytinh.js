const express =  require ('express')
const router = express.Router();
const MaytinhController = require('../controllers/site/maytinh');
var Cart = require('../models/cart');
 var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/maytinh',MaytinhController.maytinh_get_home);
router.get('/laptopdell',MaytinhController.laptopdell_get_home);
router.get('/laptopasus',MaytinhController.laptopasus_get_home);
router.get('/laptophp',MaytinhController.laptophp_get_home);
router.get('/laptopacer',MaytinhController.laptopacer_get_home);
router.get('/lap-top/:maytinhnameseo',MaytinhController.maytinh_get_maytinhnameseo);
module.exports = router;
