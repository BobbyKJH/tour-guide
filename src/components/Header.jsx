import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../style/HeaderStyle";

function Header() {
  return (
    <HeaderStyle>
      <div>
        <h1>Guide</h1>
        <h2>추천</h2>
        <h2>대륙</h2>
        <h2>나라</h2>
        <h2>환전</h2>
      </div>
    </HeaderStyle>
  );
}

export default Header;
