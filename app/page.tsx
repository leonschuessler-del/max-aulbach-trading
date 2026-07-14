import Image from "next/image";

const BROKER_URL = "https://www.vantagemarkets.com/open-live-account/?affid=MzIzNzA2NzE=&invitecode=8RDcF8cx";
const TELEGRAM_URL = "https://t.me/maxaulbach";

const steps = [
  ["01", "Konto eröffnen", "Erstelle über den Partnerlink dein persönliches Handelskonto bei Vantage."],
  ["02", "Konto aktivieren", "Aktiviere dein Konto mit einer Einzahlung ab 250 $. Wähle nur einen Betrag, der zu dir und deinem Risikomanagement passt."],
  ["03", "Nachweis senden", "Schicke Max auf Telegram einen Screenshot deiner Kontoeröffnung und Einzahlung. Persönliche Daten kannst du schwärzen."],
  ["04", "Zugang erhalten", "Nach der Prüfung erhältst du den Zugang zur kostenlosen MA Trades Telegram-Community."],
];

const faqs = [
  ["Ist der Zugang wirklich kostenlos?", "Ja. Es gibt kein Abonnement und keine versteckten Community-Gebühren. Beim Trading selbst können Brokerkosten, Spreads und Verluste entstehen."],
  ["Brauche ich Trading-Erfahrung?", "Nein. Die Setups und Marktgedanken werden verständlich geteilt. Jede Handelsentscheidung und jedes Risiko bestimmst du trotzdem selbst."],
  ["Kopiere ich die Trades automatisch?", "Nein. Du erhältst Informationen zu Setups, Einstiegen, Stop-Loss und möglichen Zielbereichen. Du entscheidest eigenständig, ob du handelst."],
  ["Sind Gewinne garantiert?", "Nein. Trading ist mit erheblichen Risiken verbunden. Vergangene Ergebnisse sind keine Garantie für zukünftige Erfolge."],
  ["Wie bekomme ich Zugang?", "Eröffne dein Konto über den Partnerlink, aktiviere es und sende den Nachweis anschließend über Telegram an Max."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hauptnavigation">
          <a className="brand-logo" href="#top" aria-label="Max Aulbach Trade Company Startseite">
            <Image src="/images/ma-logo-transparent.png" alt="Max Aulbach Trade Company" width={900} height={769} priority />
          </a>
          <div className="nav-links"><a href="#ablauf">Ablauf</a><a href="#about">Über Max</a><a href="#faq">FAQ</a></div>
          <a className="nav-cta" href={BROKER_URL} target="_blank" rel="sponsored noreferrer noopener">Kostenlos starten <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/images/max-hero-laptop.jpg" alt="Max Aulbach beim Trading am Laptop" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <p className="eyebrow"><span /> MA TRADES · KOSTENLOSER ZUGANG</p>
          <h1>Ich trade.<br />Ich teile.<br /><em>Du entscheidest.</em></h1>
          <p className="hero-copy">Erhalte Einblicke in meine Setups, Analysen und Trades – transparent, nachvollziehbar und direkt auf dein Handy.</p>
          <div className="hero-actions">
            <a className="button button-light" href={BROKER_URL} target="_blank" rel="sponsored noreferrer noopener">Jetzt kostenlos starten <Arrow /></a>
            <a className="text-link" href="#ablauf">So funktioniert&apos;s <span>↓</span></a>
          </div>
          <div className="trust-row"><span>Keine Abonnements</span><span>Keine versteckten Kosten</span><span>Volle Kontrolle</span></div>
        </div>
        <p className="hero-index">01 / MA TRADES</p>
      </section>

      <section className="intro section shell">
        <div><p className="kicker">Trading – klar & direkt</p><h2>Deine Trades.<br /><i>Direkt auf dein Handy.</i></h2></div>
        <div className="intro-copy"><p>Ich analysiere die Märkte, entwickle meine Setups und teile interessante Trading-Möglichkeiten mit der Community.</p><p>Du bekommst alle wichtigen Informationen kompakt und behältst jederzeit die volle Kontrolle über deine Entscheidungen.</p></div>
      </section>

      <section className="mosaic shell" aria-label="Einblicke in MA Trades">
        <figure className="mosaic-tall"><Image src="/images/audi-hotel.jpeg" alt="Audi vor einem modernen Hotel bei Nacht" fill sizes="(max-width: 800px) 100vw, 50vw" /></figure>
        <figure><Image src="/images/trading-chart-cash.jpg" alt="Trading-Chart auf einem Laptop" fill sizes="(max-width: 800px) 100vw, 25vw" /></figure>
        <figure><Image src="/images/trading-winter.jpg" alt="Trading-Setup in winterlicher Umgebung" fill sizes="(max-width: 800px) 100vw, 25vw" /></figure>
      </section>

      <section className="process section" id="ablauf">
        <div className="shell"><p className="kicker kicker-light">In vier Schritten</p><div className="section-heading"><h2>So bekommst du<br /><i>deinen Zugang.</i></h2><p>Ein klarer Ablauf. Kein Abo. Keine versteckten Community-Gebühren.</p></div>
          <div className="steps">{steps.map(([number,title,text]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          <div className="process-actions" id="broker"><a className="button button-accent" href={BROKER_URL} target="_blank" rel="sponsored noreferrer noopener">Vantage-Konto eröffnen <Arrow /></a></div>
        </div>
      </section>

      <section className="benefit section shell">
        <div className="benefit-media"><Image src="/images/trading-hotel.jpg" alt="Trading-Setup in einer modernen Lounge" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="benefit-copy"><p className="kicker">Dein Vorteil</p><h2>Ich trade Gold.<br /><i>Du kannst zuschauen.</i></h2><p>Mein Fokus liegt auf XAU/USD. Ich teile meine eigenen Trading-Setups in Echtzeit – klar strukturiert und mit den Informationen, die du brauchst, um jede Entscheidung selbst nachzuvollziehen.</p>
          <ul><li>Setups mit Einstieg und Stop-Loss</li><li>Mögliche Zielbereiche</li><li>Marktanalysen und Insights</li><li>Strategien, Tools und Prozesse</li><li>Keine Gewinnversprechen</li></ul>
        </div>
      </section>

      <section className="about section" id="about"><div className="shell about-grid">
        <div className="about-copy"><p className="kicker kicker-light">Über mich</p><h2>Ich bin Max.<br /><i>Ich nehme dich mit.</i></h2><p>Ich trade aktiv an den Märkten und teile meine eigenen Setups, Analysen und Erfahrungen mit meiner Community. Nicht mit unrealistischen Versprechen, sondern transparent und verständlich.</p><p>Du entscheidest jederzeit selbst, ob du einen Trade verfolgst. Chancen gehören dazu – Risiken genauso.</p><div className="signature">Max Aulbach <span>Founder, MA Trades</span></div></div>
        <div className="about-image"><Image src="/images/max-portrait.jpg" alt="Max Aulbach an seinem Arbeitsplatz" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
      </div></section>

      <section className="gallery shell" aria-label="Lifestyle und Trading"><figure><Image src="/images/ferrari-night.jpg" alt="Ferrari Innenraum bei Nacht" fill sizes="33vw" /></figure><figure><Image src="/images/lifestyle-evening.jpg" alt="Abendlicher Lifestyle-Einblick" fill sizes="33vw" /></figure><figure><Image src="/images/frankfurt-office.jpg" alt="Trading-Arbeitsplatz mit Blick auf die Frankfurter Skyline" fill sizes="33vw" /></figure></section>

      <section className="system section shell"><p className="kicker">Das System</p><div className="section-heading"><h2>Learn. Copy.<br /><i>Optimize.</i></h2><p>Einblicke, Setups und Prozesse – aufgebaut für klare Entscheidungen statt leere Versprechen.</p></div><div className="system-grid"><article><b>01</b><h3>Learn</h3><p>Verstehe Märkte durch Analysen, Strategien und transparente Einblicke.</p></article><article><b>02</b><h3>Copy</h3><p>Erhalte strukturierte Setups und entscheide selbst, ob du sie umsetzt.</p></article><article><b>03</b><h3>Optimize</h3><p>Verbessere deine Abläufe mit hilfreichen Tools und klaren Prozessen.</p></article></div></section>

      <section className="telegram section"><div className="shell telegram-inner"><div><p className="kicker kicker-light">Letzter Schritt</p><h2>Nachweis senden.<br /><i>Zugang erhalten.</i></h2><p>Du hast dein Konto eröffnet und aktiviert? Schicke den Nachweis jetzt direkt an Max auf Telegram.</p><a className="button button-light" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Auf Telegram schreiben <Arrow /></a></div><div className="telegram-card"><span>TELEGRAM</span><strong>@maxaulbach</strong><p>Screenshot senden · Prüfung abwarten · Zugang erhalten</p></div></div></section>

      <section className="faq section shell" id="faq"><p className="kicker">Gut zu wissen</p><div className="faq-grid"><h2>Häufige<br /><i>Fragen.</i></h2><div>{faqs.map(([q,a],i) => <details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><Image src="/images/trading-chart-cash.jpg" alt="" fill sizes="100vw" /><div className="final-overlay" /><div className="shell final-content"><p className="eyebrow"><span /> DEIN NÄCHSTER SCHRITT</p><h2>Bereit,<br /><i>anzufangen?</i></h2><a className="button button-accent" href={BROKER_URL} target="_blank" rel="sponsored noreferrer noopener">Jetzt kostenlos starten <Arrow /></a></div></section>

      <footer><div className="shell footer-top"><div className="brand-logo brand-logo-footer"><Image src="/images/ma-logo-transparent.png" alt="Max Aulbach Trade Company" width={900} height={769} /></div><p>Eine Trading-Community, aufgebaut auf Transparenz, klaren Strategien und kontinuierlicher Weiterentwicklung.</p><div><a href="https://www.instagram.com/max_aulbach/" target="_blank" rel="noreferrer">Instagram · @Max_Aulbach</a><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a></div></div><div className="shell legal"><p>© 2026 MA Trades™ · Alle Rechte vorbehalten.</p><p>Trading mit CFDs und Forex ist mit erheblichen Risiken verbunden und kann zum vollständigen Verlust des eingesetzten Kapitals führen. Alle Inhalte dienen ausschließlich Informations- und Bildungszwecken und stellen keine Anlageberatung, Handelsempfehlung oder Gewinnzusage dar. Vergangene Ergebnisse sind keine Garantie für zukünftige Erfolge.</p></div></footer>
    </main>
  );
}
