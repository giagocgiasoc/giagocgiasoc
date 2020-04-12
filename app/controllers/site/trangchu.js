const mongoose = require("mongoose");
const Danhmuc = require("../../models/danhmuc");
const Slidehome = require("../../models/slidehome");
const Bannerfix = require("../../models/bannerfix");
const Laptop = require("../../models/laptop");
const useragent = require('express-useragent');
const Post = require("../../models/posts");

exports.trangchu_get_home = (req, res, next) => {


            res.render('fontend/trangchu');}
