// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/HomePage";
// import ContinentPage from "./pages/ContinentPage";
// import CountryPage from "./pages/CountryPage";
// import ExchangePage from "./pages/ExchangePage";
// import RecommendPage from "./pages/RecommendPage";
// import CountryDetail from "./components/country/CountryDetail";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
