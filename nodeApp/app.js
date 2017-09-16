var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session'); // 引入cookie-session(注意版本)
var bodyParser = require('body-parser');
var cors = require('cors'); //统一配置跨域的中间件

var app = express();


// 定义路由接口
let index = require('./routes/index');
let speak = require('./routes/speak');
let we = require('./routes/we');
let navbar = require('./routes/navbar');
let users = require('./routes/users');
let login = require('./routes/login');
let reg = require('./routes/reg');
let location = require('./routes/location');
let order = require('./routes/order');
let contents = require('./routes/contents');
let detail = require('./routes/detail');
let banner = require('./routes/banner');
let foods = require('./routes/foods');
let comment = require('./routes/comment');


//统一配置跨域
app.use(cors({
    "origin": ['http://localhost:8080',''], //允许哪些域名可以跨域
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",  //允许请求的姿势
    "alloweHeaders":['Content-Type','Authorization',''], //允许请求头
    "credentials":true // 后台允许携带凭证
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({ // 种cookie设定的配置
    keys:['aa','bb'],
    name:'sess_id',
    maxAge:1000*6000
}));
// 禁止后台渲染页面
// app.use(express.static(path.join(__dirname, 'public')));


// 配置使用子路由
app.use('/', index);
app.use('/speak', speak);
app.use('/we', we);
app.use('/navbar', navbar);
app.use('/users', users);
app.use('/login', login);
app.use('/reg', reg);
app.use('/location', location);
app.use('/order', order);
app.use('/contents', contents);
app.use('/detail', detail);
app.use('/banner', banner);
app.use('/foods', foods);
app.use('/comment', comment);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
