import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
   // console.log(import.meta.env.VITE_APIKEY)
   return (
      <>
         <Navbar />
         <main className="min-h-screen">
            <Outlet />
         </main>
         <Footer />
      </>
   );
}

export default App;
