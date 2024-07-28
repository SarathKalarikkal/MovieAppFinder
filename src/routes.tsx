import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home/Home";
import Error from "./Pages/error/error";
import Movie from "./Pages/movie/Movie";
import Tvseries from "./Pages/tv-series/Tv-series";
import Bookmark from "./Pages/bookmark/Bookmark";
import MoviePage from "./Pages/singleMoviePage/MoviePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Home/>,
        errorElement : <Error />
    },
    {
        path: '/movies',
        element : <Movie/>,
        errorElement : <Error />
    },
    {
        path: '/movie/:id',
        element : <MoviePage/>,
        errorElement : <Error />
    },
    {
        path: '/tv-series',
        element : <Tvseries/>,
        errorElement : <Error />
    },
    {
        path: '/bookmarks',
        element : <Bookmark/>,
        errorElement : <Error />
    },
])