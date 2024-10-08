import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((err) => (
            alert("Failed to fetch data")
        ))
    }, [currency])

    return data
}


export default useCurrencyInfo

// made custom hooks , data called from an api
// used useEffect hook , for rendering data when a dependency changes like currency  e.g. when currency changes to different value by user