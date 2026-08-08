export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  JPY: { symbol: '¥', rate: 155.0, label: 'JPY (¥)' },
  CAD: { symbol: 'CA$', rate: 1.36, label: 'CAD (CA$)' }
};

export const REGIONS = [
  {
    id: 'all',
    name: 'Global Roots (All)',
    icon: 'Globe',
    description: 'Explore ethical producers from every corner of the Earth.',
    badgeColor: 'gold'
  },
  {
    id: 'east-africa',
    name: 'East African Highlands',
    icon: 'Mountain',
    description: 'Volcanic soils producing world-famous single origin beans & floral honey.',
    badgeColor: 'emerald'
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean Basin',
    icon: 'Sun',
    description: 'Centuries of olive cultivation, wild herbs, and ancient grain heritage.',
    badgeColor: 'terracotta'
  },
  {
    id: 'south-asia',
    name: 'South Asian Spice Belt',
    icon: 'Flame',
    description: 'Rare saffron, heirloom cardamom, and shade-grown organic spices.',
    badgeColor: 'amber'
  },
  {
    id: 'latin-america',
    name: 'Latin America & Andes',
    icon: 'Compass',
    description: 'Ancient cacao, Andean grains, and direct-trade rainforest botanicals.',
    badgeColor: 'sage'
  },
  {
    id: 'east-asia',
    name: 'East Asian Terraces',
    icon: 'Feather',
    description: 'Shade-grown matcha, ceremonial teas, and artisan fermented preserves.',
    badgeColor: 'teal'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products', icon: 'Grid' },
  { id: 'pantry', label: 'Artisan Pantry', icon: 'Archive' },
  { id: 'spices', label: 'Heritage Spices', icon: 'Sparkles' },
  { id: 'beverages', label: 'Teas & Direct-Trade Coffee', icon: 'Coffee' },
  { id: 'produce', label: 'Rare & Organic Produce', icon: 'Leaf' },
  { id: 'crafts', label: 'Handcrafted Living', icon: 'Package' }
];

export const PRODUCTS = [
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Yirgacheffe Single-Origin Heirloom Coffee',
    category: 'beverages',
    regionId: 'east-africa',
    originCountry: 'Ethiopia',
    originRegion: 'Gedeo Zone, Yirgacheffe',
    producer: 'Kality Women Farmers Co-op',
    priceUSD: 24.50,
    rating: 4.9,
    reviewsCount: 128,
    image: '/artisan_coffee.png',
    badges: ['Direct Trade', 'Organic', 'Single Origin'],
    shortDesc: 'Floral jasmine notes with lemon verbena brightness and silky bergamot finish.',
    longDesc: 'Grown at 2,200 meters elevation under natural acacia shade canopy. Hand-picked by traditional female coffee artisans of the Gedeo zone and sun-dried on raised African beds for 21 days.',
    flavorNotes: ['Jasmine Floral', 'Bergamot', 'Meyer Lemon', 'Wild Honey'],
    stock: 42,
    weight: '340g / 12oz Whole Bean',
    harvestDate: 'Harvested Feb 2026',
    artisanStory: 'The Kality Cooperative supports over 400 smallholder female farmers, reinvesting 15% of profits into local clean water infrastructure and community schools.'
  },
  {
    id: 'kashmir-saffron-royal',
    name: 'Royal Grade Pampore Saffron Strands',
    category: 'spices',
    regionId: 'south-asia',
    originCountry: 'India',
    originRegion: 'Pampore, Kashmir',
    producer: 'Bhat Family Estate (3rd Gen)',
    priceUSD: 38.00,
    rating: 5.0,
    reviewsCount: 94,
    image: '/heritage_spices.png',
    badges: ['GI Tagged', 'Single Harvest', 'Hand Harvested'],
    shortDesc: 'Deep crimson stigma threads with unmatched crocin intensity and honey-earth aroma.',
    longDesc: 'Authentic Mongra grade Kashmiri saffron harvested at dawn during the November purple crocus bloom. Lab tested for aroma (safranal) and color intensity exceeding international ISO 3632 Grade 1.',
    flavorNotes: ['Sweet Hay', 'Honeyed Bittersweet', 'Rich Earth', 'Warm Crimson'],
    stock: 18,
    weight: '2.0g Glass Jar',
    harvestDate: 'Harvested Nov 2025',
    artisanStory: 'The Bhat family has tended the purple saffron fields of Pampore since 1948, hand-extracting each stigma thread before sunrise.'
  },
  {
    id: 'crete-extra-virgin-oil',
    name: 'Koroneiki Reserve Extra Virgin Olive Oil',
    category: 'pantry',
    regionId: 'mediterranean',
    originCountry: 'Greece',
    originRegion: 'Kolymvari, Crete',
    producer: 'Terra Creta Groves',
    priceUSD: 29.90,
    rating: 4.8,
    reviewsCount: 215,
    image: '/olive_oil.png',
    badges: ['First Cold Press', 'PDO Certified', 'Organic'],
    shortDesc: 'Peppery polyphenol kick with fresh cut grass aroma and buttery artichoke finish.',
    longDesc: 'Single-estate extra virgin olive oil extracted within 4 hours of harvest using low-temperature mechanical cold extraction. Acidity level under 0.28%.',
    flavorNotes: ['Fresh Olive Leaf', 'Green Almond', 'White Pepper', 'Wild Thyme'],
    stock: 65,
    weight: '500ml Dark Glass Bottle',
    harvestDate: 'Early Harvest Oct 2025',
    artisanStory: 'Harvested from century-old Koroneiki trees overlooking the Cretan Sea, cultivated without synthetic chemicals or pesticides.'
  },
  {
    id: 'kyoto-ceremonial-matcha',
    name: 'Uji First-Harvest Ceremonial Matcha',
    category: 'beverages',
    regionId: 'east-asia',
    originCountry: 'Japan',
    originRegion: 'Uji, Kyoto Prefecture',
    producer: 'Master Tea Blenders of Ogawa',
    priceUSD: 36.00,
    rating: 4.9,
    reviewsCount: 87,
    image: '/artisan_coffee.png',
    badges: ['Ceremonial Grade', 'Shade Grown', 'Stone Ground'],
    shortDesc: 'Vibrant jade green froth, deep umami sweetness, and zero bitterness.',
    longDesc: 'Crafted from first flush spring tea buds shade-covered for 30 days. Granite stone-milled slowly at 40g per hour to preserve delicate amino acids (L-theanine).',
    flavorNotes: ['Sweet Umami', 'Creamy Chestnut', 'Fresh Spinach', 'Subtle Ocean Breeze'],
    stock: 30,
    weight: '30g Vacuum Sealed Tin',
    harvestDate: 'Spring 2026 Flush',
    artisanStory: 'Fifth-generation tea masters in Kyoto select only the topmost tender leaves, continuing a 600-year-old tea ceremonial tradition.'
  },
  {
    id: 'amazonian-raw-cacao',
    name: 'Ancestral Chuncho Raw Cacao Nibs',
    category: 'pantry',
    regionId: 'latin-america',
    originCountry: 'Peru',
    originRegion: 'Cusco, Urubamba Valley',
    producer: 'Machu Picchu Heirloom Co-op',
    priceUSD: 16.50,
    rating: 4.7,
    reviewsCount: 62,
    image: '/heritage_spices.png',
    badges: ['Heirloom Cacao', 'Direct Trade', 'Wild Harvest'],
    shortDesc: 'Complex nutty cacao crunch with native plum and tropical fruit undertones.',
    longDesc: 'Chuncho is one of the world’s rarest wild native cacao varieties, native to the Peruvian high jungle. Sun-dried and gently roasted by local indigenous communities.',
    flavorNotes: ['Dark Berry', 'Roasted Hazelnut', 'Wild Plum', 'Subtle Cinnamon'],
    stock: 55,
    weight: '250g Kraft Pouch',
    harvestDate: 'Dec 2025',
    artisanStory: 'Protects the biodiversity of the Peruvian cloud forest while paying local native Quechua families 3x fair market wage.'
  },
  {
    id: 'smoked-pimenton-de-la-vera',
    name: 'Smoked Pimentón de La Vera Dulce',
    category: 'spices',
    regionId: 'mediterranean',
    originCountry: 'Spain',
    originRegion: 'Extremadura',
    producer: 'Herederos de Rosa',
    priceUSD: 12.00,
    rating: 4.9,
    reviewsCount: 142,
    image: '/heritage_spices.png',
    badges: ['Oak Smoked', 'DO Protect', 'Non-GMO'],
    shortDesc: 'Slow oak-wood smoked red peppers offering deep smoky warmth and silky texture.',
    longDesc: 'Jaranda and Jariza peppers smoke-dried overholm oak fire logs for 15 days, then ground on traditional stone mills to a velvety crimson powder.',
    flavorNotes: ['Wood Smoke', 'Sweet Red Pepper', 'Earthy Warmth', 'Carmelized Paprika'],
    stock: 80,
    weight: '75g Vintage Tin',
    harvestDate: 'Oct 2025',
    artisanStory: 'Dried slowly over continuous oak firewood smoke in double-story brick smokehouses according to 16th century monastic recipes.'
  },
  {
    id: 'pink-maras-mountain-salt',
    name: 'Sacred Valley Sacred Pink Mountain Salt',
    category: 'spices',
    regionId: 'latin-america',
    originCountry: 'Peru',
    originRegion: 'Maras, Sacred Valley',
    producer: 'Maras Salt Guild (Inca Heritage)',
    priceUSD: 14.00,
    rating: 4.8,
    reviewsCount: 77,
    image: '/heritage_spices.png',
    badges: ['Artisan Harvested', 'Mineral Rich', 'Unrefined'],
    shortDesc: 'Hand-harvested mineral spring salt from ancient Andean terraced pools.',
    longDesc: 'Crisp, delicate mineral flakes hand-harvested by local families using pre-Incan terraced evaporation ponds fed by a subterranean warm saltwater spring.',
    flavorNotes: ['Mild Brine', 'Mineral Earth', 'Clean Sweet Finish'],
    stock: 40,
    weight: '300g Linen Pouch',
    harvestDate: 'Dry Season 2025',
    artisanStory: 'Over 3,000 terraced pools managed by 250 native families, preserving communal Inca water sharing customs.'
  },
  {
    id: 'handwoven-sisal-market-basket',
    name: 'Bolgatanga Artisan Straw Market Tote',
    category: 'crafts',
    regionId: 'east-africa',
    originCountry: 'Ghana',
    originRegion: 'Bolgatanga, Upper East Region',
    producer: 'Baba Tree Weavers',
    priceUSD: 64.00,
    rating: 5.0,
    reviewsCount: 51,
    image: '/hero_banner.png',
    badges: ['Fair Trade Certified', '100% Sustainable', 'Handcrafted'],
    shortDesc: 'Durable, vibrant handwoven elephant grass basket with genuine goat leather handle.',
    longDesc: 'Each basket takes 3-4 days of meticulous hand weaving. Dyed with natural plant-based pigments and wrapped with reinforced leather trim for a lifetime of market trips.',
    flavorNotes: ['Natural Veta Vera Grass', 'Vegetable Tanned Leather'],
    stock: 12,
    weight: '450g Light Tote',
    harvestDate: 'Crafted Jan 2026',
    artisanStory: 'Master weavers set their own prices, earning sustainable incomes while keeping traditional West African basketry arts thriving.'
  }
];

