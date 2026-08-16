//odm layer just like orm, used to connect mongodb to our server;
import mongoose from "mongoose";

const connectDb = async() => {
    await mongoose.connect("mongodb+srv://harshmishra2997_db_user:6qkvbtfve73My8UR@learnigncluster.lf94hs8.mongodb.net/localUser"); //to connect with server;

    //mongodb+srv://harshmishra2997_db_user:6qkvbtfve73My8UR@learnigncluster.lf94hs8.mongodb.net/ till here it is cluster's uri, "local" is the name of database present inside the cluster;

    //one correction, local is not allowed, so we renamed it to localUser
    console.log("DB connected..")
}

export default connectDb;