import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <div className="space-x-4 flex">
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
