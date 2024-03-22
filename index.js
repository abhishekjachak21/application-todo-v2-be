// require('dotenv').config({path: './env'})
import dotenv from '/opt/render/project/node_modules/dotenv';
// import connectDB from "./db/index.js";
import connectDB from "./src/DB/index.js";
import {app} from './app.js'
// dotenv.config({
//     path: './.env'
// })
dotenv.config();



connectDB()
.then(() => {
    app.listen(process.env.PORT || 3002, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
