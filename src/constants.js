import beachImage from './assets/images/beach-green.webp';
import colombiaImage from './assets/images/forest-colombia.webp';
import hotelImage from './assets/images/hotel-pool.webp';
import milan from './assets/images/milan.webp';
import cenote from './assets/images/cenote-casa.webp';

export const BACKGROUNDS = [
  { img: beachImage, alt: 'Beach', bgPosition: 'bg-center', overlay: 'bg-black/60' },
  { img: colombiaImage, alt: 'Colombia', bgPosition: 'bg-center', overlay: 'bg-black/60' },
  { img: milan, alt: 'Milan', bgPosition: 'bg-bottom', overlay: 'bg-black/60' },
  { img: cenote, alt: 'Tulum', bgPosition: 'bg-bottom', overlay: 'bg-black/60' },
  { img: hotelImage, alt: 'Hotel', bgPosition: 'bg-bottom', overlay: 'bg-black/60' },
];

export const TIME_TO_CHANGE_BACKGROUND = 7000;
