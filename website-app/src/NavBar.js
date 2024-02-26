import {Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './images/Chameleon.png'

export default function NavBar(){
   
    return <nav className="nav">
        <a href="/">
            <img src={logo} width={65} height={65} alt="Logo" />
        </a>
        <ul>
            <CustomLink to = "/Experience">Experience</CustomLink>
            <CustomLink to = "/Projects">Projects</CustomLink>
            <CustomLink to = "/Resume">Resume</CustomLink>
            <CustomLink to = "/Contact">Contact</CustomLink>
        </ul>
    </nav>
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