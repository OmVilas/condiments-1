import React from "react";

const StatCard = ({ icon, title, value, change }) => {
  return (
    <div className="stat-card card p-3">
      <div className="d-flex align-items-center mb-2">
        <span className="icon bg-light rounded-circle p-2 me-2">{icon}</span>
        <h6 className="m-0">{title}</h6>
      </div>
      <h4>{value}</h4>
      <p className="text-success mb-0">{change}</p>
    </div>
  );
};

export default StatCard;
