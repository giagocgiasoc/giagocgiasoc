const express =  require ('express')
const router = express.Router();
const DanhmucController = require('../controllers/site/trangchu');
const Danhmuc = require("../models/danhmuc");
var Cart = require('../models/cart');
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded({ extended: false })
//router.get('/',DanhmucController.trangchu_get_home);
router.get('/',(req, res, next) => {
  Danhmuc.find()
      .select("_id name link alt index image")
      .sort('index')
      .exec()
      .then(docs => {
          var danhmucall = {
            count: docs.length,
            danhmucs: docs.map(doc => {
              return {
                name: doc.name,
                link:doc.link,
                alt:doc.alt,
                image: doc.image,
                _id: doc._id,
                index:doc.index,
                request: {
                  type: "GET",
                  url: "http://localhost:3000/camera/" + doc._id
                }
              }
            })
          };
 res.render('fontend/test');
})
})
module.exports = router;
