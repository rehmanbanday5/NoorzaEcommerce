import mongoose from "mongoose";

const instagramSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    instagramUrl: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    date: {
      type: Number,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const instagramModel =
  mongoose.models.instagram || mongoose.model("instagram", instagramSchema);

export default instagramModel;
