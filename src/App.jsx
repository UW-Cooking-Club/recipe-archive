import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
