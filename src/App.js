import React from "react";

import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import PlaceOrder from "./components/PlaceOrder";
import Products from "./components/Products";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";

import AuthProvider from "./components/auth";

const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="PlaceOrder" element={<PlaceOrder />} />
        <Route path="products" element={<Products />}>
          <Route path="feature" element={<Featured />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin " element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
