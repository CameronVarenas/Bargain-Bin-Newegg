module.exports = {
    getUserProfileImg: async (req, res) => {
        const {user_id} = req.params;
        const db = req.app.get('db');
        const result = await db.profile.get_user_profile_img(user_id);
        return res.status(201).send(result);
    }
};