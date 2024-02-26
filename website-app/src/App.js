import NavBar from "./NavBar"
import Experience from "./Pages/Experience"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import {Route, Routes} from "react-router-dom"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"


function App() {

  return (
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/Experience' element={<Experience />} />
        <Route path ='/Projects' element={<Projects />} />
        <Route path ='/Resume' element={<Resume />} />
        <Route path ='/Contact' element={<Contact/>} />
      </Routes>
    </div>
    </>
    
  )
}
export default App