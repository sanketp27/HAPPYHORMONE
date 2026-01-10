
import React from 'react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label }) => {
  return (
    <button className="flex items-center space-x-3 bg-[#D81B60] hover:bg-[#AD1457] text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full max-w-xs">
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-semibold tracking-wide flex-1 text-left">{label}</span>
    </button>
  );
};

export default ActionButton;
