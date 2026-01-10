
import React from 'react';
import { Star, Heart, Flower2 } from 'lucide-react';
import Logo from './components/Logo';
import ActionButton from './components/ActionButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      {/* Phone Mockup Frame */}
      <div className="relative w-full max-w-[420px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-white min-h-[850px] flex flex-col">
        
        {/* Notch / Status Bar Area */}
        <div className="absolute top-0 left-0 right-0 h-8 flex justify-center z-20">
          <div className="w-32 h-6 bg-white rounded-b-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center pt-16 px-6 relative">
          
          {/* Main Content Area with curvy background effect */}
          <div className="absolute inset-x-0 top-0 h-[60%] bg-[#FAFAFA] rounded-b-[100px] -z-10 shadow-sm"></div>

          {/* Logo Section */}
          <Logo />

          {/* Hero Section */}
          <div className="mt-8 text-center space-y-6">
            <h1 className="text-4xl font-bold text-[#E91E63] leading-tight">
              Something Beautiful <br />
              <span className="block mt-1 italic">is Blooming</span>
            </h1>

            <p className="text-gray-500 text-sm md:text-base max-w-[280px] mx-auto leading-relaxed font-medium">
              We're busy perfecting a space for women's hormonal health and wellness. Get ready to thrive!
            </p>
          </div>

          {/* Action Buttons Section */}
          <div className="mt-auto mb-20 w-full flex flex-col items-center space-y-4">
            <ActionButton 
              icon={<Star className="w-5 h-5 fill-current" />} 
              label="Expert Guidance" 
            />
            <ActionButton 
              icon={<Flower2 className="w-5 h-5" />} 
              label="Holistic Support" 
            />
            <ActionButton 
              icon={<Heart className="w-5 h-5 fill-current" />} 
              label="Holistic Support" 
            />
          </div>

          {/* Footer Decoration */}
          <div className="absolute bottom-4 text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">
            Happy Hormones © 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
