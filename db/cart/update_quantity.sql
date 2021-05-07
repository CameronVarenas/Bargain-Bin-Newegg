UPDATE bbn_cart
SET quantity = $1
WHERE cart_id = $2;