const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

app = express();

// Starting DB
// const {mongoose} = require('./database');
require('./database');

// setting
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http:/localhost:4200' }));

//routes
app.use('/users/',require('./routes/user.routes'));

//starting serve
app.listen(app.get('port'),()=> {
    console.log('server on port:', app.get('port'));
});