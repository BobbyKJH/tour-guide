import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ContinentPage from "./pages/ContinentPage";
import CountryPage from "./pages/CountryPage";
import ExchangePage from "./pages/ExchangePage";
import HomePage from "./pages/HomePage";
import RecommendPage from "./pages/RecommendPage";
import { store } from "./store/store";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="/continent" element={<ContinentPage />} />
          <Route path="/exchange" element={<ExchangePage />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
