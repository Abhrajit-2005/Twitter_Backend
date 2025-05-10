class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            console.error('Error creating document:', error);
            throw new Error('Error creating document');
        }
    }

    async getAll() {
        try {
            return await this.model.find({});
        } catch (error) {
            console.error('Error fetching documents:', error);
            throw new Error('Error fetching documents');
        }
    }

    async get(id) {
        try {
            return await this.model.findById(id);
        } catch (error) {
            console.error('Error finding document:', error);
            throw new Error('Error finding document');
        }
    }

    async destroy(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error deleting document:', error);
            throw new Error('Error deleting document');

        }
    }
}
module.exports = CrudRepository;