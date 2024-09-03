const { MongoClient } = require('mongodb');

async function testConnection() {
    console.log("Starting connection test...");
    const uri = "mongodb+srv://abdnourkhatib:Orf5nZRR948Idi9K@cluster0.i2tom.mongodb.net/tikita?retryWrites=true&w=majority";

    console.log("Connection string:", uri);

    const client = new MongoClient(uri); // No need to include deprecated options

    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        await client.close();
        console.log("Connection closed.");
    }
}

testConnection();
