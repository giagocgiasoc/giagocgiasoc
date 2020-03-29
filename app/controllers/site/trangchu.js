const mongoose = require("mongoose");
const Danhmuc = require("../../models/danhmuc");
const Slidehome = require("../../models/slidehome");
const Bannerfix = require("../../models/bannerfix");
const useragent = require('express-useragent');

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
            Slidehome.find()
                .select("_id  image title index")
                .sort('index')
                .exec()
                .then(docs => {
                    var slideall = {
                      count: docs.length,
                      slides: docs.map(doc => {
                        return {
                          image: doc.image,
                          title:doc.title,
                            _id: doc._id,
                          index:doc.index,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/slide/" + doc._id
                          }
                        }
                      })
                    };
                    Bannerfix.find()
                        .select("_id  image title index")
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var bannerfixall = {
                              count: docs.length,
                              banners: docs.map(doc => {
                                return {
                                  image: doc.image,
                                  title:doc.title,
                                    _id: doc._id,
                                  index:doc.index,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/bannerfix/" + doc._id
                                  }
                                }
                              })
                            };
              res.render('fontend/trangchu',{danhmucall:danhmucall,slideall:slideall,bannerfixall:bannerfixall,layout:'layouts/layoutadmin'});
            })
          })
        })
        .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
               });
              });
  }
