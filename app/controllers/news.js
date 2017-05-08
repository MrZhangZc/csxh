var News       = require('../models/news')
var _          = require('underscore')

//admin page

exports.news = function(req,res){
    res.render('admin',{
        title: '程氏星辉（北京）文化传播有限公司',
        new1:{
            title: '',
            mouth: '',
            year: '',
            summary: ''
        }
    })
}

// admin update new1
exports.update  = function(req,res){
    var id = req.params.id

    if(id){
        News.findById(id, function(err, new1){
            res.render('admin',{
                title: '更新页',
                new1: new1
            })
        })
    }
}
// admin post new1
exports.save = function(req,res){
    var id = req.body.new1._id
    var new1Obj = req.body.new1
    var _new1

    if(id !== 'undefined'){
        News.findById(id, function(err, new1){
            if(err){
                console.log(err)
            }

            _new1 = _.extend(new1, new1Obj)
            _new1.save(function(err, new1){
                if(err){
                    console.log(err)
                }

                res.redirect('/new1/' + new1._id)
            })
        })
    }else{
        _new1 = new News({
            title: new1Obj.title,
            mouth: new1Obj.mouth,
            year: new1Obj.year,
            summary: new1Obj.summary
        })

        _new1.save(function(err,new1){
            if(err){
                    console.log(err)
                }

            res.redirect('/new1/' + new1._id)
        })
    }
}
//list page

exports.newsList = function(req,res){
    News.fetch(function(err, news){
        if(err){
            console.log(err)
        }

        res.render('list',{
        title: '程氏星辉（北京）文化传播有限公司',
        news: news
    })
  })        
}

//detail page

exports.detail = function(req,res){
    var id = req.params.id

    News.findById(id, function(err, new1){
        res.render('detail',{
        title: '程氏星辉（北京）文化传播有限公司',
        new1: new1
    })
  })
}

//list delete new1

exports.listDelete = function(req,res){
    var id = req.query.id

    if(id){
        News.remove({_id: id}, function(err, new1){
            if(err){
                console.log(err)
            }else{
                res.json({success: 1})
            }
        })
    }
}