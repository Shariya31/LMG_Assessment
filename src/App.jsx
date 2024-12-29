import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateProductPage from "./pages/CreateProductPage"; 
import Products from "./pages/Products"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product" element={<Products />} />


          {/* Protected Routes */}
          <Route
            path="/create-product"
            element={
              <ProtectedRoute
                element={<CreateProductPage />}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;