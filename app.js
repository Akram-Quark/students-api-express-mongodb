const express=require('express');
const app = express();
const mongoose=require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const students_Router= require('./routs/students');
//const myKey=process.env.DB_URI
const url=myKey.toString();
app.use(bodyParser.json());
app.use('/students',students_Router);

app.use(express.json());


mongoose.connect(url) // if error it will throw async error
    .then(() => { // if all is ok we will be here
        const PORT=process.env.PORT||3000
        app.listen(PORT, ()=>{
            console.log(PORT + ': welcom');
        
        
        });
    })
    .catch(err => { // we will not be here...
        console.error('App starting error:', err);
        process.exit(1);
    });
const db= mongoose.connection

db.once('open',()=>{
    console.log('db opened');
})

