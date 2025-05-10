const CrudRepository = require('./crud-repo');
const User = require('../model/user');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data) {
        try {
            return await this.model.findOne(data);
        } catch (error) {
            console.error('Error finding user:', error);
            throw new Error('Error finding user');
        }
    }
}

module.exports = UserRepository;