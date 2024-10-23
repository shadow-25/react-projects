import React from 'react'
import { useState,useEffect, } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    // better approch is to use loader as it loads as soon as the curser hover on link but it works only with routerprovider and createbrowserroute
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/shubhamthakur-2504').then(Response => Response.json())
    //  .then(data=>{
    //     console.log(data);
    //     setdata(data)
    //  })
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center bg-gray-600 text-white p-4 m-4'>
      <h1> Github Followers : {data.followers} </h1>
      <img src={data.avatar_url} alt="Users git image" width={300} />
    </div>
  )
}

export const githubLoaderData = async () => {
    const res = await fetch('https://api.github.com/users/shubhamthakur-2504')
    return res.json()
}