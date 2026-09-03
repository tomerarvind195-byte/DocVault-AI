import { FileText, CalendarDays, Eye, Download, Trash2 } from "lucide-react";

function DocumentCard({ document, onDelete }) {
  const {
    document_name,
    document_type,
    expiry_date,
    status = "Active",
  } = document;

  const getStatusClass = () => {
    switch (status.toLowerCase()) {
      case "active":
        return "status-active";
      case "expiring soon":
        return "status-warning";
      case "expired":
        return "status-expired";
      default:
        return "status-active";
    }
  };

  return (
    <div className="document-card">
      {/* Document Icon */}
      <div className="document-icon">
        <FileText size={28} />
      </div>

      {/* Document Information */}
      <div className="document-info">
        <h3>{document_name}</h3>

        <p className="document-type">
          {document_type || "Document"}
        </p>

        <div className="document-expiry">
          <CalendarDays size={16} />
          <span>
            Expires: {expiry_date || "Not available"}
          </span>
        </div>
      </div>

      {/* Status */}
      <div className={`document-status ${getStatusClass()}`}>
        {status}
      </div>

      {/* Actions */}
      <div className="document-actions">
        <button
          className="icon-btn"
          title="View Document"
          onClick={() => console.log("View:", document)}
        >
          <Eye size={18} />
        </button>

        <button
          className="icon-btn"
          title="Download Document"
          onClick={() => console.log("Download:", document)}
        >
          <Download size={18} />
        </button>

        <button
          className="icon-btn delete-btn"
          title="Delete Document"
          onClick={() => onDelete && onDelete(document)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default DocumentCard;
