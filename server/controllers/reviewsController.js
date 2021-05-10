module.exports = {
    getProductReviews: async (req, res) => {
        const {product_id} = req.params;
        const db = req.app.get('db');
        const result = await db.user_reviews.get_product_reviews(product_id);
        return res.status(201).send(result);
    },

    getUserReviews: async (req, res) => {
        const {user_id} = req.params;
        const db = req.app.get('db');
        const result = await db.user_reviews.get_user_reviews(user_id);
        return res.status(201).send(result);
    },

    getRecentReviews: async (req, res) => {
        const db = req.app.get('db');
        const result = await db.user_reviews.get_recent_reviews();
        return res.status(201).send(result);
    },

    postReview: async (req, res) => {
        const {product_id} = req.params;
        const {user_id, rating, review_message} = req.body;
        const db = req.app.get('db');
        const result = await db.user_reviews.post_review([product_id, user_id, rating, review_message]);
        return res.status(201).send(result);
    },

    editReview: async (req, res) => {
        const {review_id} = req.params;
        const {rating, review_message} = req.body;
        const db = req.app.get('db');
        const result = await db.user_reviews.edit_review([rating, review_message, review_id]);
        return res.status(201).send(result);
    },

    deleteReview: async (req, res) => {
        const {review_id} = req.params;
        const db = req.app.get('db');
        await db.user_reviews.delete_review(review_id);
        return res.sendStatus(200);
    }
};