import { SetStateAction, useContext, useState } from "react"
import Layout from "../../Layouts/Layout"
import { MovieContext } from "../../context/movie-context"
import { MovieDataType } from "../../assets/data"
import MovieList from "../../components/movie-list/MovieList"
import searchIcon from "../../assets/icons/icon-search.svg"



function Tvseries() {

  const [search, setSearch] =useState('')

const [searchList, setSeacrList] = useState<MovieDataType[]>([])
const {state} = useContext(MovieContext)
const {movies} =state
const tvSeries = movies.filter((movie)=>movie.category === "TV Series")

// const trendingList = movies.filter((item)=> item.isTrending === true)
// const recomondList = movies.filter((item)=> item.isTrending !== true)

const handleSearch = (e :{target : {value: SetStateAction<string>}})=>{
  setSearch(e.target.value)

  const newList = movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
  setSeacrList(newList)
}


  return (
    <Layout>
    <div className="home-top">
       <form>
        <img src={searchIcon} alt="" width="20px" />
          <input placeholder="Search for movies or tv series...." value={search} onChange={handleSearch}/>
       </form>
    </div>

    <div className="home-bottom">
       {search ==='' ? (
        <>
       <div className="d-flex flex-column mt-5">
           <h6 className="my-3 text-white">TV Series</h6>
           <MovieList recomondList={search === ''? tvSeries : searchList} />
       </div>
        </>
       ) : (
        <>
         <div className="d-flex flex-column">
            <h6 className="text-white">Found {search.length} results for "{search}"{""} </h6>
            <MovieList recomondList={searchList} />
         </div>
        </>
       )}
    </div>
 </Layout>
  )
}

export default Tvseries