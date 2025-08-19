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

  const textSizes = {
    sm: { title: 'text-sm', subtitle: 'text-xs' },
    md: { title: 'text-lg', subtitle: 'text-xs' },
    lg: { title: 'text-xl', subtitle: 'text-sm' }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Circular emblem with sophisticated swirling design */}
      <div className={`${sizeClasses[size]} relative`}>
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
          {/* Outer ring */}
          <div className="absolute inset-1 rounded-full border border-gray-400"></div>
          
          {/* Inner background circle */}
          <div className="absolute inset-2 rounded-full bg-gray-800"></div>
          
          {/* Swirling design elements - more sophisticated */}
          <div className="relative w-full h-full">
            {/* Top teal/green shape - leaf-like form */}
            <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-2.5 h-3 bg-teal-400 rounded-full opacity-90"
                 style={{
                   clipPath: 'polygon(50% 0%, 80% 30%, 60% 70%, 40% 70%, 20% 30%)'
                 }}>
            </div>
            
            {/* Bottom-left dark blue shape - abstract rounded */}
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-blue-800 rounded-full opacity-95"
                 style={{
                   clipPath: 'polygon(30% 20%, 70% 20%, 80% 50%, 70% 80%, 30% 80%, 20% 50%)'
                 }}>
            </div>
            
            {/* Bottom-right gray shape - abstract rounded */}
            <div className="absolute bottom-1 right-1 w-2.5 h-2 bg-gray-500 rounded-full opacity-85"
                 style={{
                   clipPath: 'polygon(20% 30%, 80% 30%, 90% 50%, 80% 70%, 20% 70%, 10% 50%)'
                 }}>
            </div>
            
            {/* Additional small accent elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-teal-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Text elements */}
      <div className="flex flex-col">
        <h1 className={`${textSizes[size].title} font-bold leading-tight ${
          variant === 'light' ? 'text-white' : 'text-blue-800'
        }`} style={{
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '0.5px'
        }}>
          A&B PEINTURE
        </h1>
        <p className={`${textSizes[size].subtitle} font-medium leading-tight ${
          variant === 'light' ? 'text-gray-300' : 'text-gray-500'
        }`} style={{
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '0.3px'
        }}>
          PASSION & ESPACE DE VIE
        </p>
      </div>
    </div>
  );
}
