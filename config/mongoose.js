
const mongoose = require('mongoose');


// mongoose.connect('tabase?retryWrites=true&w=majority');
//et MongoDB_URL="mongodb+srv://sonukumar:Sonu6342@cluster0.cl4vgh9.mongodb.net/employee-review-system?retryWrites=true&w=majority";

mongoose.connect(process.env.MongoDB_URL,{
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
  });

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;