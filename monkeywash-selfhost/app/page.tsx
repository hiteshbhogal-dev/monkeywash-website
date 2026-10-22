import Link from 'next/link';
import { ArrowRight, Check, Clock3, ShieldCheck, Truck } from 'lucide-react';
import { ServiceCard } from '@/components/service-card';
import { services, siteConfig } from '@/lib/config';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Monkey Wash',
  url: siteConfig.url,
  description: 'Laundry pickup and delivery service. Book online for convenient laundry care.',
  telephone: siteConfig.phone || undefined,
};

const benefits = [
  { title: 'Book in minutes', text: 'A simple flow, with no unnecessary steps.', Icon: Clock3 },
  { title: 'Pickup on your schedule', text: 'Choose a time slot that suits your day.', Icon: Truck },
  { title: 'Care for every load', text: 'Tell us what you need and we’ll take it from there.', Icon: ShieldCheck },
];

const steps = [
  { number: '01', title: 'Choose your service', text: 'Pick the type of care your clothes or home essentials need.' },
  { number: '02', title: 'Select a pickup slot', text: 'Share your address and choose a convenient day and time.' },
  { number: '03', title: 'We take it from here', text: 'We’ll confirm your request and keep you updated as your order moves along.' },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="section">
        <div className="container home-hero">
          <div>
            <span className="pill">Laundry care that fits your life</span>
            <h1 className="home-title">Laundry day?<br /><span>Leave it to us.</span></h1>
            <p className="home-intro">Book a pickup in minutes. Choose the care you need, pick a time that works, and get back to your day.</p>
            <div className="home-actions">
              <Link href="/book" className="button button-primary">Book a pickup <ArrowRight size={18} /></Link>
              <Link href="/services" className="button button-outline">Explore services</Link>
            </div>
            <div className="home-checks">
              <span><Check size={16} /> Simple online booking</span>
              <span><Check size={16} /> Convenient pickup slots</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration representing fresh laundry">
            <div className="hero-orbit" />
            <div className="laundry-stack"><span /><span /><span /></div>
            <div className="hero-note"><Truck size={19} /><span><strong>Pickup made easy</strong><small>Your time, your slot</small></span></div>
            <div className="hero-badge"><ShieldCheck size={18} /> Careful by design</div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container benefit-grid">
          {benefits.map(({ title, text, Icon }) => (
            <article key={title} className="card benefit-card">
              <div className="benefit-icon"><Icon size={21} /></div>
              <div><h2>{title}</h2><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Laundry, your way</span><h2>The care you need.<br />Nothing you don’t.</h2></div>
            <Link href="/services" className="text-link">Explore all services <ArrowRight size={18} /></Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 3).map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container steps-layout">
          <div><span className="eyebrow">Three easy steps</span><h2>More living.<br />Less laundry.</h2><p className="section-copy">A better laundry routine starts with a better booking experience. Here’s how it works.</p><Link href="/book" className="button button-dark">Schedule your pickup <ArrowRight size={18} /></Link></div>
          <div className="steps-list">
            {steps.map((step) => <article key={step.number} className="card step-card"><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-cta"><div><span className="eyebrow">Ready when you are</span><h2>Give your next laundry day a little more breathing room.</h2><p>Start with a pickup request. It only takes a few minutes.</p></div><Link href="/book" className="button button-primary">Book a pickup <ArrowRight size={18} /></Link></div>
        </div>
      </section>
    </>
  );
}
