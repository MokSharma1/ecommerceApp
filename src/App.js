import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import ToDash from "./privateroutes/toDash";
import Dashboard from "./pages/user/dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ToDash />}>
          <Route path="" element={<Dashboard />}></Route>
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
