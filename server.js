const express = require('express');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const routes = require('./routes');

// För att lagra inläggen
let store = {
  posts:
    [
      {
        name: 'Placeholder',
        url: 'https://google.com/',
        text: 'This is just a placeholder post',
        comments: [
          { text: 'A comment' },
          { text: 'Another comment' },
          { text: 'Yet Another comment' },
        ],
      },
    ],
};

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(errorhandler());

// Passera store variabeln i req objektet
app.use((req, res, next) => {
  req.store = store;
  next();
});

// Routes
app.use(routes);

// Starta server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
