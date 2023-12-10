const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/librarySystem',{})
        .then(()=>{
            console.log("Mongo connection is open");
        })
        .catch(err=>{
            console.log("OH no mongo connection Error");
        })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(bodyParser.json())



app.get('/api/books',async (req,res)=>{ // getting all books from end point

    try{
        const books = await Book.find({});
        if(books.length==0)res.status(404).send("Database is Empty");
        res.status(200).send(books);
    }catch(err){
        console.log('found an error');
        res.status(500).send(err.message);
    }
});

app.post('/api/books',async (req,res)=>{ // posting a new book in database endpoint

    try{
        const {title,author,genre} = req.body;
        console.log(title,author);
        const checkBook = await Book.find({title:title,author:author,genre:genre});


        if(!checkBook.length){// checking for duplication
            const newBook = new Book({title:title,author:author,genre:genre});
            await newBook.save();
            console.log('a new book is inserted into database');
            res.status(200).send('a new book is inserted into database');
        }else {
            res.status(400).send('book with same details already exits in database');
        }

    }catch(err){
        console.log(err);
        console.log("OH NO FOUND AN ERROR!!!");
        const message = err.message;
        res.status(500).send(message);
    }

})


app.put('/api/books/:id',async (req,res)=>{ // updating a book endpoint

    try{
        const {id} = req.params;

        const check = await Book.findById(id);
        
        const {title,author,genre} = req.body;
        const checkBooks = await Book.find({title:title,author:author,genre:genre});

        if(checkBooks.length==1)// checking for dplication
        {
            console.log('book with same details is found in database');
            res.status(200).send('book with same details is found in database');
        }else {
            const updateBook = await Book.findByIdAndUpdate(id,{title:title,author:author,genre:genre},{new:true,runValidators:true});
            console.log(updateBook);
            console.log(updateBook);
            console.log('New Book is updated into the Database');
            res.status(200).send('new book details are updated');
        }
        
    }catch(err){
        console.log(req.body,req.params.id);
        console.log(err);
        let message = err.message;
        if(err.name=="CastError")message = "no book exist in the database with given id" // no id for the given book in database
        res.status(500).send(message);
    }
});

app.listen(3000,async (req,res)=>{
    console.log('server is running on port 3000');
});