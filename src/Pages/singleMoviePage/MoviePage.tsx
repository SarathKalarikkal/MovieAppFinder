import { useContext } from "react"
import Layout from "../../Layouts/Layout"
import { MovieContext } from "../../context/movie-context"
import { useParams } from "react-router-dom"
import "./MoviePage.css"




const MoviePage = () => {

    const {state} = useContext(MovieContext)
    const {movies} =state

    const { id } = useParams();
    
    const curentMovie = movies.find((movie)=>movie.id === id)

  return (
   <Layout>
    {curentMovie &&
      <div className="sigle-wrap">
        <div className="col-lg-12">
           <div className="single-movie-img">
              <img src={curentMovie.thumbnail.regular.large} alt={curentMovie.title}  />
           </div>
        </div>
        <div className="col-lg-12">
            <div className="description">
               <h3>{curentMovie.title}</h3>
                 <div className="d-flex gap-5">
                    <span>{curentMovie.year}</span>
                    <span>{curentMovie.category}</span>
                    <span>{curentMovie.rating}</span>
                 </div>
                 <p>
                    {curentMovie.description}
                 </p>
            </div>
        </div>
    </div>
    }
   </Layout>
  )
}

export default MoviePage