import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timeStamps: true }
);

const Message = mongoose.model("Message", messageSchema);
