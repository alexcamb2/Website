import NavBar from "./NavBar"
import Pricing from "./Pages/Pricing"
import Home from "./Pages/Home"
import About from "./Pages/About"
import {Route, Routes} from "react-router-dom"



function App() {
let component

  return (
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/pricing' element={<Pricing />} />
        <Route path ='/about' element={<About />} />
      </Routes>
    </div>
    </>
  )
}
export default App