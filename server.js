const { createApp } = require("./app");
const AppDataSource = require("./src/models/data-source");

const startServer = async () => {
    const app = createApp();

    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((error) => {
            console.error("Error during Data Source initialization", error);
        });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Listening to request on Port ${PORT}`);
    });
};

startServer();
