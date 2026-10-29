import { useState, type FormEvent } from 'react';

const base = import.meta.env.BASE_URL;
const asset = (name: string) => `${base}assets/${name}`;
const posterBase = `${base}posters/`;

const solutions = [
  {
    n: '01 / MACHINERY',
    title: 'Machinery for your application',
    body: 'Start with the component you need to produce. Material, geometry, tolerances, batch size and process requirements help define the machinery discussion. Speak with Petrotek about CNC and EDM solutions relevant to your work.',
    focus: 'Application requirements, machine specifications and supporting equipment.',
    link: 'Explore CNC and EDM solutions',
    href: 'https://petrotek.ae/products?sub-category=cnc-milling',
    secondLink: 'Explore wire EDM',
    secondHref: 'https://petrotek.ae/products?sub-category=wirecut-machine',
  },
  {
    n: '02 / FLUIDS & LUBRICATION',
    title: 'Metalworking fluids and industrial lubrication',
    body: 'Fluid selection should reflect the material, machining process and equipment requirements. Explore cutting oils, water-miscible fluids and industrial lubricants with Petrotek, including the technical support available for selection and fluid management.',
    focus: 'The application, fluid requirements and monitoring practices.',
    link: 'Explore metalworking fluids',
    href: 'https://petrotek.ae/products/cutting-oils',
  },
  {
    n: '03 / COMPRESSED AIR',
    title: 'Compressed air and air treatment',
    body: 'Begin with the air your process needs: flow, pressure and air quality at the point of use. Discuss compressor selection and the role of air treatment, filtration and system assessment in matching supply to demand.',
    focus: 'Demand, operating conditions and air quality requirements.',
    link: 'Explore compressed air solutions',
    href: 'https://petrotek.ae/products?sub-category=compressed-air-filtration',
  },
];

const education = [
  {
    tag: 'VALUE / 01',
    title: 'The purchase price is only the start',
    question: 'Which gives a clearer picture of value: the quoted price or the cost of producing acceptable parts?',
    answer: 'The quoted price is one input. A wider assessment can include tooling, fluids, electricity, maintenance, rejected parts and downtime. Compare alternatives under defined operating conditions before drawing conclusions.',
  },
  {
    tag: 'SYSTEMS / 02',
    title: 'A bigger compressor is not an automatic answer',
    question: 'If pressure falls during production, should you immediately buy a bigger compressor?',
    answer: 'Start by investigating demand, leaks, pressure losses and controls. The cause needs to be understood before deciding whether more capacity is required. Discuss the system requirements with a qualified technical specialist.',
  },
  {
    tag: 'APPLICATION / 03',
    title: 'The fluid question starts with the application',
    question: 'Can one cutting fluid be assumed suitable for every machining operation?',
    answer: 'Selection depends on the material, operation, equipment requirements and supplier guidance. Tell our team what you machine and how you machine it so the discussion starts with the application.',
  },
];

const faqs = [
  {
    q: 'When and where is SteelFab 2027?',
    a: <>SteelFab 2027 takes place from 11 to 14 January 2027 at Expo Centre Sharjah in the UAE. Check the <a href="https://steelfabme.com/" target="_blank" rel="noreferrer">official organiser website</a> for visitor registration and the latest opening hours.</>,
  },
  {
    q: 'Where can I find Petrotek at the exhibition?',
    a: 'Hall and stand details are to be confirmed. Arrange a meeting in advance to help us connect you with the relevant team member.',
  },
  {
    q: 'What can I discuss with the Petrotek team?',
    a: 'Discuss your machinery, metalworking fluid, lubrication or compressed air requirements. No product exhibit list has been confirmed for this page.',
  },
  {
    q: 'Can I contact Petrotek before the exhibition?',
    a: 'Yes. Use the meeting enquiry form to share your area of interest. Your email app will open with a prepared draft; send it to reach our team and discuss your requirements and arrangements.',
  },
];

