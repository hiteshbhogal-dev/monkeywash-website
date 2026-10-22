import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/config';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: 'Monkey Wash | Laundry Pickup & Delivery', template: '%s | Monkey Wash' }, description: 'Book laundry pickup in a few simple steps. Choose your service, select a pickup slot and let Monkey Wash take care of the rest.', applicationName: 'Monkey Wash', alternates: { canonical: '/' }, openGraph: { type: 'website', siteName: 'Monkey Wash', title: 'Monkey Wash | Laundry Pickup & Delivery', description: 'Fresh laundry, on your schedule.', url: siteConfig.url }, robots: { index: true, follow: true } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>; }
