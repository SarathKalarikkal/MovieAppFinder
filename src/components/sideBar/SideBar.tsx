import { Link, useLocation } from "react-router-dom"

import "./SideBar.css"
import HomeIcon from "../icons/home-icon"
import MovieIcon from "../icons/movie-icon"
import TvSeriesIcon from "../icons/series-icon"
import BookmarkIcon from "../icons/bookmark-icon"

const navLinks = [
    {
        name: "Home",
        icon: HomeIcon,
        link: '/'
    },
    {
        name: "Movies",
        icon: MovieIcon,
        link: '/movies'
    },
    {
        name: "TV series",
        icon: TvSeriesIcon,
        link: '/tv-series'
    },
    {
        name: "Bookmarks",
        icon: BookmarkIcon,
        link: '/bookmarks'
    },
]

const SideBar = () => {

    const { pathname } = useLocation()

    return (
        <div className="side-bar">
           
            <div className="sidebar-inner">
            <h5>Movie App</h5>
            {
                navLinks.map((item) => {
                    const IconComponent = item.icon

                
                    return (
                        <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
                            <div className="link-wrap d-flex align-items-center">
                           
                                <IconComponent 
                                    width="20px"
                                    height="20px"
                                    fill={pathname === item.link 
                                        ? "rgba(29, 161, 242, 1)"
                                        : "rgba(170, 170, 170, 1)"}
                                />
                                <span style={{
                                     color:`${pathname === item.link 
                                        ? "rgba(29, 161, 242, 1)"
                                        : "rgba(170, 170, 170, 1)"}`
                                }}>{item.name}</span>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SideBar
