import axios from "axios";
import { GET_MOVIES_BASEURL } from "@/redux/movies/moviesSlice";

const getAllMovies = async () => {
  const data = await axios
    .get(GET_MOVIES_BASEURL)
    .then((data) => data.data)
    .catch((err) => err);

  return data;
};
export default getAllMovies;