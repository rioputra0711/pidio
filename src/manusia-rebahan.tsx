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
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="900" height="600" viewBox="0 0 900 600" className={className} width={width} height={height} {...props}>
      
  <defs>
    <filter id="filter-1" filterUnits="userSpaceOnUse" x="4" y="169" width="852.318" height="352" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="9"/><feOffset dx="4" dy="12" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-1" cx="0" cy="0" r="547.5" gradientTransform="matrix(1 0 0 0.267 377 258.75)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9bbdb4"/>
      <stop offset="1" stop-color="#4d6b64"/>
    </radialGradient>
    <radialGradient id="radial-gradient-2" cx="0" cy="0" r="112.5" gradientTransform="matrix(1 0 0 1.6 90 300)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b2d4cb"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5c7d75"/>
    </radialGradient>
    <filter id="filter-2" filterUnits="userSpaceOnUse" x="66.162" y="202.185" width="274.871" height="224.069" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#7a4f35" flood-opacity="0.24"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-3" cx="0" cy="0" r="142.009" gradientTransform="matrix(1 0 0 0.75 173.166 283.806)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffb5b3"/>
      <stop offset="0.6" stop-color="#f28482"/>
      <stop offset="1" stop-color="#cc5f5d"/>
    </radialGradient>
    <filter id="filter-3" filterUnits="userSpaceOnUse" x="287" y="162.179" width="149.264" height="180.821" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="2" dy="6" result="shadow"/><feFlood flood-color="#6e4730" flood-opacity="0.18"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-1" x1="325.49" y1="205.402" x2="416.605" y2="275.191" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.55" stop-color="#ebb898"/>
      <stop offset="1" stop-color="#d99b78"/>
    </linearGradient>
    <filter id="filter-4" filterUnits="userSpaceOnUse" x="444" y="209" width="382.149" height="230.422" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="9"/><feOffset dx="4" dy="12" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-2" x1="537.657" y1="264.649" x2="602.735" y2="420.603" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9aa7bd"/>
      <stop offset="1" stop-color="#525d73"/>
    </linearGradient>
    <radialGradient id="radial-gradient-4" cx="0" cy="0" r="54.72" gradientTransform="matrix(0.966 -0.259 0.15 0.559 732.281 369.19)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <filter id="filter-5" filterUnits="userSpaceOnUse" x="209" y="213.356" width="368.875" height="254.201" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#7a4f35" flood-opacity="0.24"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-3" x1="257" y1="259.158" x2="301.818" y2="314.03" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.55" stop-color="#ebb898"/>
      <stop offset="1" stop-color="#d99b78"/>
    </linearGradient>
    <radialGradient id="radial-gradient-5" cx="0" cy="0" r="210.572" gradientTransform="matrix(1 0 0 0.561 359.38 313.418)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe49e"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d49636"/>
    </radialGradient>
    <filter id="filter-6" filterUnits="userSpaceOnUse" x="421.944" y="236.892" width="400.411" height="238.224" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="9"/><feOffset dx="4" dy="12" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-4" x1="518.355" y1="293.172" x2="585.819" y2="456.269" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b8c5db"/>
      <stop offset="0.55" stop-color="#8e9aaf"/>
      <stop offset="1" stop-color="#647087"/>
    </linearGradient>
    <filter id="filter-7" filterUnits="userSpaceOnUse" x="671.644" y="358.884" width="132.711" height="98.232" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="2" dy="6" result="shadow"/><feFlood flood-color="#6e4730" flood-opacity="0.18"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-6" cx="0" cy="0" r="63.36" gradientTransform="matrix(0.978 -0.208 0.118 0.556 720.219 400.534)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <filter id="filter-8" filterUnits="userSpaceOnUse" x="119.581" y="96.303" width="233.295" height="240.078" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#7a4f35" flood-opacity="0.24"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-7" cx="0" cy="0" r="109.351" gradientTransform="matrix(1 0 0 1.007 213.6 190.307)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <radialGradient id="radial-gradient-8" cx="0" cy="0" r="25.2" gradientTransform="matrix(0.99 -0.139 0.085 0.605 226.04 248.394)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffb5b3"/>
      <stop offset="0.6" stop-color="#f28482"/>
      <stop offset="1" stop-color="#cc5f5d"/>
    </radialGradient>
    <radialGradient id="radial-gradient-9" cx="0" cy="0" r="16.8" gradientTransform="matrix(0.99 -0.139 0.093 0.66 297.99 232.332)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffb5b3"/>
      <stop offset="0.6" stop-color="#f28482"/>
      <stop offset="1" stop-color="#cc5f5d"/>
    </radialGradient>
    <linearGradient id="linear-gradient-5" x1="231.5" y1="209.075" x2="236.084" y2="222.171" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.55" stop-color="#ebb898"/>
      <stop offset="1" stop-color="#d99b78"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="278.9" y1="201.35" x2="282.795" y2="212.602" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.55" stop-color="#ebb898"/>
      <stop offset="1" stop-color="#d99b78"/>
    </linearGradient>
    <filter id="filter-9" filterUnits="userSpaceOnUse" x="239.112" y="195.848" width="69.775" height="64.305" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="2" dy="6" result="shadow"/><feFlood flood-color="#6e4730" flood-opacity="0.18"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-10" cx="0" cy="0" r="17.28" gradientTransform="matrix(0.978 -0.208 0.156 0.734 268.951 225.025)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <radialGradient id="radial-gradient-11" cx="0" cy="0" r="22.5" gradientTransform="matrix(0.99 -0.139 0.042 0.297 233.409 197.019)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8c6a5b"/>
      <stop offset="0.55" stop-color="#63473b"/>
      <stop offset="1" stop-color="#422d24"/>
    </radialGradient>
    <radialGradient id="radial-gradient-12" cx="0" cy="0" r="18" gradientTransform="matrix(0.998 -0.07 0.023 0.333 281.551 188.306)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8c6a5b"/>
      <stop offset="0.55" stop-color="#63473b"/>
      <stop offset="1" stop-color="#422d24"/>
    </radialGradient>
    <radialGradient id="radial-gradient-13" cx="0" cy="0" r="24" gradientTransform="matrix(0.927 -0.375 0.105 0.261 232.004 196.535)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8c6a5b"/>
      <stop offset="0.55" stop-color="#63473b"/>
      <stop offset="1" stop-color="#422d24"/>
    </radialGradient>
    <radialGradient id="radial-gradient-14" cx="0" cy="0" r="19.5" gradientTransform="matrix(0.951 0.309 -0.095 0.293 283.167 184.652)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8c6a5b"/>
      <stop offset="0.55" stop-color="#63473b"/>
      <stop offset="1" stop-color="#422d24"/>
    </radialGradient>
    <filter id="filter-10" filterUnits="userSpaceOnUse" x="139.484" y="109.303" width="198.825" height="143.358" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="2" dy="6" result="shadow"/><feFlood flood-color="#6e4730" flood-opacity="0.18"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-15" cx="0" cy="0" r="110.075" gradientTransform="matrix(1 0 0 0.607 208.309 154.086)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#8c6a5b"/>
      <stop offset="0.55" stop-color="#63473b"/>
      <stop offset="1" stop-color="#422d24"/>
    </radialGradient>
    <filter id="filter-11" filterUnits="userSpaceOnUse" x="132.581" y="199.349" width="90.838" height="97.303" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="2" dy="6" result="shadow"/><feFlood flood-color="#6e4730" flood-opacity="0.18"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-16" cx="0" cy="0" r="31.68" gradientTransform="matrix(0.951 -0.309 0.365 1.124 166.932 239.567)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <linearGradient id="linear-gradient-7" x1="395" y1="165" x2="294.659" y2="320.073" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="#ffe49e" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#ffe49e" stop-opacity="0"/>
    </linearGradient>
    <filter id="filter-12" filterUnits="userSpaceOnUse" x="322.166" y="105.683" width="145.668" height="172.633" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="9"/><feOffset dx="4" dy="12" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="linear-gradient-8" x1="392.753" y1="154.258" x2="430.715" y2="204.408" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9aa7bd"/>
      <stop offset="1" stop-color="#525d73"/>
    </linearGradient>
    <filter id="filter-13" filterUnits="userSpaceOnUse" x="234.974" y="154" width="218.026" height="260.854" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dx="4" dy="10" result="shadow"/><feFlood flood-color="#7a4f35" flood-opacity="0.24"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-17" cx="0" cy="0" r="53.27" gradientTransform="matrix(1 0 0 0.945 295.833 317.606)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ffe49e"/>
      <stop offset="0.55" stop-color="#f6bd60"/>
      <stop offset="1" stop-color="#d49636"/>
    </radialGradient>
    <linearGradient id="linear-gradient-9" x1="312.603" y1="229.42" x2="426.256" y2="305.287" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.55" stop-color="#ebb898"/>
      <stop offset="1" stop-color="#d99b78"/>
    </linearGradient>
    <radialGradient id="radial-gradient-18" cx="387.08" cy="202.32" r="31.68" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <filter id="filter-14" filterUnits="userSpaceOnUse" x="346.42" y="168.099" width="71.159" height="67.802" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="5"/><feOffset dx="2" dy="6" result="shadow"/><feFlood flood-color="#6e4730" flood-opacity="0.18"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-19" cx="0" cy="0" r="20.16" gradientTransform="matrix(0.819 -0.574 0.369 0.527 375.6 201.647)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff0e5"/>
      <stop offset="0.6" stop-color="#f0c1a3"/>
      <stop offset="1" stop-color="#e2a886"/>
    </radialGradient>
    <filter id="filter-15" filterUnits="userSpaceOnUse" x="24" y="364" width="857" height="192" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation="9"/><feOffset dx="4" dy="12" result="shadow"/><feFlood flood-color="#4a5568" flood-opacity="0.25"/><feComposite in2="shadow" operator="in" result="paint"/><feMerge><feMergeNode in="paint"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="radial-gradient-20" cx="0" cy="0" r="581.25" gradientTransform="matrix(1 0 0 0.142 297.5 432.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b2d4cb"/>
      <stop offset="0.6" stop-color="#84a59d"/>
      <stop offset="1" stop-color="#5c7d75"/>
    </radialGradient>
  </defs>
  <title>gemini-svg (1).svg</title>
  <g id="manusia-rebahan-root">
    <path id="bayangan-sofa" d="M840 525 C840 532.426 798.911 539.548 725.772 544.799 C652.632 550.05 553.434 553 450 553 C346.566 553 247.368 550.05 174.228 544.799 C101.089 539.548 60 532.426 60 525 C60 517.574 101.089 510.452 174.228 505.201 C247.368 499.95 346.566 497 450 497 C553.434 497 652.632 499.95 725.772 505.201 C798.911 510.452 840 517.574 840 525 Z" fill="#5c7d75" opacity="0.22"/>
    <g filter="url(#filter-1)">
      <g id="sofa-belakang">
        <path d="M170 210 L730 210 C776.944 210 815 248.056 815 295 L815 320 C815 460 825.201 471.906 730 405 L170 405 C123.056 405 85 366.944 85 320 L85 295 C85 248.056 123.056 210 170 210 Z" fill="url(#radial-gradient-1)"/>
        <ellipse cx="260" cy="245" rx="140" ry="22" fill="#ffffff" opacity="0.2"/>
        <path d="M113 240 L127 240 C164.555 240 195 270.445 195 308 L195 412 C195 449.555 164.555 480 127 480 L113 480 C75.445 480 45 449.555 45 412 L45 308 C45 270.445 75.445 240 113 240 Z" fill="url(#radial-gradient-2)"/>
        <path d="M122.388 279.178 C127.9 305.109 120.106 328.736 104.98 331.951 C89.854 335.166 73.124 316.752 67.612 290.822 C62.1 264.891 69.894 241.264 85.02 238.049 C100.146 234.834 116.876 253.248 122.388 279.178 Z" fill="#ffffff" opacity="0.35"/>
      </g>
    </g>
    <g filter="url(#filter-2)">
      <g id="bantal-kepala">
        <path d="M105 265 C125 220 245 235 290 285 C325 325 295 395 240 390 C175 385 85 315 105 265 Z" fill="url(#radial-gradient-3)"/>
        <path d="M214.467 292.365 C211.445 300.668 191.325 300.969 169.528 293.035 C147.731 285.102 132.511 271.939 135.533 263.635 C138.555 255.332 158.675 255.031 180.472 262.965 C202.269 270.898 217.489 284.061 214.467 292.365 Z" fill="#ffffff" opacity="0.45"/>
      </g>
    </g>
    <g filter="url(#filter-3)">
      <g id="lengan-kiri-belakang">
        <path d="M310 295 C335 260 365 235 385 195 C398 175 422 188 410 212 C390 255 355 295 325 320 Z" fill="url(#linear-gradient-1)"/>
      </g>
    </g>
    <g filter="url(#filter-4)">
      <g id="kaki-kiri-belakang">
        <path d="M485 355 C535 310 580 250 625 250 C665 250 715 315 745 365 C760 390 720 410 698 385 C675 355 642 315 622 315 C602 315 555 365 520 395 Z" fill="url(#linear-gradient-2)"/>
        <path d="M784.705 365.165 C787.85 376.901 773.966 390.819 753.694 396.25 C733.422 401.682 714.44 396.571 711.295 384.835 C708.15 373.099 722.034 359.181 742.306 353.75 C762.578 348.318 781.56 353.429 784.705 365.165 Z" fill="url(#radial-gradient-4)"/>
      </g>
    </g>
    <g filter="url(#filter-5)">
      <g id="badan">
        <path id="leher" d="M255 250 C275 245 315 270 325 295 C310 325 270 320 245 285 Z" fill="url(#linear-gradient-3)"/>
        <path id="kaos-utama" d="M295 275 C355 268 455 300 525 345 C555 365 545 425 495 430 C415 438 315 415 275 365 C250 335 260 280 295 275 Z" fill="url(#radial-gradient-5)"/>
        <path d="M440.98 331.451 C438.308 342.168 406.601 343.491 370.162 334.406 C333.722 325.32 306.348 309.267 309.02 298.549 C311.692 287.832 343.399 286.509 379.838 295.594 C416.278 304.68 443.652 320.733 440.98 331.451 Z" fill="#ffffff" opacity="0.48"/>
        <path d="M485.923 348.798 C484.217 354.051 473.465 355.265 461.91 351.511 C450.354 347.756 442.37 340.454 444.077 335.202 C445.783 329.949 456.535 328.735 468.09 332.489 C479.646 336.244 487.63 343.546 485.923 348.798 Z" fill="#ffffff" opacity="0.35"/>
        <path d="M285 278 C305 295 315 325 295 355 C280 345 272 305 285 278 Z" fill="#d49636" opacity="0.45"/>
      </g>
    </g>
    <g filter="url(#filter-6)">
      <g id="kaki-kanan-depan">
        <path d="M475 375 C525 335 575 275 620 278 C665 280 710 345 738 395 C750 418 705 435 682 408 C660 378 635 345 615 345 C595 345 550 398 505 428 C470 442 448 398 475 375 Z" fill="url(#linear-gradient-4)"/>
        <path d="M593.162 311.154 C597.259 317.711 583.495 333.703 562.419 346.873 C541.342 360.043 520.935 365.403 516.838 358.846 C512.741 352.289 526.505 336.297 547.581 323.127 C568.658 309.957 589.065 304.597 593.162 311.154 Z" fill="#ffffff" opacity="0.4"/>
        <circle cx="622" cy="298" r="14" fill="#ffffff" opacity="0.35"/>
        <g filter="url(#filter-7)">
          <g id="kaki-kanan-telapak">
            <path d="M781.039 398.852 C783.909 412.357 766.967 427.401 743.198 432.454 C719.428 437.506 697.832 430.654 694.962 417.148 C692.091 403.643 709.033 388.599 732.802 383.546 C756.572 378.494 778.168 385.346 781.039 398.852 Z" fill="url(#radial-gradient-6)"/>
            <path d="M745.387 393.341 C746.53 397.609 739.673 403.154 730.071 405.727 C720.468 408.3 711.757 406.926 710.613 402.659 C709.47 398.391 716.327 392.846 725.929 390.273 C735.532 387.7 744.243 389.074 745.387 393.341 Z" fill="#ffffff" opacity="0.55"/>
          </g>
        </g>
      </g>
    </g>
    <g filter="url(#filter-8)">
      <g id="kepala">
        <path id="wajah-dasar" d="M175 185 C195 135 275 135 305 185 C330 225 315 285 265 298 C215 310 165 275 165 230 C165 210 168 198 175 185 Z" fill="url(#radial-gradient-7)"/>
        <path d="M255.91 166.718 C258.054 174.72 245.953 184.915 228.882 189.489 C211.811 194.063 196.234 191.284 194.09 183.282 C191.946 175.28 204.047 165.085 221.118 160.511 C238.189 155.937 253.765 158.716 255.91 166.718 Z" fill="#ffffff" opacity="0.6"/>
        <g id="rona-pipi">
          <path d="M249.825 249.495 C250.67 255.511 243.375 261.509 233.531 262.893 C223.687 264.276 215.021 260.521 214.175 254.505 C213.33 248.489 220.625 242.491 230.469 241.107 C240.313 239.724 248.979 243.479 249.825 249.495 Z" fill="url(#radial-gradient-8)" opacity="0.5"/>
          <path d="M313.883 233.33 C314.498 237.705 309.676 242 303.113 242.922 C296.55 243.844 290.732 241.045 290.117 236.67 C289.502 232.295 294.324 228 300.887 227.078 C307.45 226.155 313.268 228.955 313.883 233.33 Z" fill="url(#radial-gradient-9)" opacity="0.4"/>
        </g>
        <g id="mata">
          <g id="mata-kanan">
            <ellipse cx="242" cy="222" rx="13" ry="15" fill="#ffffff"/>
            <circle cx="246" cy="223" r="8.5" fill="#422d24"/>
            <circle cx="243" cy="219" r="3.5" fill="#ffffff"/>
            <path d="M227 218 C235 204 252 204 257 218 C248 215 236 215 227 218 Z" fill="url(#linear-gradient-5)"/>
          </g>
          <g id="mata-kiri">
            <ellipse cx="288" cy="212" rx="11" ry="13" fill="#ffffff"/>
            <circle cx="291" cy="213" r="7.5" fill="#422d24"/>
            <circle cx="289" cy="209" r="3" fill="#ffffff"/>
            <path d="M275 209 C282 197 296 197 301 209 C293 206 283 206 275 209 Z" fill="url(#linear-gradient-6)"/>
          </g>
        </g>
        <g filter="url(#filter-9)">
          <g id="hidung">
            <path d="M285.738 225.505 C286.771 230.367 282.354 235.425 275.871 236.803 C269.389 238.181 263.296 235.357 262.262 230.495 C261.229 225.633 265.646 220.575 272.129 219.197 C278.611 217.819 284.704 220.643 285.738 225.505 Z" fill="url(#radial-gradient-10)"/>
            <path d="M275.891 223.96 C276.235 225.581 274.325 227.36 271.624 227.934 C268.923 228.509 266.454 227.66 266.109 226.04 C265.765 224.419 267.675 222.64 270.376 222.066 C273.077 221.491 275.546 222.34 275.891 223.96 Z" fill="#ffffff" opacity="0.65"/>
          </g>
        </g>
        <g id="alis-tenang">
          <path d="M228.045 195.5 L248.841 192.578 C251.302 192.232 253.578 193.946 253.924 196.408 L253.924 196.408 C254.269 198.869 252.555 201.144 250.094 201.49 L229.298 204.413 C226.837 204.759 224.561 203.044 224.216 200.583 L224.216 200.583 C223.87 198.122 225.584 195.846 228.045 195.5 Z" fill="url(#radial-gradient-11)"/>
          <path d="M277.74 186.568 L293.701 185.452 C295.905 185.298 297.817 186.959 297.971 189.163 L297.971 189.163 C298.125 191.367 296.463 193.278 294.26 193.432 L278.299 194.548 C276.095 194.702 274.183 193.041 274.029 190.837 L274.029 190.837 C273.875 188.633 275.537 186.722 277.74 186.568 Z" fill="url(#radial-gradient-12)"/>
        </g>
        <g id="alis-cemas" display="none">
          <path d="M225.839 196.599 L247.164 187.983 C249.468 187.052 252.091 188.166 253.022 190.47 L253.022 190.47 C253.953 192.774 252.84 195.397 250.536 196.328 L229.21 204.944 C226.906 205.875 224.283 204.762 223.352 202.457 L223.352 202.457 C222.421 200.153 223.535 197.53 225.839 196.599 Z" fill="url(#radial-gradient-13)"/>
          <path d="M279.677 181.415 L296.796 186.977 C298.897 187.66 300.046 189.916 299.364 192.017 L299.364 192.017 C298.681 194.118 296.424 195.268 294.323 194.585 L277.204 189.023 C275.103 188.34 273.954 186.084 274.636 183.983 L274.636 183.983 C275.319 181.882 277.576 180.732 279.677 181.415 Z" fill="url(#radial-gradient-14)"/>
        </g>
        <g id="mulut-tenang">
          <path d="M256 254 C264 262 278 260 284 250 C287 246 292 250 289 256 C281 268 261 270 251 259 C248 255 253 251 256 254 Z" fill="#b86b52"/>
        </g>
        <g id="mulut-cemas" display="none">
          <ellipse cx="272" cy="258" rx="12" ry="14" fill="#9e3b39"/>
          <ellipse cx="272" cy="264" rx="8" ry="6" fill="#f28482"/>
        </g>
        <g filter="url(#filter-10)">
          <g id="rambut-depan">
            <path d="M163.154 225 C156.154 170 205 120 265 135 C305 145 331.294 170.847 304.294 183.847 C274.294 167.847 235 178 212 195 C195 208 186.154 242 163.154 225 Z" fill="url(#radial-gradient-15)"/>
            <path d="M261.257 144.931 C262.405 150.333 248.446 157.877 230.079 161.781 C211.712 165.686 195.891 164.471 194.743 159.069 C193.595 153.667 207.554 146.123 225.921 142.219 C244.288 138.314 260.109 139.529 261.257 144.931 Z" fill="#ffffff" opacity="0.3"/>
          </g>
        </g>
        <g filter="url(#filter-11)">
          <g id="telinga">
            <path d="M198.923 241.202 C203.361 254.858 197.59 268.973 186.034 272.727 C174.479 276.482 161.514 268.455 157.077 254.798 C152.639 241.142 158.41 227.027 169.966 223.273 C181.521 219.518 194.486 227.545 198.923 241.202 Z" fill="url(#radial-gradient-16)"/>
            <path d="M189.511 244.91 C191.729 251.738 189.27 258.657 184.017 260.364 C178.765 262.07 172.708 257.918 170.489 251.09 C168.271 244.262 170.73 237.343 175.983 235.636 C181.235 233.93 187.292 238.082 189.511 244.91 Z" fill="#d99b78" opacity="0.6"/>
          </g>
        </g>
      </g>
    </g>
    <g id="hp-dan-cahaya">
      <polygon id="cahaya-layar" points="382,165 225,180 250,275 395,235" fill="url(#linear-gradient-7)"/>
      <g filter="url(#filter-12)">
        <g id="smartphone">
          <path d="M400.037 147.372 L417.156 152.935 C424.51 155.324 428.534 163.222 426.145 170.576 L407.604 227.639 C405.214 234.993 397.316 239.017 389.963 236.628 L372.844 231.065 C365.49 228.676 361.466 220.778 363.855 213.424 L382.396 156.361 C384.786 149.007 392.684 144.983 400.037 147.372 Z" fill="url(#linear-gradient-8)"/>
          <path d="M398.443 152.437 L413.66 157.381 C418.913 159.088 421.787 164.729 420.081 169.982 L402.158 225.143 C400.451 230.395 394.809 233.27 389.557 231.563 L374.34 226.619 C369.087 224.912 366.213 219.271 367.919 214.018 L385.842 158.857 C387.549 153.605 393.191 150.73 398.443 152.437 Z" fill="#fff0e5"/>
          <path d="M406.755 176.545 C403.683 186 399.064 192.972 396.438 192.119 C393.811 191.266 394.173 182.91 397.245 173.455 C400.317 164 404.936 157.028 407.562 157.881 C410.189 158.734 409.827 167.091 406.755 176.545 Z" fill="#ffffff" opacity="0.75"/>
        </g>
      </g>
    </g>
    <g filter="url(#filter-13)">
      <g id="lengan-kanan-depan">
        <path d="M282 302 C308 295 338 320 342 355 C325 375 290 372 275 345 C268 328 270 308 282 302 Z" fill="url(#radial-gradient-17)"/>
        <path d="M321.314 332.607 C319.446 336.611 310.629 336.452 301.619 332.25 C292.609 328.049 286.819 321.397 288.686 317.393 C290.554 313.389 299.371 313.548 308.381 317.75 C317.391 321.951 323.181 328.603 321.314 332.607 Z" fill="#ffffff" opacity="0.45"/>
        <path id="lengan-bawah-kanan" d="M295 345 C315 395 345 385 368 345 C388 308 405 255 412 222 C416 202 385 195 378 215 C365 255 350 305 335 332 C325 345 308 330 295 345 Z" fill="url(#linear-gradient-9)"/>
        <path d="M375.417 287.997 C368.797 304.383 360.109 316.325 356.013 314.67 C351.916 313.015 353.962 298.389 360.583 282.003 C367.203 265.617 375.891 253.675 379.987 255.33 C384.084 256.985 382.038 271.611 375.417 287.997 Z" fill="#ffffff" opacity="0.4"/>
        <circle id="tangan-kanan" cx="395" cy="212" r="22" fill="url(#radial-gradient-18)"/>
        <g filter="url(#filter-14)">
          <g id="jempol-scroll">
            <path d="M393.468 193.97 C396.319 198.042 393.496 204.937 387.162 209.372 C380.829 213.807 373.383 214.102 370.532 210.03 C367.681 205.958 370.504 199.063 376.838 194.628 C383.171 190.193 390.617 189.898 393.468 193.97 Z" fill="url(#radial-gradient-19)"/>
            <path d="M383.915 195.559 C384.865 196.916 383.435 199.557 380.721 201.457 C378.006 203.358 375.035 203.799 374.085 202.441 C373.135 201.084 374.565 198.443 377.279 196.543 C379.994 194.642 382.965 194.201 383.915 195.559 Z" fill="#ffffff" opacity="0.6"/>
          </g>
        </g>
      </g>
    </g>
    <g filter="url(#filter-15)">
      <g id="sofa-dudukan-depan">
        <path d="M120 405 L785 405 C815.376 405 840 429.624 840 460 L840 460 C840 490.376 815.376 515 785 515 L120 515 C89.624 515 65 490.376 65 460 L65 460 C65 429.624 89.624 405 120 405 Z" fill="url(#radial-gradient-20)"/>
        <ellipse cx="285" cy="430" rx="145" ry="18" fill="#ffffff" opacity="0.38"/>
        <ellipse cx="615" cy="432" rx="95" ry="14" fill="#ffffff" opacity="0.28"/>
      </g>
    </g>
  </g>

    </svg>
  );
};