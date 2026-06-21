import { searchMovies } from "@/utils/tmdb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "query is required" });
  }
  try {
    const movies = await searchMovies(query);
    res.status(200).json(movies);
  } catch {
    res.status(500).json({ error: "Search failed" });
  }
}
