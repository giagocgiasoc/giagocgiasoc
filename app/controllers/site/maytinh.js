const mongoose = require("mongoose");
const Laptop = require("../../models/laptop");
const Post = require("../../models/posts");
//const Desktop = require("../../models/desktop");
const useragent = require('express-useragent');

exports.maytinh_get_home = (req, res, next) => {
    Laptop.find()
        .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
        .limit(12)
        .skip(0)
        .sort('index')
        .exec()
        .then(docs => {
            var laptopall = {
              count: docs.length,
              laptops: docs.map(doc => {
                return {
                  name: doc.name,
                  nameseo: doc.nameseo,
                  price:doc.price,
                  nsx:doc.nsx,
                  tinhnang:doc.tinhnang,
                  baohanh: doc.baohanh,
                  _id: doc._id,
                  index:doc.index,
                  description:doc.description,
                  imagedefault:doc.imagedefault,
                  image: doc.image,
                  request: {
                    type: "GET",
                    url: "http://localhost:3000/laptop/" + doc._id
                  }
                }
              })
            };
            Laptop.find({nsx:"Laptop Dell"})
            .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
            .limit(12)
            .skip(0)
            .sort('index')
            .exec()
            .then(docs => {
                var laptopdell = {
                  count: docs.length,
                  laptops: docs.map(doc => {
                    return {
                      name: doc.name,
                      nameseo: doc.nameseo,
                      price:doc.price,
                      nsx:doc.nsx,
                      tinhnang:doc.tinhnang,
                      baohanh: doc.baohanh,
                      _id: doc._id,
                      index:doc.index,
                      description:doc.description,
                      imagedefault:doc.imagedefault,
                      image: doc.image,
                      request: {
                        type: "GET",
                        url: "http://localhost:3000/laptop/" + doc._id
                      }
                    }
                  })
                };
                Laptop.find({nsx:"Laptop Asus"})
                .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                .limit(12)
                .skip(0)
                .sort('index')
                .exec()
                .then(docs => {
                    var laptopasus = {
                      count: docs.length,
                      laptops: docs.map(doc => {
                        return {
                          name: doc.name,
                          nameseo: doc.nameseo,
                          price:doc.price,
                          nsx:doc.nsx,
                          tinhnang:doc.tinhnang,
                          baohanh: doc.baohanh,
                          _id: doc._id,
                          index:doc.index,
                          description:doc.description,
                          imagedefault:doc.imagedefault,
                          image: doc.image,
                          request: {
                            type: "GET",
                            url: "http://localhost:3000/laptop/" + doc._id
                          }
                        }
                      })
                    };
                    Laptop.find({nsx:"Laptop HP"})
                    .select("_id name nsx price tinhnang baohanh description index imagedefault image")
                    .limit(12)
                    .skip(0)
                    .sort('index')
                    .exec()
                    .then(docs => {
                        var laptophp = {
                          count: docs.length,
                          laptops: docs.map(doc => {
                            return {
                              name: doc.name,
                              nameseo:doc.nameseo,
                              price:doc.price,
                              nsx:doc.nsx,
                              tinhnang:doc.tinhnang,
                              baohanh: doc.baohanh,
                              _id: doc._id,
                              index:doc.index,
                              description:doc.description,
                              imagedefault:doc.imagedefault,
                              image: doc.image,
                              request: {
                                type: "GET",
                                url: "http://localhost:3000/laptop/" + doc._id
                              }
                            }
                          })
                        };
                        Laptop.find({nsx:"Laptop Acer"})
                        .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var laptopacer = {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  nsx:doc.nsx,
                                  price:doc.price,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                            Post.find({typepost:"Tư Vấn Chọn Mua"})
                                 .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                 .limit(6)
                                 .sort('index')
                                 .exec()
                                 .then(docs => {
                                   const poststuvan = {
                                     count: docs.length,
                                     post: docs.map(doc => {
                                       return {
                                         title: doc.title,
                                         titleseo: doc.titleseo,
                                         shortdescription: doc.shortdescription,
                                         _id: doc._id,
                                         description:doc.description,
                                         day:doc.day,
                                         ogtitle:doc.ogtitle,
                                         ogdescription:doc.ogdescription,
                                         keywords:doc.keywords,
                                         typepost:doc.typepost,
                                         image:doc.image,
                                         index:doc.index,
                                         request: {
                                           type: "GET",
                                           url: "http://localhost:3000/ghemassages/" + doc._id
                                         }
                                       };
                                     })
                                   };
                                   Post.find({typepost:"Hướng dẫn kỹ thuật"})
                                        .select("_id title titleseo shortdescription description day ogtitle ogdescription keywords typepost image index")
                                        .limit(8)
                                        .sort('index')
                                        .exec()
                                        .then(docs => {
                                          const postshuongdan = {
                                            count: docs.length,
                                            post: docs.map(doc => {
                                              return {
                                                title: doc.title,
                                                titleseo: doc.titleseo,
                                                shortdescription: doc.shortdescription,
                                                _id: doc._id,
                                                description:doc.description,
                                                day:doc.day,
                                                ogtitle:doc.ogtitle,
                                                ogdescription:doc.ogdescription,
                                                keywords:doc.keywords,
                                                typepost:doc.typepost,
                                                image:doc.image,
                                                index:doc.index,
                                                request: {
                                                  type: "GET",
                                                  url: "http://localhost:3000/ghemassages/" + doc._id
                                                }
                                              };
                                            })
                                          };
              res.render('fontend/maytinh',{laptopall:laptopall,laptopdell:laptopdell,laptophp:laptophp,laptopasus:laptopasus,laptopacer:laptopacer,postshuongdan:postshuongdan,poststuvan:poststuvan,layout:'layouts/layoutadmin'});
            })
            })
            })
            })
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
exports.laptopdell_get_home = (req, res, next) => {
    Laptop.find({nsx:"Laptop Dell"})
              .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
              .limit(12)
              .skip(0)
              .sort('index')
              .exec()
              .then(docs => {
                  var laptop = {
                    count: docs.length,
                    laptops: docs.map(doc => {
                      return {
                        name: doc.name,
                        name: doc.nameseo,
                        price:doc.price,
                        nsx:doc.nsx,
                        tinhnang:doc.tinhnang,
                        baohanh: doc.baohanh,
                        _id: doc._id,
                        index:doc.index,
                        description:doc.description,
                        imagedefault:doc.imagedefault,
                        image: doc.image,
                        request: {
                          type: "GET",
                          url: "http://localhost:3000/laptop/" + doc._id
                        }
                      }
                    })
                  };
                res.render('fontend/laptopdell',{laptop:laptop,layout:'layouts/layoutadmin'});
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                 });
                });
    }
exports.laptopasus_get_home = (req, res, next) => {
        Laptop.find({nsx:"Laptop Asus"})
                  .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                  .limit(12)
                  .skip(0)
                  .sort('index')
                  .exec()
                  .then(docs => {
                      var laptop = {
                        count: docs.length,
                        laptops: docs.map(doc => {
                          return {
                            name: doc.name,
                            nameseo: doc.nameseo,
                            price:doc.price,
                            nsx:doc.nsx,
                            tinhnang:doc.tinhnang,
                            baohanh: doc.baohanh,
                            _id: doc._id,
                            index:doc.index,
                            description:doc.description,
                            imagedefault:doc.imagedefault,
                            image: doc.image,
                            request: {
                              type: "GET",
                              url: "http://localhost:3000/laptop/" + doc._id
                            }
                          }
                        })
                      };
                    res.render('fontend/laptopasus',{laptop:laptop,layout:'layouts/layoutadmin'});
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(500).json({
                      error: err
                     });
                    });
        }
exports.laptophp_get_home = (req, res, next) => {
              Laptop.find({nsx:"Laptop HP"})
                        .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                        .limit(12)
                        .skip(0)
                        .sort('index')
                        .exec()
                        .then(docs => {
                            var laptop= {
                              count: docs.length,
                              laptops: docs.map(doc => {
                                return {
                                  name: doc.name,
                                  nameseo: doc.nameseo,
                                  price:doc.price,
                                  nsx:doc.nsx,
                                  tinhnang:doc.tinhnang,
                                  baohanh: doc.baohanh,
                                  _id: doc._id,
                                  index:doc.index,
                                  description:doc.description,
                                  imagedefault:doc.imagedefault,
                                  image: doc.image,
                                  request: {
                                    type: "GET",
                                    url: "http://localhost:3000/laptop/" + doc._id
                                  }
                                }
                              })
                            };
                          res.render('fontend/laptophp',{laptop:laptop,layout:'layouts/layoutadmin'});
                        })
                        .catch(err => {
                          console.log(err);
                          res.status(500).json({
                            error: err
                           });
                          });
              }
exports.laptopacer_get_home = (req, res, next) => {
                    Laptop.find({nsx:"Laptop Acer"})
                              .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
                              .limit(12)
                              .skip(0)
                              .sort('index')
                              .exec()
                              .then(docs => {
                                  var laptop= {
                                    count: docs.length,
                                    laptops: docs.map(doc => {
                                      return {
                                        name: doc.name,
                                        nameseo: doc.nameseo,
                                        price:doc.price,
                                        nsx:doc.nsx,
                                        tinhnang:doc.tinhnang,
                                        baohanh: doc.baohanh,
                                        _id: doc._id,
                                        index:doc.index,
                                        description:doc.description,
                                        imagedefault:doc.imagedefault,
                                        image: doc.image,
                                        request: {
                                          type: "GET",
                                          url: "http://localhost:3000/laptop/" + doc._id
                                        }
                                      }
                                    })
                                  };
                                res.render('fontend/laptopacer',{laptop:laptop,layout:'layouts/layoutadmin'});
                              })
                              .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                  error: err
                                 });
                                });
                    }
