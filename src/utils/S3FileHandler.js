const AWS = require("aws-sdk");
const crypto = require("crypto");

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadFile = async (imageFile) => {
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: `jest-mock-commonjs/${crypto.randomUUID()}%${
            imageFile.originalname
        }`,
        Body: imageFile.buffer,
        ContentType: imageFile.mimetype,
        // ACL: "public-read",
    };

    const data = await s3.upload(params).promise();

    return data.Location;
};

module.exports = { uploadFile };
