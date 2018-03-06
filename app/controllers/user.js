var User       = require('../models/user')
//showSignup
exports.showSignup = function(req,res){
		res.render('signup',{
		title: '程氏星辉 注册'
	})
 }

 //showSignip
exports.showSignin = function(req,res){
		res.render('signin',{
		title: '程氏星辉 登录'
	})
 }
//signup

exports.signup = function(req, res){
	var _user = req.body.user
    

    User.findOne({name: _user.name}, function(err, user){
    	if(err){
    		console.log(err)
    	}

    	if(user){
    		return res.redirect('/signin')
    	}else{
    		var user  = new User(_user)
            user.save(function(err, user){
    	        if(err){
    				console.log(err)
    	        }

    	      res.redirect('/signin')
           })
        }
    })
}


//signin

exports.signin   =  function(req, res) {
	var _user    = req.body.user
	var name     = _user.name
	var password = _user.password

	User.findOne({name: name}, function(err, user){
		if(err){
			console.log(err)
		}
		if(!user){
			return res.redirect('/signup')
		}

		user.comparePassword(password, function(err, isMatch) {
			if(err){
				console.log(err)
			}

			if(isMatch){
				req.session.user = user
				return res.redirect('/')
			}else{
				return res.redirect('/signin')
			}

		})
	})
}

//logout




//userlist page

exports.userList = function(req,res){
	User.fetch(function(err, users){
    	if(err){
    		console.log(err)
    	}

    	res.render('userlist',{
		title: '程氏星辉 用户列表页',
		users: users
	})
  })	
}

//midware for user

exports.signinRequired = function(req,res, next){
	var user = req.session.user

	if(!user){
		return res.redirect('/signin')
	}

	next()	
}

//midware for admin

exports.adminRequired = function(req,res, next){
	var user = req.session.user

	if(user.role <= 10){
		return res.redirect('/signin')
	}

	next()	
}

