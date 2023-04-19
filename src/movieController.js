import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";
console.log("aa");
export const home = (req, res) => {
  const movies = getMovies();
  console.log(movies[0]);
  return res.render("index", { movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie_detail = getMovieById(id);
  console.log("h1");
  return res.render("detail", { movie_detail });
};
export const filterMovie = (req, res) => {
  const { year } = req.query;
  const { rating } = req.query;
  if (year && !rating) {
    const movie_year = getMovieByMinimumYear(year);
    return res.render("filter_year", { movie_year, year });
  } else if (!year && rating) {
    const movie_rating = getMovieByMinimumRating(rating);
    return res.render("filter_rating", {
      rating,
      movie_rating
    });
  }
};
