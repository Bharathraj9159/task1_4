import React, { useState } from "react";
import BarChart from "../components/BarChart";
import {
  mockProviders,
  providerMetrics,
  providerPerformanceData,
  providerPerformanceLabels,
} from "../data/mockData";

export default function ProvidersPage() {
  const [providers, setProviders] = useState(mockProviders);
  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    rating: "",
  });

  const handleAddProvider = (e) => {
    e.preventDefault();
    const newProvider = {
      id: Math.max(...providers.map((p) => p.id), 0) + 1,
      name: formData.name,
      company: formData.company,
      contact: formData.email,
      rating: parseFloat(formData.rating),
      onTimeRate: 85,
      status: "Standard",
    };
    setProviders([...providers, newProvider]);
    setFormData({ name: "", email: "", phone: "", company: "", rating: "" });
    setShowModal(false);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Preferred":
        return "badge-success";
      case "Standard":
        return "badge-info";
      case "Under Review":
        return "badge-warning";
      default:
        return "badge-info";
    }
  };

  const renderStars = (rating) => {
    const stars = "⭐".repeat(Math.floor(rating));
    return <span title={`${rating} stars`}>{stars}</span>;
  };

  return (
    <div>
      {/* Metrics Cards */}
      <div className="kpi-grid">
        {providerMetrics.map((metric, index) => (
          <div key={index} className="kpi-card">
            <div className="kpi-label">{metric.label}</div>
            <div className="kpi-value">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div className="card-header">
          <div className="card-title">On-Time Deliveries (Last 6 Months)</div>
        </div>
        <BarChart
          data={providerPerformanceData}
          labels={providerPerformanceLabels}
          height={300}
        />
      </div>

      {/* Providers Table */}
      <div className="card">
        <div
          className="card-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div className="card-title">Providers ({providers.length})</div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
            style={{ flex: "0 1 auto", whiteSpace: "nowrap" }}
          >
            + Add Provider
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Provider Name</th>
                <th>Company</th>
                <th>Contact</th>
                <th>Rating</th>
                <th>On-Time Rate</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider) => (
                <tr key={provider.id}>
                  <td>{provider.name}</td>
                  <td>{provider.company}</td>
                  <td>{provider.contact}</td>
                  <td>{renderStars(provider.rating)}</td>
                  <td>{provider.onTimeRate}%</td>
                  <td>
                    <span
                      className={`badge ${getStatusBadgeClass(provider.status)}`}
                    >
                      {provider.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-small"
                      onClick={() => setSelectedProvider(provider)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Provider Details Modal */}
      {selectedProvider && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProvider(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Provider Details</div>
              <button
                className="close-btn"
                onClick={() => setSelectedProvider(null)}
              >
                ✕
              </button>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "12px" }}>
                <strong>Name:</strong> {selectedProvider.name}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Company:</strong> {selectedProvider.company}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Contact:</strong> {selectedProvider.contact}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Rating:</strong> {renderStars(selectedProvider.rating)}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>On-Time Delivery Rate:</strong>{" "}
                {selectedProvider.onTimeRate}%
              </div>
              <div>
                <strong>Status:</strong>{" "}
                <span
                  className={`badge ${getStatusBadgeClass(selectedProvider.status)}`}
                >
                  {selectedProvider.status}
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedProvider(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Provider Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add New Provider</div>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProvider}>
              <div className="form-group">
                <label className="form-label">Provider Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label">Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  className="form-input"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Provider
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
