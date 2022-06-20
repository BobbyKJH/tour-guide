import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { CurrencyExchange } from "../api";
import Exchange from "../components/exchange/Exchange";

// Styled components
const Select = styled.select`
  display: block;
  margin: 0 auto;
  border: 5px solid #000;
  width: 50vw;
  height: 5vh;
  font-size: 18px;
  margin-top: 10px;
`;

function ExchangePage() {
  const { isLoading, data } = useQuery("exchange", CurrencyExchange);

  // console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <Select>
            {data.list.map((exchange: any) => (
              <Exchange
                key={exchange.id}
                currencyName={exchange.currencyname}
                sign={exchange.sign}
              />
            ))}
          </Select>
        </>
      )}
    </div>
  );
}

export default ExchangePage;
