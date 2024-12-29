import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import Logo from '../assets/images/Logo.jpg'
function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated, "navbar")
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <nav className="flex h-[100px] justify-between items-center px-4 py-2 bg-gray-800
     opacity-70 text-white">
      <Link to="/" className="text-lg font-bold">
      <img src={Logo} alt="" />
      </Link>
      <div>
        {isAuthenticated && user ? (
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">Welcome, {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
            <div>
              <Link className="text-2xl text-white font-bold" to="/create-product">Create Product</Link>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="text-2xl font-bold hover:text-black">
              <Link to="/login">Login</Link>
            </button>
            <button className="text-2xl font-bold hover:text-black">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
