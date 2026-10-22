import type { Booking } from '@prisma/client';
/** Owner notification via WhatsApp Cloud API. Requires a registered WhatsApp Business sender and approved template for business-initiated messages. */
export async function notifyOwnerOnWhatsApp(booking: Booking): Promise<'SENT'|'NOT_CONFIGURED'|'FAILED'> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient = process.env.WHATSAPP_OWNER_RECIPIENT;
  if (!token || !phoneId || !recipient) return 'NOT_CONFIGURED';
  const version = process.env.WHATSAPP_GRAPH_API_VERSION || 'v22.0';
  const body = `New Monkey Wash booking ${booking.reference}\nName: ${booking.customerName}\nPhone: ${booking.phone}\nService: ${booking.service.replaceAll('_',' ')}\nPickup: ${booking.pickupDate.toISOString().slice(0,10)} (${booking.pickupSlot})\nArea: ${booking.area}\nAddress: ${booking.pickupAddress}\nStatus: ${booking.status}`;
  try {
    const res = await fetch(`https://graph.facebook.com/${version}/${phoneId}/messages`, {
      method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ messaging_product: 'whatsapp', recipient_type: 'individual', to: recipient, type: 'text', text: { preview_url: false, body } }),
      cache: 'no-store',
    });
    return res.ok ? 'SENT' : 'FAILED';
  } catch { return 'FAILED'; }
}
