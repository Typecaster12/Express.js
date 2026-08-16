import app from "./app.js";
import connectDb from "./db/db.js";


connectDb();
app.listen(3000, () => {
    console.log("server is running on 3000 port..");
});