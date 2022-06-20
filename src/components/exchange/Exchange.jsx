// React
import React from "react";
import styled from "styled-components";

// Styled Components
const Option = styled.option`
  display: block;
  text-align: center;
`;
function Exchange({ currencyName, sign }) {
  return (
    <Option>
      {currencyName} {sign}
    </Option>
  );
}

export default Exchange;
