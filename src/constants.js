import cancunImage from './assets/images/cancun.jpg';
import beachImage from './assets/images/beach.jpg';
import colombiaImage from './assets/images/colombia.jpg';
import hotelImage from './assets/images/hotel.jpg';

export const BACKGROUNDS = [
  { img: beachImage, alt: 'Beach', bgPosition: 'bg-center', overlay: 'bg-black/50' },
  { img: hotelImage, alt: 'Hotel', bgPosition: 'bg-center', overlay: 'bg-black/60' },
  { img: colombiaImage, alt: 'Colombia', bgPosition: 'bg-center', overlay: 'bg-black/60' },
  { img: cancunImage, alt: 'Cancun', bgPosition: 'bg-bottom', overlay: 'bg-black/40' },
];

export const TIME_TO_CHANGE_BACKGROUND = 7000;
