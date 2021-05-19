SELECT * FROM bbn_product_reviews
JOIN bbn_products ON bbn_product_reviews.product_id = bbn_products.product_id
JOIN bbn_product_img ON bbn_product_reviews.product_id = bbn_product_img.product_id
ORDER BY timestamp DESC
LIMIT 10;