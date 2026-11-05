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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650" width="100%" height="100%" className={className} width={width} height={height} {...props}>
      
  <defs>
    <filter id="monster-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="4" dy="12" stdDeviation="10" flood-color="#9E3B39" flood-opacity="0.26" />
    </filter>
    <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="6" stdDeviation="5" flood-color="#7A3E3D" flood-opacity="0.22" />
    </filter>

    
    <radialGradient id="monster-coral" cx="32%" cy="25%" r="72%">
      <stop offset="0%" stop-color="#FFB5B3" />
      <stop offset="55%" stop-color="#F28482" />
      <stop offset="100%" stop-color="#C95654" />
    </radialGradient>

    
    <radialGradient id="belly-cream" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="65%" stop-color="#FFF0E5" />
      <stop offset="100%" stop-color="#E2A886" />
    </radialGradient>

    
    <radialGradient id="horn-mustard" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#FFE5A3" />
      <stop offset="60%" stop-color="#F6BD60" />
      <stop offset="100%" stop-color="#C98A2C" />
    </radialGradient>

    <radialGradient id="pillow-slate" cx="30%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#C5D1E6" />
      <stop offset="60%" stop-color="#8E9AAF" />
      <stop offset="100%" stop-color="#5E6A80" />
    </radialGradient>

    <radialGradient id="panic-red" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF6B6B" />
      <stop offset="100%" stop-color="#B82525" />
    </radialGradient>
  </defs>

  <g id="monster-limbik-root">
    
    <ellipse id="bayangan-monster" cx="325" cy="585" rx="165" ry="28" fill="#8C3F3D" opacity="0.2" />

    
    <g id="bantal-rebahan" filter="url(#monster-shadow)">
      <rect x="95" y="455" width="460" height="115" rx="57" fill="url(#pillow-slate)" />
      <ellipse cx="185" cy="485" rx="65" ry="18" transform="rotate(-6 185 485)" fill="#FFFFFF" opacity="0.4" />
    </g>

    
    <g id="kaki-kiri" filter="url(#soft-shadow)">
      <ellipse cx="225" cy="535" rx="52" ry="36" transform="rotate(10 225 535)" fill="url(#monster-coral)" />
      <circle cx="205" cy="530" r="10" fill="url(#belly-cream)" />
      <circle cx="228" cy="524" r="10" fill="url(#belly-cream)" />
      <circle cx="250" cy="532" r="10" fill="url(#belly-cream)" />
    </g>

    <g id="kaki-kanan" filter="url(#soft-shadow)">
      <ellipse cx="425" cy="535" rx="52" ry="36" transform="rotate(-10 425 535)" fill="url(#monster-coral)" />
      <circle cx="400" cy="532" r="10" fill="url(#belly-cream)" />
      <circle cx="422" cy="524" r="10" fill="url(#belly-cream)" />
      <circle cx="445" cy="530" r="10" fill="url(#belly-cream)" />
    </g>

    
    <g id="badan-monster" filter="url(#monster-shadow)">
      
      <path d="M 185 175 C 130 105, 195 55, 245 125 Z" fill="url(#horn-mustard)" />
      <ellipse cx="188" cy="110" rx="14" ry="8" transform="rotate(-35 188 110)" fill="#FFFFFF" opacity="0.6" />
      <path d="M 465 175 C 520 105, 455 55, 405 125 Z" fill="url(#horn-mustard)" />
      <ellipse cx="458" cy="105" rx="14" ry="8" transform="rotate(35 458 105)" fill="#FFFFFF" opacity="0.5" />

      
      <path d="M 325 105
               C 350 80, 385 95, 395 118
               C 495 145, 535 265, 520 385
               C 505 495, 435 545, 325 545
               C 215 545, 145 495, 130 385
               C 115 265, 155 145, 255 118
               C 265 95, 300 80, 325 105 Z" fill="url(#monster-coral)" />

      
      <circle cx="135" cy="340" r="38" fill="url(#monster-coral)" />
      <circle cx="125" cy="385" r="32" fill="url(#monster-coral)" />
      <circle cx="515" cy="340" r="38" fill="url(#monster-coral)" />
      <circle cx="525" cy="385" r="32" fill="url(#monster-coral)" />

      
      <ellipse cx="230" cy="190" rx="55" ry="28" transform="rotate(-28 230 190)" fill="#FFFFFF" opacity="0.5" />
      <circle cx="180" cy="245" r="12" fill="#FFFFFF" opacity="0.4" />

      
      <ellipse cx="325" cy="415" rx="125" ry="95" fill="url(#belly-cream)" />
      <ellipse cx="280" cy="365" rx="38" ry="18" transform="rotate(-18 280 365)" fill="#FFFFFF" opacity="0.65" />
    </g>

    
    <g id="wajah-monster">
      
      <g id="ekspresi-nyengir" style="display: inline;">
        
        <circle cx="255" cy="260" r="24" fill="#FFFFFF" filter="url(#soft-shadow)" />
        <circle cx="260" cy="264" r="11" fill="#4A5568" />
        <circle cx="256" cy="260" r="4" fill="#FFFFFF" />
        
        <path d="M 229 252 Q 255 262 281 248 C 278 230, 232 230, 229 252 Z" fill="url(#monster-coral)" />

        <circle cx="395" cy="260" r="24" fill="#FFFFFF" filter="url(#soft-shadow)" />
        <circle cx="390" cy="264" r="11" fill="#4A5568" />
        <circle cx="386" cy="260" r="4" fill="#FFFFFF" />
        <path d="M 369 248 Q 395 262 421 252 C 418 230, 372 230, 369 248 Z" fill="url(#monster-coral)" />

        
        <path d="M 265 305 Q 325 355 385 305 Z" fill="#9E3B39" />
        <path d="M 290 325 Q 325 348 360 325 Z" fill="#FFABA9" />
        
        <path d="M 280 310 L 290 326 L 300 313 Z" fill="#FFFFFF" />
        <path d="M 350 313 L 360 326 L 370 310 Z" fill="#FFFFFF" />
      </g>

      
      <g id="ekspresi-panik" style="display: none;">
        
        <circle cx="250" cy="255" r="34" fill="url(#panic-red)" filter="url(#soft-shadow)" />
        <circle cx="250" cy="255" r="12" fill="#FFF0E5" />
        <ellipse cx="238" cy="242" rx="8" ry="5" fill="#FFFFFF" opacity="0.8" />

        <circle cx="400" cy="255" r="34" fill="url(#panic-red)" filter="url(#soft-shadow)" />
        <circle cx="400" cy="255" r="12" fill="#FFF0E5" />
        <ellipse cx="388" cy="242" rx="8" ry="5" fill="#FFFFFF" opacity="0.8" />

        
        <rect x="215" y="202" width="60" height="14" rx="7" transform="rotate(-22 245 209)" fill="#9E3B39" />
        <rect x="375" y="202" width="60" height="14" rx="7" transform="rotate(22 405 209)" fill="#9E3B39" />

        
        <ellipse cx="325" cy="322" rx="45" ry="32" fill="#7A2523" />
        <ellipse cx="325" cy="336" rx="28" ry="15" fill="#F28482" />
      </g>

      
      <g id="ekspresi-menguap-tidur" style="display: none;">
        
        <path d="M 230 260 Q 255 280 280 260" fill="none" stroke="#9E3B39" strokeWidth="9" strokeLinecap="round" />
        <path d="M 370 260 Q 395 280 420 260" fill="none" stroke="#9E3B39" strokeWidth="9" strokeLinecap="round" />
        
        <circle cx="325" cy="315" r="22" fill="#9E3B39" />
        <circle cx="385" cy="285" r="32" fill="#C5D1E6" opacity="0.75" filter="url(#soft-shadow)" />
        <ellipse cx="375" cy="273" rx="10" ry="6" transform="rotate(-25 375 273)" fill="#FFFFFF" opacity="0.85" />
      </g>
    </g>

    
    <g id="lengan-kiri-hp" filter="url(#soft-shadow)">
      <ellipse cx="145" cy="370" rx="52" ry="30" transform="rotate(28 145 370)" fill="url(#monster-coral)" />
      
      <g id="prop-hp-monster" transform="translate(135, 345) rotate(-15)">
        <rect x="0" y="0" width="54" height="92" rx="14" fill="url(#pillow-slate)" />
        <rect x="6" y="8" width="42" height="76" rx="9" fill="#FFF0E5" />
        <ellipse cx="20" cy="25" rx="6" ry="18" transform="rotate(-15 20 25)" fill="#FFFFFF" opacity="0.8" />
      </g>
    </g>

    
    <g id="lengan-kanan-joystick" filter="url(#soft-shadow)">
      <ellipse cx="505" cy="370" rx="52" ry="30" transform="rotate(-28 505 370)" fill="url(#monster-coral)" />
      
      <g id="prop-joystick" transform="translate(435, 365) rotate(12)">
        <rect x="0" y="0" width="86" height="50" rx="25" fill="url(#horn-mustard)" />
        <circle cx="24" cy="25" r="10" fill="#8E9AAF" />
        <circle cx="62" cy="18" r="6" fill="#F28482" />
        <circle cx="70" cy="30" r="6" fill="#84A59D" />
        <ellipse cx="25" cy="10" rx="14" ry="4" fill="#FFFFFF" opacity="0.6" />
      </g>
    </g>
  </g>

    </svg>
  );
};