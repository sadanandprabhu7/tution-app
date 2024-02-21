const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const URL_CLIENT = process.env.URL_CLIENT;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

async function findPineCode(query) {
  const client = new MongoClient(URL_CLIENT);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    const result = await collection.find(query).toArray();
    // console.log("result+++++++++++++++++++++++++++", result);

    return result;
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

module.exports = findPineCode;
