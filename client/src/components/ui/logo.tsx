import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

export default function Logo({ className = '', size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Circular emblem with swirling design */}
      <div className={`${sizeClasses[size]} relative`}>
        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center relative overflow-hidden">
          {/* Outer ring */}
          <div className="absolute inset-1 rounded-full border-2 border-gray-300"></div>
          
          {/* Swirling design elements */}
          <div className="relative w-full h-full">
            {/* Top teal/green shape */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-400 rounded-full opacity-80"></div>
            
            {/* Bottom-left dark blue shape */}
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-800 rounded-full opacity-90"></div>
            
            {/* Bottom-right gray shape */}
            <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-gray-500 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Text elements */}
      <div className="flex flex-col">
        <h1 className={`text-xl font-bold leading-tight ${
          variant === 'light' ? 'text-white' : 'text-blue-800'
        }`}>
          A&B PEINTURE
        </h1>
        <p className={`text-xs font-medium leading-tight ${
          variant === 'light' ? 'text-gray-300' : 'text-gray-500'
        }`}>
          PASSION & ESPACE DE VIE
        </p>
      </div>
    </div>
  );
}