const posters = [
  ['01', 'Campaign announcement', 'poster-01.svg'],
  ['02', 'Machinery & buying decisions', 'poster-02.svg'],
  ['03', 'Metalworking fluids', 'poster-03.svg'],
  ['04', 'Compressed air data', 'poster-04.svg'],
  ['05', 'Production cost example', 'poster-05.svg'],
  ['06', 'Meeting invitation', 'poster-06.svg'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const closeMenu = () => setMenuOpen(false);

  function submitMeeting(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const name = String(values.get('name') || '');
    const company = String(values.get('company') || '');
    const email = String(values.get('email') || '');
    const interest = String(values.get('interest') || '');
    const day = String(values.get('day') || '');
    const phone = String(values.get('phone') || '');
    const notes = String(values.get('notes') || '');
    const subject = encodeURIComponent(`SteelFab 2027 meeting enquiry — ${name}`);
    const body = encodeURIComponent(
      `Hello Petrotek UAE,\n\nI would like to arrange a meeting at SteelFab 2027.\n\nName: ${name}\nCompany: ${company}\nWork email: ${email}\nArea of interest: ${interest}\nPreferred exhibition day: ${day}\nPhone (optional): ${phone}\nApplication notes (optional): ${notes}\n\nPlease contact me to discuss arrangements.`,
    );
    setFormError('');
    window.location.href = `mailto:lubeinfo@petrotek.de?subject=${subject}&body=${body}`;
  }

  return (
    <div className="campaign">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brandlock" href="#top" aria-label="Petrotek UAE, SteelFab 2027 home" onClick={closeMenu}>
          <img className="petrotek-logo" src={asset('petrotek-wordmark.png')} alt="Petrotek" />
          <span className="brand-divider" aria-hidden="true" />
          <img className="event-logo" src={asset('industrial-cutout.png')} alt="SteelFab Machinery Technology Equipment" />
        </a>
        <nav id="main-nav" className={`navlinks ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#insights" onClick={closeMenu}>Insights</a>
          <a href="#event" onClick={closeMenu}>The event</a>
          <a href="#posters" onClick={closeMenu}>Campaign posters</a>
          <a className="nav-action" href="#meeting" onClick={closeMenu}>Arrange a meeting <span aria-hidden="true">↗</span></a>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow hero-kicker">Petrotek UAE at SteelFab 2027</p>
              <h1 className="display" id="hero-title">What is your production <em>really costing you?</em></h1>
              <p className="hero-intro">Every production decision has a cost beyond the purchase price. Machine capability, fluid selection, compressed air and maintenance all deserve a closer look. Meet Petrotek UAE at SteelFab to explore industrial solutions around the requirements of your operation.</p>
              <div className="hero-buttons">
                <a className="button" href="#solutions">Explore our solutions <span aria-hidden="true">↘</span></a>
                <a className="button button-outline" href="#meeting">Arrange a meeting <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-info"><strong>11–14 JANUARY 2027</strong>EXPO CENTRE SHARJAH · UAE</div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-plate"><div className="hero-plate-inner" /></div>
              <div className="hero-note">A BETTER QUESTION<br /><strong>Changes the conversation.</strong></div>
            </div>
          </div>
        </section>
        <div className="ticker"><div className="shell"><span>Precision starts with the application</span><span>Machinery&nbsp; / &nbsp;Fluids&nbsp; / &nbsp;Compressed air</span><span>Sharjah · UAE</span></div></div>

        <section className="section" aria-labelledby="intro-title">
          <div className="shell intro-section">
            <div className="intro-mark" aria-hidden="true">PTK<br />/ 27</div>
            <div className="intro-copy">
              <p className="eyebrow editorial-label">A closer look at production</p>
              <h2 className="display" id="intro-title">Look beyond the machine.</h2>
              <p>A production line depends on more than its main equipment. The right supporting systems matter too. Explore how machinery, lubrication and compressed air fit the demands of your application, and discuss the factors your team needs to evaluate before making a decision.</p>
              <p>Petrotek General Trading LLC specializes in the procurement and supply of technical products. At SteelFab, the focus is on practical conversations around machining, lubrication and compressed air.</p>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="solutions" aria-labelledby="solutions-title">
          <div className="shell">
            <div className="section-head">
              <div><p className="eyebrow editorial-label">Three useful discussion areas</p><h2 className="display" id="solutions-title">Start with what your process needs.</h2></div>
              <p>These are areas for conversation—not a confirmed list of products physically on the stand.</p>
            </div>
            <div className="solutions">
              {solutions.map((item) => <article className="solution" key={item.n}>
                <span className="solution-index">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="focus"><strong>Discussion focus:</strong> {item.focus}</p>
                <a className="text-link" href={item.href} target="_blank" rel="noreferrer">{item.link} <span aria-hidden="true">↗</span></a>
                {item.secondLink && <a className="text-link" href={item.secondHref} target="_blank" rel="noreferrer">{item.secondLink} <span aria-hidden="true">↗</span></a>}
              </article>)}
            </div>
          </div>
        </section>

        <section className="section" id="insights" aria-labelledby="insights-title">
          <div className="shell">
            <div className="section-head">
              <div><p className="eyebrow editorial-label">Three questions worth asking</p><h2 className="display" id="insights-title">Better decisions start with better questions.</h2></div>
              <p>General educational context only. A discussion is not a diagnosis of your equipment.</p>
            </div>
            <div className="education">
              {education.map((card) => <article className="edu-card" key={card.tag}>
                <span className="eyebrow">{card.tag}</span><h3>{card.title}</h3>
                <p className="question">{card.question}</p><p>{card.answer}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="data-title">
          <div className="shell">
            <div className="section-head">
              <div><p className="eyebrow editorial-label">Put the numbers in context</p><h2 className="display" id="data-title">Two ways to frame the cost.</h2></div>
              <p>Reference points to prompt investigation—not estimates of your facility’s performance.</p>
            </div>
            <div className="data-grid">
              <article className="data-panel">
                <p className="eyebrow">COMPRESSED AIR / SYSTEM LOSSES</p>
                <h3>Compressed air that never reaches the process</h3>
                <div className="data-number">20–30<small>%</small></div>
                <p>of compressor output can sometimes be lost through leaks. The US Department of Energy identifies leaks as a potential source of substantial compressed air waste. Your facility’s actual losses require assessment; this reference is a reason to investigate, not an estimate of your plant.</p>
                <a className="text-link" href="#meeting">Discuss your compressed air requirements <span aria-hidden="true">↘</span></a>
                <p className="source">General industry reference, not a measurement of your system or a Petrotek savings guarantee. Source: US DOE, <a href="https://www.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf" target="_blank" rel="noreferrer"><cite>Improving Compressed Air System Performance</cite></a>, section on compressed air system leaks.</p>
              </article>
              <article className="data-panel">
                <p className="eyebrow">RECURRING INTERRUPTIONS / ILLUSTRATION</p>
                <h3>What recurring stoppages can add up to</h3>
                <div className="data-number">41.7<small> hours / year</small></div>
                <p>An illustrative way to put recurring production interruptions into perspective.</p>
                <table className="calc-table">
                  <thead><tr><th scope="col">Input</th><th scope="col">Illustrative value</th></tr></thead>
                  <tbody>
                    <tr><td>Recurring interruption</td><td>10 minutes per working day</td></tr>
                    <tr><td>Assumed operating year</td><td>250 working days</td></tr>
                    <tr><td>Annual time</td><td>2,500 minutes ÷ 60 = 41.7 hours</td></tr>
                    <tr><td>Assumed cost of the affected hour</td><td>AED 500 per hour</td></tr>
                  </tbody>
                </table>
                <div className="cost-result">2,500 ÷ 60 × AED 500 = approximately AED 20,833</div>
                <p className="source">Hypothetical calculation, not an observed customer result. Actual cost depends on staffing, output, scheduling and recoverable production. This example does not estimate savings from a Petrotek product.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="event-band" id="event" aria-labelledby="event-title">
          <div className="shell event-content">
            <div><p className="eyebrow">SteelFab 2027 / Sharjah</p><h2 className="display" id="event-title">A conversation about your operation.</h2></div>
            <div className="event-details">
              <div className="event-detail"><label>Dates</label><strong>11–14 January 2027</strong></div>
              <div className="event-detail"><label>Venue</label><strong>Expo Centre Sharjah</strong></div>
              <div className="event-detail"><label>Location</label><strong>Sharjah, UAE</strong></div>
              <div className="event-detail"><label>Petrotek stand</label><strong>Details to be confirmed</strong></div>
              <a className="button button-outline" href="https://steelfabme.com/" target="_blank" rel="noreferrer">Official SteelFab website <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section meeting" id="meeting" aria-labelledby="meeting-title">
          <div className="shell meeting-layout">
            <div className="meeting-intro">
              <p className="eyebrow editorial-label">Plan a useful conversation</p>
              <h2 className="display" id="meeting-title">Make time for the right discussion.</h2>
              <p>Planning a machinery purchase, reviewing your lubrication requirements or assessing compressed air needs? Share your area of interest so we can connect you with the relevant colleague.</p>
              <div className="meeting-contact">
                <a href="tel:+97142896166">+971 4 289 6166</a>
                <a href="mailto:lubeinfo@petrotek.de">lubeinfo@petrotek.de</a>
              </div>
            </div>
            <form className="meeting-form" onSubmit={submitMeeting}>
              <div className="form-grid">
                <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" required /></div>
                <div className="field"><label htmlFor="company">Company *</label><input id="company" name="company" autoComplete="organization" required /></div>
                <div className="field wide"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
                <div className="field"><label htmlFor="interest">Area of interest *</label><select id="interest" name="interest" required defaultValue=""><option value="" disabled>Select an area</option><option>Machinery / CNC and EDM</option><option>Metalworking fluids / lubrication</option><option>Compressed air / air treatment</option><option>Other technical discussion</option></select></div>
                <div className="field"><label htmlFor="day">Preferred exhibition day *</label><select id="day" name="day" required defaultValue=""><option value="" disabled>Select a date</option><option>Monday, 11 January 2027</option><option>Tuesday, 12 January 2027</option><option>Wednesday, 13 January 2027</option><option>Thursday, 14 January 2027</option></select></div>
                <div className="field"><label htmlFor="phone">Phone (optional)</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
                <div className="field wide"><label htmlFor="notes">Application notes (optional)</label><textarea id="notes" name="notes" /></div>
              </div>
              <p className="form-note"><strong>How this works:</strong> There is no online form submission. When you continue, your email app opens a prefilled draft addressed to Petrotek. You must send that email for your enquiry to reach us.</p>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              <button className="button form-submit" type="submit">Open prefilled email <span aria-hidden="true">↗</span></button>
            </form>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div><p className="eyebrow editorial-label">Good to know</p><h2 className="display" id="faq-title">Questions, answered.</h2></div>
            <div className="faq-list">{faqs.map((faq) => <article className="faq-item" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></article>)}</div>
          </div>
        </section>

        <section className="section section-dark" id="posters" aria-labelledby="posters-title">
          <div className="shell">
            <div className="section-head">
              <div><p className="eyebrow editorial-label">Campaign toolkit / 1080 × 1350</p><h2 className="display" id="posters-title">Six useful ideas. Ready to share.</h2></div>
              <p>Each poster is a separate static SVG artwork. Download or open each campaign file.</p>
            </div>
            <div className="poster-grid">{posters.map(([n, title, file]) => <article className="poster-card" key={file}>
              <a className="poster-preview" href={`${posterBase}${file}`} target="_blank" rel="noreferrer" aria-label={`Preview poster ${n}: ${title}`}><img src={`${posterBase}${file}`} alt={`Petrotek UAE SteelFab 2027 campaign poster ${n}: ${title}`} loading="lazy" width="1080" height="1350" /></a>
              <div className="poster-meta"><strong>{n} / {title}</strong><a href={`${posterBase}${file}`} download={`petrotek-steelfab-2027-${n}.svg`}>Download SVG ↘</a></div>
            </article>)}</div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <a href="#top" aria-label="Petrotek home"><img src={asset('petrotek-wordmark.png')} alt="Petrotek" /></a>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="#solutions">Solutions</a><a href="#insights">Insights</a><a href="#event">SteelFab 2027</a><a href="#meeting">Arrange a meeting</a>
              <a href="https://petrotek.ae/" target="_blank" rel="noreferrer">Petrotek website ↗</a><a href="https://steelfabme.com/" target="_blank" rel="noreferrer">SteelFab official site ↗</a>
            </nav>
          </div>
          <div className="footer-bottom"><span>Petrotek General Trading LLC · UAE</span><span>11–14 January 2027 · Expo Centre Sharjah, UAE</span><span>© 2027 Petrotek</span></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
