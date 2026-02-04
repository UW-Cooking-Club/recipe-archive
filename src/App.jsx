import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import Events from "./pages/Events";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
