var Comment       = require('../models/comment')
var User       = require('../models/user')
// comment
exports.saveComment = function(req,res){
      var _comment = req.body.comment
      var user = req.session.user;

      if(user.role > 10){
        if (_comment.cid) {
                  Comment.findById(_comment.cid, function(err, comment) {
                    var reply = {
                      from: _comment.from,
                      to: _comment.tid,
                      content: _comment.content
                    }

                    comment.reply.push(reply)

                    comment.save(function(err, comment) {
                      if (err) {
                        console.log(err)
                      }

                    res.redirect('/Contactus')
                  })
                })
              }
      }else{
          var comment = new Comment(_comment)

            comment.save(function(err, comment) {
              if (err) {
                console.log(err)
              }

              res.redirect('/Contactus')
            })
      }
}

