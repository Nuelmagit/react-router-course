import { Outlet, NavLink } from "react-router-dom";

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <NavLink end className={({isActive}) => isActive ? 'active-green' : null} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-green' : null} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active-green' : null} to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;