import React from 'react';
import { MOCK_CUSTOM_ORDERS } from '../../services/mockData';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const WorkerDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
           <h1 className="text-3xl font-serif font-bold text-gray-900">Worker Portal</h1>
           <p className="text-gray-500">Tasks assigned to you</p>
        </div>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-sm">
           Current Load: 85%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CUSTOM_ORDERS.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-md border-l-4 border-gold-500 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">#{order.id}</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">In Progress</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{order.garmentType}</h3>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600"><span className="font-semibold">Due Date:</span> {order.deliveryDate}</p>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 font-mono">
                   N: {order.measurements.neck}" | C: {order.measurements.chest}" | W: {order.measurements.waist}"
                </div>
                {order.measurements.notes && (
                    <p className="text-sm text-red-500 italic flex items-start">
                        <AlertCircle className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" /> 
                        Note: {order.measurements.notes}
                    </p>
                )}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-900 text-white py-2 rounded text-sm font-bold hover:bg-gray-800 transition">
                  Update Status
                </button>
                <button className="p-2 border border-gray-200 rounded hover:bg-green-50 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dummy additional tasks for visual density */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 opacity-60">
           <div className="flex justify-between items-start mb-4">
             <span className="text-xs font-bold text-gray-400">#CUST-002</span>
             <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Completed</span>
           </div>
           <h3 className="text-xl font-bold text-gray-900 mb-2">Formal Shirt (White)</h3>
           <p className="text-sm text-gray-500">Completed on Oct 20, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;