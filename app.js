const mongoose = require('mongoose');
const express =require('express');
const cors = require('cors');

const app = express();
app.use(cors());   // возврат кром доменных запросво

app.get('/', (req, res) => {
    res.send("<h2>Home page</h2>")
});

const DB_HOST = "mongodb+srv://Andrew:jasgwDWBguu7uf0g@cluster0.0uadonb.mongodb.net/online_shop?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
    .then(()=> {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error.massage);
        process.exit(1);
    });