import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {Id}= useParams()
  return (
    <div className=' text-3xl bg-gray-400 text-white text-center  p-4'>
      USER: {Id}
    </div>
  )
}
