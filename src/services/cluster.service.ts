import { Cluster } from "../models/cluster.model.js";

export const getAllClusters = async () => {
  return await Cluster.find().sort({
    startTime: 1,
  });
};
