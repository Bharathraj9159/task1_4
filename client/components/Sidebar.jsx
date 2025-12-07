import React from "react";

export default function Sidebar({ currentPage, onNavigate, isOpen, onToggle }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "sales", label: "Sales", icon: "💹" },
    { id: "catalog", label: "Catalog", icon: "📦" },
    { id: "providers", label: "Providers", icon: "🤝" },
    { id: "store-profile", label: "Store Profile", icon: "🏪" },
    { id: "reports", label: "Reports", icon: "📈" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 50,
          }}
          onClick={() => onToggle()}
        />
      )}

      <div className={`sidebar ${isOpen ? "mobile-visible" : "mobile-hidden"}`}>
        <div className="logo-area">
          <div className="logo-text">ROCERS</div>
          <div className="logo-subtext">Web Solution</div>
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${currentPage === item.id ? "active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-title">Upgrade Your Plan</div>
            <div className="upgrade-text">Get more features and insights</div>
            <button className="upgrade-btn">Upgrade Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
