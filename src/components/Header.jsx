import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            exact
            className="hover:underline"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:underline"
            activeClassName="underline"
          >
            About
          </NavLink>
          <NavLink
            to="/sign-in"
            className="hover:underline"
            activeClassName="underline"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            className="hover:underline"
            activeClassName="underline"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/profile"
            className="hover:underline"
            activeClassName="underline"
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
