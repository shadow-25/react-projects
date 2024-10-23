import {useEffect,useState} from 'react'

function useCurrencyInfo(Currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${Currency}.json`
        ).then((res)=> res.json()).then((res)=>setdata(res[Currency]))
        console.log(data);
    }, [Currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;