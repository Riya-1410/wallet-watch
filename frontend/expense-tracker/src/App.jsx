import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
}from "react-router-dom" ;
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
  // check if tokejn exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard"/>
    ) : (
      <Navigate to="/login"/>
      );
}

// import React from 'react'

// const App = () => {
//   return (
//     <div className='text-3xl text-purple-600'>App</div>
//   )
// }

// export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Auth/Login";
// import SignUp from "./pages/Auth/SignUp";
// import Home from "./pages/Dashboard/Home";
// import Income from "./pages/Dashboard/Income";
// import Expense from "./pages/Dashboard/Expense";

// const App = () => {
//   return (
//     <div>
//       {/* The 'text-3xl text-purple-600' div can be added somewhere inside your routing structure */}
//       <div className='text-3xl text-purple-600'>App</div>

//       <Router>
//         <Routes>
//           <Route path="/" element={<Root />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signUp" element={<SignUp />} />
//           <Route path="/dashboard" element={<Home />} />
//           <Route path="/income" element={<Income />} />
//           <Route path="/expense" element={<Expense />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// const Root = () => {
//   // Check if token exists in localStorage
//   const isAuthenticated = !!localStorage.getItem("token");

//   // Redirect to dashboard if authenticated, otherwise to login
//   return isAuthenticated ? (
//     <Navigate to="/dashboard" />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default App;
// // 