exports.maytinh_get_maytinhnameseo = (req, res, next) => {
    if(req.useragent.isMobile){
          const nameseo = req.params.maytinhnameseo;
          Laptop.find({nameseo:nameseo})
            .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
            .exec()
            .then(docs => {
                    var productdetail={
                                count: docs.length,
                                products: docs.map(doc => {
                                  return {
                                    name: doc.name,
                                    nameseo: doc.nameseo,
                                    price:doc.price,
                                    nsx:doc.nsx,
                                    tinhnang:doc.tinhnang,
                                    baohanh: doc.baohanh,
                                    _id: doc._id,
                                    index:doc.index,
                                    description:doc.description,
                                    imagedefault:doc.imagedefault,
                                    image: doc.image,
                                    request: {
                                      type: "GET",
                                      url: "http://localhost:3000/maytinh/" + doc._id
                                          }
                                        }
                                      })
                                    };
                    res.render('mobile/ghemassage-detail-mb',{dongmucgia:dongmucgia,ghemassagedetail:ghemassagedetail,layout:"layouts/layoutmobile-product-detail"});
                  })
            .catch(err => {
                            console.log(err);
                            res.status(500).json({ error: err });
                          });
    }else{
      const nameseo = req.params.maytinhnameseo;
      console.log(nameseo);
      Laptop.find({nameseo:nameseo})
        .select("_id name nameseo nsx price tinhnang baohanh description index imagedefault image")
        .exec()
        .then(docs => {
                var productdetail={
                            count: docs.length,
                            products: docs.map(doc => {
                              return {
                                name: doc.name,
                                nameseo: doc.nameseo,
                                price:doc.price,
                                nsx:doc.nsx,
                                tinhnang:doc.tinhnang,
                                baohanh: doc.baohanh,
                                _id: doc._id,
                                index:doc.index,
                                description:doc.description,
                                imagedefault:doc.imagedefault,
                                image: doc.image,
                                request: {
                                  type: "GET",
                                  url: "http://localhost:3000/maytinh/" + doc._id
                                      }
                                    }
                                  })
                                };
                res.render('fontend/maytinh-detail',{productdetail:productdetail,layout:"layouts/layoutdesktop/layoutmaytinhdetail"});
              })
        .catch(err => {
                        console.log(err);
                        res.status(500).json({ error: err });
                      });
    }
  }
