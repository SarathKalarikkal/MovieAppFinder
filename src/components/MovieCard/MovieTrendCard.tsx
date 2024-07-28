import { useContext } from "react"
import { MovieDataType } from "../../assets/data"
import { MovieContext } from "../../context/movie-context"
import "./MovieCard.css"
import MovieIcon from "../icons/movie-icon"
import TvSeriesIcon from "../icons/series-icon"
import BookmarkIcon from "../icons/bookmark-icon"
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon"
import { Link } from "react-router-dom"

interface MovieTrendCardProps{
    movie : MovieDataType
}


const MovieTrendCard = ({movie}:MovieTrendCardProps) => {

    const {dispatch} =useContext(MovieContext)


const handleToggleBookmark =(id:string)=>{
  dispatch({type : "TOOGLE BOOKMARK", id})
  console.log("clicked")
}


    const Icon = movie.category === "Movies" ? MovieIcon : TvSeriesIcon
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
      
       <div className="card-item" key={movie.id}>
          <img src={movie.thumbnail.regular.large} alt=""  className="movie-img"/>
          <Link to={`/movie/${movie.id}`}>
          <div className="dark-overlay"></div>
          <div className="inner-elements">
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
          </Link>
          <div className="bookmark" onClick={() => handleToggleBookmark(movie.id)}>
            {
              movie.isBookmarked ? (<BookmarkIcon  width="20px" height="20px" fill="#e0e0e0" />) : (<BookmarkEmptyIcon />)
            }
          </div>
        </div>
       
      </div>
    </>
  )
}

export default MovieTrendCard