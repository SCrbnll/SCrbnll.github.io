import React, { useState } from 'react';

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mt-6 relative">
        <input type="checkbox" id="switch" className="absolute opacity-0" checked={isChecked} onChange={handleChange} />
        <label htmlFor="switch" className="toggle-switch relative block w-5 h-5 bg-red-500 rounded-full cursor-pointer select-none">
          <p className="absolute text-white font-bold text-sm left-2 top-1/2 transform -translate-y-1/2">{isChecked ? 'ON' : 'OFF'}</p>
          <div className={`absolute w-4 h-4 bg-gray-500 rounded-full transition-transform duration-500 ${isChecked ? 'translate-x-full' : ''}`}></div>
        </label>
    </div>
  );
}

export default ToggleSwitch;
