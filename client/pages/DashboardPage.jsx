import React from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import {
  dashboardKPIs,
  dashboardRevenueData,
  dashboardRevenueLabels,
  mockProducts,
  currentSalesStats,
  monthlyRevenueData,
  monthlyRevenueLabels,
  topCategoriesData,
} from "../data/mockData";

export default function DashboardPage() {
  return (
    <div>
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-content">
          <h1>Welcome back, Luna</h1>
          <p>Here's what's happening with your store today.</p>
        </div>
        <div className="welcome-illustration">📊</div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {dashboardKPIs.map((kpi, index) => (
          <div
            key={index}
            className={`kpi-card ${kpi.primary ? "primary" : ""}`}
          >
            <div className="kpi-label">{kpi.label}</div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-subtext">{kpi.subtext}</div>
          </div>
        ))}
      </div>

      {/* Current Sales Section */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Current Sales & Performance</div>
        </div>

        {/* ✅ New responsive layout */}
        <div className="sales-layout">
          {/* Stats */}
          <div className="stat-tiles">
            {currentSalesStats.map((stat, index) => (
              <div key={index} className="stat-tile">
                <div className="stat-tile-label">{stat.label}</div>
                <div className="stat-tile-value">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="sales-chart-block">
            <h3 className="sales-chart-title">
              Today's Revenue Trend
            </h3>
            <LineChart
              data={dashboardRevenueData}
              labels={dashboardRevenueLabels}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* Analytics Section – Revenue charts */}
      <div className="analytics-wrapper">
        <section className="revenue-section">
          {/* Monthly revenue */}
          <div className="card">
            <div className="card-header">
              <div>
                <div className="card-title">Monthly revenue</div>
                <div className="card-subtitle">
                  Comparison of the last 6 months
                </div>
              </div>
              <button className="btn btn-ghost btn-small">
                Download report
              </button>
            </div>
            <BarChart
              data={monthlyRevenueData.slice(-6)}
              labels={monthlyRevenueLabels.slice(-6)}
              height={300}
            />
          </div>

          {/* Revenue by Channel */}
          <div className="card">
            <div className="card-header">
             <div
  style={{
    display: "flex",
    flexDirection: "column-reverse",
    gap: "8px"
  }}
>
  <div className="card-title">Revenue by channel</div>
  <div className="card-subtitle">
    How customers place their orders
  </div>
</div>

            </div>
            <PieChart
              data={[52, 27, 15]}
              labels={["Website", "Mobile App", "Marketplace"]}
              colors={["#667eea", "#764ba2", "#f59e0b"]}
              height={280}
            />
          </div>
        </section>
      </div>

      {/* Top Categories */}
      <div className="card" style={{ marginTop: "24px" }}>
        <div className="card-header">
          <div className="card-title">Top categories</div>
          <div className="card-subtitle">
            Where most of your revenue comes from
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {topCategoriesData.map((item, index) => (
            <div
              key={index}
              style={{
                paddingBottom: "16px",
                borderBottom:
                  index < topCategoriesData.length - 1
                    ? "1px solid var(--border-light)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1f2937",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#10b981",
                  }}
                >
                  ↗ {item.growth}%
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                Revenue: {item.revenue}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bestsellers Table */}
      <div className="card" style={{ marginTop: "24px" }}>
        <div className="card-header">
          <div className="card-title">Bestselling Products</div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Price</th>
                <th>Units Sold</th>
                <th>Stock Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="table-product-cell">
                      <div className="product-thumbnail">
                        {product.name[0]}
                      </div>
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td>{product.sku}</td>
                  <td>{product.category}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.unitsSold}</td>
                  <td>
                    <span
                      className={`badge badge-${
                        product.status === "In Stock"
                          ? "success"
                          : product.status === "Low Stock"
                            ? "warning"
                            : "danger"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-small">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
