const { catchAsync } = require("../utils/errors");
const { postService } = require("../services");

const createPost = catchAsync(async (req, res) => {
    const imageFile = req.file;
    const { title, content } = req.body;

    await postService.createPost(imageFile, title, content);

    res.status(201).end();
});

module.exports = { createPost };
