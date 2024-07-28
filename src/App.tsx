import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { MovieProvider } from "./context/movie-context"
import "./App.css"

const App = () => {
  return (
   <MovieProvider>
      <RouterProvider router={router} />
   </MovieProvider>
  )
}

export default App