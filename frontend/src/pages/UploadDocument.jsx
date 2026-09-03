import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Upload,
  FileText,
  Image as ImageIcon,
  X,
  CheckCircle,
  ArrowLeft,
  CalendarDays,
  Tag,
} from "lucide-react";

function UploadDocument() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    document_name: "",
    document_type: "",
    expiry_date: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  const maxSize = 10 * 1024 * 1024; // 10 MB

  const handleFileChange = (selectedFile) => {
    setError("");
    setSuccess("");

    if (!selectedFile) return;

    // File type validation
    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Only PDF, JPG, JPEG and PNG files are allowed.");
      return;
    }

    // File size validation
    if (selectedFile.size > maxSize) {
      setError("File size must be less than 10 MB.");
      return;
    }

    setFile(selectedFile);

    // Image preview
    if (selectedFile.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];

    handleFileChange(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!file) {
      setError("Please select a document to upload.");
      return;
    }

    if (!formData.document_name.trim()) {
      setError("Please enter the document name.");
      return;
    }

    if (!formData.document_type) {
      setError("Please select a document type.");
      return;
    }

    setUploading(true);

    try {
      /*
       * TEMPORARY FRONTEND DEMO
       *
       * Later this will become:
       *
       * const formDataToSend = new FormData();
       * formDataToSend.append("document", file);
       * formDataToSend.append("document_name", formData.document_name);
       * ...
       *
       * axios.post("/api/documents/upload", formDataToSend)
       */

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess("Document uploaded successfully!");

      // Reset form
      setFile(null);
      setPreview(null);

      setFormData({
        document_name: "",
        document_type: "",
        expiry_date: "",
        description: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Redirect after successful upload
      setTimeout(() => {
        navigate("/documents");
      }, 1000);
    } catch (error) {
      console.error("Upload error:", error);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-page">

      {/* Header */}
      <div className="upload-page-header">

        <div>
          <Link to="/documents" className="back-link">
            <ArrowLeft size={17} />
            Back to Documents
          </Link>

          <h1>Upload Document</h1>

          <p>
            Add an important document to your secure DocVault.
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="upload-layout">

          {/* Left - File Upload */}
          <div className="upload-card">

            <div className="upload-card-header">
              <div>
                <h2>Select Document</h2>

                <p>
                  Upload PDF, JPG, JPEG or PNG files.
                </p>
              </div>
            </div>

            {!file ? (
              <div
                className="drop-zone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="drop-zone-icon">
                  <Upload size={30} />
                </div>

                <h3>
                  Drag & drop your document here
                </h3>

                <p>
                  or click to browse from your computer
                </p>

                <span>
                  Maximum file size: 10 MB
                </span>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) =>
                    handleFileChange(e.target.files[0])
                  }
                  hidden
                />
              </div>
            ) : (
              <div className="selected-file">

                <div className="file-preview">

                  {preview ? (
                    <img
                      src={preview}
                      alt="Document preview"
                    />
                  ) : (
                    <FileText size={42} />
                  )}

                </div>

                <div className="selected-file-info">

                  <h3>{file.name}</h3>

                  <p>
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>

                  <span>
                    {file.type === "application/pdf"
                      ? "PDF Document"
                      : "Image Document"}
                  </span>

                </div>

                <button
                  type="button"
                  className="remove-file-btn"
                  onClick={removeFile}
                  title="Remove file"
                >
                  <X size={19} />
                </button>

              </div>
            )}

            <div className="supported-files">

              <div>
                <FileText size={17} />
                PDF
              </div>

              <div>
                <ImageIcon size={17} />
                JPG / PNG
              </div>

              <div>
                <CheckCircle size={17} />
                Max 10 MB
              </div>

            </div>

          </div>

          {/* Right - Document Details */}
          <div className="upload-card">

            <div className="upload-card-header">
              <div>
                <h2>Document Details</h2>

                <p>
                  Provide information about this document.
                </p>
              </div>
            </div>

            {/* Document Name */}
            <div className="upload-form-group">

              <label htmlFor="document_name">
                Document Name
              </label>

              <div className="upload-input">
                <FileText size={18} />

                <input
                  id="document_name"
                  type="text"
                  name="document_name"
                  placeholder="e.g. Aadhaar Card"
                  value={formData.document_name}
                  onChange={handleInputChange}
                />
              </div>

            </div>

            {/* Document Type */}
            <div className="upload-form-group">

              <label htmlFor="document_type">
                Document Type
              </label>

              <div className="upload-input">

                <Tag size={18} />

                <select
                  id="document_type"
                  name="document_type"
                  value={formData.document_type}
                  onChange={handleInputChange}
                >
                  <option value="">
                    Select document type
                  </option>

                  <option value="Identity Proof">
                    Identity Proof
                  </option>

                  <option value="Education">
                    Education
                  </option>

                  <option value="Certificate">
                    Certificate
                  </option>

                  <option value="Licence">
                    Licence
                  </option>

                  <option value="Income">
                    Income
                  </option>

                  <option value="Government Document">
                    Government Document
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>

            </div>

            {/* Expiry Date */}
            <div className="upload-form-group">

              <label htmlFor="expiry_date">
                Expiry Date
              </label>

              <div className="upload-input">

                <CalendarDays size={18} />

                <input
                  id="expiry_date"
                  type="date"
                  name="expiry_date"
                  value={formData.expiry_date}
                  onChange={handleInputChange}
                />

              </div>

              <small>
                Leave empty if this document does not expire.
              </small>

            </div>

            {/* Description */}
            <div className="upload-form-group">

              <label htmlFor="description">
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Add any additional information..."
                value={formData.description}
                onChange={handleInputChange}
              />

            </div>

          </div>

        </div>

        {/* Messages */}
        {error && (
          <div className="upload-message upload-error">
            {error}
          </div>
        )}

        {success && (
          <div className="upload-message upload-success">
            <CheckCircle size={19} />
            {success}
          </div>
        )}

        {/* Actions */}
        <div className="upload-actions">

          <Link
            to="/documents"
            className="upload-cancel-btn"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="upload-submit-btn"
            disabled={uploading}
          >
            {uploading ? (
              "Uploading..."
            ) : (
              <>
                <Upload size={18} />
                Upload Document
              </>
            )}
          </button>

        </div>

      </form>

    </div>
  );
}

export default UploadDocument;