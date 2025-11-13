import navStyles from "./navbar.module.css"
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

function NavBar(){
    return(
        <nav className={navStyles.mainNav}>
            <NavLink href="/" className="siteTitle">Sight Seeing Sanctuary</NavLink>
            <ul>
                <li><CustomLink to="/cards">Pricing</CustomLink></li>
                <li><CustomLink to="/">About</CustomLink></li>


            </ul>

        </nav>

    );

}
export default NavBar;

function CustomLink({to, children, ...props}){
     const ResolvedPath = useResolvedPath(to);
     const isActive = useMatch({path: ResolvedPath.pathname, end:true})

    return (
        <li className={ isActive ? "active" : ""}>
            <NavLink to={to} {...props}>
                {children}
            </NavLink>

        </li>

    )

}