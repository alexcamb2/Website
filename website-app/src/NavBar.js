import {Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './images/Chameleon.png'

export default function NavBar(){
    const path = window.location.pathname
    return <nav className="nav">
        <img src = {logo}/>
        <ul>
            <CustomLink to = "/pricing">Pricing</CustomLink>
            <CustomLink to = "/about">Pricing</CustomLink>
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