import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'sweetalert2/dist/sweetalert2.js';
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Services from "./pages/services/Services.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Price from "./pages/price/Price.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/services" element={<Services />}></Route>
					<Route path="/blogs" element={<Blog />}></Route>
					<Route path="/categories" element={<div className="text-center bg-red-50">This is Categories section</div>}></Route>
					<Route path="/pricing" element={<Price />}></Route>

					<Route path="*" element={<ErrorPage />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	</AuthProvider>
);
