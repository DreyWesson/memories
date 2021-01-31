import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { pusher } from "./pusher.js";

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection.once("open", () => {
    console.log("mongoDB connected");
    const changeStream = mongoose.connection.collection("posts").watch();
    changeStream.on("change", (change) => {
      console.log("💪PUSHER CHANGE 👉", change);
      console.log(change.operationType);
      if (change.operationType === "insert") {
        // Get post details
        const {
          title,
          message,
          creator,
          tags,
          selectedFile,
          likeCount,
          createdAt,
        } = change.fullDocument;

        pusher.trigger("posts", "inserted", {
          title,
          message,
          creator,
          tags,
          selectedFile,
          likeCount,
          createdAt,
        });
      } else if (change.operationType === "delete") {
        pusher.trigger("posts", "deleted", change._id);
      } else if (change.operationType === "update") {
        pusher.trigger("posts", "deleted", change._id);
      } else {
        console.log("Unknown trigger from pusher");
      }
    });
  });
};
