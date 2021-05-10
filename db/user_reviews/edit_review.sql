UPDATE bbn_product_reviews
SET rating = $1, review_message = $2
WHERE review_id = $3;