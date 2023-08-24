import React from 'react';
import Card from './Card';
import image1 from './images/arabian-ranches.jpg';
import image2 from './images/arabian-ranches-ii.jpg';
import image3 from './images/downtown-dubai.jpg';
import image4 from './images/dubai-hills-estate.jpg';
import image5 from './images/dubai-marina.png';
import image6 from './images/emirates-living.jpg';
export const cardData = [
    {
      imageSrc: image1,
      text: 'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.',
      title: 'Arabian Ranches'
    },
    {
      imageSrc: image2,
      text: ' Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.',
      title: 'Arabian RanchesII'
    },
    {
      imageSrc: image3,
      text: 'The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.',
      title: 'Downtown Dubai'
    },
    {
        imageSrc:image4 ,
        text: 'Card 1 TextSustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.',
        title:"Dubai Hills Estate"
      },
      {
        imageSrc: image5,
        text: 'Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.',
        title: 'Dubai Marina'
      },
      {
        imageSrc: image6,
        text: 'Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.',
        title:"Emirates Livinng" 
      } 
  ];
export default function Cdata() {
  return (
    <div className="container">
    <div className="row">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-4 mb-4">
          <Card imageSrc={card.imageSrc} text={card.text} title={card.title} />
        </div>
      ))}
    </div>
  </div>
  
  );
}