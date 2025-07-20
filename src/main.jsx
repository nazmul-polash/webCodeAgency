import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Services from "./pages/services/Services.jsx";
import Blog from "./pages/blog/Blog.jsx";

createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Routes>
			<Route element={<App />}>
				<Route path="/" element={<Home />}></Route>
				<Route path="/services" element={<Services />}></Route>
				<Route path="/blogs" element={<Blog />}></Route>
				<Route path="/categories" element={<div className="text-center bg-red-50">This is Categories section</div>}></Route>
			</Route>
      </Routes>
   </BrowserRouter>
);
