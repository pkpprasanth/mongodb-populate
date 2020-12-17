const express = require('express');
var router = express.Router();
var { Post } = require('../models/post');
var { User } = require('../models/user');
router.post("/:author", (req, res) => {
    var usr, user;
    var post = new Post(req.body)
    console.log(post)
    user = req.params.author;
    console.log(user)
    User.findOne({username : user },(err, data) => {
         usr = new User(data); 
         post.author = usr; 
         post.save((err, data) => {
            if (err)
                return res.json({ success: false, err })
            res.send(data);
        })
    });
   

})
router.get("/:content",(req,res) => {
    console.log("works")
    Post.findOne({content : req.params.content}).populate('author').exec((err,doc) => {
        if(!err) res.send(doc);
        else res.send(err);
     });
})

router.get("/",(req,res) => {
    console.log("works")
    Post.find().populate('author').exec((err,doc) => {
        if(!err) res.send(doc);
        else res.send(err);
     });
})



module.exports = router;