import { PrismaClient, ServiceType } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const services = [
    {service: ServiceType.WASH_FOLD, label:'Wash & Fold', description:'Everyday laundry, washed, dried and neatly folded.', priceFrom:null, unit:'per kg'},
    {service: ServiceType.DRY_CLEANING, label:'Dry Cleaning', description:'Care for garments that need a little extra attention.', priceFrom:null, unit:'per item'},
    {service: ServiceType.IRONING, label:'Steam Ironing', description:'Crisp, ready-to-wear clothes without the effort.', priceFrom:null, unit:'per item'},
    {service: ServiceType.SHOE_CLEANING, label:'Shoe Care', description:'A freshen-up for your everyday favourites.', priceFrom:null, unit:'per pair'},
    {service: ServiceType.HOME_LINEN, label:'Home Linen', description:'Fresh sheets, towels and larger household items.', priceFrom:null, unit:'per item'}
  ];
  for (const s of services) await prisma.servicePrice.upsert({where:{service:s.service}, update:{label:s.label, description:s.description, unit:s.unit}, create:s});
}
main().finally(() => prisma.$disconnect());
