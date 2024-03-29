import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './src/routes/user.routes.js'
import taskRouter from './src/routes/task.routes.js'


//routes declaration
app.use("/api/users", userRouter)
app.use("/api/tasks", taskRouter)

// http://localhost:8000/api/tasks/getAllTasks
// http://localhost:8000/api/tasks/addTask
// http://localhost:8000/api/tasks/deleteTask
// http://localhost:8000/api/tasks/updateTask

export { app }