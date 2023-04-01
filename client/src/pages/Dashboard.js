import React from 'react'

import SideNav from '../components/Navigation/SideNav';

import '../styles/dash.styles.css';

const Dashboard = () => {
  return (
    <div className='bg-base-100'>
    <div className='gridcontainer'>
      <div className='sideNav '>
        <SideNav />
      </div>
      <div className='main'>
        <h2>Header</h2>
        <div className='grid2'>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        <div className='mini-card'>Item</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard