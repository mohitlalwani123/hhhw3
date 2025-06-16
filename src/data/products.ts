export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  sale?: boolean;
  soldOut?: boolean;
  category: string;
  description: string;
  features: string[];
  materials: string[];
  dimensions?: string;
  weight?: string;
  careInstructions: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'CHERISH EARRING',
    price: 799,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'earrings',
    description: 'The Cherish Earrings are a perfect blend of elegance and sophistication. Crafted with precision and attention to detail, these earrings feature a timeless design that complements any outfit. Whether you\'re dressing up for a special occasion or adding a touch of glamour to your everyday look, the Cherish Earrings are the perfect choice. Each piece is carefully handcrafted by skilled artisans, ensuring that every detail meets our high standards of quality and beauty.',
    features: [
      'Hypoallergenic materials for sensitive skin',
      'Lightweight design for all-day comfort',
      'Secure butterfly backing system',
      'Tarnish-resistant finish that lasts',
      'Elegant gift-ready packaging included',
      'Handcrafted by skilled artisans',
      'Perfect for both casual and formal occasions'
    ],
    materials: ['Sterling Silver', '18K Gold Plating', 'Cubic Zirconia', 'Anti-tarnish coating'],
    dimensions: '2.5cm x 1.2cm',
    weight: '3.2g per pair',
    careInstructions: [
      'Store in a dry place away from moisture and humidity',
      'Clean with a soft, lint-free cloth after each use',
      'Avoid contact with perfumes, lotions, and cosmetics',
      'Remove before swimming, showering, or exercising',
      'Store separately in individual pouches to prevent scratching',
      'Use a jewelry polishing cloth for extra shine'
    ]
  },
  {
    id: 2,
    name: 'SERENITY KADA',
    price: 999,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'bracelets',
    description: 'The Serenity Kada embodies tranquility and grace with its smooth, flowing design. This beautifully crafted bracelet features a polished finish that catches the light beautifully, creating an elegant shimmer with every movement. Its comfortable fit and timeless design make it perfect for both casual and formal occasions. The Serenity Kada represents inner peace and strength, making it not just a piece of jewelry, but a symbol of your personal journey.',
    features: [
      'Smooth polished finish with mirror-like shine',
      'Ergonomic design for comfortable fit',
      'Durable construction built to last',
      'Adjustable sizing for perfect fit',
      'Elegant gift box with premium packaging',
      'Versatile design suitable for any occasion',
      'Symbolic representation of peace and serenity'
    ],
    materials: ['Premium Brass', '18K Gold Plating', 'Anti-tarnish coating', 'Protective lacquer'],
    dimensions: 'Inner diameter: 6.5cm, Width: 8mm, Thickness: 3mm',
    weight: '25g',
    careInstructions: [
      'Wipe clean with a soft, dry cloth after wearing',
      'Store separately to prevent scratching against other jewelry',
      'Avoid exposure to harsh chemicals and cleaning agents',
      'Polish occasionally with a jewelry polishing cloth',
      'Keep away from extreme temperatures',
      'Remove before engaging in physical activities'
    ]
  },
  {
    id: 3,
    name: 'DUO LOVE EARRING',
    price: 999,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'earrings',
    description: 'The Duo Love Earrings celebrate the beauty of connection and harmony through their unique dual-element design. These earrings symbolize love, unity, and the perfect balance between two hearts. Each piece features intricate detailing that represents the intertwining of souls, making them perfect for romantic occasions or as a meaningful gift for someone special. The design captures the essence of eternal love and commitment.',
    features: [
      'Unique dual-element design representing unity',
      'Symbolic love motif with intricate detailing',
      'Comfortable post backing with secure closure',
      'Nickel-free materials for sensitive ears',
      'Romantic gift packaging with love theme',
      'Perfect for anniversaries and special occasions',
      'Represents eternal love and commitment'
    ],
    materials: ['Sterling Silver', 'Rose Gold Plating', 'Crystal accents', 'Hypoallergenic posts'],
    dimensions: '1.8cm x 1.5cm',
    weight: '2.8g per pair',
    careInstructions: [
      'Clean gently with specialized jewelry cleaner',
      'Store in provided soft pouch when not wearing',
      'Avoid contact with harsh chemicals and perfumes',
      'Handle with care to preserve the delicate finish',
      'Remove before sleeping or physical activities',
      'Keep away from water and moisture'
    ]
  },
  {
    id: 4,
    name: 'ETERNA DUO KADA',
    price: 899,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'bracelets',
    description: 'The Eterna Duo Kada represents eternal beauty and timeless style through its sophisticated dual-tone design. This bracelet features contrasting finishes that create depth and visual interest, making it a statement piece that complements any wardrobe. Its versatile style makes it perfect for layering with other bracelets or wearing alone as a focal point. The Eterna Duo Kada embodies the concept of eternal elegance and enduring fashion.',
    features: [
      'Sophisticated dual-tone design with contrasting finishes',
      'Versatile styling options for layering or solo wear',
      'Comfortable ergonomic design for extended wear',
      'Scratch-resistant surface with protective coating',
      'Premium gift presentation in luxury box',
      'Timeless design that never goes out of style',
      'Perfect balance of modern and classic elements'
    ],
    materials: ['Stainless Steel', 'Gold Plating', 'Silver Accents', 'Protective coating'],
    dimensions: 'Inner diameter: 6.2cm, Width: 10mm, Thickness: 4mm',
    weight: '28g',
    careInstructions: [
      'Clean with mild soap and warm water when needed',
      'Dry thoroughly with a soft cloth after cleaning',
      'Store in jewelry box or soft pouch',
      'Avoid contact with abrasive materials',
      'Polish with jewelry cloth to maintain shine',
      'Keep away from chlorine and saltwater'
    ]
  },
  {
    id: 5,
    name: 'ECHO DROP EARRING',
    price: 999,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'earrings',
    description: 'The Echo Drop Earrings create a beautiful cascade of light and movement with their graceful design. These elegant drop earrings feature a flowing silhouette that sways gently with your movements, creating an enchanting echo of sparkle and shine. The design captures and reflects light from multiple angles, ensuring you\'ll catch everyone\'s attention. Perfect for evening events, special occasions, or whenever you want to add a touch of glamour to your look.',
    features: [
      'Graceful drop design with flowing movement',
      'Movement-responsive sparkle that catches light',
      'Secure hook closure with safety backing',
      'Lightweight construction for comfortable wear',
      'Elegant presentation box included',
      'Perfect for evening and special occasions',
      'Creates beautiful light reflections'
    ],
    materials: ['Sterling Silver', 'Cubic Zirconia', 'Rhodium Plating', 'Anti-tarnish coating'],
    dimensions: '3.2cm x 0.8cm',
    weight: '4.1g per pair',
    careInstructions: [
      'Store hanging or flat to prevent tangling',
      'Clean with jewelry polishing cloth regularly',
      'Avoid contact with cosmetics and hair products',
      'Handle ear hooks gently to maintain shape',
      'Remove before sleeping to prevent damage',
      'Keep in protective case when traveling'
    ]
  },
  {
    id: 6,
    name: 'CLASSIC SNAKE NECKLACE',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'necklaces',
    description: 'The Classic Snake Necklace is a timeless piece that embodies sophistication and elegance through its fluid design. The snake chain creates a beautiful drape around the neck, conforming perfectly to your neckline for a comfortable and flattering fit. This versatile piece transitions seamlessly from day to night, making it perfect for both casual and formal occasions. The classic design ensures it will remain a staple in your jewelry collection for years to come.',
    features: [
      'Fluid snake chain design for perfect drape',
      'Adjustable length for versatile styling',
      'Secure lobster clasp closure',
      'Flexible and comfortable for all-day wear',
      'Luxury gift packaging included',
      'Timeless design suitable for any age',
      'Perfect for layering with other necklaces'
    ],
    materials: ['Sterling Silver', '18K Gold Vermeil', 'Anti-tarnish coating', 'Premium clasp'],
    dimensions: 'Length: 45cm (adjustable to 50cm)',
    weight: '15g',
    careInstructions: [
      'Store flat or hanging to prevent kinking',
      'Clean with silver polishing cloth when needed',
      'Avoid pulling or stretching the chain',
      'Keep away from moisture and humidity',
      'Store in anti-tarnish pouch when not wearing',
      'Have professionally cleaned annually'
    ]
  },
  {
    id: 7,
    name: 'AURORA EDGE EARRING',
    price: 599,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    soldOut: true,
    category: 'earrings',
    description: 'The Aurora Edge Earrings capture the ethereal beauty of the northern lights with their unique edge design and iridescent finish. These stunning earrings feature a special coating that creates a mesmerizing play of colors, shifting and changing with every angle and movement. The aurora-inspired design brings the magic of the northern lights to your jewelry collection, making these earrings truly one-of-a-kind pieces that are sure to spark conversation.',
    features: [
      'Unique edge design inspired by aurora borealis',
      'Iridescent finish with color-changing effects',
      'Mesmerizing play of colors from every angle',
      'Comfortable stud backing for secure wear',
      'Limited edition design with exclusive coating',
      'Conversation-starting statement piece',
      'Captures the magic of northern lights'
    ],
    materials: ['Titanium', 'Iridescent coating', 'Surgical steel posts', 'Hypoallergenic backing'],
    dimensions: '1.5cm x 1.2cm',
    weight: '2.5g per pair',
    careInstructions: [
      'Clean with soft microfiber cloth only',
      'Avoid harsh chemicals that may damage coating',
      'Store in protective case to prevent scratching',
      'Handle gently to preserve iridescent finish',
      'Keep away from extreme temperatures',
      'Do not use ultrasonic cleaners'
    ]
  },
  {
    id: 8,
    name: 'BOLD BLOOM EARRING',
    price: 599,
    originalPrice: 1100,
    image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'earrings',
    description: 'The Bold Bloom Earrings are inspired by the beauty of blooming flowers in full spring glory. These statement earrings feature intricate petal details and a bold design that makes them perfect for special occasions and celebrations. Each petal is carefully crafted to create a three-dimensional flower that seems to bloom right from your ear. The vibrant design captures the essence of nature\'s beauty and brings it to your jewelry collection.',
    features: [
      'Floral-inspired design with realistic petal details',
      'Three-dimensional blooming flower effect',
      'Statement size perfect for special occasions',
      'Secure post backing with comfortable fit',
      'Eye-catching design that draws compliments',
      'Celebrates the beauty of nature',
      'Perfect for spring and summer styling'
    ],
    materials: ['Brass', 'Gold Plating', 'Enamel details', 'Protective coating'],
    dimensions: '2.8cm x 2.5cm',
    weight: '5.2g per pair',
    careInstructions: [
      'Clean with damp cloth only, avoid soaking',
      'Avoid soaking in water to protect enamel',
      'Store separately to prevent damage to petals',
      'Handle with care due to delicate floral details',
      'Keep away from perfumes and cosmetics',
      'Store in padded jewelry box'
    ]
  },
  {
    id: 9,
    name: 'NOVA KADA',
    price: 999,
    originalPrice: 1200,
    image: 'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1617067/pexels-photo-1617067.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'bracelets',
    description: 'The Nova Kada shines like a bright star in the night sky with its contemporary design and stellar appeal. This modern bracelet features subtle star-like engravings that catch the light beautifully, creating a celestial sparkle that\'s both sophisticated and eye-catching. The sleek design represents the birth of a new star, symbolizing new beginnings and infinite possibilities. Perfect for the modern jewelry lover who appreciates both style and meaning.',
    features: [
      'Contemporary design with stellar inspiration',
      'Subtle star-like engravings for celestial appeal',
      'Light-catching surface with brilliant sparkle',
      'Modern aesthetic perfect for today\'s style',
      'Comfortable fit for extended wear',
      'Symbolizes new beginnings and possibilities',
      'Sophisticated yet eye-catching design'
    ],
    materials: ['Stainless Steel', 'Rhodium Plating', 'Laser engravings', 'Anti-scratch coating'],
    dimensions: 'Inner diameter: 6.3cm, Width: 12mm, Thickness: 3mm',
    weight: '32g',
    careInstructions: [
      'Wipe with soft cloth after each wear',
      'Use mild jewelry cleaner if needed',
      'Store in dry environment away from humidity',
      'Avoid impact with hard surfaces',
      'Polish with jewelry cloth for extra shine',
      'Keep away from harsh chemicals'
    ]
  },
  {
    id: 10,
    name: 'ELEGANT CHAIN NECKLACE',
    price: 999,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    sale: true,
    category: 'necklaces',
    description: 'The Elegant Chain Necklace is a versatile piece that complements any wardrobe with its refined design and perfect proportions. This sophisticated necklace features a carefully crafted chain that strikes the perfect balance between delicate and substantial. Its ideal length makes it perfect for layering with other necklaces or wearing alone as a statement piece. The timeless design ensures it will remain a cherished part of your jewelry collection for years to come.',
    features: [
      'Versatile chain design suitable for any occasion',
      'Perfect length for layering or solo wear',
      'Refined appearance with sophisticated appeal',
      'Durable construction built to last',
      'Classic design with timeless appeal',
      'Complements both casual and formal attire',
      'Essential piece for any jewelry collection'
    ],
    materials: ['Sterling Silver', 'Gold Fill', 'Polished finish', 'Premium clasp'],
    dimensions: 'Length: 42cm',
    weight: '12g',
    careInstructions: [
      'Store in jewelry pouch to prevent tangling',
      'Clean regularly with polishing cloth',
      'Avoid tangling with other jewelry pieces',
      'Keep away from perfumes and lotions',
      'Have professionally cleaned when needed',
      'Store flat when not wearing'
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};