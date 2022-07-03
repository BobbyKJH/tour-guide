import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../style/HeaderStyle";

function Header() {
  return (
    <HeaderStyle>
      <header>
        <h1>여행</h1>
        <h2>
          <span>추천</span>
        </h2>
        <h2>
          <span>대륙</span>
          <nav>아시아</nav>
          <nav>유럽</nav>
          <nav>아메리카</nav>
          <nav>오세아니아</nav>
          <nav>아프리카</nav>
        </h2>
        <h2>
          <span>나라</span>
          <nav>아시아</nav>
          <nav>유럽</nav>
          <nav>아메리카</nav>
          <nav>오세아니아</nav>
          <nav>아프리카</nav>
        </h2>
        <h2>
          <span>환전</span>
        </h2>
      </header>
    </HeaderStyle>
  );
}

export default Header;
