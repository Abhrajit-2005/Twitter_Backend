const { UserRepository } = require('../repository/index.js')
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.error('Error signing up user:', error);
            throw new Error('Error signing up user');
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({ email })
            return user;
        } catch (error) {
            throw error;
        }
    }
    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);

            if (!user) {
                throw {
                    message: 'no user found'
                };
            }
            if (!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();

            return token;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UserService;