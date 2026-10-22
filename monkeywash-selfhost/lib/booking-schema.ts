import { z } from 'zod';
export const bookingSchema = z.object({
  customerName: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^[+\d\s().-]{7,24}$/),
  email: z.union([z.string().trim().email().max(254), z.literal('')]).optional(),
  service: z.enum(['WASH_FOLD','DRY_CLEANING','IRONING','SHOE_CLEANING','HOME_LINEN','OTHER']),
  itemsDescription: z.string().trim().max(500).optional(),
  pickupAddress: z.string().trim().min(8).max(500),
  area: z.string().trim().min(2).max(100),
  pickupDate: z.string().date(),
  pickupSlot: z.enum(['09:00-11:00','11:00-13:00','13:00-15:00','15:00-17:00','17:00-19:00']),
  deliveryPreference: z.enum(['standard','express']).default('standard'),
  specialInstructions: z.string().trim().max(1000).optional(),
  website: z.string().max(0).optional(), // honeypot; must remain empty
});
