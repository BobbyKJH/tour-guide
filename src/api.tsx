// 환전 Api
export function CurrencyExchange() {
  return fetch("https://bobbykjh.github.io/exchange.json").then((res) =>
    res.json()
  );
}
