import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    var navigate=useNavigate()
    function logout(){
        window.localStorage.clear();
        navigate('/login')
    }
  return (
    <div class="p-3 bg-warning text-dark">
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid  bg-warning-subtle text-warning-emphasis">
                <a class="navbar-brand" href="#">Dashboard</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                {/* <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li> */}
                    {/* <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul> */}
            </div>
            <Link to='/dashboard/newlead'><button  class='btn btn-outline-success'>+New Lead</button></Link>
            <button class="btn btn-outline-secondary" onClick={()=>{logout()}}>Log out</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
