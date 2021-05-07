INSERT INTO bbn_product_reviews
  (product_id, user_id, rating, review_message, timestamp)
VALUES
  ($1, $2, $3, $4, NOW());