import { ReactNode, useEffect, useState } from "react";
import SideBar from "../components/sideBar/SideBar";
import "./Layout.css"
import Loader from "../components/Loader/Loader";

interface LayoutProps {
    children : ReactNode
}



const Layout = ({children}:LayoutProps) => {

const [isLoading, setIsloading] = useState<boolean>(false)

useEffect(()=>{
 
  setTimeout(()=>{
    setIsloading(true)
  },1000)
},[])


  return (
    <>
    {
      isLoading ? (
        <div className="container-fluid">
    <div className="row">
        <div className="col-12 col-md-2 col-lg-2">
          <SideBar/>
        </div>
        <div className="col-12 col-md-10 col-lg-10">
         <main className="row">
            {children}
         </main>
        </div>
    </div>
    </div>
      ) : (
       <div className="loader-wrap">
             <Loader />
       </div>
      )
    }
    
    </>
  )
}

export default Layout