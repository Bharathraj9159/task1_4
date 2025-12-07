import React, { useState } from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import {
  monthlyRevenueData,
  monthlyRevenueLabels,
  customerSignupData,
  salesByCategoryData,
  salesByCategoryLabels,
} from "../data/mockData";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: "revenue",
      title: "Monthly Revenue Report",
      description: "Track your total revenue performance over time",
      icon: "💰",
    },
    {
      id: "customers",
      title: "Customer Growth Report",
      description: "Monitor your customer acquisition and growth trends",
      icon: "👥",
    },
    {
      id: "products",
      title: "Product Performance Report",
      description: "Analyze your best and worst performing products",
      icon: "📦",
    },
    {
      id: "providers",
      title: "Provider Reliability Report",
      description: "Review your supplier performance metrics",
      icon: "🤝",
    },
  ];

  const reportDetails = {
    revenue: {
      title: "Monthly Revenue Report",
      summary:
        "Your store generated $1,125,600 in total revenue over the last 12 months, with an average monthly revenue of $93,800. October was your best month with $98,000 in sales, representing a 4.8% growth from September.",
      stats: [
        { label: "Best Month", value: "October", amount: "$98,000" },
        { label: "Worst Month", value: "January", amount: "$45,000" },
        { label: "Growth Rate", value: "18.5%" },
        { label: "Average Monthly", value: "$93,800" },
      ],
    },
    customers: {
      title: "Customer Growth Report",
      summary:
        "You gained 2,890 new customers over the last 12 months, with an average of 241 new customers per month. Growth accelerated in Q4 with 892 new signups, a 34% increase from Q3.",
      stats: [
        { label: "Total Customers", value: "5,420" },
        { label: "New This Year", value: "2,890" },
        { label: "Repeat Rate", value: "62%" },
        { label: "Churn Rate", value: "3.2%" },
      ],
    },
    products: {
      title: "Product Performance Report",
      summary:
        "Your top 10 products account for 64% of total sales. Bananas and Apples lead produce sales, while T-Shirts dominate the apparel category. Low-performing products represent only 8% of inventory but account for just 2% of revenue.",
      stats: [
        { label: "Total Products", value: "245" },
        { label: "Top Performer", value: "Banana SKU-002" },
        { label: "Avg. Days to Sell", value: "18.5" },
        { label: "Return Rate", value: "1.8%" },
      ],
    },
    providers: {
      title: "Provider Reliability Report",
      summary:
        "Your 18 active providers maintain an average on-time delivery rate of 92%, with 4 preferred providers exceeding 94% reliability. Average lead time is 4.5 days, with Fresh Farms Co being your most reliable supplier.",
      stats: [
        { label: "Active Providers", value: "18" },
        { label: "On-Time Rate", value: "92%" },
        { label: "Avg Lead Time", value: "4.5 days" },
        { label: "Preferred Providers", value: "5" },
      ],
    },
  };

  return (
    <div>
      {/* Report Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {reports.map((report) => (
          <div
            key={report.id}
            className="card"
            style={{
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ marginBottom: "12px", fontSize: "32px" }}>
              {report.icon}
            </div>
            <div className="card-title" style={{ marginBottom: "6px" }}>
              {report.title}
            </div>
            <div className="card-subtitle" style={{ marginBottom: "16px" }}>
              {report.description}
            </div>
            <button
              className="btn btn-primary"
              style={{ marginTop: "auto" }}
              onClick={() => setSelectedReport(report.id)}
            >
              View Report
            </button>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={{ width: "100%", boxSizing: "border-box" }}>
        {/* Monthly Revenue Chart */}
        <div
          className="card"
          style={{ marginBottom: "24px", width: "100%", boxSizing: "border-box" }}
        >
          <div className="card-header">
            <div className="card-title">Monthly Revenue (Last 12 Months)</div>
          </div>
          <LineChart
            data={monthlyRevenueData}
            labels={monthlyRevenueLabels}
            height={350}
          />
        </div>

        {/* Customer Signups Chart */}
        <div
          className="card"
          style={{ marginBottom: "24px", width: "100%", boxSizing: "border-box" }}
        >
          <div className="card-header">
            <div className="card-title">Customer Signups (Last 12 Months)</div>
          </div>
          <BarChart
            data={customerSignupData}
            labels={monthlyRevenueLabels}
            height={350}
          />
        </div>

        {/* Sales by Channel */}
        <div
          className="card"
          style={{ marginBottom: "24px", width: "100%", boxSizing: "border-box" }}
        >
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
      </div>

      {/* Report Details Modal/Panel */}
      {selectedReport && reportDetails[selectedReport] && (
        <div
          className="card"
          style={{
            marginTop: "24px",
            borderColor: "#7c3aed",
            borderWidth: "2px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="card-header">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div className="card-title">
                {reportDetails[selectedReport].title}
              </div>
              <button
                className="close-btn"
                onClick={() => setSelectedReport(null)}
              >
                ✕
              </button>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p
              style={{
                color: "#6b7280",
                marginBottom: "16px",
                lineHeight: "1.6",
                fontSize: "14px",
              }}
            >
              {reportDetails[selectedReport].summary}
            </p>
          </div>

          {/* Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "12px",
              marginBottom: "0",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {reportDetails[selectedReport].stats.map((stat, index) => (
              <div key={index} className="stat-tile">
                <div className="stat-tile-label">{stat.label}</div>
                <div className="stat-tile-value">{stat.value}</div>
                {stat.amount && (
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#7c3aed",
                      marginTop: "2px",
                    }}
                  >
                    {stat.amount}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
