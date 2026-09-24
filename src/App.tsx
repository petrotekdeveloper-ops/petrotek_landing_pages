import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wind,
  Wrench,
  X,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import eventLogo from '@assets/ChatGPT_Image_Sep_22,_2026,_01_46_53_PM_1790070640182.png';
import campaignPoster from '@assets/image_1790070671603.png';
import cinematicPoster from '@assets/image_1790070686092.png';
import heroBackground from '@assets/hero_section_bg.png';

const queryClient = new QueryClient();
const contactEmail = 'lubeinfo@petrotek.de';
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent('Petrotek UAE enquiry')}`;

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why Petrotek', href: '#why' },
  { label: 'The Event', href: '#event' },
  { label: 'Contact', href: '#contact' },
];

const solutions = [
  {
    number: '01',
    title: 'Industrial Lubrication & Reliability',
    description: 'Engineered lubricants and reliability solutions that help reduce friction, control wear and extend equipment life.',
    icon: Gauge,
  },
  {
    number: '02',
    title: 'Compressed Air Solutions & Services',
    description: 'Compressed-air systems, dryers, filtration, nitrogen generation and technical services designed for efficient and dependable operation.',
    icon: Wind,
  },
  {
    number: '03',
    title: 'CNC Technologies & Manufacturing Support',
    description: 'Precision tooling, workholding systems and manufacturing technologies that help industries produce with accuracy and confidence.',
    icon: Wrench,
  },
];

const reasons = [
  ['UAE INDUSTRIAL EXPERIENCE', 'Serving the UAE industrial market since 2009'],
  ['PRACTICAL TECHNICAL KNOWLEDGE', 'Technical solutions supported by practical industry knowledge'],
  ['TRUSTED INTERNATIONAL MANUFACTURERS', 'Reliable products from trusted international manufacturers'],
  ['MULTI-DISCIPLINE SUPPORT', 'Support across lubrication, compressed air and CNC technology'],
  ['LONG-TERM CUSTOMER FOCUS', 'A long-term approach focused on performance and customer trust'],
];

const reliabilitySteps = ['Kerala tradition', 'Craft & care', 'Engineering precision', 'Industrial reliability', 'Lasting progress'];

const dates = [
  { day: '04', month: 'OCT', place: 'AMITY SCHOOL DUBAI', icon: CalendarDays },
  { day: '11', month: 'OCT', place: 'DUBAI WORLD TRADE CENTRE', detail: "ZABEEL HALLS 5 & 6", icon: MapPin },
];

function PetrotekMark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={small ? 'petrotek-mark petrotek-mark--small' : 'petrotek-mark'}
      aria-label="Petrotek General Trading LLC"
    >
      <span className="sr-only">Petrotek General Trading LLC</span>
    </span>
  );
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div data-reveal className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" aria-label="Petrotek UAE home" data-testid="link-home">
          <PetrotekMark />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={gmailComposeUrl} target="_blank" rel="noreferrer" data-testid="link-nav-contact">
          Speak With Our Team <ArrowUpRight size={15} />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setOpen(false)} data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
            {item.label} <ChevronRight size={15} />
          </a>
        ))}
        <a href={gmailComposeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} data-testid="link-mobile-contact">
          Speak With Our Team <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-art" src={heroBackground} alt="" aria-hidden="true" fetchPriority="high" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal delay={100}>
              <h1 id="hero-title">WHERE KERALA MEETS DUBAI, <em>PROGRESS FINDS A HOME.</em></h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hero-intro">Meet Petrotek UAE at AKCAF Ponnonakazhcha 2026. From the values that unite a community to the reliability that keeps industries moving, progress is always built on trust. Petrotek UAE is delighted to be part of a celebration that brings Kerala’s culture, memories and community spirit to the heart of Dubai.</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="hero-actions">
                <a className="button-primary" href="#about" data-testid="link-hero-discover">Discover Petrotek UAE <ArrowDownRight size={16} /></a>
              </div>
            </Reveal>
          </div>
          <Reveal className="hero-brand-panel" delay={180}>
            <div className="hero-logo-wrap">
              <img className="event-logo" src={eventLogo} alt="Official AKCAF Ponnonakazhcha 2026 event logo" />
            </div>
          </Reveal>
          <Reveal className="hero-foot" delay={360}>
            <div className="hero-event">
              <CalendarDays size={19} />
              <div><strong>04 OCTOBER 2026</strong><span>Amity School Dubai</span></div>
            </div>
            <div className="hero-event">
              <MapPin size={19} />
              <div><strong>11 OCTOBER 2026</strong><span>Dubai World Trade Centre<br />Zabeel Halls 5 &amp; 6</span></div>
            </div>
          </Reveal>
        </div>
      </div>
      <a className="scroll-cue" href="#about" data-testid="link-scroll-cue">Scroll to explore <ArrowDownRight size={14} /></a>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <div className="eyebrow">The Petrotek point of view</div>
          <h2 className="section-title about-title" id="about-title">ROOTED IN <span>TRUST.</span><small>ENGINEERED FOR PROGRESS.</small></h2>
        </Reveal>
        <Reveal className="about-copy" delay={120}>
          <p className="section-copy">Since 2009, Petrotek UAE has supported industries across the UAE with dependable products, technical knowledge and engineering solutions.</p>
          <p className="section-copy">Just as traditions are protected and passed from one generation to the next, industrial performance depends on protecting what matters—machines, productivity, energy and time.</p>
          <p className="section-copy">That is the responsibility behind every solution we provide.</p>
          <div className="about-signature">Engineered for progress</div>
          <div className="tech-drawing" aria-hidden="true"><div className="tech-drawing-line" /></div>
        </Reveal>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="container">
        <Reveal className="solutions-head">
          <div>
            <div className="eyebrow">What keeps industry moving?</div>
            <h2 className="section-title" id="solutions-title">WHAT KEEPS INDUSTRY <em>MOVING?</em></h2>
          </div>
          <p className="section-copy">Behind the food we enjoy, the buildings around us and the products we use, thousands of machines work quietly every day.<br /><br />Petrotek UAE helps those machines perform reliably through three specialised divisions:</p>
        </Reveal>
        <div className="solution-list">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.number} delay={index * 90}>
                <article className="solution-card" data-testid={`card-solution-${solution.number}`}>
                  <div className="solution-no">{solution.number}</div>
                  <div className="solution-icon"><Icon size={25} strokeWidth={1.4} /></div>
                  <div><h3>{solution.title}</h3><p>{solution.description}</p></div>
                  <ChevronRight className="solution-arrow" size={20} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReliabilityStory() {
  return (
    <section className="section reliability" id="reliability" aria-labelledby="reliability-title">
      <div className="container reliability-grid">
        <Reveal>
          <div className="eyebrow">A shared standard</div>
          <h2 className="section-title" id="reliability-title">Reliability is something <em>we all understand.</em></h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="reliability-copy">A celebration succeeds when every detail works together. Industry is no different.<br /><br />One overlooked component can interrupt an entire operation. The correct lubricant, clean compressed air or precise manufacturing tool can protect productivity long before a problem becomes visible.<br /><br />Petrotek UAE helps businesses listen to their machines, prevent avoidable downtime and build performance that lasts.</p>
        </Reveal>
      </div>
      <div className="container">
        <Reveal delay={220}>
          <div className="reliability-steps" aria-label="The path from tradition to lasting progress">
            {reliabilitySteps.map((step, index) => (
              <div className="reliability-step" key={step}>
                <div className="reliability-dot">{String(index + 1).padStart(2, '0')}</div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyPetrotek() {
  return (
    <section className="section why" id="why" aria-labelledby="why-title">
      <div className="container why-grid">
        <Reveal className="why-intro">
          <div className="eyebrow">The reason to connect</div>
          <h2 className="section-title" id="why-title">Why industries choose <em>Petrotek UAE.</em></h2>
          <p className="section-copy">A long-term approach to the details that keep performance moving forward.</p>
        </Reveal>
        <div className="reason-list">
          {reasons.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="reason-row" data-testid={`row-reason-${index + 1}`}>
                <div className="reason-no">{String(index + 1).padStart(2, '0')}</div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCulture() {
  return (
    <section className="section culture" id="event" aria-labelledby="event-title">
      <div className="container culture-grid">
        <Reveal className="culture-art">
          <div className="culture-leaf" aria-hidden="true" />
          <div className="culture-leaf culture-leaf--right" aria-hidden="true" />
          <img src={eventLogo} alt="AKCAF Ponnonakazhcha 2026 official event logo" loading="lazy" />
        </Reveal>
        <Reveal className="culture-copy" delay={120}>
          <div className="eyebrow">AKCAF Ponnonakazhcha 2026</div>
          <h2 className="section-title" id="event-title">CELEBRATING OUR ROOTS. <em>SUPPORTING THE UAE’S FUTURE.</em></h2>
          <p>AKCAF Ponnonakazhcha celebrates the culture, memories and relationships that continue to connect Malayalis across borders.<br /><br />Petrotek UAE is proud to share that spirit—carrying forward values of trust, responsibility and progress while contributing to the industries that build the UAE.</p>
          <div className="culture-mark" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}

function EventDates() {
  return (
    <section className="section dates" id="dates" aria-labelledby="dates-title">
      <div className="container">
        <Reveal className="dates-head">
          <div>
            <div className="eyebrow">Two dates. One grand celebration.</div>
            <h2 className="section-title" id="dates-title">Come for the culture.<br /><em>Leave with a memory.</em></h2>
          </div>
          <p className="date-note">Meet Petrotek UAE at AKCAF Ponnonakazhcha 2026 in Dubai.</p>
        </Reveal>
        <div className="date-list">
          {dates.map((date, index) => {
            const Icon = date.icon;
            return (
              <Reveal key={date.day} delay={index * 100}>
                <article className="date-card" data-testid={`card-date-${date.day}`}>
                  <div className="date-top"><Icon size={18} /> {index === 0 ? 'First gathering' : 'Grand celebration'}</div>
                  <h3>{date.day} <span>{date.month} 2026</span></h3>
                  <p>{date.place}{date.detail ? <><br />{date.detail}</> : null}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      className="cta"
      id="contact"
      aria-labelledby="cta-title"
      style={{ backgroundImage: `linear-gradient(110deg, rgba(61,14,19,.98), rgba(111,16,24,.91)), url(${cinematicPoster})` }}
    >
      <div className="container cta-inner">
        <Reveal>
          <div className="eyebrow">Start a conversation</div>
          <h2 id="cta-title">LET’S BUILD RELIABLE PROGRESS TOGETHER</h2>
          <p>Looking for dependable industrial supplies, technical guidance or engineering solutions? Our team would be pleased to understand your requirements and explore how Petrotek UAE can support your operations.</p>
          <div className="cta-actions">
            <a className="button-primary" href={gmailComposeUrl} target="_blank" rel="noreferrer" data-testid="link-cta-email">Speak With Our Team <Mail size={16} /></a>
            <a className="button-secondary" href="#solutions" data-testid="link-cta-solutions">Explore Our Solutions <ArrowDownRight size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <PetrotekMark />
            <img className="footer-event-logo" src={eventLogo} alt="AKCAF Ponnonakazhcha 2026 event logo" loading="lazy" />
          </div>
          <div>
            <h3>Explore</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              {navItems.map((item) => <a href={item.href} key={item.href} data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}
            </nav>
          </div>
          <div>
            <h3>Connect</h3>
            <div className="footer-contact">
              <a href="tel:+97142896166" data-testid="link-footer-phone"><Phone size={15} /> +971 4 289 6166</a>
              <a href={`mailto:${contactEmail}`} data-testid="link-footer-email"><Mail size={15} /> {contactEmail}</a>
              <a href="https://www.petrotek.de" target="_blank" rel="noreferrer" data-testid="link-footer-website"><ArrowUpRight size={15} /> www.petrotek.de</a>
              <span><ShieldCheck size={15} /> Reliability-Led Sustainability.</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>Petrotek General Trading LLC</span><span>AKCAF Ponnonakazhcha 2026 · Dubai, UAE</span></div>
      </div>
    </footer>
  );
}

function Home() {
  useEffect(() => {
    document.title = 'Petrotek UAE at AKCAF Ponnonakazhcha 2026 | Industrial Reliability Solutions';
    const description = 'Meet Petrotek UAE at AKCAF Ponnonakazhcha 2026 in Dubai. Discover reliable solutions for industrial lubrication, compressed air and CNC manufacturing technology.';
    const setMeta = (attribute: string, key: string, content: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', document.title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', campaignPoster);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', document.title);
    setMeta('name', 'twitter:description', description);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .1 });
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <Solutions />
        <ReliabilityStory />
        <WhyPetrotek />
        <EventCulture />
        <EventDates />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;