import React from 'react'
import SideBar from './SideBar'
import Tables from './Tables'

export default function Leads() {
  return (
    <div className="home">
      <div className="side">
        <SideBar />
      </div>
      <div className='leadsContainer'>
        <div></div>
        <div><Tables/></div>
      </div>
    </div>
  )
}
