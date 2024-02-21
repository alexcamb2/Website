import {Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './images/Chameleon.png'

export default function NavBar(){
    return  (
        <nav className="nav">
            <Link to = "/" className="About"> 
            <img src = {logo} width={65} height={65} alt="Logo"/>
            </Link>
        <ul>    
            <CustomLink to = "/Experience">Experience</CustomLink>
            <CustomLink to = "/Projects">Projects</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const ifActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={ifActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}