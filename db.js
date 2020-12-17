const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:Root123@cluster0.ndvxk.mongodb.net/testnew?retryWrites=true&w=majority'
,{useNewUrlParser : true, useUnifiedTopology : true})
  .then( ok => console.log("connected to mongodb"))
  .catch(err => console.log("mongodb connection error", err)); 

module.exports = mongoose;