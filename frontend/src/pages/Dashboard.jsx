import {
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Upload,
  ArrowRight,
  CalendarDays,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  // Temporary data
  // Backend connect hone ke baad ye data API se aayega.
  const stats = [
    {
      title: "Total Documents",
      value: 8,
      icon: FileText,
      className: "blue",
    },
    {
      title: "Active",
      value: 5,
      icon: CheckCircle,
      className: "green",
    },
    {
      title: "Expiring Soon",
      value: 2,
      icon: Clock,
      className: "orange",
    },
    {
      title: "Expired",
      value: 1,
      icon: AlertTriangle,
      className: "red",
    },
  ];

  const documents = [
    {
      name: "Income Certificate",
      type: "Certificate",
      expiry: "25 Aug 2026",
      days: 9,
      status: "Attention",
    },
    {
      name: "Driving Licence",
      type: "Identity",
      expiry: "10 Sep 2026",
      days: 25,
      status: "Active",
    },
    {
      name: "Aadhaar Card",
      type: "Identity",
      expiry: "No Expiry",
      days: null,
      status: "Active",
    },
    {
      name: "10th Marksheet",
      type: "Education",
      expiry: "No Expiry",
      days: null,
      status: "Active",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* ================= HEADER ================= */}
      <div className="dashboard-header">

        <div>
          <p className="dashboard-label">
            AI-Powered Document Management
          </p>

          <h1>Welcome back 👋</h1>

          <p className="dashboard-subtitle">
            Manage your documents, track expiry dates and discover
            new opportunities.
          </p>
        </div>

        <Link to="/upload" className="upload-btn">
          <Upload size={18} />
          Upload Document
        </Link>

      </div>


      {/* ================= STAT CARDS ================= */}
      <div className="dashboard-stats">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className={`stat-card ${stat.className}`}
              key={stat.title}
            >
              <div className="stat-icon">
                <Icon size={23} />
              </div>

              <div className="stat-info">
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
              </div>
            </div>
          );
        })}

      </div>


      {/* ================= MAIN GRID ================= */}
      <div className="dashboard-grid">

        {/* ================= RECENT DOCUMENTS ================= */}
        <section className="dashboard-section documents-section">

          <div className="section-header">

            <div>
              <h2>Recent Documents</h2>
              <p>Your recently added documents</p>
            </div>

            <Link to="/documents" className="view-all">
              View All
              <ArrowRight size={16} />
            </Link>

          </div>


          <div className="document-list">

            {documents.map((document) => (

              <div className="dashboard-document" key={document.name}>

                <div className="document-icon">
                  <FileText size={21} />
                </div>

                <div className="document-info">

                  <h3>{document.name}</h3>

                  <p>{document.type}</p>

                </div>

                <div className="document-expiry">

                  <div>
                    <CalendarDays size={15} />
                    {document.expiry}
                  </div>

                  {document.days !== null && (
                    <span
                      className={
                        document.days <= 10
                          ? "expiry-danger"
                          : "expiry-warning"
                      }
                    >
                      Expires in {document.days} days
                    </span>
                  )}

                </div>

                <div
                  className={`document-status ${
                    document.status === "Attention"
                      ? "attention"
                      : "active"
                  }`}
                >
                  {document.status}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= EXPIRY ALERT ================= */}
        <section className="dashboard-section expiry-section">

          <div className="section-header">

            <div>
              <h2>Expiry Alerts</h2>
              <p>Documents that need your attention</p>
            </div>

          </div>


          <div className="alert-card danger">

            <div className="alert-icon">
              <AlertTriangle size={21} />
            </div>

            <div>

              <h3>Income Certificate</h3>

              <p>
                Your document will expire in
                <strong> 9 days</strong>.
              </p>

              <button>
                Renew Document
                <ArrowRight size={15} />
              </button>

            </div>

          </div>


          <div className="alert-card warning">

            <div className="alert-icon">
              <Clock size={21} />
            </div>

            <div>

              <h3>Driving Licence</h3>

              <p>
                Your document will expire in
                <strong> 25 days</strong>.
              </p>

              <button>
                View Document
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </section>

      </div>


      {/* ================= OPPORTUNITIES ================= */}
      <section className="opportunity-banner">

        <div className="opportunity-icon">
          <BriefcaseBusiness size={27} />
        </div>

        <div className="opportunity-content">

          <span>AI Recommendations</span>

          <h2>
            Discover opportunities based on your documents
          </h2>

          <p>
            Find relevant jobs, internships and government
            schemes using your available documents.
          </p>

        </div>

        <Link to="/opportunities" className="opportunity-btn">
          Explore Opportunities
          <ArrowRight size={17} />
        </Link>

      </section>


      {/* ================= QUICK ACTIONS ================= */}
      <section className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="quick-action-grid">

          <Link to="/upload" className="quick-action">

            <div className="quick-icon purple">
              <Upload size={21} />
            </div>

            <div>
              <h3>Upload Document</h3>
              <p>Add a new document to your vault.</p>
            </div>

            <ArrowRight size={18} />

          </Link>


          <Link to="/documents" className="quick-action">

            <div className="quick-icon blue">
              <FileText size={21} />
            </div>

            <div>
              <h3>Manage Documents</h3>
              <p>View and organize all your documents.</p>
            </div>

            <ArrowRight size={18} />

          </Link>


          <Link to="/opportunities" className="quick-action">

            <div className="quick-icon green">
              <BriefcaseBusiness size={21} />
            </div>

            <div>
              <h3>Find Opportunities</h3>
              <p>Explore jobs and government schemes.</p>
            </div>

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;