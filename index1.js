const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

const trangchusiteRouter = require('./app/routersSite/trangchu');

const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');
const connect = require('connect');

//var compression = require('compression');
const app=express();
//app.use(compression());
app.use(useragent.express());
//useragent chia desktop mobile
//app.get('/', function(req, res){
//    res.send(req.useragent);
//});
//passport1

//endpassport1.

//mongoose.connect('mongodb://localhost:27017/mayvp',{ useNewUrlParser: true,useUnifiedTopology: true });
//mongoose.connect('mongodb://localhost:27017/mayvp',{useMongoClient:true});

mongoose.connect('mongodb://atlasghemassage:ghemassage123@cluster0-shard-00-00-qm2ug.mongodb.net:27017,cluster0-shard-00-01-qm2ug.mongodb.net:27017,cluster0-shard-00-02-qm2ug.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser: true});
mongoose.Promise=global.Promise;
//render scss sang css

// end  passsport2
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'app/views/'));
app.use(expressLayouts);
app.set('layout',path.join(__dirname,'app/views/layouts/layout'));
app.get('/admin/cms',(req,res)=>{res.render('backend/login/cms',{layout:'layouts/layoutsadmin'})});
app.use(bodyParser.json());
//begin passsport3
app.use(bodyParser.urlencoded({ extended: false }));
//end passport3
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public/assest')));
//upload image = ckeditor


app.use('/',trangchusiteRouter);



//app.use('/customer',customerRouter);
//end upload image ckeditor

//begin Passport4
app.get('/admin/loginok',(req,res)=>{res.render('backend/login/loginok')});
app.get('/admin/login',(req,res)=>res.render('backend/login/login',{layout:false}));
app.post('/admin/login',Passport.authenticate('local',{
    failureRedirect:'/admin/login',
    successRedirect:'/admin/cms'
}));


  const port = process.env.PORT || 3000;
  app.listen(port, function(){
    console.log('server is listening on port:',port)
  })
