
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Blue glow ring background */}
      <div className="absolute top-4 left-1/2 -translate-x-[60%] w-32 h-32 rounded-full border-[10px] border-blue-100 opacity-60"></div>
      <div className="absolute top-2 left-1/2 -translate-x-[55%] w-28 h-28 rounded-full border-[6px] border-blue-200 opacity-40"></div>
      
      {/* Main Pink Blob Shape */}
      <div className="relative z-10 animate-float">
        <svg width="180" height="140" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.5 120C20.5 105 10 75 25 45C38 19 75 10 110 20C145 30 175 45 185 75C195 105 175 140 140 145C105 150 70 145 40.5 120Z" fill="url(#pinkGradient)" />
          <defs>
            <linearGradient id="pinkGradient" x1="20" y1="20" x2="180" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="1" stopColor="#BE185D" />
            </linearGradient>
          </defs>
          
          {/* Stylized "H" */}
          <text x="35" y="105" fontFamily="sans-serif" fontSize="60" fontWeight="900" fill="white" fontStyle="italic">H</text>
          
          {/* "appy ormones" text */}
          <text x="85" y="78" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="white" fontStyle="italic">appy</text>
          <text x="82" y="100" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="white" fontStyle="italic">ormones</text>
          
          {/* Butterfly Icon in corner */}
          <path d="M175 40C180 35 185 35 185 45C185 50 180 55 175 55C170 55 165 50 165 45C165 35 170 35 175 40Z" fill="white" opacity="0.9" />
          <path d="M175 40C170 35 165 35 165 45C165 50 170 55 175 55C180 55 185 50 185 45C185 35 180 35 175 40Z" fill="white" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
