import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accommodation from "./accommodation/accommodation";
import Accommodations from "./accommodation/accommodations";
import Login from "./login/login";
import Example from "./register/register";
import Navbar from "./navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Example />} />
          <Route path="accommodations" element={<Accommodations />}/>
          <Route path="accommodations/:accommodationId" element={<Accommodation />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Routes>
    </>
  );
}

export default App;
