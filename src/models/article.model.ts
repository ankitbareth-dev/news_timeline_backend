import { Schema, model, Types } from "mongoose";

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    summary: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    publishedAt: {
      type: Date,
      required: true,
    },

    clusterId: {
      type: Types.ObjectId,
      ref: "Cluster",
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const Article = model("Article", articleSchema);
