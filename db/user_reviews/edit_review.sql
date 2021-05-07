UPDATE bbn_product_reviews
SET rating = $1, review_message = $2
WHERE product_id = $3;