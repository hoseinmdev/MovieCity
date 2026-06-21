export interface MoviePropTypes {
  _id: string;
  imageUrl: string;
  backgroundImageUrl?: string;
  homePageImageUrl?: string;
  movieName: string;
  director?: string;
  genre?: string;
  description?: string;
  imdbScore: number;
  popularity: number;
  top?: boolean;
  new?: boolean;
  actors?: { name: string; imageUrl: string }[];
  comments?: { sender: string; text: string }[];
  downloadLinks?: { quality: number; size: number; link: string }[];
  trailer?: string;
}
