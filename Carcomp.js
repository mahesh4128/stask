import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carcomp.css';
import Cardcar from './Cardcar';

export default function Carcomp({ cardData }) {
const itemsPerSlide = 3; // Number of cards per slide

// Chunk the cardData array into groups of itemsPerSlide
const chunkedData = [];
for (let i = 0; i < cardData.length; i += itemsPerSlide) {
chunkedData.push(cardData.slice(i, i + itemsPerSlide));
}

return (
<Carousel
className='carousel-container'
showThumbs={false}
showStatus={false}
showIndicators={false}
showArrows={true}
emulateTouch={true}
renderThumbs={() => null}
renderArrowPrev={(onClickHandler, hasPrev) =>
hasPrev && (
<button
onClick={onClickHandler}
className='carousel-arrow prev'
aria-label='Previous'
>


<svg xmlns="http://www.w3.org/2000/svg" width="65" height="61" viewBox="0 0 65 61" fill="none">
<g filter="url(#filter0_d_1208_85)">
<rect x="4" width="57" height="53" fill="#F6F6F6"/>
</g>
<path d="M38 32.6323L31.2011 26.2903L38 19.9482L35.9069 18L27 26.2903L35.9069 34.5806L38 32.6323Z" fill="#64615B"/>
<defs>
<filter id="filter0_d_1208_85" x="0" y="0" width="65" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1208_85"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1208_85" result="shape"/>
</filter>
</defs>
</svg>
{/* Your custom "Previous" arrow SVG here */}
</button>
)
}
renderArrowNext={(onClickHandler, hasNext) =>
hasNext && (
<button
onClick={onClickHandler}
className='carousel-arrow next'
aria-label='Next'
>
{/* Your custom "Next" arrow SVG here */}
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="61" viewBox="0 0 65 61" fill="none">
<g filter="url(#filter0_d_1208_96)">
<rect x="4" width="57" height="53" fill="#F6F6F6"/>
</g>
<path d="M27 32.6321L33.7989 26.2902L27 19.9482L29.0931 18L38 26.2902L29.0931 34.5803L27 32.6321Z" fill="#64615B"/>
<defs>
<filter id="filter0_d_1208_96" x="0" y="0" width="65" height="61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1208_96"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1208_96" result="shape"/>
</filter>
</defs>
</svg>
</button>
)
}
>
{chunkedData.map((chunk, index) => (
<div key={index} className="carousel-slide">
{chunk.map((card, cardIndex) => (
<Cardcar
key={cardIndex}
imageSrc={card.imageSrc}
title={card.title}
/>
))}
</div>
))}
</Carousel>
);
}


