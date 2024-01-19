import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import LaPaletteDuGout from "./pages/LaPaletteDuGout/LaPaletteDuGout";
import LaNoteEnchantee from "./pages/LaNoteEnchantee/LaNoteEnchantee"
import ALaFrancaise from "./pages/ALaFrancaise/ALaFrancaise"
import LeDeliceDesSens from "./pages/LeDeliceDesSens/LeDeliceDesSens"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/lapalettedugout" element={<LaPaletteDuGout/>}/>
          <Route path="/lanoteenchantee" element={<LaNoteEnchantee/>}/>
          <Route path="/alafrancaise" element={<ALaFrancaise/>} />
          <Route path="/ledelicedessens" element={<LeDeliceDesSens/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
