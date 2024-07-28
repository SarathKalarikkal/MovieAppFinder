import { useState, SetStateAction, useContext } from "react"
import Layout from "../../Layouts/Layout"
import "./Home.css"
import searchIcon from "../../assets/icons/icon-search.svg"
import MovieTrendList from "../../components/movie-list/MovieTrendList"
import MovieList from "../../components/movie-list/MovieList"
import { MovieDataType } from "../../assets/data"
import { MovieContext } from "../../context/movie-context"

const Home = () => {

  const [search, setSearch] =useState('')

const [searchList, setSeacrList] = useState<MovieDataType[]>([])
const {state} = useContext(MovieContext)
const {movies} =state

const trendingList = movies.filter((item)=> item.isTrending === true).slice(0,4)
const recomondList = movies.filter((item)=> item.isTrending !== true)

  const handleSearch = (e :{target : {value: SetStateAction<string>}})=>{
    setSearch(e.target.value)

    const newList = movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
    setSeacrList(newList)
  }

  return (
   <Layout>
        <div className="col-12">
           <div className="home-top">
              <form>
                 <img src={searchIcon} alt="" width="20px" />
                 <input placeholder="Search for movies or tv series...." value={search} onChange={handleSearch} />
              </form>
           </div>
        </div>

        <div className="col-lg-12">
           <div className="home-bottom">
              {search === '' ? (
                 <>
                    <div className="row">
                       <h6 className="my-4 text-white">Trending</h6>
                       <MovieTrendList trendingList={trendingList} />
                    </div>
                    <div className="row">
                       <h6 className="my-5 text-white">Recommended For You</h6>
                       <MovieList recomondList={recomondList} />
                    </div>
                 </>
              ) : (
                 <>
                    <div className="d-flex flex-column">
                       <span className="text-secondary mb-4">Found {search.length} results for "{search}"{""} </span>
                       <MovieList recomondList={searchList} />
                    </div>
                 </>
              )}
           </div>
        </div>
   </Layout>
  )
}

export default Home