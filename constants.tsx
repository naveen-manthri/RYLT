import { Product, TeamMember, Customer } from './types';

export const COMPANY_INFO = {
  address: "CIA Office Complex, Main Road, Sector - III, I.D.A Phase-II, Near Prof. Jaya Sankar Circle, Cherlapally, R.R.District, Secunderabad, Telangana 500051",
  phone: "+91-94414 02957",
  email: "info@ryltenergy.com",
  tagline: "Redefine Your Life With Technology",
  vision: "To be a pioneer in sustainable and innovative heating solutions, transforming every space into a comfortable and energy-efficient environment.",
  mission: "To design and deliver advanced HVAC-based heating solutions that combine reliability, efficiency, and innovation, reducing energy consumption while enhancing comfort."
};

// Updated images to be more relevant/fresh
export const PRODUCTS: Product[] = [
  {
    id: 'pool-heat-pump',
    title: 'Swimming Pool Heat Pump',
    category: 'Heating',
    description: 'Advanced air-source refrigeration cycle technology designed to deliver efficient and eco-friendly pool heating. Saves up to 70% energy compared to traditional electric or gas heaters.',
    image: 'https://picsum.photos/id/10/800/600', // Nature/Water vibe
    features: [
      'Titanium Tube Heat Exchanger (Corrosion Resistant)',
      'Smart Wi-Fi Controller',
      'Works in all Indian Climates (Hot, Humid, Cold)',
      'Low Noise Operation',
      'R410A/R32 Eco-friendly Refrigerant'
    ],
    applications: [
      'Residential Swimming Pools',
      'Hotels & Resorts',
      'Sports Clubs & Gyms',
      'Indoor Pools'
    ],
    models: [
      {
        name: 'RYLT-27kW',
        specs: [
          { label: 'Rated Input Power', value: '3.9 kW' },
          { label: 'COP', value: '6.3' },
          { label: 'Water Flow', value: '12 m³/h' },
          { label: 'Net Weight', value: '140 kg' }
        ]
      },
      {
        name: 'RYLT-40kW',
        specs: [
          { label: 'Rated Input Power', value: '7.8 kW' },
          { label: 'COP', value: '5.1' },
          { label: 'Water Flow', value: '20 m³/h' },
          { label: 'Net Weight', value: '160 kg' }
        ]
      },
       {
        name: 'RYLT-80kW',
        specs: [
          { label: 'Rated Input Power', value: '15.5 kW' },
          { label: 'COP', value: '5.1' },
          { label: 'Water Flow', value: '20 m³/h' },
          { label: 'Net Weight', value: '300 kg' }
        ]
      }
    ]
  },
  {
    id: 'industrial-dehumidifier',
    title: 'Industrial Dehumidifier (Food & Pharma)',
    category: 'Dehumidification',
    description: 'Specialized dehumidifiers designed for the food and confectionery industry. Prevents moisture damage, stickiness, and sugar bloom in chocolates and candies.',
    image: 'https://picsum.photos/id/866/800/600', // Industrial/clean vibe
    features: [
      'Prevents Sugar/Fat Bloom',
      'Food-Safe Materials',
      'High Capacity Moisture Removal',
      'Energy Efficient Scroll Compressors',
      'Precise Humidity Control'
    ],
    applications: [
      'Chocolate Factories',
      'Candy & Gems Production',
      'Food Packaging Areas',
      'Warehouses & Cold Storage',
      'Pharmaceutical Units'
    ],
    models: [
      {
        name: 'DR450',
        specs: [
          { label: 'Dehumidification (30°C/80%)', value: '437 L/24h' },
          { label: 'Air Circulation', value: '3000 m³/h' },
          { label: 'Power Consumption', value: '4.9 kW' }
        ]
      },
      {
        name: 'DR1150',
        specs: [
          { label: 'Dehumidification (30°C/80%)', value: '1129 L/24h' },
          { label: 'Air Circulation', value: '6500 m³/h' },
          { label: 'Power Consumption', value: '12.06 kW' }
        ]
      }
    ]
  },
  {
    id: 'advanced-dehumidifier',
    title: 'Advanced Dehumidification Solution (RYLT-80)',
    category: 'Dehumidification',
    description: 'High-performance drying solution designed for demanding industrial applications requiring specific temperature and humidity maintenance (35°C & 36% RH).',
    image: 'https://picsum.photos/id/60/800/600', // Tech/Office/Clean vibe
    features: [
      'Removes 82kg water/12h (Single Unit)',
      'Wi-Fi Enabled Monitoring',
      'Automatic Defrost & Memory Restart',
      'Portable Roto-molded Housing',
      '12 Months Warranty'
    ],
    applications: [
      'Industrial Drying Processes',
      'Paper/Sheet Drying',
      'Sensitive Material Storage'
    ],
    models: [
      {
        name: 'RYLT-80',
        specs: [
          { label: 'Capacity', value: '7 L/H' },
          { label: 'Power Input', value: '5 kW' },
          { label: 'COP', value: 'Up to 4.0' },
          { label: 'Dimensions', value: '900 x 700 x 900 mm' }
        ]
      },
      {
        name: 'RYLT-240',
        specs: [
          { label: 'Capacity', value: '22 L/H' },
          { label: 'Warranty', value: '12 Months' },
          { label: 'Control', value: 'Wi-Fi Smart Control' },
        ]
      }
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Engineering Lead",
    role: "Head of R&D",
    bio: "Expert in thermodynamic systems with 15+ years in HVAC innovation.",
    image: "https://picsum.photos/id/1062/400/400"
  },
  {
    id: 2,
    name: "Operations Manager",
    role: "Production Head",
    bio: "Ensures global quality standards and 'Make in India' excellence.",
    image: "https://picsum.photos/id/338/400/400"
  },
  {
    id: 3,
    name: "Sales Director",
    role: "Customer Success",
    bio: "Dedicated to providing tailored energy solutions for industrial clients.",
    image: "https://picsum.photos/id/669/400/400"
  }
];

export const CUSTOMERS: Customer[] = [
  { id: 1, name: "Major Hotel Chains", logo: "Hotel Partners" },
  { id: 2, name: "Pharmaceutical Giants", logo: "Pharma Corp" },
  { id: 3, name: "Food Processing Units", logo: "Food Industries" },
  { id: 4, name: "Sports Complexes", logo: "Sports Authority" }
];

export const GALLERY_ITEMS = [
  { id: 1, category: 'Heating', src: 'https://picsum.photos/id/10/800/600', title: 'Pool Heating Installation' },
  { id: 2, category: 'Heating', src: 'https://picsum.photos/id/11/800/600', title: 'Resort Swimming Pool' },
  { id: 3, category: 'Dehumidification', src: 'https://picsum.photos/id/866/800/600', title: 'Industrial Facility' },
  { id: 4, category: 'Dehumidification', src: 'https://picsum.photos/id/60/800/600', title: 'Office Ventilation' },
  { id: 5, category: 'Dehumidification', src: 'https://picsum.photos/id/20/800/600', title: 'Product Storage' },
  { id: 6, category: 'Heating', src: 'https://picsum.photos/id/28/800/600', title: 'Hotel Rooftop Pool' },
];
