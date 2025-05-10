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
}
module.exports = UserService;