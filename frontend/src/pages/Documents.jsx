import { useState } from "react";
import {
  FileText,
  Search,
  Upload,
  Eye,
  Download,
  Trash2,
  CalendarDays,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

function Documents() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Temporary data
  // Backend connect hone ke baad ye API se aayega.
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Aadhaar Card",
      type: "Identity",
      expiry: "No Expiry",
      status: "Active",
      uploaded: "10 Aug 2026",
    },
    {
      id: 2,
      name: "Driving Licence",
      type: "Identity",
      expiry: "10 Sep 2026",
      status: "Active",
      uploaded: "08 Aug 2026",
      days: 25,
    },
    {
      id: 3,
      name: "Income Certificate",
      type: "Certificate",
      expiry: "25 Aug 2026",
      status: "Expiring Soon",
      uploaded: "05 Aug 2026",
      days: 9,
    },
    {
      id: 4,
      name: "10th Marksheet",
      type: "Education",
      expiry: "No Expiry",
      status: "Active",
      uploaded: "01 Aug 2026",
    },
    {
      id: 5,
      name: "Domicile Certificate",
      type: "Certificate",
      expiry: "15 Jun 2026",
      status: "Expired",
      uploaded: "15 Jun 2025",
      days: -62,
    },
  ]);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || doc.status === filter;

    return matchesSearch && matchesFilter;
  });

  const deleteDocument = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (confirmDelete) {
      setDocuments((prev) =>
        prev.filter((doc) => doc.id !== id)
      );
    }
  };

  const getStatusIcon = (status) => {
    if (status === "Active") {
      return <CheckCircle size={15} />;
    }

    if (status === "Expiring Soon") {
      return <Clock size={15} />;
    }

    return <AlertTriangle size={15} />;
  };

  return (
    <div className="documents-page">

      {/* ================= HEADER ================= */}
      <div className="documents-header">

        <div>
          <p className="page-label">
            Document Vault
          </p>

          <h1>My Documents</h1>

          <p>
            Store, manage and monitor all your important
            documents in one secure place.
          </p>
        </div>

        <Link
          to="/upload"
          className="upload-document-btn"
        >
          <Upload size={18} />
          Upload Document
        </Link>

      </div>


      {/* ================= SUMMARY ================= */}
      <div className="document-summary">

        <div className="summary-item">
          <div className="summary-icon blue">
            <FileText size={20} />
          </div>

          <div>
            <span>Total Documents</span>
            <strong>{documents.length}</strong>
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-icon green">
            <CheckCircle size={20} />
          </div>

          <div>
            <span>Active</span>
            <strong>
              {documents.filter(
                (d) => d.status === "Active"
              ).length}
            </strong>
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-icon orange">
            <Clock size={20} />
          </div>

          <div>
            <span>Expiring Soon</span>
            <strong>
              {documents.filter(
                (d) => d.status === "Expiring Soon"
              ).length}
            </strong>
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-icon red">
            <AlertTriangle size={20} />
          </div>

          <div>
            <span>Expired</span>
            <strong>
              {documents.filter(
                (d) => d.status === "Expired"
              ).length}
            </strong>
          </div>
        </div>

      </div>


      {/* ================= SEARCH + FILTER ================= */}
      <div className="documents-toolbar">

        <div className="document-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <div className="document-filter">

          <Filter size={17} />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option value="All">All Documents</option>
            <option value="Active">Active</option>
            <option value="Expiring Soon">
              Expiring Soon
            </option>
            <option value="Expired">Expired</option>
          </select>

        </div>

      </div>


      {/* ================= DOCUMENT LIST ================= */}
      <div className="documents-container">

        <div className="documents-list-header">

          <h2>
            All Documents
            <span>{filteredDocuments.length}</span>
          </h2>

          <p>
            Your uploaded documents
          </p>

        </div>


        {filteredDocuments.length === 0 ? (

          <div className="no-documents">

            <div className="no-documents-icon">
              <FileText size={32} />
            </div>

            <h3>No documents found</h3>

            <p>
              Try changing your search or upload a new
              document.
            </p>

            <Link
              to="/upload"
              className="empty-upload-btn"
            >
              <Upload size={17} />
              Upload Document
            </Link>

          </div>

        ) : (

          <div className="documents-table">

            {/* TABLE HEADER */}

            <div className="document-table-header">

              <span>Document</span>
              <span>Type</span>
              <span>Expiry Date</span>
              <span>Status</span>
              <span>Actions</span>

            </div>


            {/* DOCUMENT ROWS */}

            {filteredDocuments.map((doc) => (

              <div
                className="document-table-row"
                key={doc.id}
              >

                {/* Document */}

                <div className="document-name-cell">

                  <div className="document-file-icon">
                    <FileText size={20} />
                  </div>

                  <div>
                    <h3>{doc.name}</h3>
                    <p>
                      Uploaded {doc.uploaded}
                    </p>
                  </div>

                </div>


                {/* Type */}

                <div className="document-type">
                  {doc.type}
                </div>


                {/* Expiry */}

                <div className="document-expiry-cell">

                  <div>
                    <CalendarDays size={15} />
                    {doc.expiry}
                  </div>

                  {doc.days !== undefined &&
                    doc.days > 0 && (
                      <small
                        className={
                          doc.days <= 10
                            ? "expiry-critical"
                            : "expiry-normal"
                        }
                      >
                        {doc.days} days remaining
                      </small>
                    )}

                  {doc.days !== undefined &&
                    doc.days < 0 && (
                      <small className="expiry-critical">
                        Expired
                      </small>
                    )}

                </div>


                {/* Status */}

                <div>

                  <span
                    className={`document-status-badge ${doc.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {getStatusIcon(doc.status)}
                    {doc.status}
                  </span>

                </div>


                {/* Actions */}

                <div className="document-actions">

                  <button
                    title="View"
                    className="action-btn view"
                  >
                    <Eye size={17} />
                  </button>

                  <button
                    title="Download"
                    className="action-btn download"
                  >
                    <Download size={17} />
                  </button>

                  <button
                    title="Delete"
                    className="action-btn delete"
                    onClick={() =>
                      deleteDocument(doc.id)
                    }
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* ================= SECURITY INFO ================= */}
      <div className="document-security">

        <div className="security-icon">
          <CheckCircle size={21} />
        </div>

        <div>
          <h3>Your documents are protected</h3>

          <p>
            DocVault AI keeps your documents organized and
            helps you monitor their validity. Secure storage,
            expiry tracking and AI-powered recommendations
            are all available in one place.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Documents;