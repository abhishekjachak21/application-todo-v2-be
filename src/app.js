import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import router from './routes/task.routes.js'

app.use("/api/tasks", router)     //routes declaration

// http://localhost:3002/api/tasks/getAllTasks
// http://localhost:3002/api/tasks/addTask
// http://localhost:3002/api/tasks/deleteTask

// http://localhost:3002/api/tasks/updateTask

export { app }