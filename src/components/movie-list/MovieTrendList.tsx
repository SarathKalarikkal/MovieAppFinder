import { MovieDataType } from "../../assets/data"
import MovieTrendCard from "../MovieCard/MovieTrendCard"

interface MovieTrendListProps{
    trendingList :MovieDataType[]
}

const MovieTrendList = ({trendingList}:MovieTrendListProps) => {
  return (
    <div className="col-lg-12">
        <div className="row g-3">
        {trendingList.map((movie)=>{
            return (
              <MovieTrendCard key={movie.id} movie={movie} />
            )
        })}
        </div>
    </div>
  )
}

export default MovieTrendList