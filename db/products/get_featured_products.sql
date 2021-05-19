SELECT * FROM bbn_products
JOIN bbn_product_img ON bbn_products.product_id = bbn_product_img.product_id
WHERE featured = true;