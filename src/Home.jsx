import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    var navigate=useNavigate()
    useEffect(()=>{
        console.log(window.localStorage.getItem('token'))
        var token=localStorage.getItem("token")
        if(!token || token ==='undefined'){
          navigate("/login")
        }
        else{
          navigate("/dashboard")
        }
    },[navigate])
  return (
    <div>
      home
    </div>
  )
}

export default Home
