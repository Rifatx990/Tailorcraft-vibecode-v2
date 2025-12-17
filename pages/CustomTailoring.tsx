import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CustomTailoring: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    garmentType: 'Suit 2-Piece',
    fabricId: '',
    neck: '',
    chest: '',
    waist: '',
    hips: '',
    shoulder: '',
    sleeve: '',
    length: '',
    notes: '',
    deliveryDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to place a custom order.");
      navigate('/login');
      return;
    }
    // Logic to send to API would go here
    alert("Order Request Submitted Successfully! Check your dashboard.");
    navigate('/dashboard/customer');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif font-bold text-gray-900">Custom Tailoring Request</h1>
        <p className="text-gray-500 mt-2">Get your perfect fit by providing accurate measurements.</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between">
           {[1, 2, 3].map((s) => (
             <div key={s} className="flex items-center">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                 step >= s ? 'bg-gold-500 text-white' : 'bg-gray-200 text-gray-500'
               }`}>
                 {s}
               </div>
               <span className={`ml-2 text-sm font-medium hidden sm:block ${step >= s ? 'text-gray-900' : 'text-gray-400'}`}>
                 {s === 1 ? 'Details' : s === 2 ? 'Measurements' : 'Review'}
               </span>
             </div>
           ))}
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-gray-800">Garment & Fabric</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Garment Type</label>
                  <select 
                    name="garmentType" 
                    value={formData.garmentType} 
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-gold-500 focus:ring-gold-500"
                  >
                    <option>Suit 2-Piece</option>
                    <option>Suit 3-Piece</option>
                    <option>Formal Shirt</option>
                    <option>Trousers</option>
                    <option>Sherwani</option>
                    <option>Punjabi</option>
                  </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Delivery Date</label>
                   <input 
                    type="date" 
                    name="deliveryDate" 
                    value={formData.deliveryDate} 
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-gold-500 focus:ring-gold-500" 
                    required 
                   />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Design Notes / Instructions</label>
                  <textarea 
                    name="notes" 
                    rows={4} 
                    value={formData.notes} 
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-gold-500 focus:ring-gold-500"
                    placeholder="E.g., Slim fit, double vents, peak lapel..."
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl font-bold text-gray-800">Your Measurements (in inches)</h2>
              <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-700 mb-4">
                Tip: Measure over a shirt for best accuracy. Keep the tape snug but not tight.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['Neck', 'Chest', 'Waist', 'Hips', 'Shoulder', 'Sleeve', 'Length'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{field}</label>
                    <input 
                      type="number" 
                      name={field.toLowerCase()} 
                      value={(formData as any)[field.toLowerCase()]}
                      onChange={handleChange}
                      placeholder="0.0"
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-gold-500 focus:ring-gold-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
             <div className="space-y-6 animate-fade-in">
               <h2 className="text-xl font-bold text-gray-800">Review Summary</h2>
               <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                 <div className="flex justify-between border-b border-gray-200 pb-2">
                   <span className="text-gray-600">Garment Type:</span>
                   <span className="font-bold">{formData.garmentType}</span>
                 </div>
                 <div className="flex justify-between border-b border-gray-200 pb-2">
                   <span className="text-gray-600">Delivery Date:</span>
                   <span className="font-bold">{formData.deliveryDate || 'Not specified'}</span>
                 </div>
                 <div className="border-b border-gray-200 pb-2">
                   <span className="block text-gray-600 mb-1">Measurements:</span>
                   <p className="text-sm font-mono text-gray-800">
                     Chest: {formData.chest}", Waist: {formData.waist}", Neck: {formData.neck}"...
                   </p>
                 </div>
                 <div>
                   <span className="block text-gray-600 mb-1">Notes:</span>
                   <p className="text-sm italic text-gray-800">{formData.notes || 'None'}</p>
                 </div>
               </div>
               <div className="flex items-center mt-4">
                 <input type="checkbox" className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded" required />
                 <span className="ml-2 text-sm text-gray-600">I confirm the measurements provided are accurate.</span>
               </div>
             </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button 
                type="button" 
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition"
              >
                Back
              </button>
            ) : <div></div>}
            
            {step < 3 ? (
              <button 
                type="button" 
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 transition"
              >
                Next Step
              </button>
            ) : (
              <button 
                type="submit"
                className="px-8 py-2 bg-gold-500 text-white font-bold rounded-md hover:bg-gold-600 transition shadow-lg"
              >
                Place Custom Order
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomTailoring;