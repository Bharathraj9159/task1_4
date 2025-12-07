import React from "react";

export default function TopBar({ breadcrumb, onMenuToggle }) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <button className="hamburger-btn" onClick={onMenuToggle}>
          ☰
        </button>
        <div className="breadcrumb">{breadcrumb}</div>
      </div>

      <div className="top-bar-center">
        <input type="text" className="search-input" placeholder="Search…" />
      </div>

      <div className="top-bar-right">
        <button className="icon-btn" title="Notifications">
          🔔
        </button>
        <button className="icon-btn" title="Settings">
          ⚙️
        </button>
        <div className="user-profile">
          <div className="user-avatar">LG</div>
          <div className="user-info">
            <div className="user-name">Luna Gilbert</div>
            <div className="user-role">Store Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
}
