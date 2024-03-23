// require('dotenv').config({path: './env'})

// import connectDB from "./db/index.js";
import connectDB from "./src/DB/index.js";
import {app} from './app.js'
// import dotenv from 'dotenv';
// dotenv.config({
//     path: './.env'
// })

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '.env')
});



connectDB()
.then(() => {
    app.listen(process.env.PORT || 3002, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
