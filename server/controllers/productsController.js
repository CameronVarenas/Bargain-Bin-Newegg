module.exports = {
    getAllProducts: async (req, res) => {
        const db = req.app.get('db');
        const result = await db.products.get_all_products();
        return res.status(201).send(result);
    },

    getProduct: async (req, res) => {
        const {product_id} = req.params;
        const db = req.app.get('db');
        const result = await db.products.get_product_by_id(product_id);
        return res.status(201).send(result);
    },

    getProductsByType: async (req, res) => {

    },

    getProductsByBrand: async (req, res) => {

    },

    getFeaturedProducts: async (req, res) => {
        const db = req.app.get('db');
        const result = await db.products.get_featured_products();
        return res.status(201).send(result);
    }
};