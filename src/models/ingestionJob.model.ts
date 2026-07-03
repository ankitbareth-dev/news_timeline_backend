import { Schema, model } from "mongoose";

const ingestionJobSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["running", "completed", "failed"],
      default: "running",
      required: true,
    },

    startedAt: {
      type: Date,
      default: Date.now,
    },

    completedAt: {
      type: Date,
      default: null,
    },

    error: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const IngestionJob = model("IngestionJob", ingestionJobSchema);
