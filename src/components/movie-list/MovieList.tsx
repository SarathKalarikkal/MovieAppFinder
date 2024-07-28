import { MovieDataType } from "../../assets/data"
import MovieCard from "../MovieCard/MovieCard"

interface MovieListProps {
  recomondList : MovieDataType[]
}

const MovieList = ({recomondList}:MovieListProps) => {
  return (
    <div className="col-lg-12">
    <div className="row g-3">
    {recomondList.map((movie)=>{
        return (
          <MovieCard key={movie.id} movie={movie} />
        )
    })}
    </div>
</div>
  )
}

export default MovieList