import img1 from './images/1.jpg';
import img2 from './images/5.jpg';
import img3 from './images/6.jpg';
import img4 from './images/7.jpg';
import img5 from './images/g1.jpg';
import img6 from './images/g2.jpg';
import img7 from './images/ab.jpg';
import img8 from './images/b1.jpg';
import img9 from './images/s2.jpg';
import img10 from './images/s3.jpg';
import img11 from './images/s4.jpg';
import img12 from './images/s8.jpg';
import img13 from './images/r1.jpg';
import img14 from './images/r2.jpg';
import img15 from './images/r3.jpg';
import img16 from './images/r4.jpg';
import img17 from './images/t1.jpg';
import img18 from './images/t2.jpg';
import img19 from './images/t3.jpg';
import img20 from './images/t4.jpg';

const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: img1,
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: img2,
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: img3,
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: img4,
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Nike White AirForce',
          imageUrl: img5,
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: img6,
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: img7,
          price: 110
        },
        {
          id: 13,
          name:'Adidas NMD',
          imageUrl: img8,
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: img9,
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: img10,
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: img11,
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: img12,
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: img12,
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: img13,
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: img14,
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl:img15,
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: img16,
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: img17,
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: img18,
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: img19,
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: img20,
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;