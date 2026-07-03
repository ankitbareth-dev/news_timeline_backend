import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync.js";
import { getAllClusters } from "../services/cluster.service.js";

export const getClusters = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const clusters = await getAllClusters();

    res.status(200).json({
      success: true,
      data: clusters,
    });
  },
);
