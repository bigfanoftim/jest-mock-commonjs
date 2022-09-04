const AppDataSource = require("./data-source");

const createPost = async (imageUrl, title, content) => {
    return await AppDataSource.query(
        `
            INSERT INTO posts (
              image_url,
              title,
              content
            ) VALUES (
              ?,
              ?,
              ?
            )
        `,
        [imageUrl, title, content]
    );
};

module.exports = { createPost };
