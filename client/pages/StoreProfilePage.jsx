import React, { useState } from "react";

export default function StoreProfilePage() {
  const [storeInfo, setStoreInfo] = useState({
    name: "Luna Store",
    domain: "lunastore.com",
    address: "123 Main Street, New York, NY 10001",
    timezone: "America/New_York",
    currency: "USD",
    taxId: "US12345678",
  });

  const [ownerInfo, setOwnerInfo] = useState({
    name: "Luna Gilbert",
    email: "luna@lunastore.com",
    supportEmail: "support@lunastore.com",
    phone: "+1 (555) 123-4567",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    lowStockNotif: true,
    autoOrderConfirm: false,
  });

  const [theme, setTheme] = useState("purple");
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: ownerInfo.name,
    email: ownerInfo.email,
    supportEmail: ownerInfo.supportEmail,
    phone: ownerInfo.phone,
  });

  const themes = [
    { id: "purple", name: "Purple", color: "#7c3aed" },
    { id: "blue", name: "Blue", color: "#3b82f6" },
    { id: "green", name: "Green", color: "#10b981" },
  ];

  const handleThemeChange = (themeId) => {
    setTheme(themeId);
    const themeColor = themes.find((t) => t.id === themeId)?.color;
    if (themeColor) {
      document.documentElement.style.setProperty("--primary", themeColor);
      document.documentElement.style.setProperty("--primary-dark", themeColor);
    }
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSavePreferences = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    setOwnerInfo(contactFormData);
    setShowContactModal(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const ToggleSwitch = ({ checked, onChange }) => {
    return (
      <button
        className={`switch ${checked ? "active" : ""}`}
        onClick={() => onChange(!checked)}
        type="button"
      >
        <div className="switch-thumb" />
      </button>
    );
  };

  return (
    <div>
      {/* Success Message */}
      {showSuccessMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#10b981",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 500,
          }}
        >
          ✓ Changes saved successfully!
        </div>
      )}

      {/* Store Information Card */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div className="card-header">
          <div className="card-title">Store Information</div>
        </div>
        <div className="grid grid-cols-2" style={{ marginBottom: "20px" }}>
          <div>
            <div style={{ marginBottom: "4px" }}>
              <strong>Store Name</strong>
            </div>
            <div style={{ color: "#6b7280" }}>{storeInfo.name}</div>
          </div>
          <div>
            <div style={{ marginBottom: "4px" }}>
              <strong>Domain / URL</strong>
            </div>
            <div style={{ color: "#6b7280" }}>{storeInfo.domain}</div>
          </div>
          <div>
            <div style={{ marginBottom: "4px" }}>
              <strong>Address</strong>
            </div>
            <div style={{ color: "#6b7280" }}>{storeInfo.address}</div>
          </div>
          <div>
            <div style={{ marginBottom: "4px" }}>
              <strong>Time Zone</strong>
            </div>
            <div style={{ color: "#6b7280" }}>{storeInfo.timezone}</div>
          </div>
          <div>
            <div style={{ marginBottom: "4px" }}>
              <strong>Default Currency</strong>
            </div>
            <div style={{ color: "#6b7280" }}>{storeInfo.currency}</div>
          </div>
          <div>
            <div style={{ marginBottom: "4px" }}>
              <strong>Tax ID</strong>
            </div>
            <div style={{ color: "#6b7280" }}>{storeInfo.taxId}</div>
          </div>
        </div>
        <button className="btn btn-primary">Edit Store Info</button>
      </div>

      {/* Owner & Contact Card */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div className="card-header">
          <div className="flex-between" style={{ width: "100%" }}>
            <div className="card-title">Owner & Contact</div>
            <button
              className="btn btn-primary"
              onClick={() => {
                setContactFormData({
                  name: ownerInfo.name,
                  email: ownerInfo.email,
                  supportEmail: ownerInfo.supportEmail,
                  phone: ownerInfo.phone,
                });
                setShowContactModal(true);
              }}
            >
              Update Contact Info
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "4px",
              }}
            >
              Owner Name
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {ownerInfo.name}
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "4px",
              }}
            >
              Email
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {ownerInfo.email}
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "4px",
              }}
            >
              Support Email
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {ownerInfo.supportEmail}
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "4px",
              }}
            >
              Phone
            </div>
            <div style={{ fontSize: "14px", fontWeight: "500" }}>
              {ownerInfo.phone}
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Card */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div className="card-header">
          <div className="card-title">Preferences & Settings</div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          {[
            {
              key: "emailNotifications",
              label: "Enable email notifications",
              description: "Receive updates about store activity",
            },
            {
              key: "lowStockNotif",
              label: "Notify on low stock",
              description: "Get alerts when inventory runs low",
            },
            {
              key: "autoOrderConfirm",
              label: "Automatic order confirmation",
              description: "Auto-confirm orders without manual review",
            },
          ].map((pref) => (
            <div
              key={pref.key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              <div>
                <div style={{ fontWeight: "500", marginBottom: "2px" }}>
                  {pref.label}
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>
                  {pref.description}
                </div>
              </div>
              <ToggleSwitch
                checked={preferences[pref.key]}
                onChange={(checked) => {
                  setPreferences((prev) => ({ ...prev, [pref.key]: checked }));
                }}
              />
            </div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={handleSavePreferences}>
          Save Preferences
        </button>
      </div>

      {/* Theme Card */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Theme Preview</div>
        </div>

        {/* Theme Preview Box */}
        <div
          style={{
            padding: "24px",
            background: "linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              height: "100px",
              borderRadius: "8px",
              background: `linear-gradient(135deg, ${themes.find((t) => t.id === theme)?.color} 0%, ${themes.find((t) => t.id === theme)?.color}dd 100%)`,
              marginBottom: "12px",
            }}
          />
          <div style={{ fontSize: "13px", color: "#6b7280" }}>
            This shows how your selected theme will appear in your storefront
          </div>
        </div>

        {/* Theme Color Selection */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "12px",
              fontWeight: "500",
            }}
          >
            Theme Color
          </label>
          <div style={{ display: "flex", gap: "12px" }}>
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => handleThemeChange(themeOption.id)}
                style={{
                  padding: "12px 20px",
                  border:
                    theme === themeOption.id
                      ? "2px solid #1f2937"
                      : "1px solid #e5e7eb",
                  borderRadius: "8px",
                  background: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: themeOption.color,
                  }}
                />
                {themeOption.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info Modal */}
      {showContactModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowContactModal(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Update Contact Information</div>
              <button
                className="close-btn"
                onClick={() => setShowContactModal(false)}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleContactFormSubmit}>
              <div className="form-group">
                <label className="form-label">Owner Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={contactFormData.name}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={contactFormData.email}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Support Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={contactFormData.supportEmail}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      supportEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={contactFormData.phone}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowContactModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
