import express from "express";
import { home, movieDetail, filterMovie } from "./movieController";

const movieRouter = express.Router();

movieRouter.route("/").get(home);
movieRouter.get("/:id(\\d+)", movieDetail);
movieRouter.route("/filter").get(filterMovie);

export default movieRouter;
