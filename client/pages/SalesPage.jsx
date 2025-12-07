import React, { useState } from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import {
  salesKPIs,
  salesChartData,
  salesByCategoryData,
  salesByCategoryLabels,
  mockSalesData,
} from "../data/mockData";

export default function SalesPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dateRange, setDateRange] = useState("30days");
  const [channel, setChannel] = useState("all");

  const getOrderStatusBadgeClass = (status) => {
    switch (status) {
      case "Paid":
        return "badge-success";
      case "Pending":
        return "badge-warning";
      case "Failed":
        return "badge-danger";
      default:
        return "badge-info";
    }
  };

  const getFulfillmentBadgeClass = (status) => {
    switch (status) {
      case "Shipped":
        return "badge-success";
      case "Processing":
        return "badge-warning";
      case "Canceled":
        return "badge-danger";
      default:
        return "badge-info";
    }
  };

  return (
    <div>
      {/* Filter Bar */}
      <div
        className="filter-bar"
        style={{
          marginBottom: "24px",
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div
          className="filter-group"
          style={{ flex: "1 1 150px", minWidth: "140px" }}
        >
          <label className="filter-label">Date Range:</label>
          <select
            className="form-select"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="today">Today</option>
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div
          className="filter-group"
          style={{ flex: "1 1 150px", minWidth: "140px" }}
        >
          <label className="filter-label">Channel:</label>
          <select
            className="form-select"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="all">All channels</option>
            <option value="online">Online Store</option>
            <option value="marketplace">Marketplace</option>
          </select>
        </div>
        <button
          className="btn btn-primary"
          style={{ flex: "0 1 auto", marginTop: "auto" }}
        >
          Apply
        </button>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {salesKPIs.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Sales Over Time Chart */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div className="card-header">
          <div className="card-title">Sales Over Time</div>
        </div>
        <LineChart data={salesChartData} height={350} />
      </div>

      {/* Sales by Category Chart */}
      <div className="card" style={{ marginBottom: "24px" }}>
        <div className="card-header">
          <div className="card-title">Sales by Category</div>
        </div>
        <BarChart
          data={salesByCategoryData}
          labels={salesByCategoryLabels}
          horizontal={true}
          height={300}
        />
      </div>

      {/* Recent Orders Table */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Recent Orders</div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Payment Status</th>
                <th>Fulfillment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockSalesData.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span
                      className={`badge ${getOrderStatusBadgeClass(order.paymentStatus)}`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${getFulfillmentBadgeClass(order.fulfillmentStatus)}`}
                    >
                      {order.fulfillmentStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-small"
                      onClick={() => setSelectedOrder(order)}
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

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Order Details</div>
              <button
                className="close-btn"
                onClick={() => setSelectedOrder(null)}
              >
                ✕
              </button>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "12px" }}>
                <strong>Order ID:</strong> {selectedOrder.id}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Customer:</strong> {selectedOrder.customer}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Date:</strong> {selectedOrder.date}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Total:</strong> ${selectedOrder.total.toFixed(2)}
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong>Payment Status:</strong>{" "}
                <span
                  className={`badge ${getOrderStatusBadgeClass(selectedOrder.paymentStatus)}`}
                >
                  {selectedOrder.paymentStatus}
                </span>
              </div>
              <div>
                <strong>Fulfillment Status:</strong>{" "}
                <span
                  className={`badge ${getFulfillmentBadgeClass(selectedOrder.fulfillmentStatus)}`}
                >
                  {selectedOrder.fulfillmentStatus}
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}
