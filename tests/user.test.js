const request = require("supertest");

const { createApp } = require("../app");
const AppDataSource = require("../src/models/data-source");
const { uploadFile } = require("../src/utils/S3FileHandler");

jest.mock("../src/utils/S3FileHandler", () => ({
    uploadFile: jest.fn(),
}));

describe("Image Upload", () => {
    let app;

    beforeAll(async () => {
        app = createApp();
        await AppDataSource.initialize();
    });

    afterAll(async () => {
        await AppDataSource.query("SET FOREIGN_KEY_CHECKS=0");
        await AppDataSource.query("TRUNCATE posts");
        await AppDataSource.query("SET FOREIGN_KEY_CHECKS=1");
        await AppDataSource.destroy();
    });

    test("SUCCESS: Profile Upload", async () => {
        const MOCK_DATA = "https://s3.image.com";

        uploadFile.mockImplementation(() => MOCK_DATA);

        const result = await request(app).post("/posts").send({
            title: "Hello",
            content: "My name is Jun!",
        });

        expect(result.status).toEqual(201);
    });
});
