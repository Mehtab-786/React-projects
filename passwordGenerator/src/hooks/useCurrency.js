import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json()) // resonse obj or Json(Text) format --> json()
            .then(res => setData(res[currency]))
            .catch(err => console.log(err));
    }, [currency])

    return data;
};

export default useCurrency;