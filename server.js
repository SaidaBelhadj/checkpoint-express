
const { response } = require('express');
const express= require('express')
const app = express()
const path = require ('path')
var router = express.Router();
const logger =(req,res,next)=>{
const moment = require('moment');
let now = moment();
var date = new Date();

//// Sunday - Saturday : 0 - 6
var day =date.getDay();
var hour =date.getHours();
if((day==0||day==6)&&(hour>17 || hour <9))
{
  res.sendFile(path.join (__dirname, 'views','noaccess.html'));
}
else { next();}
}
app.set('view engine', 'html');
/* GET home page. */
router.use(express.static(path.join((__dirname, 'views'))))
router.use(logger)
router.get('/', (req, res, next) => {
    res.sendFile(path.join (__dirname, 'views','home.html'));
  });
router.get('/home', (req, res, next) => {
    res.sendFile(path.join (__dirname, 'views','home.html'));
  });
router.get('/contact', (req, res, next) => {
    res.sendFile(path.join (__dirname, 'views','contact.html'));
  });
router.get('/services', (req, res, next) => {
    res.sendFile(path.join (__dirname, 'views','services.html'));
  });


app.listen(3000,(err)=>{
 if (err){
     throw err
 }else
 {console.log('server is running...')}
})
// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

// mount the router on the app
app.use('/', router);