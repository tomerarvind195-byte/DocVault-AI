import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ShieldCheck,
  FileText,
  Bell,
  Briefcase,
  Settings,
  Edit3,
  Save,
  LogOut,
  CheckCircle2,
} from "lucide-react";

function Profile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Arvind Tomar",
    email: "arvind@example.com",
    phone: "+91 98765 43210",
    location: "Uttar Pradesh, India",
    education: "B.Tech - Information Technology",
    occupation: "Student",
  });

  const [notifications, setNotifications] = useState(true);
  const [expiryAlerts, setExpiryAlerts] = useState(true);
  const [opportunityAlerts, setOpportunityAlerts] = useState(true);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  };

  return (
    <div className="profile-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="profile-header">

        <div>
          <h1>My Profile</h1>

          <p>
            Manage your personal information and DocVault
            preferences.
          </p>
        </div>

        <button
          className={
            editing
              ? "profile-save-btn"
              : "profile-edit-btn"
          }
          onClick={editing ? handleSave : () => setEditing(true)}
        >
          {editing ? (
            <>
              <Save size={16} />
              Save Changes
            </>
          ) : (
            <>
              <Edit3 size={16} />
              Edit Profile
            </>
          )}
        </button>

      </div>


      {/* =================================================
          PROFILE HERO
      ================================================= */}

      <div className="profile-card profile-hero">

        <div className="profile-avatar">
          {profile.name.charAt(0).toUpperCase()}
        </div>

        <div className="profile-hero-info">

          <h2>{profile.name}</h2>

          <p>
            <Mail size={14} />
            {profile.email}
          </p>

          <span className="profile-role">
            <GraduationCap size={13} />
            {profile.occupation}
          </span>

        </div>

        <div className="profile-verified">

          <CheckCircle2 size={17} />

          <div>
            <strong>Verified Account</strong>
            <span>Your account is protected</span>
          </div>

        </div>

      </div>


      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div className="profile-grid">

        {/* ===============================================
            PERSONAL INFORMATION
        =============================================== */}

        <div className="profile-card">

          <div className="profile-section-title">

            <div className="profile-section-icon">
              <User size={17} />
            </div>

            <div>
              <h3>Personal Information</h3>
              <p>Your basic account information</p>
            </div>

          </div>


          <div className="profile-form">

            {/* Name */}

            <div className="profile-field">

              <label>Full Name</label>

              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <User size={15} />
                  {profile.name}
                </div>
              )}

            </div>


            {/* Email */}

            <div className="profile-field">

              <label>Email Address</label>

              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <Mail size={15} />
                  {profile.email}
                </div>
              )}

            </div>


            {/* Phone */}

            <div className="profile-field">

              <label>Phone Number</label>

              {editing ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <Phone size={15} />
                  {profile.phone}
                </div>
              )}

            </div>


            {/* Location */}

            <div className="profile-field">

              <label>Location</label>

              {editing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <MapPin size={15} />
                  {profile.location}
                </div>
              )}

            </div>


            {/* Education */}

            <div className="profile-field">

              <label>Education</label>

              {editing ? (
                <input
                  type="text"
                  name="education"
                  value={profile.education}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <GraduationCap size={15} />
                  {profile.education}
                </div>
              )}

            </div>


            {/* Occupation */}

            <div className="profile-field">

              <label>Occupation</label>

              {editing ? (
                <input
                  type="text"
                  name="occupation"
                  value={profile.occupation}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <Briefcase size={15} />
                  {profile.occupation}
                </div>
              )}

            </div>

          </div>

        </div>


        {/* ===============================================
            DOCUMENT STATISTICS
        =============================================== */}

        <div className="profile-card">

          <div className="profile-section-title">

            <div className="profile-section-icon purple">
              <FileText size={17} />
            </div>

            <div>
              <h3>Document Statistics</h3>
              <p>Overview of your document vault</p>
            </div>

          </div>


          <div className="profile-stats">

            <div className="profile-stat">

              <div className="profile-stat-icon blue">
                <FileText size={18} />
              </div>

              <div>
                <strong>8</strong>
                <span>Total Documents</span>
              </div>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon green">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>5</strong>
                <span>Active Documents</span>
              </div>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon orange">
                <Bell size={18} />
              </div>

              <div>
                <strong>2</strong>
                <span>Expiring Soon</span>
              </div>

            </div>


            <div className="profile-stat">

              <div className="profile-stat-icon red">
                <FileText size={18} />
              </div>

              <div>
                <strong>1</strong>
                <span>Expired</span>
              </div>

            </div>

          </div>

        </div>


        {/* ===============================================
            NOTIFICATION SETTINGS
        =============================================== */}

        <div className="profile-card">

          <div className="profile-section-title">

            <div className="profile-section-icon orange">
              <Bell size={17} />
            </div>

            <div>
              <h3>Notifications</h3>
              <p>Control your DocVault alerts</p>
            </div>

          </div>


          <div className="settings-list">

            {/* General */}

            <div className="setting-row">

              <div className="setting-info">

                <div className="setting-icon">
                  <Bell size={16} />
                </div>

                <div>
                  <strong>Notifications</strong>
                  <span>Receive important updates</span>
                </div>

              </div>

              <button
                className={
                  notifications
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setNotifications(!notifications)
                }
              >
                <span></span>
              </button>

            </div>


            {/* Expiry */}

            <div className="setting-row">

              <div className="setting-info">

                <div className="setting-icon">
                  <ShieldCheck size={16} />
                </div>

                <div>
                  <strong>Expiry Reminders</strong>
                  <span>
                    Get alerts before documents expire
                  </span>
                </div>

              </div>

              <button
                className={
                  expiryAlerts
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setExpiryAlerts(!expiryAlerts)
                }
              >
                <span></span>
              </button>

            </div>


            {/* Opportunities */}

            <div className="setting-row">

              <div className="setting-info">

                <div className="setting-icon">
                  <Briefcase size={16} />
                </div>

                <div>
                  <strong>Opportunity Alerts</strong>
                  <span>
                    Get personalized job and scheme alerts
                  </span>
                </div>

              </div>

              <button
                className={
                  opportunityAlerts
                    ? "toggle active"
                    : "toggle"
                }
                onClick={() =>
                  setOpportunityAlerts(!opportunityAlerts)
                }
              >
                <span></span>
              </button>

            </div>

          </div>

        </div>


        {/* ===============================================
            SECURITY
        =============================================== */}

        <div className="profile-card">

          <div className="profile-section-title">

            <div className="profile-section-icon green">
              <ShieldCheck size={17} />
            </div>

            <div>
              <h3>Security & Account</h3>
              <p>Manage your account security</p>
            </div>

          </div>


          <div className="security-box">

            <div className="security-item">

              <div className="security-icon">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong>Account Security</strong>

                <span>
                  Your documents are protected by
                  DocVault AI.
                </span>
              </div>

              <span className="security-status">
                Secure
              </span>

            </div>


            <div className="security-item">

              <div className="security-icon">
                <Settings size={18} />
              </div>

              <div>
                <strong>Password</strong>

                <span>
                  Keep your password updated regularly.
                </span>
              </div>

              <button className="security-btn">
                Change
              </button>

            </div>

          </div>


          {/* Logout */}

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout from DocVault AI
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;