export const ARTISANS = [
  {
    id: 'kality-coop',
    name: 'Kality Women Coffee Farmers',
    region: 'Yirgacheffe, Ethiopia',
    photo: '/artisan_coffee.png',
    impact: 'Empowering 400+ female coffee growers through direct-trade pricing.',
    quote: 'Our coffee carries the perfume of our volcanic hills and the strength of our mothers.'
  },
  {
    id: 'bhat-family',
    name: 'The Bhat Saffron Heritage',
    region: 'Pampore, Kashmir',
    photo: '/heritage_spices.png',
    impact: 'Preserving 3 generations of organic GI-tagged saffron cultivation.',
    quote: 'Every crimson strand requires gentle morning hands and deep respect for the land.'
  },
  {
    id: 'terra-creta',
    name: 'Terra Creta Olive Guild',
    region: 'Kolymvari, Crete',
    photo: '/olive_oil.png',
    impact: 'Zero-waste cold extraction protecting 100-year-old olive groves.',
    quote: 'The Mediterranean sun and sea breeze are captured in every golden drop.'
  }
];

export const RECIPES = [
  {
    id: 'kashmiri-saffron-risotto',
    title: 'Golden Kashmiri Saffron & Olive Oil Risotto',
    prepTime: '35 mins',
    servings: 4,
    difficulty: 'Medium',
    region: 'Mediterranean & South Asia Fusion',
    image: '/heritage_spices.png',
    description: 'A luxurious velvet arborio risotto infused with Royal Grade Kashmiri Saffron and finished with fresh Cretan extra virgin olive oil.',
    ingredients: [
      { name: 'Royal Grade Pampore Saffron Strands', productId: 'kashmir-saffron-royal' },
      { name: 'Koroneiki Reserve Extra Virgin Olive Oil', productId: 'crete-extra-virgin-oil' },
      { name: 'Sacred Valley Pink Mountain Salt', productId: 'pink-maras-mountain-salt' }
    ],
    steps: [
      'Steep 8-10 saffron strands in warm vegetable broth for 15 minutes until glowing amber.',
      'Sauté shallots in Cretan olive oil over medium heat until translucent.',
      'Add arborio rice and toast for 2 minutes. Deglaze with dry white wine.',
      'Ladle in warm saffron broth gradually while stirring constantly for 18-20 minutes.',
      'Finish with a generous drizzle of Koroneiki olive oil and pinch of Pink Maras mountain salt.'
    ]
  },
  {
    id: 'ceremonial-matcha-latte',
    title: 'Uji Kyoto Iced Ceremonial Oat Matcha',
    prepTime: '5 mins',
    servings: 1,
    difficulty: 'Easy',
    region: 'East Asian Terraces',
    image: '/artisan_coffee.png',
    description: 'Silky smooth whisked ceremonial grade matcha layered over ice and creamy oat milk.',
    ingredients: [
      { name: 'Uji First-Harvest Ceremonial Matcha', productId: 'kyoto-ceremonial-matcha' }
    ],
    steps: [
      'Sift 2g (1 tsp) of Uji Ceremonial Matcha into a bamboo chawan bowl.',
      'Add 60ml of 80°C (175°F) hot water.',
      'Vigorously whisk in a "W" motion with a bamboo chasen until a thick emerald foam forms.',
      'Pour over ice cubes and 150ml of chilled oat milk. Enjoy fresh.'
    ]
  }
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Elena Rostova',
    location: 'Zurich, Switzerland',
    productName: 'Royal Grade Pampore Saffron',
    rating: 5,
    comment: 'The aroma when opening the jar is unlike any supermarket saffron. Pure, deep, and colors risotto vividly with just 6 strands!'
  },
  {
    id: 2,
    author: 'Marcus Vance',
    location: 'Portland, USA',
    productName: 'Yirgacheffe Single-Origin Coffee',
    rating: 5,
    comment: 'Sublime jasmine notes on pour over. Knowing that 15% goes back to clean water in Gedeo makes every cup taste even better.'
  },
  {
    id: 3,
    author: 'Aria Takahashi',
    location: 'Vancouver, Canada',
    productName: 'Koroneiki Reserve Extra Virgin Oil',
    rating: 5,
    comment: 'The fresh pepper kick in the throat proves high polyphenol count. Truly restaurant quality olive oil.'
  }
];
