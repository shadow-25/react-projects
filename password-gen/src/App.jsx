import { useCallback, useState, useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [numAllowed, setnumAllowed] = useState(false)
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState('')
  const passwordGen=useCallback(() => {
      let pass=''
      let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numAllowed) str+='0123456789'
      if (charAllowed) str+='+-*/(){}[]?|_-<>$#@!~`^&%₹'
      for (let i = 0; i < length; i++) {
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }
      setpassword(pass)
    },
    [numAllowed,length,charAllowed,setpassword],
  )
  useEffect(()=>{passwordGen()},[numAllowed,length,charAllowed,setpassword])

  const passwordRef= useRef(null)

  const copy = ()=>{
    passwordRef.current?.select()
    navigator.clipboard.writeText(password)
  }
  
  return (
    <>
      <div className='w-full h-screen bg-black text-white'>
        <div className='bg-gray-700 mx-auto flex justify-center items-center' >
          <h1 className=' text-3xl'><b><i>PASSWORD GENERATOR</i></b></h1>
        </div>
        <div className='flex justify-center items-center '>
          <div className=' bg-gray-800 flex justify-center items-center my-4 flex-col text-orange-600 gap-4 w-fit shadow  rounded-s-lg p-8 m-8' >
              <div className='w-full mx-5 pl-3'>
                <input className=' p-3 w-4/5 text-lg overflow-hidden rounded-l-md' type="text" name="generated" id="generated" value={password} ref={passwordRef} readOnly/>
                <button className=' bg-blue-600 text-white p-3 text-lg rounded-r-md active:bg-red-600' onClick={copy}>Copy</button>
              </div>
              <div className='tracking-wide mx-3 '>
                <input  className='mx-3 cursor-pointer' type="range" name="length" id="length" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
                <label htmlFor="length">Length: {length}</label>
                <input className=' ml-3 cursor-pointer' type="checkbox" name="num" id="num" defaultChecked={numAllowed} onChange={()=>{setnumAllowed((prev)=>!prev)}} />
                <label className='cursor-pointer' htmlFor="num">NUMBERS</label>
                <input className=' ml-3 cursor-pointer' type="checkbox" name="char" id="char"  defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
                <label className='cursor-pointer' htmlFor="char">CHARACTERS</label>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
