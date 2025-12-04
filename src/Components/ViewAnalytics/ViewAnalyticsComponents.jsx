import React from 'react';
 import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
 } from 'recharts';

 const ViewAnalyticsComponents = () => {
  // Example data
  const pieData = [
    { name: 'Paid', value: 70 },
    { name: 'Unpaid', value: 50 },
  ];

  const barData = [
    { month: 'Jan', Paid: 40, Unpaid: 20 },
    { month: 'Feb', Paid: 50, Unpaid: 30 },
    { month: 'Mar', Paid: 60, Unpaid: 25 },
    { month: 'Apr', Paid: 70, Unpaid: 50 },
    { month: 'May', Paid: 80, Unpaid: 35 },
    { month: 'Jun', Paid: 90, Unpaid: 40 },
  ];

  const COLORS = ['#4ade80', '#f87171']; // Green & Red
  const GRADIENTS = ['url(#paidGradient)', 'url(#unpaidGradient)'];

  return (
    <div className="max-w-6xl mx-auto p-5 space-y-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Analytics Dashboard
      </h2>

      {/* Pie Chart Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Payment Status Overview
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <defs>
              <linearGradient id="paidGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#16a34a" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="unpaidGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f87171" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              isAnimationActive={true}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={GRADIENTS[index % GRADIENTS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          Monthly Payment Analytics
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={barData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barGap={12}
          >
            <defs>
              <linearGradient id="barPaid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#16a34a" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="barUnpaid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f87171" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Paid" fill="url(#barPaid)" radius={[5,5,0,0]} />
            <Bar dataKey="Unpaid" fill="url(#barUnpaid)" radius={[5,5,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
 };

 export default ViewAnalyticsComponents;
