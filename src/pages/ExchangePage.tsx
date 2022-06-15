import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { CurrencyExchange } from "../api";

const Select = styled.select`
  display: block;
  margin: 0 auto;
  border: 5px solid #000;
  width: 50vw;
  height: 5vh;
  font-size: 18px;
`;

const Option = styled.option`
  text-align: center;
  font-size: 30px;
`;

function ExchangePage() {
  const { isLoading, data } = useQuery("exchange", CurrencyExchange);

  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <Select>
          {data.list.map((exchange: any) => (
            <Option style={{ textAlign: "center" }}>
              {exchange.currencyname} {exchange.sign}
            </Option>
          ))}
        </Select>
      )}
    </div>
  );
}

export default ExchangePage;
