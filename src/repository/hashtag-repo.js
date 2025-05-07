const Hashtags = require('../model/hashtags');
class HashtagRepository {
    async createHashtag(data) {
        try {
            const hashtag = await Hashtags.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreateHashtags(hashtags) {
        try {
            const createdHashtags = await Hashtags.insertMany(hashtags);
            return createdHashtags;
        } catch (error) {
            console.log(error);
        }
    }

    async getHashtagByName(hashtagList) {
        try {
            const hashtags = await Hashtags.find({
                title: hashtagList,
            });
            return hashtags;
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = HashtagRepository;