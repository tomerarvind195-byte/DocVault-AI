import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BellRing,
  Sparkles,
  FileText,
  ArrowRight,
  Upload,
  Search,
  Clock3,
  LockKeyhole,
  CheckCircle2,
  BriefcaseBusiness,
  Landmark,
} from "lucide-react";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={18} />
            AI-Powered Document Management
          </div>

          <h1>
            Secure Your
            <br />
            Important Documents
            <br />
            <span>with AI Power</span>
          </h1>

          <p>
            Upload, organize, and track your important documents with
            intelligent AI assistance. Never miss an important expiry
            date again.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
              <ArrowRight size={19} />
            </Link>

            <Link to="/login" className="secondary-btn">
              Sign In
            </Link>
          </div>

          <div className="trust-items">
            <div>
              <CheckCircle2 size={19} />
              Secure & Private
            </div>

            <div>
              <CheckCircle2 size={19} />
              AI Powered
            </div>

            <div>
              <CheckCircle2 size={19} />
              Smart Reminders
            </div>
          </div>

        </div>

        {/* Hero illustration */}
        <div className="hero-visual">

          <div className="glow-circle"></div>

          <div className="folder-card">

            <div className="document-paper">
              <FileText size={50} />
              <div className="paper-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="lock-circle">
                <LockKeyhole size={23} />
              </div>
            </div>

          </div>

          <div className="expiry-alert">
            <BellRing size={25} />

            <div>
              <strong>Expiry Alert</strong>
              <small>Passport expires soon</small>
            </div>
          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}
      <section className="features-section">

        <div className="section-heading">
          <span>POWERFUL FEATURES</span>

          <h2>
            Everything you need to manage
            <br />
            your documents smarter.
          </h2>

          <p>
            One simple platform to securely store documents,
            monitor expiry dates and discover opportunities.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">
              <Sparkles />
            </div>

            <h3>AI Document Detection</h3>

            <p>
              Automatically identify uploaded documents and
              organize them intelligently.
            </p>

            <Link to="/upload">
              Try Now <ArrowRight size={16} />
            </Link>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              <Clock3 />
            </div>

            <h3>Expiry Tracking</h3>

            <p>
              Keep track of certificates, licences and other
              important document expiry dates.
            </p>

            <Link to="/documents">
              View Documents <ArrowRight size={16} />
            </Link>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck />
            </div>

            <h3>Secure Storage</h3>

            <p>
              Keep all your important documents organized
              in one secure digital vault.
            </p>

            <Link to="/register">
              Create Vault <ArrowRight size={16} />
            </Link>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              <BellRing />
            </div>

            <h3>Smart Reminders</h3>

            <p>
              Get reminders before your documents expire
              so you never miss an important renewal.
            </p>

            <Link to="/register">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>

          <h2>
            Manage your documents
            <br />
            in three simple steps.
          </h2>
        </div>

        <div className="steps-grid">

          <div className="step-card">
            <div className="step-number">01</div>

            <div className="step-icon">
              <Upload />
            </div>

            <h3>Upload Documents</h3>

            <p>
              Upload certificates, licences, IDs and other
              important documents to your digital vault.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">02</div>

            <div className="step-icon">
              <Search />
            </div>

            <h3>AI Analyzes</h3>

            <p>
              AI and OCR can identify document types and
              extract important information.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">03</div>

            <div className="step-icon">
              <BellRing />
            </div>

            <h3>Track & Get Alerts</h3>

            <p>
              Monitor expiry dates and receive timely
              reminders before important documents expire.
            </p>
          </div>

        </div>
      </section>


      {/* ================= OPPORTUNITIES ================= */}
      <section className="opportunity-section">

        <div className="opportunity-content">

          <div className="opportunity-text">

            <div className="section-label">
              <Sparkles size={18} />
              AI OPPORTUNITY DISCOVERY
            </div>

            <h2>
              Your documents can
              <span> unlock opportunities.</span>
            </h2>

            <p>
              DocVault AI can analyze the documents you hold
              and help discover relevant jobs, internships and
              government schemes.
            </p>

            <Link to="/opportunities" className="white-btn">
              Explore Opportunities
              <ArrowRight size={18} />
            </Link>

          </div>


          <div className="opportunity-cards">

            <div className="mini-opportunity">
              <div className="mini-icon">
                <BriefcaseBusiness />
              </div>

              <div>
                <h3>Jobs & Internships</h3>
                <p>Find opportunities matching your profile.</p>
              </div>
            </div>


            <div className="mini-opportunity">
              <div className="mini-icon">
                <Landmark />
              </div>

              <div>
                <h3>Government Schemes</h3>
                <p>Discover schemes you may be eligible for.</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= WHY DOCVAULT ================= */}
      <section className="why-section">

        <div className="section-heading">
          <span>WHY DOCVAULT AI?</span>

          <h2>
            One platform for your
            <br />
            important documents.
          </h2>
        </div>

        <div className="why-grid">

          <div>
            <CheckCircle2 />
            <strong>Keep documents in one place</strong>
          </div>

          <div>
            <CheckCircle2 />
            <strong>Never miss expiry dates</strong>
          </div>

          <div>
            <CheckCircle2 />
            <strong>Discover personalized opportunities</strong>
          </div>

          <div>
            <CheckCircle2 />
            <strong>Reduce repetitive form filling</strong>
          </div>

          <div>
            <CheckCircle2 />
            <strong>AI-powered document analysis</strong>
          </div>

          <div>
            <CheckCircle2 />
            <strong>Secure document management</strong>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <Sparkles size={35} />

        <h2>Ready to secure your documents?</h2>

        <p>
          Create your digital vault and start managing
          your important documents smarter.
        </p>

        <Link to="/register" className="cta-btn">
          Create Your Vault
          <ArrowRight size={18} />
        </Link>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-logo">
          <div className="logo-box">
            <ShieldCheck size={22} />
          </div>

          <span>DocVault AI</span>
        </div>

        <p>
          Smart document management powered by AI.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/documents">Documents</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="copyright">
          © 2026 DocVault AI. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;