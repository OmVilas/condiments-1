import React from "react";
import { FaHome, FaBox, FaClipboardList, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar p-3 bg-light">
      <h4 className="mb-4">Admin</h4>
      <ul className="nav flex-column">
        <li className="nav-item"><FaHome /> Dashboard</li>
        <li className="nav-item"><FaBox /> Products</li>
        <li className="nav-item"><FaClipboardList /> Orders</li>
        <li className="nav-item"><FaUsers /> Customers</li>
        <li className="nav-item"><FaChartBar /> Analytics</li>
        <li className="nav-item"><FaCog /> Settings</li>
      </ul>
      <div className="logout mt-auto"><FaSignOutAlt /> Logout</div>
    </div>
  );
};

export default Sidebar;
