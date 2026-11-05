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
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800" height="600" viewBox="0 0 800 600" className={className} width={width} height={height} {...props}>
      
  <defs>
    <radialGradient id="radial-gradient-1" cx="85.6" cy="82" r="54" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <linearGradient id="linear-gradient-1" x1="78.787" y1="114.142" x2="146.669" y2="136.77" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#525e75"/>
    </linearGradient>
    <radialGradient id="radial-gradient-2" cx="136.003" cy="69.2" r="30.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.65" stop-color="#f0c4a8"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <radialGradient id="radial-gradient-3" cx="0" cy="0" r="14" gradientTransform="matrix(0.866 0.5 -0.8 1.386 158.205 60.957)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.65" stop-color="#f0c4a8"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <radialGradient id="radial-gradient-4" cx="0" cy="0" r="11.2" gradientTransform="matrix(0.94 -0.342 0.599 1.644 123.432 58.559)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.65" stop-color="#f0c4a8"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <filter id="filter-1" filterUnits="userSpaceOnUse" x="237" y="12" width="146" height="326" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="3" dy="8" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="filter-2" filterUnits="userSpaceOnUse" x="442" y="34.5" width="206" height="268.5" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="3" dy="8" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-5" cx="0" cy="0" r="112.5" gradientTransform="matrix(1 0 0 1.417 515 115.625)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.6" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <radialGradient id="radial-gradient-6" cx="512.4" cy="121" r="21" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <radialGradient id="radial-gradient-7" cx="0" cy="0" r="34.5" gradientTransform="matrix(1 0 0 0.304 555.8 123.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-8" cx="512.4" cy="165" r="21" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <radialGradient id="radial-gradient-9" cx="0" cy="0" r="27" gradientTransform="matrix(1 0 0 0.389 552.8 167.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <filter id="filter-3" filterUnits="userSpaceOnUse" x="83.797" y="352.628" width="132.407" height="94.744" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="4"/><feOffset dx="0.638" dy="5.347" result="shadow"/><feFlood flood-color="#7a3e3d" flood-opacity="0.2"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-10" cx="0" cy="0" r="69.12" gradientTransform="matrix(0.966 0.259 -0.14 0.523 136.673 382.971)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffb5b3"/>
      <stop offset="0.55" stop-color="#f28482"/>
      <stop offset="1" stop-color="#c95654"/>
    </radialGradient>
    <filter id="filter-4" filterUnits="userSpaceOnUse" x="264.832" y="353.663" width="130.337" height="92.674" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="4"/><feOffset dx="3.226" dy="4.312" result="shadow"/><feFlood flood-color="#7a3e3d" flood-opacity="0.2"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-11" cx="0" cy="0" r="69.12" gradientTransform="matrix(0.966 -0.259 0.14 0.523 309.944 391.915)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffb5b3"/>
      <stop offset="0.55" stop-color="#f28482"/>
      <stop offset="1" stop-color="#c95654"/>
    </radialGradient>
    <filter id="filter-5" filterUnits="userSpaceOnUse" x="465" y="328" width="177" height="137" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="4"/><feOffset dx="2" dy="5" result="shadow"/><feFlood flood-color="#7a3e3d" flood-opacity="0.2"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-12" cx="505" cy="402.5" r="37.5" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-13" cx="569" cy="377.5" r="22.5" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.6" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <radialGradient id="radial-gradient-14" cx="606" cy="355" r="15" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
  </defs>
  <title>gemini-svg (7).svg</title>
  <g id="Layer_1" data-name="Layer 1">
    <g>
      <circle cx="100" cy="100" r="36" fill="url(#radial-gradient-1)"/>
      <path d="M98.392 79 C100.601 82.826 97.74 88.614 92 91.928 C86.26 95.242 79.817 94.826 77.608 91 C75.399 87.174 78.26 81.386 84 78.072 C89.74 74.758 96.183 75.174 98.392 79 Z" fill="#ffffff" opacity="0.5"/>
      <path d="M92.929 100 L121.213 71.716 C129.024 63.905 141.687 63.905 149.497 71.716 L149.497 71.716 C157.308 79.526 157.308 92.19 149.497 100 L121.213 128.284 C113.403 136.095 100.739 136.095 92.929 128.284 L92.929 128.284 C85.118 120.474 85.118 107.81 92.929 100 Z" fill="url(#linear-gradient-1)"/>
      <circle cx="142.603" cy="78" r="22" fill="url(#radial-gradient-2)"/>
      <path d="M166.263 73 C161.845 80.653 154.386 84.618 149.603 81.856 C144.82 79.095 144.524 70.653 148.942 63 C153.361 55.347 160.82 51.382 165.603 54.144 C170.386 56.905 170.681 65.347 166.263 73 Z" fill="url(#radial-gradient-3)"/>
      <path d="M135.12 60.264 C137.765 67.53 136.543 74.645 132.391 76.156 C128.239 77.667 122.73 73.002 120.085 65.736 C117.441 58.47 118.663 51.355 122.814 49.844 C126.966 48.333 132.476 52.998 135.12 60.264 Z" fill="url(#radial-gradient-4)"/>
    </g>
    <g filter="url(#filter-1)">
      <g id="patch-pedang-padam">
        <path d="M310 40 L310 40 C319.941 40 328 48.059 328 58 L328 212 C328 221.941 319.941 230 310 230 L310 230 C300.059 230 292 221.941 292 212 L292 58 C292 48.059 300.059 40 310 40 Z" fill="#8e9aaf"/>
        <path d="M307 55 L307 55 C309.761 55 312 57.239 312 60 L312 200 C312 202.761 309.761 205 307 205 L307 205 C304.239 205 302 202.761 302 200 L302 60 C302 57.239 304.239 55 307 55 Z" fill="#ffffff" opacity="0.3"/>
        <path d="M278 215 L342 215 C349.18 215 355 220.82 355 228 L355 228 C355 235.18 349.18 241 342 241 L278 241 C270.82 241 265 235.18 265 228 L265 228 C265 220.82 270.82 215 278 215 Z" fill="#d99b38"/>
        <ellipse cx="285" cy="223" rx="14" ry="4" fill="#ffffff" opacity="0.4"/>
        <path d="M310 235 L310 235 C317.732 235 324 241.268 324 249 L324 276 C324 283.732 317.732 290 310 290 L310 290 C302.268 290 296 283.732 296 276 L296 249 C296 241.268 302.268 235 310 235 Z" fill="#5d7d75"/>
        <circle cx="310" cy="292" r="18" fill="#d99b38"/>
      </g>
    </g>
    <g filter="url(#filter-2)">
      <g id="patch-tameng-lepas">
        <path d="M470 70 C470 60 620 60 620 70 L620 170 C620 235 545 275 545 275 C545 275 470 235 470 170 Z" fill="url(#radial-gradient-5)"/>
        <path d="M486 84 C486 76 604 76 604 84 L604 165 C604 218 545 252 545 252 C545 252 486 218 486 165 Z" fill="#fff0e5"/>
        <path d="M516.818 112.916 C519.887 130.321 517.083 145.363 510.557 146.514 C504.03 147.665 496.251 134.488 493.182 117.084 C490.113 99.679 492.917 84.637 499.443 83.486 C505.97 82.335 513.749 95.512 516.818 112.916 Z" fill="#ffffff" opacity="0.7"/>
        <circle cx="518" cy="128" r="14" fill="url(#radial-gradient-6)"/>
        <polyline points="512,128 517,133 526,123" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M549 120 L581 120 C584.866 120 588 123.134 588 127 L588 127 C588 130.866 584.866 134 581 134 L549 134 C545.134 134 542 130.866 542 127 L542 127 C542 123.134 545.134 120 549 120 Z" fill="url(#radial-gradient-7)"/>
        <circle cx="518" cy="172" r="14" fill="url(#radial-gradient-8)"/>
        <polyline points="512,172 517,177 526,167" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M549 164 L571 164 C574.866 164 578 167.134 578 171 L578 171 C578 174.866 574.866 178 571 178 L549 178 C545.134 178 542 174.866 542 171 L542 171 C542 167.134 545.134 164 549 164 Z" fill="url(#radial-gradient-9)"/>
      </g>
    </g>
    <g id="patch-lengan-tidur-monster">
      <g filter="url(#filter-3)">
        <path id="lengan-kiri-tidur" d="M196.364 412.423 C192.648 426.293 168.877 431.975 143.271 425.114 C117.664 418.253 99.919 401.447 103.636 387.577 C107.352 373.707 131.123 368.025 156.729 374.886 C182.336 381.747 200.081 398.553 196.364 412.423 Z" fill="url(#radial-gradient-10)"/>
      </g>
      <g filter="url(#filter-4)">
        <path id="lengan-kanan-tidur" d="M376.364 387.577 C380.081 401.447 362.336 418.253 336.729 425.114 C311.123 431.975 287.352 426.293 283.636 412.423 C279.919 398.553 297.664 381.747 323.271 374.886 C348.877 368.025 372.648 373.707 376.364 387.577 Z" fill="url(#radial-gradient-11)"/>
      </g>
    </g>
    <g filter="url(#filter-5)">
      <g id="patch-efek-zzz">
        <polyline points="490,390 540,390 490,440 540,440" fill="none" stroke="url(#radial-gradient-12)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <polyline points="560,370 590,370 560,400 590,400" fill="none" stroke="url(#radial-gradient-13)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <polyline points="600,350 620,350 600,370 620,370" fill="none" stroke="url(#radial-gradient-14)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      </g>
    </g>
  </g>

    </svg>
  );
};