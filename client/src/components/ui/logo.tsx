import React from 'react';
import logoImage from '../../assets/images/Logo _horizontal.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

export default function Logo({ className = '', size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="A&B PEINTURE - PASSION & ESPACE DE VIE"
        className={`${sizeClasses[size]} object-contain`}
        style={{
          filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none'
        }}
      />
    </div>
  );
}
