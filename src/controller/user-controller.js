const UserService = require('../services/user-service.js');
const userService = new UserService();
async function signUp(req, res) {
    try {
        const user = await userService.signUp(req.body);
        return res.status(201).json(user);
    } catch (error) {
        console.error('Error signing up user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    signUp,
};