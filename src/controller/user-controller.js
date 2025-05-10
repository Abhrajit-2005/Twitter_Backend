const UserService = require('../services/user-service.js');
const userService = new UserService();
const signUp = async (req, res) => {
    try {
        const user = await userService.signUp(req.body);
        return res.status(201).json(user);
    } catch (error) {
        console.error('Error signing up user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
const login = async (req, res) => {
    try {
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    signUp, login
};