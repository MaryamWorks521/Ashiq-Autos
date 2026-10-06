export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  icon: string;
}

export interface ReviewItem {
  id: string;
  label: string;
  date: string;
  rating: number;
  text: string;
  source: string;
}

export const BUSINESS_INFO = {
  name: 'Ashiq Autos',
  tagline: 'Reliable Automotive Service in Karachi',
  heroHeadline: 'Reliable Auto Care. Professional Service.',
  heroSubheading: 'Quality automotive maintenance and repair services you can trust in Karachi.',
  phone: '021-32771312',
  phoneTel: 'tel:02132771312',
  address: 'V259+MHG, Ratan Talao, Karachi, Pakistan',
  googleRating: 4.2,
  reviewCount: 43,
  businessType: 'Automotive Garage / Auto Repair & Maintenance',
  googleBusinessUrl: 'https://business.google.com/v/mohmand-oil-change-since1982/016120384310105649074/8e56/',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ashiq+Autos+V259%2BMHG+Ratan+Talao+Karachi+Pakistan',
  workingHours: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: 'Closed / Emergency Support' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'oil-change',
    title: 'Oil Change',
    shortDesc: 'Premium synthetic & conventional motor oil replacement with filter change for engine longevity.',
    fullDesc: 'Complete oil drainage, oil filter cartridge replacement, quality lubricant refilling tailored to your vehicle manufacturer recommendations, and fluid check.',
    features: ['Grade-matched engine oil', 'New OEM/equivalent oil filter', 'Fluid level multi-check'],
    icon: 'Droplets'
  },
  {
    id: 'engine-inspection',
    title: 'Engine Inspection',
    shortDesc: 'Comprehensive diagnostics, fault code scanning, spark plug assessment, and tuning.',
    fullDesc: 'Electronic diagnostics and mechanical inspection to identify warning lights, rough idling, fuel inefficiencies, and minor engine concerns before they escalate.',
    features: ['Computerized diagnostic check', 'Ignition & spark plug review', 'Belt & tensioner inspection'],
    icon: 'Activity'
  },
  {
    id: 'brake-service',
    title: 'Brake Service',
    shortDesc: 'Brake pad replacement, rotor inspection, and hydraulic fluid line safety checks.',
    fullDesc: 'Crucial stopping power service. We inspect brake pad thickness, rotor disc wear, caliper function, and brake fluid moisture levels for responsive braking.',
    features: ['Pads & shoe replacement', 'Disc rotor assessment', 'Brake fluid flush & bleed'],
    icon: 'Disc'
  },
  {
    id: 'car-maintenance',
    title: 'Car Maintenance',
    shortDesc: 'Scheduled periodic vehicle upkeep to maintain peak performance and fuel efficiency.',
    fullDesc: 'Periodic preventative maintenance covering spark plugs, air filters, fuel filters, coolant levels, and suspension components.',
    features: ['Multi-point safety check', 'Air & cabin filter replacement', 'Coolant level top-up'],
    icon: 'Wrench'
  },
  {
    id: 'battery-check',
    title: 'Battery Check',
    shortDesc: 'Battery health diagnostic, charging system load test, and terminal service.',
    fullDesc: 'Voltage and cold-cranking amp testing to avoid unexpected breakdowns, ensuring your battery, alternator, and starter motor perform reliably.',
    features: ['Voltage & state-of-health test', 'Alternator charging review', 'Terminal anti-corrosion cleaning'],
    icon: 'BatteryCharging'
  },
  {
    id: 'ac-service',
    title: 'AC Service',
    shortDesc: 'Air conditioning gas recharge, compressor check, cabin filtration, and cooling repair.',
    fullDesc: 'Beat the Karachi heat with prompt car AC servicing. We test cooling efficiency, recharge refrigerant gas, inspect compressors, and replace clogged cabin filters.',
    features: ['Refrigerant top-up / recharge', 'Compressor & condenser check', 'Cooling duct inspection'],
    icon: 'Fan'
  },
  {
    id: 'general-auto-repair',
    title: 'General Auto Repair',
    shortDesc: 'Mechanical repairs, suspension tuning, radiator leak fixing, and exhaust care.',
    fullDesc: 'Troubleshooting and repair for steering, shock absorbers, exhaust leaks, radiator cooling issues, and general running gear wear.',
    features: ['Suspension & steering care', 'Radiator cooling repair', 'Exhaust & undercarriage check'],
    icon: 'Hammer'
  },
  {
    id: 'vehicle-inspection',
    title: 'Vehicle Inspection',
    shortDesc: 'Thorough pre-purchase and roadworthiness inspections for total peace of mind.',
    fullDesc: 'A detailed bumper-to-bumper check of mechanical running gear, brakes, steering, fluids, and safety systems before a road trip or vehicle purchase.',
    features: ['Pre-trip safety evaluation', 'Underbody & chassis check', 'Tire wear & pressure check'],
    icon: 'CheckCircle2'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Service',
    description: 'Professional automotive care with attention to detail and seasoned hands-on mechanical expertise.'
  },
  {
    title: 'Reliable Workmanship',
    description: 'Focused on quality and dependable vehicle maintenance using proven repair procedures.'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Friendly and professional service for every customer with honest, straightforward recommendations.'
  },
  {
    title: 'Convenient Location',
    description: 'Easy to find in Ratan Talao, Karachi, accessible from major city thoroughfares.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    label: 'Customer Review',
    date: 'Verified Google Review',
    rating: 5,
    text: 'Ashiq Autos provided quick and honest oil change and engine service. The mechanic explained everything clearly without recommending unnecessary work. Very reliable service in Ratan Talao.',
    source: 'Google Maps'
  },
  {
    id: 'rev-2',
    label: 'Customer Review',
    date: 'Verified Google Review',
    rating: 4,
    text: 'Prompt brake inspection and maintenance service. Car stops smoothly now. Professional attitude and reasonable rates for the Karachi area.',
    source: 'Google Maps'
  },
  {
    id: 'rev-3',
    label: 'Customer Review',
    date: 'Verified Google Review',
    rating: 5,
    text: 'Great attention to detail during our vehicle inspection and routine maintenance. Trustworthy garage that cares about customer satisfaction and getting cars back on the road quickly.',
    source: 'Google Maps'
  }
];
