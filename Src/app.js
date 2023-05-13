// 3rd party Import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// local import
const { authRouter } = require('./routes/auth.router');
const { tapRouter } = require('./routes/tap/tap.router');
const { entryRouter } = require('./routes/entry/entry.router');
const { exitDetailRouter } = require('./routes/exit-detail/exit-detail.router');

// main function
const app = express();

// set cors
// app.use(cors({
//     origin: ['http://localhost:4200', 'https://ramprakashchelliah.github.io/Vishnu-polymer/']
// }))

// use middelware to log our request
app.use(morgan('combined'));

// add middleware to parse request as JSON format
app.use(express.json());

// routes
app.use('/auth', authRouter);
app.use('/taps', tapRouter);
app.use('/entries', entryRouter);
app.use('/exits', exitDetailRouter);

// export
module.exports = {app};