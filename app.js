require('@babel/register');

const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT ?? 3000;

app.locals.title = 'Simplest possible AJAX';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port', PORT);
});
