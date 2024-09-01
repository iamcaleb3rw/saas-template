import React from "react";
import Sidebar from "./(components)/Sidebar";
import Header from "./(components)/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="md:w:64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
