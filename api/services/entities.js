const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const URL_CLIENT = process.env.URL_CLIENT;
const DB_NAME = process.env.DB_NAME;
const PINCODES_COLLECTION_NAME = process.env.PINCODES_COLLECTION_NAME;
const SUBJECTS_COLLECTION_NAME = process.env.SUBJECTS_COLLECTION_NAME;
const TIMES_COLLECTION_NAME = process.env.TIMES_COLLECTION_NAME;
const CLASSES_COLLECTION_NAME = process.env.CLASSES_COLLECTION_NAME;
class entities {
  static async findPineCode(query) {
    const client = new MongoClient(URL_CLIENT);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(PINCODES_COLLECTION_NAME);
      const result = await collection.find(query).toArray();
      console.log("result+++++++++++++++++++++++++++", result);

      return result;
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      await client.close();
    }
  }
  static async getSubjects() {
    const client = new MongoClient(URL_CLIENT);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(SUBJECTS_COLLECTION_NAME);
      const result = await collection.find({}).toArray();
      console.log("result+++++++++++++++++++++++++++", result);

      return result;
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      await client.close();
    }
  }
  static async getClasses() {
    const client = new MongoClient(URL_CLIENT);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(CLASSES_COLLECTION_NAME);
      const result = await collection.find({}).toArray();
      console.log("result+++++++++++++++++++++++++++", result);

      return result;
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      await client.close();
    }
  }
  static async getTimes() {
    const client = new MongoClient(URL_CLIENT);
    try {
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(TIMES_COLLECTION_NAME);
      const result = await collection.find({}).toArray();
      console.log("result+++++++++++++++++++++++++++", result);

      return result;
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      await client.close();
    }
  }
}

module.exports = entities;
