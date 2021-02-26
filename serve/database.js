const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud-example',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("db online"))
.catch(err => console.log(err));

// module.exports = mongoose;