// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
// Redux
import { Provider } from "react-redux";
import { store } from "./store/store";
// Components
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ContinentPage from "./pages/ContinentPage";
import CountryPage from "./pages/CountryPage";
import ExchangePage from "./pages/ExchangePage";
import HomePage from "./pages/HomePage";
import RecommendPage from "./pages/RecommendPage";
import CountryDetail from "./components/country/CountryDetail";

const Container = styled.div`
  min-height: 89vh;
`;

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recommend" element={<RecommendPage />} />
            <Route path="/country" element={<CountryPage />} />
            <Route path="/country/:id" element={<CountryDetail />} />
            <Route path="/continent" element={<ContinentPage />} />
            <Route path="/exchange" element={<ExchangePage />} />
          </Routes>
        </Container>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default Router;
