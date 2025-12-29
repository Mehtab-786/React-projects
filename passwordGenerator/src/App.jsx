import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyInfo = useCurrency(From);
  const options = Object.keys(currencyInfo);

  function swapCurrency() {
    setFrom(To);
    setTo(From);
    setAmount(convertedAmt);
    setConvertedAmt(amount);
  }

  const convert = () => setConvertedAmt(amount * currencyInfo[To]);

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currency={From}
                onAmountChange={(val) => setAmount(val)}
                onCurrencyChange={(curr) => setAmount(curr)}
                currencyOptions={options}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrency}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOptions={options}
                currency={To}
                amountDisable
                onCurrencyChange={(cur) => setTo(cur)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
