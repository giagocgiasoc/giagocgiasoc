const mongoose = require("mongoose");
const Danhmuc = require("../../models/danhmuc");
const Slidehome = require("../../models/slidehome");
const Bannerfix = require("../../models/bannerfix");
const Laptop = require("../../models/laptop");
const useragent = require('express-useragent');
const Post = require("../../models/posts");

exports.trangchu_get_home = (req, res, next) => {
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
            res.render('fontend/trangchu',{layout:'layouts/layoutadmins'});
        })
  }
