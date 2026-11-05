import React from 'react';

interface RioProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Rio: React.FC<RioProps> = ({
  className,
  width,
  height,
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%" className={className} width={width} height={height} {...props}>
      
  <defs>
    <filter id="prop-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="10" stdDeviation="7" flood-color="#52463E" flood-opacity="0.25" />
    </filter>

    <radialGradient id="p-coral" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#FFABA9" />
      <stop offset="60%" stop-color="#F28482" />
      <stop offset="100%" stop-color="#C95654" />
    </radialGradient>

    <radialGradient id="p-mustard" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#FFE299" />
      <stop offset="60%" stop-color="#F6BD60" />
      <stop offset="100%" stop-color="#D19232" />
    </radialGradient>

    <radialGradient id="p-sage" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#B0D1C8" />
      <stop offset="60%" stop-color="#84A59D" />
      <stop offset="100%" stop-color="#58756E" />
    </radialGradient>

    <radialGradient id="p-slate" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#BAC7DE" />
      <stop offset="60%" stop-color="#8E9AAF" />
      <stop offset="100%" stop-color="#5A667A" />
    </radialGradient>

    <linearGradient id="p-paper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="70%" stop-color="#FFF0E5" />
      <stop offset="100%" stop-color="#E8C9B5" />
    </linearGradient>
  </defs>

  
  <g id="prop-tumpukan-buku-berat" transform="translate(50, 40)" filter="url(#prop-shadow)">
    
    <rect x="20" y="170" width="240" height="56" rx="22" fill="url(#p-slate)" />
    <rect x="36" y="180" width="195" height="36" rx="14" fill="url(#p-paper)" />
    <ellipse cx="75" cy="178" rx="35" ry="5" fill="#FFFFFF" opacity="0.5" />

    
    <rect x="10" y="115" width="230" height="58" rx="22" transform="rotate(-4 125 144)" fill="url(#p-coral)" />
    <rect x="28" y="125" width="190" height="38" rx="14" transform="rotate(-4 125 144)" fill="url(#p-paper)" />
    <ellipse cx="65" cy="122" rx="35" ry="5" transform="rotate(-4 65 122)" fill="#FFFFFF" opacity="0.55" />

    
    <rect x="25" y="58" width="215" height="56" rx="22" transform="rotate(3 132 86)" fill="url(#p-mustard)" />
    <rect x="42" y="68" width="180" height="36" rx="14" transform="rotate(3 132 86)" fill="url(#p-paper)" />
    
    <rect x="75" y="20" width="110" height="44" rx="16" fill="url(#p-coral)" />
    <ellipse cx="95" cy="30" rx="16" ry="5" fill="#FFFFFF" opacity="0.6" />
  </g>

  
  <g id="prop-kertas-2-menit" transform="translate(460, 55)" filter="url(#prop-shadow)">
    <rect x="40" y="20" width="150" height="190" rx="26" transform="rotate(6 115 115)" fill="url(#p-paper)" />
    <ellipse cx="75" cy="45" rx="22" ry="8" transform="rotate(-15 75 45)" fill="#FFFFFF" opacity="0.9" />
    
    <circle cx="82" cy="95" r="16" fill="url(#p-sage)" />
    <path d="M 75 95 L 80 100 L 90 89" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="108" y="87" width="56" height="16" rx="8" fill="url(#p-mustard)" />
    <rect x="70" y="130" width="90" height="12" rx="6" fill="url(#p-slate)" opacity="0.45" />
  </g>

  
  <g id="prop-bendera-kemenangan" transform="translate(80, 310)" filter="url(#prop-shadow)">
    
    <rect x="45" y="25" width="20" height="230" rx="10" fill="url(#p-slate)" />
    <circle cx="55" cy="22" r="18" fill="url(#p-mustard)" />
    <ellipse cx="50" cy="16" rx="6" ry="4" fill="#FFFFFF" opacity="0.7" />
    
    <path d="M 65 35 C 125 15, 175 65, 235 42 L 220 135 C 165 155, 120 105, 65 128 Z" fill="url(#p-mustard)" />
    <ellipse cx="110" cy="52" rx="28" ry="10" transform="rotate(-10 110 52)" fill="#FFFFFF" opacity="0.55" />
    
    <circle cx="145" cy="85" r="24" fill="url(#p-sage)" />
    <path d="M 135 85 L 143 93 L 157 77" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </g>

  
  <g id="prop-meja-laptop" transform="translate(430, 320)" filter="url(#prop-shadow)">
    
    <rect x="10" y="150" width="290" height="32" rx="16" fill="#E2A886" />
    <rect x="35" y="180" width="24" height="75" rx="12" fill="#C98D6B" />
    <rect x="250" y="180" width="24" height="75" rx="12" fill="#C98D6B" />
    
    <rect x="75" y="60" width="140" height="90" rx="18" fill="url(#p-slate)" />
    <rect x="87" y="72" width="116" height="66" rx="10" fill="#FFF0E5" />
    <rect x="55" y="138" width="180" height="16" rx="8" fill="url(#p-slate)" />
    <ellipse cx="115" cy="92" rx="22" ry="8" transform="rotate(-20 115 92)" fill="#FFFFFF" opacity="0.8" />
  </g>

    </svg>
  );
};