import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';
import userRoutes from "./routes/user.route.js";
import messageRoutes from './routes/message.route.js';
import connectToMongoDB from "./db/connectToMongoDB.js";
import {app, server} from './socket/socket.js';

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
 

server.listen(PORT, () => {
    connectToMongoDB();
  console.log(`Server listening on http://localhost:${PORT}`);
});
