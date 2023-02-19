import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import React from "react";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <div className="sideBar">
        <div className='s-f'>
          <h1 className="valley">
            <span className="soft">Soft</span>Valley
          </h1>
        </div>
        <div className="links">
          <NavLink>
            <div className="icons admin">
              <PersonIcon />
              <p>Admin</p>
            </div>
          </NavLink>
          <NavLink className={({isActive})=>(isActive ? "active-link" : "link" )} to="/dashboard">
            <div className="icons">
              <DashboardIcon />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink className={({isActive})=>(isActive ? "active-link" : "link" )} to="/leads">
            <div className="icons">
              <PersonSearchIcon />
              <p>Leads</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="icons">
              <PeopleIcon  />
              <p>Customer</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="icons">
              <MonetizationOnIcon/>
              <p>Sales</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="icons">
              <AccountBalanceWalletIcon />
              <p>Expenses</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
