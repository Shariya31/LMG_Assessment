import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated, "navbar")
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
      <Link to="/" className="text-lg font-bold">
        Logo
      </Link>
      <div>
        {isAuthenticated && user ? (
          <div className="flex items-center gap-4">
            <span>Welcome, {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
              <Link to="/login">Login</Link>
            </button>
            <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
