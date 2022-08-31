const mongoose = require('mongoose');
const express =require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const {DB_HOST} = process.env;
console.log(DB_HOST);

const app = express();
app.use(cors());   // возврат кром доменных запросво

app.get('/', (req, res) => {
    res.send("<h2>Home page</h2>")
});


mongoose.connect(DB_HOST)
    .then(()=> {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error.massage);
        process.exit(1);
    });