import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { MOCK_ORDERS, MOCK_CUSTOM_ORDERS } from '../../services/mockData';
import { Package, Ruler, Clock } from 'lucide-react';

const CustomerDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900">My Dashboard</h1>
        <p className="text-gray-500">Welcome back, {user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <Package className="h-6 w-6 text-gold-500 mr-2" />
            <h2 className="text-xl font-bold">Recent Orders</h2>
          </div>
          <div className="space-y-4">
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-gray-900">#{order.id}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {order.items.length} items • ${order.total.toFixed(2)} • {order.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Tailoring Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-6">
            <Ruler className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-bold">Custom Orders</h2>
          </div>
          <div className="space-y-4">
            {MOCK_CUSTOM_ORDERS.map(order => (
              <div key={order.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-gray-900">{order.garmentType}</span>
                  <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    {order.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  Due: {order.deliveryDate}
                </div>
              </div>
            ))}
            {MOCK_CUSTOM_ORDERS.length === 0 && (
              <p className="text-gray-500 italic">No active custom orders.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;