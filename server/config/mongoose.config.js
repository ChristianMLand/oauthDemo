import { connect } from 'mongoose';

const dbConnect = async (db_uri, dbName) => {
    try {
        await connect(db_uri, { dbName });
        console.log("Established a connection to DB:", dbName);
    } catch (error) {
        console.error("Unable to connect to DB:", error);
    }
}

export default dbConnect;