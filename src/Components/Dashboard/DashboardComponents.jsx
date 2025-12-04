import React from "react";
import { FiFileText, FiUsers, FiBarChart2, FiPlusSquare } from "react-icons/fi";

const DashboardComponents = () => {
  // Example data
  const totalChallans = 120;
  const totalClients = 45;
  const analyticsData = [
    { label: "Paid", value: 70 },
    { label: "Unpaid", value: 50 },
  ];

  const quickActions = [
    { name: "Add New Challan", icon: <FiFileText />, link: "/AddNewChallan" },
    { name: "Add New Client", icon: <FiUsers />, link: "/AddNewClient" },
    { name: "View Analytics", icon: <FiBarChart2 />, link: "/ViewAnalytics" },
    { name: "Generate Report", icon: <FiPlusSquare />, link: "/GenerateReport" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-5 bg-white shadow rounded-lg flex flex-col items-center">
          <FiFileText size={40} className="text-blue-600 mb-2" />
          <p className="text-xl font-semibold">{totalChallans}</p>
          <p className="text-gray-500">Total Challans</p>
        </div>
        <div className="p-5 bg-white shadow rounded-lg flex flex-col items-center">
          <FiUsers size={40} className="text-green-600 mb-2" />
          <p className="text-xl font-semibold">{totalClients}</p>
          <p className="text-gray-500">Total Clients</p>
        </div>
        <div className="p-5 bg-white shadow rounded-lg flex flex-col items-center">
          <FiBarChart2 size={40} className="text-purple-600 mb-2" />
          <p className="text-xl font-semibold">
            {analyticsData.reduce((total, item) => total + item.value, 0)}
          </p>
          <p className="text-gray-500">Analytics</p>
        </div>
        <div className="p-5 bg-white shadow rounded-lg flex flex-col items-center">
          <FiPlusSquare size={40} className="text-yellow-600 mb-2" />
          <p className="text-xl font-semibold">{quickActions.length}</p>
          <p className="text-gray-500">Quick Actions</p>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="bg-white p-5 rounded-lg shadow mb-8">
        <h3 className="text-2xl font-semibold mb-4">Analytics Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analyticsData.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-lg font-semibold">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions as Links */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              className="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg shadow transition duration-200"
            >
              {action.icon}
              <span className="mt-2 font-medium text-center">{action.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponents;
