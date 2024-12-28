import React from 'react'
import LeadData from '../Leads/LeadData';
import Navbar from '../Leads/Navbar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  
  return (
    <div className='m-2'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
