import { MovieDataType } from "../../assets/data"
import MovieIcon from "../icons/movie-icon"
import TvSeriesIcon from "../icons/series-icon"
import BookmarkIcon from "../icons/bookmark-icon"
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon"
import { useContext } from "react"
import { MovieContext } from "../../context/movie-context"

import "./MovieCard.css"
import { Link } from "react-router-dom"

interface MovieCardProps{
    movie : MovieDataType
}

const MovieCard = ({movie}:MovieCardProps) => {

  const {dispatch} =useContext(MovieContext)


  const handleToggleBookmark =(id:string)=>{
    dispatch({type : "TOOGLE BOOKMARK", id})
    console.log("clicked")
  }
  const Icon = movie.category === "Movies" ? MovieIcon : TvSeriesIcon

  return (
    <div className="col-12 col-md-6 col-lg-3">
     
     <div className="card-item moviecard" key={movie.id}>
        <div className="d-flex flex-column">
          <div className="img-box">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.thumbnail.regular.large} alt="" className="movie-img" />
            <div className="dark-overlay-moviecard"></div>
            </Link>
          </div>
          
          <div className="inner-elements-moviecard">
            <div className="inner-span">
              <span>{movie.year}</span>
              <span className="category">
                <Icon width="16px" height="16px" fill="white" />
                {movie.category}
              </span>
              <span>{movie.rating}</span>
            </div>
            <span className="movie-title">{movie.title}</span>
          </div>
         
        </div>
        <div className="bookmark" onClick={() => handleToggleBookmark(movie.id)}>
          {
            movie.isBookmarked ? (<BookmarkIcon width="20px" height="20px" fill="#e0e0e0" />) : (<BookmarkEmptyIcon />)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieCard