module.exports = {
    getUsersCart: async (req, res) => {
        const {user_id} = req.params;
        const db = req.app.get('db');
        const result = await db.cart.get_users_cart(user_id);
        return res.status(201).send(result);
    },

    addItemToCart: async (req, res) => {
        const {user_id, product_id} = req.body;
        const db = req.app.get('db');
        const result = await db.cart.add_item_to_cart([user_id, product_id]);
        return res.status(201).send(result);
    },

    updateQuantity: async (req, res) => {
        const {cart_id} = req.params;
        const {quantity} = req.body;
        const db = req.app.get('db');
        await db.cart.update_quantity([quantity, cart_id]);
        return res.sendStatus(201);
    },

    removeItemFromCart: async (req, res) => {
        const {cart_id} = req.params;
        const db = req.app.get('db');
        await db.cart.remove_item_from_cart(cart_id);
        return res.sendStatus(200)
    }
};