const mongoose = require('mongoose');


function checker(value) {
    const regex = /^[A-Za-z][A-Za-z ]*$/;
    return regex.test(value);
  }

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        validate:{
            validator:checker,
            message:'title name must start with alphabet characters and may constain spaces'
        }
    },
    author:{
        type:String,
        required:true,
        validate:{
            validator:checker,
            message:'author name must start with alphabet characters and may constain spaces'
        }
    },
    genre:{
        type:String,
        required:true,
        validate:{
            validator:checker,
            message:'genre must start with alphabet characters and may constain spaces'
        }
    }
});

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;