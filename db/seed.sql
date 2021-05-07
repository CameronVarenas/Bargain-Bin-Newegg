CREATE TABLE bbn_users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40),
  email VARCHAR(80),
  password VARCHAR(40)
);

CREATE TABLE bbn_products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  type VARCHAR(255),
  brand VARCHAR(255),
  price INTEGER,
  featured BOOLEAN
);

CREATE TABLE bbn_cart (
  cart_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES bbn_users(user_id),
  product_id INTEGER REFERENCES bbn_products(product_id),
  quantity INTEGER,
  total INTEGER
);

CREATE TABLE bbn_product_reviews (
  review_id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES bbn_products(product_id),
  user_id INTEGER REFERENCES bbn_users(user_id),
  rating INTEGER,
  review_message VARCHAR(1000),
  timestamp timestamp
);

CREATE TABLE bbn_profile_url_img (
  profile_img_id SERIAL PRIMARY KEY,
  profile_img_url TEXT,
  user_id INTEGER REFERENCES bbn_users(user_id)
);

CREATE TABLE bbn_product_img (
  product_img_id SERIAL PRIMARY KEY,
  product_img_url TEXT,
  product_id INTEGER REFERENCES bbn_products(product_id)
);