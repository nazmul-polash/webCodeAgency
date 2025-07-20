import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
   return (
      <>
         <Navbar />
         <main className="min-h-screen">
            <Outlet />
         </main>


         <footer className="bg-yellow-500">This is footer section here</footer>
      </>
   );
}

export default App;
