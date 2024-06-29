import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="w-full text-blue-700 p-7 absolute top-0 bg-transparent z-50">
      <nav className="container mx-auto flex justify-between items-center px-12">
        <div className="text-xl font-bold cursor-pointer ">
          Blurock Innovations
        </div>
        <div className="space-x-12 flex text-md font-semibold">
          <NavLink
            to="/"
            exact
            className="hover:underline"
            activeClassName="underline"
          >
            Home
          </NavLink>
          {currentUser && (
            <NavLink
              to="/our-product"
              className="hover:underline"
              activeClassName="underline"
            >
              Our Product
            </NavLink>
          )}
          <NavLink
            to="/service"
            className="hover:underline"
            activeClassName="underline"
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className="hover:underline"
            activeClassName="underline"
          >
            About
          </NavLink>
          {currentUser ? (
            <NavLink
              to="/profile"
              className="hover:underline"
              activeClassName="underline"
            >
              <img
                src={currentUser.profilePicture}
                alt="profile picture"
                className="rounded-full h-7 w-7 object-cover"
              />
            </NavLink>
          ) : (
            <NavLink
              to="/sign-in"
              className="hover:underline"
              activeClassName="underline"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
