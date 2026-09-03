import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agree) {
      alert("Please accept the Terms & Privacy Policy.");
      return;
    }

    try {
      setLoading(true);

      // Temporary frontend registration
      // Node.js API will be connected here later.

      localStorage.setItem(
        "docvault_user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
        })
      );

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="register-info">

        <Link to="/" className="register-logo">
          <div className="register-logo-icon">
            <ShieldCheck size={24} />
          </div>

          <span>DocVault AI</span>
        </Link>

        <div className="register-info-content">

          <span className="register-badge">
            <CheckCircle2 size={14} />
            Smart Document Management
          </span>

          <h1>
            Your documents.
            <br />
            <span>Your opportunities.</span>
          </h1>

          <p>
            Create your secure DocVault AI account and
            manage important documents, expiry dates and
            personalized opportunities from one place.
          </p>

          <div className="register-benefits">

            <div>
              <CheckCircle2 size={17} />
              <span>Secure document storage</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Smart expiry reminders</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>AI-powered opportunities</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Simple and easy to use</span>
            </div>

          </div>

        </div>

        <div className="register-footer">
          © 2026 DocVault AI. All rights reserved.
        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="register-form-area">

        <div className="register-card">

          <div className="register-card-header">

            <div className="mobile-register-logo">
              <ShieldCheck size={22} />
            </div>

            <h2>Create your account</h2>

            <p>
              Start managing your documents smarter.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="register-field">

              <label>Full Name</label>

              <div className="register-input">

                <User size={17} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

              </div>

            </div>


            {/* Email */}

            <div className="register-field">

              <label>Email Address</label>

              <div className="register-input">

                <Mail size={17} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

              </div>

            </div>


            {/* Password */}

            <div className="register-field">

              <label>Password</label>

              <div className="register-input">

                <Lock size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

              <small>
                Use at least 6 characters.
              </small>

            </div>


            {/* Confirm Password */}

            <div className="register-field">

              <label>Confirm Password</label>

              <div className="register-input">

                <Lock size={17} />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {/* Terms */}

            <div className="register-terms">

              <input
                type="checkbox"
                checked={agree}
                onChange={(e) =>
                  setAgree(e.target.checked)
                }
              />

              <span>
                I agree to the{" "}
                <a href="#terms">Terms of Service</a>{" "}
                and{" "}
                <a href="#privacy">
                  Privacy Policy
                </a>
              </span>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="register-submit"
              disabled={loading}
            >
              {loading ? (
                "Creating Account..."
              ) : (
                <>
                  Create Account
                  <ArrowRight size={17} />
                </>
              )}
            </button>

          </form>


          {/* Login */}

          <div className="register-login">

            Already have an account?

            <Link to="/login">
              Sign in
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;