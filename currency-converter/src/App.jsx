import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/currencyInfo'
// import SL-02
function App() {
  const [amount, setamount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setfrom] = useState('inr')
  const [to, setto] = useState('usd')
  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)
  const swap =()=>{
    setfrom(to)
    setto(from)
    setamount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('/public/SL-020622-4930-40.jpg')`,
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
                            currencyOptions={option}
                            onCurrencyChange={(currency)=>setamount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setamount(amount)}
                            
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
                            currencyOptions={option}
                            onCurrencyChange={(currency)=>setto(currency)}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
}

export default App
