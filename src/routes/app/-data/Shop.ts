export const shopItems: Array<ShopItem> = [
  {
    id: 1,
    name: 'Comfy Sneakers',
    description:
      'Ultra-light sneakers with cushioned soles for all-day comfort.',
    category: 'footwear',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    price: 7999,
    liked: false,
  },
  {
    id: 2,
    name: 'Techwear Tee',
    description: 'Breathable and moisture-wicking tee for active lifestyles.',
    category: 'apparel',
    image:
      'https://images.unsplash.com/photo-1535732176766-a9a9513547e5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2h3ZWFyfGVufDB8fDB8fHww', // you’d pick a relevant tee image
    price: 295,
    liked: true,
  },
  {
    id: 3,
    name: 'Bluetooth Headphones',
    description: 'Over-ear, noise-canceling headphones with long battery life.',
    category: 'electronics',
    image:
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww', // use the headphones image
    price: 1290,
    liked: false,
  },
  {
    id: 4,
    name: 'Everyday Backpack',
    description:
      'Water-resistant with padded laptop compartment and organizer pockets.',
    category: 'accessories',
    image:
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D', // backpack image
    price: 5499,
    liked: true,
  },
  {
    id: 5,
    name: 'Smartwatch Pro',
    description:
      'Tracks fitness, notifications, and has customizable watch faces.',
    category: 'electronics',
    image:
      'https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D', // smartwatch image
    price: 19999,
    liked: false,
  },
  {
    id: 6,
    name: 'Minimalist Cap',
    description: 'Lightweight cap with subtle logo—stylish and functional.',
    category: 'accessories',
    image:
      'https://images.unsplash.com/photo-1466992133056-ae8de8e22809?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwfGVufDB8fDB8fHww', // you'd grab a cap photo
    price: 1875,
    liked: true,
  },
  {
    id: 7,
    name: 'Cozy Joggers',
    description: 'Soft joggers with phone pocket and elastic waistband.',
    category: 'apparel',
    image:
      'https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9nZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D', // find joggers
    price: 420,
    liked: false,
  },
  {
    id: 8,
    name: 'Leather Tote Bag',
    description: 'Stylish and durable, ideal for work or weekend outings.',
    category: 'accessories',
    image:
      'https://images.unsplash.com/photo-1575426553509-3c6953fdf9b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRvdGUlMjBiYWd8ZW58MHx8MHx8fDA%3D', // tote bag image
    price: 8999,
    liked: true,
  },
  {
    id: 9,
    name: 'Hooded Sweatshirt',
    description: 'Soft hoodie with kangaroo pocket and drawstring hood.',
    category: 'apparel',
    image:
      'https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dlYXRzaGlydHxlbnwwfHwwfHx8MA%3D%3D', // hoodie image
    price: 5999,
    liked: false,
  },
  {
    id: 10,
    name: 'Retro Sunglasses',
    description: 'UV-protected lenses with vintage metal frames.',
    category: 'accessories',
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D', // sunglasses image
    price: 2499,
    liked: true,
  },
  {
    id: 11,
    name: 'Action Camera 4K',
    description:
      'Waterproof and Wi-Fi enabled—perfect for capturing adventures.',
    category: 'electronics',
    image:
      'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D', // camera image
    price: 14995,
    liked: false,
  },
  {
    id: 12,
    name: 'Cotton Scarf',
    description: 'Soft, breathable scarf for light warmth and style.',
    category: 'apparel',
    image:
      'https://images.unsplash.com/photo-1571498521264-5fcaa7f8edf4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjYXJmfGVufDB8fDB8fHww', // scarf image
    price: 220,
    liked: true,
  },
]
