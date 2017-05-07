var express       = require('express')
var app           = express()
//var connect       = require('connect')
var cookieParser  = require('cookie-parser')
var cookieSession = require('cookie-session')
var session       = require('express-session')
var logger        = require('morgan')
var path          = require('path')
// var fm            =require('formidable')
// var fs            =require('fs')
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

mongoose.connect(dbUrl)

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')))
app.use(cookieParser())
app.use(session({
	secret: 'csxh',
	resave: false,
	saveUninitialized: true,
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


// app.post('/ajaxUpload',function(req,res){
// // 5.1创建formidable文件解析上传数据
// // 注:下载安装formidable，引入formidable再创建formidable
// var form=new fm.IncomingForm();
// // 5.2设置路径
// // 注：把路径设置为静态路径下的uploads，需在public下创建uploads
// form.uploadDir=path.join(__dirname,'/static/uploads')
// // uploadDir设置文件的上传的路径
// // 5.3解析上传内容
// form.parse(req);
// // 5.4 监听end事件，判断是否上传结束
// form.on('end',function(){
// console.log('upload success')
// })
// // 5.5监听file事件(在服务器的路径下，有上传的文件)，处理上传内容
// form.on('file',function(field,file){//file是上传的文件
// // 5.5.1 更改上传文件的名字
// // 使用同步更改
// fs.renameSync(file.path,path.join(form.uploadDir,'/icon.png'))
// // 第一个参数file.path表示上传的文件所在的路径
// // 5.5.2发送给浏览器端(客户端)
// res.send('./uploads/icon.png')
// })
// })

require('./config/routes')(app)
app.locals.moment = require('moment')
app.listen(port)

console.log('CSXH started on port ' + port)


