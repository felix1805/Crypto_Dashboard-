import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from 'axios';

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1);
  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: 'BTC',
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: 'USD'
      },
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'de3b4c09c3msh79a8900c4ecd7d3p1416c9jsn5170c5da93d7',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };

      axios.request(options).then((response) => {
        console.log(response.data);
      }).catch((error) => {
      console.error(error);
    })
  };
  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td><select
                name="currency-option-1"
                className="currency-options"
                value={chosenPrimaryCurrency}
                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
              </select></td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input type="number" name="currency-amount-2" value={""} />
              </td>
              <td><select
                name="currency-option-2"
                className="currency-options"
                value={chosenSecondaryCurrency}
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}>
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
              </select></td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>Convert</button>
      </div>
      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;
