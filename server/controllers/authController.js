const bcrypt = require('bcrypt');

module.exports = {
    getSession: (req, res) => {
        if (req.session.user) {
            return res.status(200).send(req.session.user)
        };
        res.sendStatus(403);
    },

    register: (req, res) => {

    },

    login: (req, res) => {

    },

    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
};