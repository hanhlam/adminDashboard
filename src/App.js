import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";
import Products from "./pages/Products";
import BlankPage from "./components/BlankPage";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="otherPages">
            <Routes>
              <Route index element={<Home />} />
              <Route path="Users" element={<Users />} />
              <Route path="User/:userId" element={<User />} />
              <Route path="Products" element={<Products />} />
              <Route path="Mail" element={<BlankPage />} />
              <Route path="Feedback" element={<BlankPage />} />
              <Route path="Messages" element={<BlankPage />} />
              <Route path="Manage" element={<BlankPage />} />
              <Route path="Analytics" element={<BlankPage />} />
              <Route path="Reports" element={<BlankPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
