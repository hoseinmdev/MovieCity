// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import allMovies from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({ allMovies });
}
