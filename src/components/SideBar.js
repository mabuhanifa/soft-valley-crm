import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <div className="sideBar">
        <div>
          <h1 className="valley">
            <span className="soft">Soft</span>Valley
          </h1>
        </div>
        <div className="links">
          <Link>
            <div className="icons admin">
              <DashboardIcon />
              <p>Admin</p>
            </div>
          </Link>
          <Link>
            <div className="icons">
              <DashboardIcon />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link>
            <div className="icons">
              <DashboardIcon />
              <p>Leads</p>
            </div>
          </Link>
          <Link>
            <div className="icons">
              <DashboardIcon />
              <p>Customer</p>
            </div>
          </Link>
          <Link>
            <div className="icons">
              <DashboardIcon />
              <p>Sales</p>
            </div>
          </Link>
          <Link>
            <div className="icons">
              <DashboardIcon />
              <p>Expenses</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
