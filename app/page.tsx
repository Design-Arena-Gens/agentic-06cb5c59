export default function Home() {
  return (
    <main>
      <div className="page">
        <section className="hero">
          <div className="hero-copy">
            <h1 className="hero-title">
              Stop Guessing. Start Growing. The Ahmedabad Digital Agency That Engineers ROI, Not
              Just &lsquo;Likes&rsquo;.
            </h1>
            <p className="hero-subtitle">
              Most agencies burn your budget on vanity metrics. AdCraze uses data-driven systems to
              cut waste and scale your revenue. Specializing in Google Ads, Meta Ads, and
              High-Converting Funnels.
            </p>
            <a className="cta-primary" href="#book-call">
              Get Your Free Audit
            </a>
          </div>
          <div className="hero-visual">
            <div className="dashboard-header">
              <span>AdCraze Command Center</span>
              <span>ROAS Overview</span>
            </div>
            <div className="dashboard-graph">
              <span className="graph-tag">ROAS +326%</span>
              <div className="graph-line">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="graph-labels">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
            <div className="graph-metric">
              <strong>+43% daily</strong>
              <span>Spend efficiency vs. industry avg.</span>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="trust-marquee">
            <strong>Trusted by businesses across Gujarat.</strong>
            <div className="trust-logo">Retail Leaders</div>
            <div className="trust-logo">Real Estate Groups</div>
            <div className="trust-logo">Travel Operators</div>
            <div className="trust-highlight">Avg. Client ROI Increase: 300%+</div>
          </div>
        </section>

        <section className="section">
          <h2>The AdCraze Growth Protocol</h2>
          <div className="protocol-steps">
            <div className="protocol-card">
              <div className="protocol-icon">🔍</div>
              <h3>The Audit (Diagnosis)</h3>
              <p>We analyze where your current ads are leaking money.</p>
            </div>
            <div className="protocol-card">
              <div className="protocol-icon">🛠️</div>
              <h3>The Build (Engineering)</h3>
              <p>
                We deploy high-converting landing pages and precision-targeted Google/Meta
                campaigns.
              </p>
            </div>
            <div className="protocol-card">
              <div className="protocol-icon">🚀</div>
              <h3>The Scale (Optimization)</h3>
              <p>We use daily data reporting to cut losers and scale winners.</p>
            </div>
            <div className="protocol-arrow" />
          </div>
        </section>

        <section className="section">
          <h2>Growth Levers Activated</h2>
          <div className="services">
            <div className="service-card">
              <h3>Google Ads Management</h3>
              <p>Capture high-intent buyers searching for exactly what you sell.</p>
            </div>
            <div className="service-card">
              <h3>Meta (Facebook/Instagram) Ads</h3>
              <p>Stop the scroll and generate leads on autopilot.</p>
            </div>
            <div className="service-card">
              <h3>Conversion Web Design</h3>
              <p>Turn traffic into paying customers with SEO-friendly, fast-loading landing pages.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Why AdCraze is Different</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional Agencies (The Old Way)</th>
                <th>AdCraze (The ROI Way)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary Focus</td>
                <td>&quot;Brand Awareness&quot; &amp; &quot;Creatives&quot;</td>
                <td className="comparison-highlight">&quot;Revenue&quot; &amp; &quot;Math &amp; Data&quot;</td>
              </tr>
              <tr>
                <td>Reporting</td>
                <td>Monthly Reports (Hidden Data)</td>
                <td className="comparison-highlight">Real-Time Transparency</td>
              </tr>
              <tr>
                <td>Approach</td>
                <td>Vague Promises</td>
                <td className="comparison-highlight">Engineered Systems</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="founder-section">
          <div className="founder-photo">
            <div className="founder-initials">KG</div>
            <span>Kishan Gopani</span>
            <small>Founder, AdCraze</small>
          </div>
          <div className="founder-text">
            <h2>Founder&apos;s Note</h2>
            <p>
              &ldquo;I started AdCraze because I was tired of seeing businesses lose money on vague
              marketing. My promise is simple: We treat your budget like our own.&rdquo;
            </p>
            <strong>- Kishan Gopani, Founder</strong>
          </div>
        </section>

        <section className="section prompt-section">
          <h2>Hero Visual Prompt</h2>
          <pre>
            cinematic wide shot of a futuristic digital marketing dashboard floating in a clean, modern
            office space, glass and gold accents, data visualization, glowing green line graphs showing
            upward trends, depth of field, 8k resolution, isometric 3d style, professional corporate
            atmosphere, blue and gold color palette --ar 16:9 --v 6.0
          </pre>
        </section>

        <footer className="footer" id="book-call">
          <div className="footer-info">
            <span><strong>Address:</strong> 19, Ashirwad Society, Ajay Tenement, Vastral, Ahmedabad.</span>
            <span><strong>Phone:</strong> +91 91062-97974</span>
          </div>
          <a className="footer-cta" href="#book-call">
            Ready to scale? Book your strategy call.
          </a>
        </footer>
      </div>
    </main>
  );
}
