import NavBar from "./NavBar"
import Experience from "./Pages/Experience"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import {Route, Routes} from "react-router-dom"



function App() {
let component
  return (
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/Experience' element={<Experience />} />
        <Route path ='/Projects' element={<Projects />} />
      </Routes>
    </div>
    </>
  )
}
export default App