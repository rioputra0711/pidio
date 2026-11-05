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
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="600" height="700" viewBox="0 0 600 700" className={className} width={width} height={height} {...props}>
      
  <defs>
    <filter id="filter-1" filterUnits="userSpaceOnUse" x="134.381" y="274" width="331.237" height="360.75" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-1" cx="0" cy="0" r="194.428" gradientTransform="matrix(1 0 0 1.114 248.153 382.188)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <filter id="filter-2" filterUnits="userSpaceOnUse" x="185" y="449" width="140" height="206" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-1" x1="235" y1="485" x2="315.644" y2="520.19" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#525e75"/>
    </linearGradient>
    <radialGradient id="radial-gradient-2" cx="0" cy="0" r="51" gradientTransform="matrix(1 0 0 0.706 241.4 583)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <filter id="filter-3" filterUnits="userSpaceOnUse" x="275" y="449" width="140" height="206" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-2" x1="315" y1="485" x2="395.644" y2="520.19" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#525e75"/>
    </linearGradient>
    <radialGradient id="radial-gradient-3" cx="0" cy="0" r="51" gradientTransform="matrix(1 0 0 0.706 331.4 583)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <filter id="filter-4" filterUnits="userSpaceOnUse" x="170" y="259" width="260" height="287" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-4" cx="0" cy="0" r="135" gradientTransform="matrix(1 0 0 1.194 264 348.75)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-5" cx="0" cy="0" r="141" gradientTransform="matrix(1 0 0 0.17 271.8 453)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <filter id="filter-5" filterUnits="userSpaceOnUse" x="252" y="410" width="96" height="102" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="3" dy="8" result="shadow"/><feFlood flood-color="#8c583a" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-6" cx="0" cy="0" r="30" gradientTransform="matrix(1 0 0 1.15 294 449.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <radialGradient id="radial-gradient-7" cx="288.8" cy="361" r="42" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <filter id="filter-6" filterUnits="userSpaceOnUse" x="44.754" y="107.903" width="232.246" height="330.557" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-8" cx="190.6" cy="317" r="54" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <linearGradient id="linear-gradient-3" x1="129.027" y1="339.06" x2="194.278" y2="384.921" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#525e75"/>
    </linearGradient>
    <filter id="filter-7" filterUnits="userSpaceOnUse" x="36.754" y="99.903" width="171.598" height="270.472" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="14"/><feOffset dx="0" dy="0" result="shadow"/><feFlood flood-color="#f6bd60" flood-opacity="0.75"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-4" x1="76.078" y1="150.351" x2="146.25" y2="141.398" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.5" stop-color="#fff3d1"/>
      <stop offset="1" stop-color="#f6bd60"/>
    </linearGradient>
    <radialGradient id="radial-gradient-9" cx="0" cy="0" r="67.5" gradientTransform="matrix(0.951 -0.309 0.089 0.275 136.444 321.577)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <radialGradient id="radial-gradient-10" cx="0" cy="0" r="21" gradientTransform="matrix(0.951 -0.309 0.607 1.868 152.378 345.052)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <radialGradient id="radial-gradient-11" cx="163.152" cy="377.564" r="27" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <filter id="filter-8" filterUnits="userSpaceOnUse" x="105.434" y="302.484" width="101.375" height="101.375" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="5.325" dy="6.681" result="shadow"/><feFlood flood-color="#8c583a" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-12" cx="146.308" cy="346.267" r="33.6" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.65" stop-color="#f0c4a8"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <filter id="filter-9" filterUnits="userSpaceOnUse" x="167" y="21.444" width="266" height="306.556" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="6"/><feOffset dx="3" dy="8" result="shadow"/><feFlood flood-color="#8c583a" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-13" cx="0" cy="0" r="101.982" gradientTransform="matrix(1 0 0 0.649 280.724 71.521)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <radialGradient id="radial-gradient-14" cx="258" cy="142.5" r="157.5" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-15" cx="0" cy="0" r="109.2" gradientTransform="matrix(1 0 0 0.865 276.6 185.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.65" stop-color="#f0c4a8"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <radialGradient id="radial-gradient-16" cx="0" cy="0" r="22.4" gradientTransform="matrix(1 0 0 0.625 240.2 226)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffaba9"/>
      <stop offset="0.6" stop-color="#f28482"/>
      <stop offset="1" stop-color="#cc5f5d"/>
    </radialGradient>
    <radialGradient id="radial-gradient-17" cx="0" cy="0" r="22.4" gradientTransform="matrix(1 0 0 0.625 350.2 226)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffaba9"/>
      <stop offset="0.6" stop-color="#f28482"/>
      <stop offset="1" stop-color="#cc5f5d"/>
    </radialGradient>
    <filter id="filter-10" filterUnits="userSpaceOnUse" x="161.027" y="65.278" width="276.11" height="145.088" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-18" cx="0" cy="0" r="157.5" gradientTransform="matrix(1 0 0 0.25 258 125.625)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-19" cx="0" cy="0" r="127.5" gradientTransform="matrix(1 0 0 0.101 274.5 142.062)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <filter id="filter-11" filterUnits="userSpaceOnUse" x="319" y="265" width="222" height="286" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.28"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-20" cx="381.4" cy="318" r="51" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-21" cx="0" cy="0" r="112.5" gradientTransform="matrix(1 0 0 1.417 407.5 355.625)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe299"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d99b38"/>
    </radialGradient>
    <radialGradient id="radial-gradient-22" cx="397.4" cy="361" r="21" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <radialGradient id="radial-gradient-23" cx="0" cy="0" r="34.5" gradientTransform="matrix(1 0 0 0.304 440.8 363.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
    <radialGradient id="radial-gradient-24" cx="397.4" cy="405" r="21" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#a9c9c0"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5d7d75"/>
    </radialGradient>
    <radialGradient id="radial-gradient-25" cx="0" cy="0" r="27" gradientTransform="matrix(1 0 0 0.389 437.8 407.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c4d9"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#637087"/>
    </radialGradient>
  </defs>
  <title>gemini-svg (2).svg</title>
  <g id="ksatria-root">
    <ellipse id="bayangan-lantai" cx="300" cy="635" rx="115" ry="22" fill="#637087" opacity="0.22"/>
    <g filter="url(#filter-1)">
      <g id="jubah-belakang">
        <path d="M210 310 C170 420 155 540 190 580 C240 605 360 605 410 580 C445 540 430 420 390 310 Z" fill="url(#radial-gradient-1)"/>
        <path d="M242.607 433.742 C235.143 468.856 221.21 495.646 211.486 493.58 C201.762 491.513 199.93 461.372 207.393 426.258 C214.857 391.144 228.79 364.354 238.514 366.42 C248.238 368.487 250.07 398.628 242.607 433.742 Z" fill="#ffffff" opacity="0.25"/>
      </g>
    </g>
    <g filter="url(#filter-2)">
      <g id="kaki-kiri">
        <path d="M259 485 L259 485 C272.255 485 283 495.745 283 509 L283 571 C283 584.255 272.255 595 259 595 L259 595 C245.745 595 235 584.255 235 571 L235 509 C235 495.745 245.745 485 259 485 Z" fill="url(#linear-gradient-1)"/>
        <ellipse cx="255" cy="595" rx="34" ry="24" fill="url(#radial-gradient-2)"/>
        <path d="M256.591 584.894 C257.449 588.095 252.954 592.08 246.553 593.796 C240.151 595.511 234.267 594.307 233.409 591.106 C232.551 587.905 237.045 583.92 243.447 582.204 C249.849 580.489 255.733 581.693 256.591 584.894 Z" fill="#ffffff" opacity="0.5"/>
      </g>
    </g>
    <g filter="url(#filter-3)">
      <g id="kaki-kanan">
        <path d="M339 485 L339 485 C352.255 485 363 495.745 363 509 L363 571 C363 584.255 352.255 595 339 595 L339 595 C325.745 595 315 584.255 315 571 L315 509 C315 495.745 325.745 485 339 485 Z" fill="url(#linear-gradient-2)"/>
        <ellipse cx="345" cy="595" rx="34" ry="24" fill="url(#radial-gradient-3)"/>
        <path d="M346.591 584.894 C347.449 588.095 342.954 592.08 336.553 593.796 C330.151 595.511 324.267 594.307 323.409 591.106 C322.551 587.905 327.045 583.92 333.447 582.204 C339.849 580.489 345.733 581.693 346.591 584.894 Z" fill="#ffffff" opacity="0.5"/>
      </g>
    </g>
    <g filter="url(#filter-4)">
      <g id="badan-zirah">
        <path d="M285 295 L315 295 C356.421 295 390 328.579 390 370 L390 435 C390 476.421 356.421 510 315 510 L285 510 C243.579 510 210 476.421 210 435 L210 370 C210 328.579 243.579 295 285 295 Z" fill="url(#radial-gradient-4)"/>
        <path d="M281.311 345.423 C291.134 372.41 287.316 398.575 272.785 403.864 C258.254 409.153 238.511 391.563 228.689 364.577 C218.866 337.59 222.684 311.425 237.215 306.136 C251.746 300.847 271.489 318.437 281.311 345.423 Z" fill="#ffffff" opacity="0.45"/>
        <path d="M222 445 L378 445 C386.837 445 394 452.163 394 461 L394 461 C394 469.837 386.837 477 378 477 L222 477 C213.163 477 206 469.837 206 461 L206 461 C206 452.163 213.163 445 222 445 Z" fill="url(#radial-gradient-5)"/>
        <g filter="url(#filter-5)">
          <path d="M292 438 L308 438 C314.627 438 320 443.373 320 450 L320 472 C320 478.627 314.627 484 308 484 L292 484 C285.373 484 280 478.627 280 472 L280 450 C280 443.373 285.373 438 292 438 Z" fill="url(#radial-gradient-6)"/>
        </g>
        <ellipse cx="292" cy="450" rx="8" ry="5" fill="#ffffff" opacity="0.6"/>
        <circle cx="300" cy="375" r="28" fill="url(#radial-gradient-7)"/>
        <path d="M296.928 361 C298.309 363.391 296.326 367.121 292.5 369.33 C288.674 371.539 284.452 371.391 283.072 369 C281.691 366.609 283.674 362.879 287.5 360.67 C291.326 358.461 295.547 358.609 296.928 361 Z" fill="#ffffff" opacity="0.5"/>
      </g>
    </g>
    <g filter="url(#filter-6)">
      <g id="lengan-kanan-pedang">
        <circle cx="205" cy="335" r="36" fill="url(#radial-gradient-8)"/>
        <path d="M202.392 314 C204.601 317.826 201.74 323.614 196 326.928 C190.26 330.242 183.817 329.826 181.608 326 C179.399 322.174 182.26 316.385 188 313.072 C193.74 309.758 200.183 310.174 202.392 314 Z" fill="#ffffff" opacity="0.5"/>
        <path d="M149.873 329.339 L180.687 314.97 C192.199 309.602 205.884 314.583 211.252 326.095 L211.252 326.095 C216.621 337.608 211.64 351.292 200.127 356.661 L169.313 371.03 C157.801 376.398 144.116 371.417 138.748 359.905 L138.748 359.905 C133.379 348.392 138.36 334.708 149.873 329.339 Z" fill="url(#linear-gradient-3)"/>
        <g id="pedang-cahaya">
          <g filter="url(#filter-7)">
            <path d="M93.197 144.789 L93.197 144.789 C102.651 141.717 112.806 146.891 115.878 156.345 L163.467 302.808 C166.539 312.263 161.364 322.417 151.91 325.489 L151.91 325.489 C142.455 328.561 132.3 323.387 129.229 313.933 L81.64 167.47 C78.568 158.015 83.742 147.861 93.197 144.789 Z" fill="url(#linear-gradient-4)"/>
          </g>
          <path d="M94.979 159.982 L94.979 159.982 C97.605 159.128 100.426 160.566 101.279 163.192 L144.541 296.34 C145.395 298.966 143.958 301.787 141.331 302.64 L141.331 302.64 C138.705 303.493 135.884 302.056 135.031 299.43 L91.768 166.282 C90.915 163.656 92.352 160.835 94.979 159.982 Z" fill="#ffffff" opacity="0.85"/>
          <path d="M116.841 321.112 L177.708 301.335 C184.537 299.116 191.871 302.853 194.089 309.682 L194.089 309.682 C196.308 316.51 192.571 323.844 185.743 326.063 L124.875 345.84 C118.047 348.058 110.713 344.321 108.494 337.493 L108.494 337.493 C106.276 330.665 110.012 323.331 116.841 321.112 Z" fill="url(#radial-gradient-9)"/>
          <path d="M139.285 322.231 C139.968 324.332 134.56 327.972 127.206 330.362 C119.853 332.751 113.338 332.985 112.656 330.884 C111.973 328.783 117.381 325.143 124.734 322.753 C132.088 320.364 138.602 320.13 139.285 322.231 Z" fill="#ffffff" opacity="0.6"/>
          <path d="M153.455 330.245 L153.455 330.245 C160.808 327.855 168.707 331.88 171.096 339.233 L179.439 364.912 C181.829 372.265 177.804 380.164 170.451 382.553 L170.451 382.553 C163.097 384.942 155.199 380.918 152.81 373.564 L144.466 347.886 C142.077 340.532 146.101 332.634 153.455 330.245 Z" fill="url(#radial-gradient-10)"/>
          <path d="M188.188 378.893 C191.26 388.347 186.086 398.502 176.631 401.574 C167.177 404.646 157.022 399.472 153.95 390.017 C150.878 380.563 156.052 370.408 165.507 367.336 C174.961 364.264 185.116 369.438 188.188 378.893 Z" fill="url(#radial-gradient-11)"/>
          <g filter="url(#filter-8)">
            <path d="M178.947 345.755 C183.043 358.361 176.144 371.901 163.538 375.997 C150.932 380.093 137.393 373.194 133.297 360.588 C129.201 347.982 136.099 334.442 148.706 330.346 C161.312 326.25 174.851 333.149 178.947 345.755 Z" fill="url(#radial-gradient-12)"/>
          </g>
          <path d="M157.757 346.722 C158.61 349.348 156.322 352.445 152.645 353.64 C148.968 354.835 145.296 353.674 144.442 351.048 C143.589 348.422 145.878 345.324 149.555 344.13 C153.231 342.935 156.904 344.095 157.757 346.722 Z" fill="#ffffff" opacity="0.5"/>
        </g>
      </g>
    </g>
    <g filter="url(#filter-9)">
      <g id="kepala">
        <path id="jambul-helm" d="M290 55 C240 40 220 95 265 130 C310 150 385 130 375 85 C365 45 325 45 290 55 Z" fill="url(#radial-gradient-13)"/>
        <path d="M295.673 67.476 C297.562 72.665 289.838 80.241 278.42 84.397 C267.003 88.553 256.216 87.714 254.327 82.524 C252.438 77.335 260.162 69.759 271.58 65.603 C282.997 61.447 293.784 62.286 295.673 67.476 Z" fill="#ffffff" opacity="0.4"/>
        <circle cx="300" cy="195" r="105" fill="url(#radial-gradient-14)"/>
        <path d="M290 145 L310 145 C347.555 145 378 175.221 378 212.5 L378 212.5 C378 249.779 347.555 280 310 280 L290 280 C252.445 280 222 249.779 222 212.5 L222 212.5 C222 175.221 252.445 145 290 145 Z" fill="url(#radial-gradient-15)"/>
        <path d="M274.939 165.702 C277.74 171.709 271.083 180.741 260.071 185.876 C249.06 191.011 237.862 190.304 235.061 184.298 C232.26 178.291 238.917 169.259 249.929 164.124 C260.94 158.989 272.138 159.696 274.939 165.702 Z" fill="#ffffff" opacity="0.55"/>
        <ellipse cx="245" cy="230" rx="16" ry="10" fill="url(#radial-gradient-16)" opacity="0.45"/>
        <ellipse cx="355" cy="230" rx="16" ry="10" fill="url(#radial-gradient-17)" opacity="0.45"/>
        <g id="ekspresi-gagah">
          <circle cx="268" cy="208" r="11" fill="#4a5568"/>
          <circle cx="264" cy="204" r="4" fill="#ffffff"/>
          <circle cx="332" cy="208" r="11" fill="#4a5568"/>
          <circle cx="328" cy="204" r="4" fill="#ffffff"/>
          <path d="M254.327 180.17 L281.064 183.927 C284.072 184.35 286.168 187.131 285.746 190.139 L285.746 190.139 C285.323 193.147 282.542 195.243 279.534 194.82 L252.796 191.063 C249.788 190.64 247.693 187.859 248.115 184.851 L248.115 184.851 C248.538 181.843 251.319 179.747 254.327 180.17 Z" fill="#637087"/>
          <path d="M318.936 183.927 L345.673 180.17 C348.681 179.747 351.462 181.843 351.885 184.851 L351.885 184.851 C352.307 187.859 350.212 190.64 347.204 191.063 L320.466 194.82 C317.458 195.243 314.677 193.147 314.254 190.139 L314.254 190.139 C313.832 187.131 315.928 184.35 318.936 183.927 Z" fill="#637087"/>
          <path d="M284 242 C294.667 251.333 306 250.667 318 240" fill="none" stroke="#b87352" strokeWidth="7" strokeLinecap="round"/>
        </g>
        <g id="ekspresi-kaget" display="none">
          <circle cx="268" cy="208" r="15" fill="#ffffff"/>
          <circle cx="268" cy="208" r="7" fill="#4a5568"/>
          <circle cx="332" cy="208" r="15" fill="#ffffff"/>
          <circle cx="332" cy="208" r="7" fill="#4a5568"/>
          <path d="M252.149 175.535 L277.263 168.806 C279.93 168.091 282.672 169.674 283.387 172.341 L283.387 172.341 C284.101 175.009 282.518 177.75 279.851 178.465 L254.737 185.194 C252.07 185.909 249.328 184.326 248.613 181.659 L248.613 181.659 C247.899 178.991 249.482 176.25 252.149 175.535 Z" fill="#637087"/>
          <path d="M322.737 168.806 L347.851 175.535 C350.518 176.25 352.101 178.991 351.387 181.659 L351.387 181.659 C350.672 184.326 347.93 185.909 345.263 185.194 L320.149 178.465 C317.482 177.75 315.899 175.009 316.613 172.341 L316.613 172.341 C317.328 169.674 320.07 168.091 322.737 168.806 Z" fill="#637087"/>
          <ellipse cx="300" cy="246" rx="14" ry="18" fill="#c95b59"/>
          <ellipse cx="300" cy="254" rx="9" ry="7" fill="#ffaba9"/>
        </g>
        <g id="ekspresi-tidur" display="none">
          <path d="M252 210 C262.667 219.333 273.333 219.333 284 210" fill="none" stroke="#7a5c4f" strokeWidth="7" strokeLinecap="round"/>
          <path d="M316 210 C326.667 219.333 337.333 219.333 348 210" fill="none" stroke="#7a5c4f" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="300" cy="245" r="9" fill="#c95b59" opacity="0.7"/>
        </g>
        <g filter="url(#filter-10)">
          <g id="visor-helm">
            <path d="M197.027 174.366 C197.027 104.366 401.136 96.679 401.136 166.679 C361.136 136.679 237.027 144.366 197.027 174.366 Z" fill="url(#radial-gradient-18)"/>
            <path d="M215 155 C255 132 345 132 385 155" fill="none" stroke="url(#radial-gradient-19)" strokeWidth="12" strokeLinecap="round"/>
            <path d="M291.705 108.165 C293.706 115.633 278.895 126.091 258.623 131.523 C238.352 136.955 220.296 135.304 218.295 127.835 C216.294 120.367 231.105 109.909 251.377 104.477 C271.648 99.045 289.704 100.696 291.705 108.165 Z" fill="#ffffff" opacity="0.55"/>
          </g>
        </g>
      </g>
    </g>
    <g filter="url(#filter-11)">
      <g id="lengan-kiri-tameng">
        <circle cx="395" cy="335" r="34" fill="url(#radial-gradient-20)"/>
        <g id="tameng-todo">
          <path d="M355 310 C355 300 505 300 505 310 L505 410 C505 475 430 515 430 515 C430 515 355 475 355 410 Z" fill="url(#radial-gradient-21)"/>
          <path d="M371 324 C371 316 489 316 489 324 L489 405 C489 458 430 492 430 492 C430 492 371 458 371 405 Z" fill="#fff0e5"/>
          <path d="M401.818 352.916 C404.887 370.321 402.083 385.363 395.557 386.514 C389.03 387.665 381.251 374.488 378.182 357.084 C375.113 339.679 377.917 324.637 384.443 323.486 C390.97 322.335 398.749 335.512 401.818 352.916 Z" fill="#ffffff" opacity="0.7"/>
          <circle cx="403" cy="368" r="14" fill="url(#radial-gradient-22)"/>
          <polyline points="397,368 402,373 411,363" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M434 360 L466 360 C469.866 360 473 363.134 473 367 L473 367 C473 370.866 469.866 374 466 374 L434 374 C430.134 374 427 370.866 427 367 L427 367 C427 363.134 430.134 360 434 360 Z" fill="url(#radial-gradient-23)"/>
          <circle cx="403" cy="412" r="14" fill="url(#radial-gradient-24)"/>
          <polyline points="397,412 402,417 411,407" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M434 404 L456 404 C459.866 404 463 407.134 463 411 L463 411 C463 414.866 459.866 418 456 418 L434 418 C430.134 418 427 414.866 427 411 L427 411 C427 407.134 430.134 404 434 404 Z" fill="url(#radial-gradient-25)"/>
        </g>
      </g>
    </g>
  </g>

    </svg>
  );
};