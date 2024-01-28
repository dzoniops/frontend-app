import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./register/register.tsx";
import Navbar from "./navbar/navbar.tsx";
import Accommodations from "./accommodation/accommodations.tsx";
import Accommodation from "./accommodation/accommodation.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="containter-fluid">
    <Navbar />
    <div className="container">
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </div>
  </div>
);
