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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%" className={className} width={width} height={height} {...props}>
      
  <defs>
    <filter id="bg-clay-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#5E4338" flood-opacity="0.22" />
    </filter>

    
    <linearGradient id="mind-sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF0E5" />
      <stop offset="55%" stop-color="#F7D9C4" />
      <stop offset="100%" stop-color="#E8B89A" />
    </linearGradient>

    
    <radialGradient id="brain-hill-coral" cx="35%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#FFBFBD" />
      <stop offset="55%" stop-color="#F28482" />
      <stop offset="100%" stop-color="#C96462" />
    </radialGradient>

    <radialGradient id="brain-hill-peach" cx="40%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#FFE0CC" />
      <stop offset="60%" stop-color="#E2A886" />
      <stop offset="100%" stop-color="#BA7E5B" />
    </radialGradient>

    
    <radialGradient id="arena-floor" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#B8C4D9" />
      <stop offset="65%" stop-color="#8E9AAF" />
      <stop offset="100%" stop-color="#647087" />
    </radialGradient>

    <radialGradient id="neuron-glow" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFF5D6" />
      <stop offset="55%" stop-color="#F6BD60" />
      <stop offset="100%" stop-color="#D49535" />
    </radialGradient>
  </defs>

  
  <rect id="bg-langit-pikiran" width="1080" height="1920" fill="url(#mind-sky)" />

  
  <g id="bg-jaringan-neuron" opacity="0.75">
    
    <path d="M -50 320 Q 280 420 540 280 T 1130 390" fill="none" stroke="#F28482" strokeWidth="26" strokeLinecap="round" opacity="0.35" />
    <path d="M 120 -40 Q 340 480 220 950" fill="none" stroke="#84A59D" strokeWidth="22" strokeLinecap="round" opacity="0.3" />
    <path d="M 920 -40 Q 750 520 890 1050" fill="none" stroke="#8E9AAF" strokeWidth="22" strokeLinecap="round" opacity="0.3" />

    
    <circle cx="260" cy="355" r="44" fill="url(#neuron-glow)" />
    <ellipse cx="245" cy="338" rx="14" ry="8" transform="rotate(-25 245 338)" fill="#FFFFFF" opacity="0.7" />

    <circle cx="820" cy="490" r="56" fill="url(#neuron-glow)" />
    <ellipse cx="800" cy="468" rx="18" ry="10" transform="rotate(-25 800 468)" fill="#FFFFFF" opacity="0.7" />

    <circle cx="540" cy="280" r="36" fill="url(#neuron-glow)" />
    <ellipse cx="528" cy="268" rx="10" ry="6" transform="rotate(-25 528 268)" fill="#FFFFFF" opacity="0.7" />
  </g>

  
  <g id="bg-gunung-otak" filter="url(#bg-clay-shadow)">
    
    <circle cx="240" cy="1180" r="280" fill="url(#brain-hill-peach)" />
    <circle cx="840" cy="1180" r="280" fill="url(#brain-hill-peach)" />
    
    <circle cx="540" cy="1050" r="340" fill="url(#brain-hill-coral)" />
    <circle cx="360" cy="1220" r="240" fill="url(#brain-hill-coral)" />
    <circle cx="720" cy="1220" r="240" fill="url(#brain-hill-coral)" />
    
    <path d="M 390 920 C 450 860, 580 860, 640 940" fill="none" stroke="#FFDFDE" strokeWidth="28" strokeLinecap="round" opacity="0.45" />
    <path d="M 280 1120 C 360 1050, 480 1080, 540 1160" fill="none" stroke="#FFDFDE" strokeWidth="24" strokeLinecap="round" opacity="0.4" />
    <path d="M 590 1080 C 670 1020, 780 1060, 820 1150" fill="none" stroke="#FFDFDE" strokeWidth="24" strokeLinecap="round" opacity="0.4" />
  </g>

  
  <g id="bg-lantai-arena" filter="url(#bg-clay-shadow)">
    <ellipse cx="540" cy="1580" rx="680" ry="320" fill="#84A59D" />
    <ellipse cx="540" cy="1560" rx="610" ry="275" fill="url(#arena-floor)" />
    
    <ellipse cx="380" cy="1420" rx="190" ry="45" transform="rotate(-8 380 1420)" fill="#FFFFFF" opacity="0.3" />
  </g>

    </svg>
  );
};