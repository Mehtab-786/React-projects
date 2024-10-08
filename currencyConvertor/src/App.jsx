import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './Hooks/useCurrency'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount ] = useState(0)
  const [isAmountDisabled, setIsAmountDisabled] = useState(false);
  const [isCurrencyDisabled, setIsCurrencyDisabled] = useState(false);
  const currencyInfo = useCurrencyInfo(from)

  const options =  Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)   //used to converting amounts 
    setAmount(convertedAmount)
  }

  const convert = () => {
   setConvertedAmount(amount*currencyInfo[to])
  }

  const reset = () => {
    setFrom("usd")
    setTo("inr")
    setAmount(0)
    setConvertedAmount(0)
  }

    return (
        <div
            className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-thumb.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                OnCurrencyChange={(currency) => 
                                  setFrom(currency)
                                }
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurrency={from}                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                OnCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable={isAmountDisabled}
                                currencyDisable={isCurrencyDisabled} // Control currency disable
                            />
                        </div>


                        <div className="flex flex-auto  justify-between mb-3  flex-row">
                            <div className=''>
                            <input
                                id="checkbox"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 items-center border-gray-300 rounded"
                                checked={isAmountDisabled}
                                onChange={() => setIsAmountDisabled(!isAmountDisabled)}
                            />
                            <label htmlFor="checkbox" className="h-4 ml-2 text-sm text-gray-900 font-semibold ">
                                Disable
                            </label>
                            </div>
                            </div> 

                            <div className="">
                                <input
                                    id="currencyCheckbox"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 items-center border-gray-300 rounded"
                                    checked={isCurrencyDisabled} // Bind state to checkbox
                                    onChange={() => setIsCurrencyDisabled(!isCurrencyDisabled)} // Toggle state
                                />
                                <label htmlFor="currencyCheckbox" className="h-4 ml-2 text-sm text-gray-900 font-semibold">
                                    Disable Currency Input
                            </label>
                        </div>
                       
                                
                        <div className='flex'>
                            <button type="submit" className="basis-4/5 bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                            <button className=" basis-1/5 bg-blue-950 text-white px-4 py-3 rounded-lg"
                            onClick={reset}
                            >
                                Reset 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  
}


export default App


// go to chatgpt and see the things need to be added 

 // ### 3. **Toggle to Disable Amount Input**
//    - Add a checkbox to disable the input for the amount field.
//    ```js
//    const [isAmountDisabled, setIsAmountDisabled] = useState(false);

//    <input type="checkbox" onChange={() => setIsAmountDisabled(!isAmountDisabled)} />
//    <InputBox amountDisable={isAmountDisabled} />
//    ```
//    - **Learning Benefit**: You’ll learn how to conditionally disable input fields based on user actions.

// ### 4. **Dynamic Conversion Button Text**
//    - Update the text on the conversion button based on the selected currencies.
//    ```js
//    <button type="submit">
//      Convert {from.toUpperCase()} to {to.toUpperCase()}
//    </button>
//    ```
//    - **Learning Benefit**: Practice rendering dynamic text with React state.

// ### 5. **Add Input Validation**
//    - Make sure users can't input negative or zero values for the amount. You can add a simple check before performing the conversion.
//    ```js
//    const convert = () => {
//      if (amount <= 0) {
//        alert("Amount must be greater than zero");
//        return;
//      }
//      setConvertedAmount(amount * currencyInfo[to]);
//    };
//    ```
//    - **Learning Benefit**: Practice validating input data.

// ### 6. **Success and Error Messages**
//    - Show a success message after conversion and an error message if something goes wrong (like invalid input).
//    ```js
//    const [message, setMessage] = useState("");

//    const convert = () => {
//      if (amount <= 0) {
//        setMessage("Error: Enter a valid amount");
//        return;
//      }
//      setConvertedAmount(amount * currencyInfo[to]);
//      setMessage("Conversion successful!");
//    };

//    return <p>{message}</p>;
//    ```
//    - **Learning Benefit**: Learn how to manage and display feedback to the user.

// ### 7. **Loading Spinner**
//    - Add a loading spinner when fetching currency conversion data from the API.
//    ```js
//    const [isLoading, setIsLoading] = useState(false);

//    useEffect(() => {
//      setIsLoading(true);
//      fetchCurrencyData().then(() => setIsLoading(false));
//    }, [currency]);

//    return isLoading ? <div>Loading...</div> : <div>Conversion complete</div>;
//    ```
//    - **Learning Benefit**: Handle loading states in React.

// ### 8. **Add a Footer**
//    - Add a simple footer with some info, like the date of the last conversion or a disclaimer.
//    ```js
//    const Footer = () => (
//      <footer className="text-center py-4">
//        <p>Last conversion: {new Date().toLocaleDateString()}</p>
//      </footer>
//    );
//    ```
//    - **Learning Benefit**: Practice creating reusable components.

// ### 9. **Style Improvements (Tailwind)**
//    - Enhance the design with more styles like hover effects on buttons:
//    ```html
//    <button className="hover:bg-blue-700 transition duration-300">
//      Convert
//    </button>
//    ```
//    - **Learning Benefit**: Get more familiar with Tailwind CSS and improve the UI.

// ### 10. **Add a Currency Conversion History**
//    - Show the last 5 conversions the user has done. Keep a list in state to track them:
//    ```js
//    const [history, setHistory] = useState([]);

//    const convert = () => {
//      if (amount > 0) {
//        const newConversion = `${amount} ${from} to ${to} = ${convertedAmount}`;
//        setHistory([newConversion, ...history].slice(0, 5)); // Save last 5 conversions
//      }
//    };

//    return <ul>{history.map((item, index) => <li key={index}>{item}</li>)}</ul>;
//    ```
//    - **Learning Benefit**: Learn how to manage arrays and display lists in React.

// These ideas are simple yet effective for helping you practice core React concepts like state, conditional rendering, handling user input, and working with component-based design.