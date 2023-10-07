const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./routes/students.routes');
const app = express()

//SETTINGS
app.set('PORT', process.env.PORT || 3000);
app.set('view engine', 'ejs');


//MIDDLEARES
app.use(express.json());
app.use(express.urlencoded({extended:false})); //INSTRUCCION PARA QUE ENTIENDAFORMULARIOS
app.use(morgan('dev'));
app.use('/api/utxj', studentRouter);

module.exports = app;


//