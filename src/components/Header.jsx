import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../style/HeaderStyle";

function Header() {
  return (
    <HeaderStyle>
      <div>
        <h1>Guide</h1>
        <h2>
          <span>추천</span>
        </h2>
        <h2>
          <span>대륙</span>
          <div>
            <nav>1</nav>
            <nav>1</nav>
            <nav>1</nav>
            <nav>1</nav>
            <nav>1</nav>
          </div>
        </h2>
        <h2>
          <span>나라</span>
          <div>
            <nav>1</nav>
            <nav>1</nav>
            <nav>1</nav>
            <nav>1</nav>
            <nav>1</nav>
          </div>
        </h2>
        <h2>
          <span>환전</span>
        </h2>
      </div>
    </HeaderStyle>
  );
}

export default Header;
