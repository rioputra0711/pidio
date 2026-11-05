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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" width="100%" height="100%" className={className} width={width} height={height} {...props}>
      
  <defs>
    <filter id="beam-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#F28482" flood-opacity="0.8" />
    </filter>
    <filter id="icon-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="8" stdDeviation="6" flood-color="#8C3B39" flood-opacity="0.28" />
    </filter>

    <linearGradient id="dopamine-laser" x1="100%" y1="50%" x2="0%" y2="50%">
      <stop offset="0%" stop-color="#FFF0E5" />
      <stop offset="35%" stop-color="#F6BD60" />
      <stop offset="75%" stop-color="#F28482" />
      <stop offset="100%" stop-color="#F28482" stop-opacity="0" />
    </linearGradient>

    <radialGradient id="bubble-coral" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#FFB8B6" />
      <stop offset="60%" stop-color="#F28482" />
      <stop offset="100%" stop-color="#C95654" />
    </radialGradient>

    <radialGradient id="bubble-mustard" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#FFE5A3" />
      <stop offset="60%" stop-color="#F6BD60" />
      <stop offset="100%" stop-color="#D19232" />
    </radialGradient>

    <radialGradient id="bubble-sage" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#B5D6CD" />
      <stop offset="60%" stop-color="#84A59D" />
      <stop offset="100%" stop-color="#58756E" />
    </radialGradient>
  </defs>

  <g id="sinar-dopamin-root">
    
    <g id="laser-beam" filter="url(#beam-glow)">
      <path d="M 760 150 L 40 70 C 10 120, 10 230, 40 280 L 760 200 C 790 190, 790 160, 760 150 Z" fill="url(#dopamine-laser)" />
      <rect x="90" y="155" width="660" height="40" rx="20" fill="#FFF0E5" opacity="0.85" />
      
      <ellipse cx="640" cy="175" rx="18" ry="65" fill="none" stroke="#FFF0E5" strokeWidth="10" opacity="0.8" />
      <ellipse cx="450" cy="175" rx="22" ry="85" fill="none" stroke="#FFE5A3" strokeWidth="8" opacity="0.7" />
      <ellipse cx="240" cy="175" rx="26" ry="105" fill="none" stroke="#F28482" strokeWidth="8" opacity="0.6" />
    </g>

    
    <g id="ikon-like" transform="translate(150, 45)" filter="url(#icon-shadow)">
      <circle cx="55" cy="55" r="46" fill="url(#bubble-coral)" />
      <ellipse cx="38" cy="32" rx="14" ry="7" transform="rotate(-30 38 32)" fill="#FFFFFF" opacity="0.6" />
      <path d="M 55 78 C 55 78, 30 60, 30 44 C 30 34, 42 30, 55 42 C 68 30, 80 34, 80 44 C 80 60, 55 78, 55 78 Z" fill="#FFF0E5" />
    </g>

    
    <g id="ikon-video" transform="translate(360, 195)" filter="url(#icon-shadow)">
      <circle cx="50" cy="50" r="42" fill="url(#bubble-mustard)" />
      <ellipse cx="35" cy="28" rx="12" ry="6" transform="rotate(-30 35 28)" fill="#FFFFFF" opacity="0.65" />
      <path d="M 40 32 L 68 50 L 40 68 Z" fill="#FFF0E5" stroke="#FFF0E5" strokeWidth="6" strokeLinejoin="round" />
    </g>

    
    <g id="ikon-game" transform="translate(520, 35)" filter="url(#icon-shadow)">
      <circle cx="48" cy="48" r="40" fill="url(#bubble-sage)" />
      <ellipse cx="32" cy="28" rx="12" ry="6" transform="rotate(-30 32 28)" fill="#FFFFFF" opacity="0.6" />
      <circle cx="38" cy="48" r="7" fill="#FFF0E5" />
      <circle cx="58" cy="40" r="6" fill="#F6BD60" />
      <circle cx="58" cy="56" r="6" fill="#F28482" />
    </g>
  </g>

    </svg>
  );
};