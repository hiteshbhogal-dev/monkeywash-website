export const siteConfig = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Monkey Wash',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.monkeywash.co.in',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
  timezone: process.env.BUSINESS_TIMEZONE || 'Asia/Kolkata',
};
export const services = [
  { id: 'WASH_FOLD', title: 'Wash & Fold', short: 'Your everyday laundry, handled.', unit: 'per kg', icon: 'sparkles', description: 'A simple, reliable clean for everyday clothes.' },
  { id: 'DRY_CLEANING', title: 'Dry Cleaning', short: 'Extra care for special garments.', unit: 'per item', icon: 'shirt', description: 'Thoughtful care for garments that need a gentler process.' },
  { id: 'IRONING', title: 'Steam Ironing', short: 'Crisp clothes, ready to wear.', unit: 'per item', icon: 'waves', description: 'Neat, pressed clothes without losing your time.' },
  { id: 'SHOE_CLEANING', title: 'Shoe Care', short: 'Give your favourites a refresh.', unit: 'per pair', icon: 'footprints', description: 'A careful refresh for the shoes you reach for most.' },
  { id: 'HOME_LINEN', title: 'Home Linen', short: 'Fresh sheets, towels and more.', unit: 'per item', icon: 'bed-double', description: 'Make the little comforts at home feel fresh again.' },
];
// Replace null prices with verified Monkey Wash prices before launch. Do not invent prices.
export const priceFrom: Record<string, number | null> = { WASH_FOLD: null, DRY_CLEANING: null, IRONING: null, SHOE_CLEANING: null, HOME_LINEN: null };
