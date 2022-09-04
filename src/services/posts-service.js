const { postDao } = require("../models");
const { uploadFile } = require("../utils/S3FileHandler");

const createPost = async (imageFile, title, content) => {
    const imageUrl = await uploadFile(imageFile);

    return await postDao.createPost(imageUrl, title, content);
};

module.exports = { createPost };
