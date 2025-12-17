import React from 'react';
import { Users, ShoppingBag, Scissors, TrendingUp, DollarSign } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">$12,450</p>
          <span className="text-green-500 text-xs font-bold">+15% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Active Orders</h3>
            <ShoppingBag className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">45</p>
          <span className="text-gray-500 text-xs">12 pending shipping</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Custom Jobs</h3>
            <Scissors className="h-5 w-5 text-gold-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">18</p>
          <span className="text-gray-500 text-xs">5 due this week</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Customers</h3>
            <Users className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">1,203</p>
          <span className="text-green-500 text-xs font-bold">+8 new today</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-gray-400" />
            Sales Overview
          </h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
            <p className="text-gray-400">Chart Visualization Placeholder (Recharts would go here)</p>
          </div>
        </div>

        {/* Worker Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold mb-6">Worker Status</h2>
          <div className="space-y-4">
            {['Rahim Uddin', 'Karim Hasan', 'Abdul Malek'].map((worker, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs text-gray-600">
                    {worker.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{worker}</p>
                    <p className="text-xs text-gray-500">Tailor</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded font-bold ${i === 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {i === 0 ? 'Overloaded' : 'Active'}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-gold-600 font-bold border border-gold-200 rounded-lg hover:bg-gold-50">
            Manage Workers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;