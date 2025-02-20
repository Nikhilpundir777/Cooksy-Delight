import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Explorepage from "./pages/Explorepage";
import FeaturedPage from "./pages/FeaturedPage";
import FooterPage from "./pages/FooterPage";
import Homepage from "./pages/Homepage";
import RecipePage from "./pages/Recipepage";
import ViewRecipe1 from "./pages/ViewRecipe1";
import ViewRecipe2 from "./pages/ViewRecipe2";
import ViewRecipe3 from "./pages/ViewRecipe3";
import CookingTips from "./pages/CookingTips";
import ViewRecipe from "./pages/ViewRecipe";

function App() {
  return (
    <Routes>
  
      <Route
        path="/"
        element={
          <>
            <Homepage />
            <Explorepage />
            <FeaturedPage />
            <RecipePage />
            <AboutPage />
            <FooterPage />
          </>
        }
      />

      <Route path="/viewrecipe/1" element={<ViewRecipe1 />} />
      <Route path="/viewrecipe/2" element={<ViewRecipe2 />} />
      <Route path="/viewrecipe/3" element={<ViewRecipe3 />} />
      <Route path="/viewrecipe/:id" element={<ViewRecipe />} />
      <Route path="/cooking/tips" element={<CookingTips />} />

      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
