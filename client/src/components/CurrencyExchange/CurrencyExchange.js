import { useState, useEffect } from "react";
import axios from "axios";
import "./CurrencyExchange.scss";

function CurrencyExchange() {
  // Define the API endpoint and parameters
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  const baseCurrency = "USD";

  // Initialize state to store exchange rate data, user input, and selected country
  const [exchangeRates, setExchangeRates] = useState(null);
  const [amount, setAmount] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [exchangedRate, setExchangedRate] = useState(null);

  useEffect(() => {
    // Currency exchange URL
    const url = `${apiUrl}?app_id=${apiKey}&base=${baseCurrency}`;
    console.log(url);
    // Make the Axios GET request within the useEffect
    // Empty dependency array to run this effect only once
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setExchangeRates(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Function to handle the currency exchange calculation
  const calculateExchange = () => {
    if (amount && selectedCountry && exchangeRates) {
      const exchangeRate = exchangeRates.rates[selectedCountry];
      const result = amount * exchangeRate;
      setExchangedRate(result);
    }
  };
  return (
    <div className="currency__main">
      <div className="currency__container">
        <label>
          Enter Amount in USD:
          <input
            className="currency__input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div className="currency__subcontainer">
        <label className="currency__selectcon">
          Select Country:
          <select
            className="currency__conlist"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="" disabled>
              Select a country
            </option>
            {exchangeRates &&
              Object.keys(exchangeRates.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        {" "}
        <button onClick={calculateExchange}>Calculate </button>
      </div>
      {exchangedRate !== null && (
        <div className="currency__exchangerate">
          <p>
            Exchanged Rate: {exchangedRate} {selectedCountry}
          </p>
        </div>
      )}
    </div>
  );
}
export default CurrencyExchange;
