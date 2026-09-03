import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  FileText,
  Bell,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      /*
       * AuthContext ke login function ko call karega.
       */
      await login(formData.email, formData.password);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* ================= LEFT SECTION ================= */}

      <div className="login-left">

        <div className="login-brand">

          <div className="brand-icon">
            <ShieldCheck size={27} />
          </div>

          <span>DocVault AI</span>

        </div>


        <div className="login-hero">

          <div className="hero-badge">
            <Sparkles size={15} />
            Smart Document Management
          </div>

          <h1>
            Your documents.
            <br />

            <span>Your opportunities.</span>
          </h1>

          <p>
            Securely store your important documents, track
            expiry dates and discover personalized
            opportunities with DocVault AI.
          </p>


          {/* Features */}

          <div className="login-features">

            <div className="login-feature">

              <div className="feature-icon">
                <FileText size={19} />
              </div>

              <div>
                <strong>Secure Document Vault</strong>

                <span>
                  Keep your important documents organized
                  in one place.
                </span>
              </div>

            </div>


            <div className="login-feature">

              <div className="feature-icon">
                <Bell size={19} />
              </div>

              <div>
                <strong>Expiry Alerts</strong>

                <span>
                  Never miss an important document renewal
                  deadline.
                </span>
              </div>

            </div>


            <div className="login-feature">

              <div className="feature-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <strong>AI Opportunities</strong>

                <span>
                  Discover jobs and government schemes
                  based on your documents.
                </span>
              </div>

            </div>

          </div>

        </div>


        <div className="login-left-footer">
          © 2026 DocVault AI · Secure. Smart. Simple.
        </div>

      </div>


      {/* ================= RIGHT SECTION ================= */}

      <div className="login-right">

        <div className="login-card">

          <div className="login-card-header">

            <div className="mobile-login-icon">
              <ShieldCheck size={25} />
            </div>

            <h2>Welcome back 👋</h2>

            <p>
              Sign in to access your document vault.
            </p>

          </div>


          {/* Error */}

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          {/* Form */}

          <form onSubmit={handleSubmit}>

            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

              </div>

            </div>


            {/* Password */}

            <div className="form-group">

              <div className="password-label-row">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert(
                      "Password reset functionality will be added with the backend."
                    )
                  }
                >
                  Forgot password?
                </button>

              </div>


              <div className="input-wrapper">

                <Lock size={18} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* Remember */}

            <div className="remember-row">

              <label className="remember-label">

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* Login button */}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="login-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}

            </button>

          </form>


          {/* Register */}

          <div className="register-link">

            Don't have an account?

            <Link to="/register">
              Create an account
            </Link>

          </div>


          {/* Security */}

          <div className="login-security">

            <ShieldCheck size={16} />

            <span>
              Your information is protected with
              secure authentication.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;