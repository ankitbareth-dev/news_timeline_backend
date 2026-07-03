import { Schema, model } from "mongoose";

const clusterSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    articleCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Cluster = model("Cluster", clusterSchema);
