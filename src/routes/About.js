import { NavLink, Outlet } from 'react-router-dom';

const About = () => (
  <>
    <h1>About page.</h1>
    <div className="about">
      <ul className="about_list">
        <li>
          <NavLink to="about-app" className="navlink">About app</NavLink>
        </li>
        <li>
          <NavLink to="about-developer" className="navlink">About developer</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  </>
);
export default About;
