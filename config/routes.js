var Index       = require('../app/controllers/index')
var User        = require('../app/controllers/user')
var News        = require('../app/controllers/news')
var Comment     = require('../app/controllers/comment')


module.exports = function(app) {

  // pre handle user
  app.use(function(req, res, next) {
    var _user = req.session.user

    app.locals.user = _user

    next()
  })

	// Page
	app.get('/', Index.index)
	app.get('/brandMarketing', Index.brandMarketing)
	app.get('/Filmproduction', Index.Filmproduction)
	app.get('/AboutUs', Index.AboutUs)
	app.get('/Eventplanning',  Index.Eventplanning)
	app.get('/Contactus', Index.Contactus)


	// User
	app.post('/user/signup', User.signup)
	app.post('/user/signin', User.signin)
	app.get('/signin', User.showSignin)
	app.get('/signup', User.showSignup)
	app.get('/admin/user/list', User.signinRequired, User.adminRequired, User.userList)


	// News
	app.get('/new1/:id', News.detail)
	app.get('/admin/news/new', User.signinRequired, User.adminRequired, News.news)
	app.get('/admin/news/update/:id', User.signinRequired, User.adminRequired, User.signinRequired, User.adminRequired, News.update)
	app.post('/admin/news/new', User.signinRequired, User.adminRequired, News.save)
	app.get('/admin/news/list', User.signinRequired, User.adminRequired, News.newsList)
	app.delete('/admin/news/list' , User.signinRequired, User.adminRequired, News.listDelete)

	app.get('/logout',function(req, res){
	delete req.session.user
    //delete app.locals.user
	res.redirect('/')
    })

    // Comment
    app.post('/user/comment', User.signinRequired, Comment.saveComment)
}

