require('dotenv').config();
const express = require('express'),
      authCtrl = require('./controllers/authController'),
      cartCtrl = require('./controllers/cartController'),
      productCtrl = require('./controllers/productsController'),
      profileCtrl = require('./controllers/profileController'),
      reviewsCtrl = require('./controllers/reviewsController'),
      auth = require('./middleware/authMiddleware'),
      massive = require('massive'),
      session = require('express-session'),
      cors = require('cors');

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
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', auth.usersOnly, authCtrl.logout)
app.get('/auth/session', authCtrl.getSession)

// Cart Endpoints
app.get('/cart/:user_id', auth.usersOnly, cartCtrl.getUsersCart)
app.post(`/cart/?product=${product_id}&user=${user_id}`, auth.usersOnly, cartCtrl.addItemToCart)
app.put('/cart/:product_id', auth.usersOnly, cartCtrl.updateQuantity)
app.delete('/cart/cart_id', auth.usersOnly, cartCtrl.removeItemFromCart)

// Products Endpoints
app.get('/products/', productCtrl.getAllProducts)
app.get('/products/product_id', productCtrl.getProduct)
app.get(`/products/?type=${type}`, productCtrl.getProductsByType)
app.get(`/products/?brand=${brand}`, productCtrl.getProductsByBrand)
app.get('/products/featured', productCtrl.getFeaturedProducts)

// Profile Endpoints
app.get(`/users/?user=${user_id}&profile_img_url=${profile_img_url}`, auth.usersOnly, profileCtrl.getUserProfileImg)

// Reviews Endpoints
app.get('/reviews/:product_id', reviewsCtrl.getProductReviews)
app.get('/reviews/:user_id', auth.usersOnly, reviewsCtrl.getUserReviews)
app.get('/reviews/:timestamp', reviewsCtrl.getRecentReviews)
app.post('/reviews/:product_id', auth.usersOnly, reviewsCtrl.postReview)
app.put('/reviews/:review_id', auth.usersOnly, reviewsCtrl.editReview)
app.delete('/reviews/:review_id', auth.usersOnly, reviewsCtrl.deleteReview)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
});