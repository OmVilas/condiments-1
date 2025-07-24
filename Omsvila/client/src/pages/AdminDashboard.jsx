// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import StatCard from "../components/StatCard";
// import { FaBoxOpen, FaClipboardCheck, FaUsers, FaRupeeSign } from "react-icons/fa";
// import "../styles/dashboard.scss";

// const AdminDashboard = () => {
//   return (
//     <div className="dashboard d-flex">
//       <Sidebar />
//       <div className="main-content flex-grow-1">
//         <Topbar />
//         <div className="p-4">
//           <div className="row g-3">
//             <div className="col-md-3">
//               <StatCard icon={<FaBoxOpen />} title="Total Products" value="24" change="↑ 3 new" />
//             </div>
//             <div className="col-md-3">
//               <StatCard icon={<FaClipboardCheck />} title="Total Orders" value="156" change="↑ 12%" />
//             </div>
//             <div className="col-md-3">
//               <StatCard icon={<FaUsers />} title="Total Customers" value="1,254" change="↑ 8%" />
//             </div>
//             <div className="col-md-3">
//               <StatCard icon={<FaRupeeSign />} title="Revenue" value="₹85,240" change="↑ 15%" />
//             </div>
//           </div>

//           {/* You can add Order Table and Top Selling Products section here next */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [dashboardData, setDashboardData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/dashboard") // Backend route
//       .then((res) => setDashboardData(res.data))
//       .catch((err) => console.log("Error:", err));
//   }, []);

//   if (!dashboardData) return <div>Loading...</div>;

//   return (
//     <div className="admin-dashboard container-fluid">
//       {/* Example */}
//       <h3>Total Products: {dashboardData.totalProducts}</h3>
//       <h3>Total Orders: {dashboardData.totalOrders}</h3>
//       {/* Continue rendering real values */}
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!user || user.role !== "admin") {
    //   navigate("/login");
    //   return;
    // }

    // TEMP: Skip token for now
    // axios.get("http://localhost:5000/admin/dashboard")
    axios.get("http://localhost:5000/admin/dashboard")
      .then((res) => setDashboardData(res.data))
      .catch((err) => console.log("Error:", err));
  }, [navigate]);

  if (!dashboardData) return <div className="text-center mt-5">Loading Dashboard...</div>;
  

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">📊 Admin Dashboard</h2>
      <div className="row text-center">
        <div className="col-md-3 mb-3"><div className="p-3 shadow rounded bg-light">📦 Products: <strong>{dashboardData.totalProducts}</strong></div></div>
        <div className="col-md-3 mb-3"><div className="p-3 shadow rounded bg-light">🛒 Orders: <strong>{dashboardData.totalOrders}</strong></div></div>
        <div className="col-md-3 mb-3"><div className="p-3 shadow rounded bg-light">👥 Customers: <strong>{dashboardData.totalCustomers}</strong></div></div>
        <div className="col-md-3 mb-3"><div className="p-3 shadow rounded bg-light">💰 Revenue: ₹<strong>{dashboardData.revenue}</strong></div></div>
      </div>
    </div>
  );
};

export default AdminDashboard;

