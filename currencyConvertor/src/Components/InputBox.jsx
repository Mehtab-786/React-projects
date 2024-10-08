import React, {useId} from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    OnCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/60 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/50 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => OnCurrencyChange && OnCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option value={currency} key={currency} >
                            {currency}
                            </option>
                        ) )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
