const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/librarySystem',{})
        .then(async ()=>{
            console.log("Mongo connection is open");
            await Book.deleteMany();

            const mockData = [
                {
                  "title": "The Red Moon",
                  "author": "Alex Swift",
                  "genre": "Science Fiction"
                },
                {
                  "title": "Echoes of Silence",
                  "author": "Emily Frost",
                  "genre": "Mystery"
                },
                {
                  "title": "Whispers in the Wind",
                  "author": "Daniel Rivers",
                  "genre": "Fantasy"
                },
                {
                  "title": "Shadows of Destiny",
                  "author": "Lily Nightshade",
                  "genre": "Thriller"
                },
                {
                  "title": "The Crystal Key",
                  "author": "Max Stone",
                  "genre": "Adventure"
                },
                {
                  "title": "Lost in Time",
                  "author": "Sophia Blaze",
                  "genre": "Historical Fiction"
                },
                {
                  "title": "Beyond the Horizon",
                  "author": "David Skies",
                  "genre": "Romance"
                },
                {
                  "title": "Eternal Echo",
                  "author": "Grace Evergreen",
                  "genre": "Fantasy"
                },
                {
                  "title": "Whirlwind of Fate",
                  "author": "Ryan Gale",
                  "genre": "Action"
                },
                {
                  "title": "Silent Harmony",
                  "author": "Olivia Songbird",
                  "genre": "Drama"
                }
            ] 
            
            await Book.insertMany(mockData);
            console.log('mockData is inserted');

            mongoose.connection.close();
        })
        .catch(err=>{
            console.log("OH no mongo connection Error");
        })