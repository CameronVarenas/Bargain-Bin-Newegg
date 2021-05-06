require('dotenv').config();
const express = require('express'),
      authController = require('./controllers/authController'),
      cartController = require('./controllers/cartController'),
      productController = require('./controllers/productsController'),
      profileController = require('./controllers/profileController'),
      reviewsController = require('./controllers/reviewsController'),
      auth = require('./middleware/authMiddleware'),
      massive = require('massive'),
      session = require('express-session'),
      core = require('cors');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json(), cors());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365},
    })
);

// Auth Endpoints

// Cart Endpoints

// Products Endpoints

// Profile Endpoints

// Reviews Endpoints

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
});