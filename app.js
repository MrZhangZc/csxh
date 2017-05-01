var express       = require('express')
var app           = express()
var cookieParser  = require('cookie-parser');
var cookieSession = require('cookie-session');
var session       = require('express-session')
var logger        = require('morgan');
var mongoose      = require('mongoose')
var mongoStore    = require('connect-mongo')(session)
var path          = require('path')
var bodyParser    = require('body-parser')
var port          = process.env.PORT || 5000
var env           = process.env.NODE_ENV || 'development'
var dbUrl         = 'mongodb://csxh_runner:chengshixinghui666@127.0.0.1:27017/csxh'
if(env === 'development'){
    dbUrl = 'mongodb://localhost/csxh'
}

var dbUrl = 'mongodb://localhost/csxh'

mongoose.Promise  = global.Promise;
mongoose.connect(dbUrl)

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')))
app.use(cookieParser())
app.use(cookieSession({
	secret: 'csxh',
	store : new mongoStore({
		url: dbUrl,
		collection: 'sessions'
	})
}))

if('development' === app.get('env')){
    app.set('showStackError', true);          // 输出报错信息
    app.use(logger(':method :url :status'));  // 输出信息领域
    app.locals.pretty = true;                 // 源代码格式化
    mongoose.set('debug', true);              // 数据库报错信息
}

require('./config/routes')(app)
app.locals.moment = require('moment')
app.listen(port)

console.log('CSXH started on port ' + port)