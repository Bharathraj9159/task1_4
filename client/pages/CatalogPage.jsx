import React, { useState } from "react";
import { allProducts, catalogSummary } from "../data/mockData";

export default function CatalogPage() {
  const [products, setProducts] = useState(allProducts);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "Fruits",
    price: "",
    stock: "",
    status: "Active",
  });

  const productImages = {
    Apple: "https://images.unsplash.com/photo-1560806647-92342f2c2d1d?w=400&h=300&fit=crop",
    Orange: "https://images.unsplash.com/photo-1589927537354-6a16e1046eca?w=400&h=300&fit=crop",
    Milk: "https://images.unsplash.com/photo-1550528162-c9b9e1f96d2d?w=400&h=300&fit=crop",
    Cheese: "https://images.unsplash.com/photo-1452894164511-f78a18d5a94c?w=400&h=300&fit=crop",
    Yogurt: "https://images.unsplash.com/photo-1563046047-c5b1b1b5c4f3?w=400&h=300&fit=crop",
    TShirt: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    Jeans: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=300&fit=crop",
    Sweater: "",
    Chips: "",
    Cookies: "",
    Popcorn: "",
  };

  const getProductImage = (productName) => {
    return productImages[productName] || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop`;
  };

  const categories = ["Fruits", "Dairy", "Apparel", "Snacks", "Home"];
  const statuses = ["Active", "Draft", "Archived"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || product.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      name: formData.name,
      sku: formData.sku,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      status: formData.status,
    };
    setProducts([...products, newProduct]);
    setFormData({
      name: "",
      sku: "",
      category: "Fruits",
      price: "",
      stock: "",
      status: "Active",
    });
    setShowModal(false);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "badge-success";
      case "Draft":
        return "badge-warning";
      case "Archived":
        return "badge-danger";
      default:
        return "badge-info";
    }
  };

  const getProductColor = (name) => {
    const colors = ["#667eea", "#764ba2", "#f59e0b", "#10b981", "#ef4444"];
    return colors[Math.abs(name.charCodeAt(0)) % colors.length];
  };

  const inventorySummary = [
    { label: "Total listed products", value: products.length.toString() },
    {
      label: "Active & visible",
      value: products.filter((p) => p.status === "Active").length.toString(),
    },
    {
      label: "Draft items",
      value: products.filter((p) => p.status === "Draft").length.toString(),
    },
    {
      label: "Out of stock",
      value: products.filter((p) => p.stock === 0).length.toString(),
    },
  ];

  const catalogHealth = 85;
  const publishingStats = [
    { label: "Visible on all channels", value: "76%" },
    { label: "Missing images", value: "12%" },
    { label: "Missing pricing", value: "8%" },
    { label: "Disabled / archived", value: "4%" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: "24px",
        gridAutoFlow: "dense",
      }}
      className="catalog-container"
    >
      <div>
        {/* Page Header */}
        <div style={{ marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "8px",
              color: "#1f2937",
            }}
          >
            Catalog
          </h1>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            A clean overview of all products in your store. Use filters to
            quickly review pricing, stock levels and publishing status. This
            page uses demo data only.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="card" style={{ marginBottom: "24px" }}>
          <div
            className="filter-bar"
            style={{
              marginBottom: "0",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "flex-end",
            }}
          >
            <div style={{ flex: "1 1 200px", minWidth: "160px" }}>
              <input
                type="text"
                className="form-input"
                placeholder="Search products by name or SKU"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ flex: "0 1 150px", minWidth: "140px" }}
            >
              <option value="all">All categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
              style={{ flex: "0 1 auto", whiteSpace: "nowrap" }}
            >
              + Add product
            </button>
          </div>
        </div>

        {/* Status Filter Buttons */}
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "#6b7280",
              width: "100%",
              marginBottom: "4px",
            }}
          >
            Status:
          </span>
          {["all", ...statuses].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid var(--border-color)",
                background: selectedStatus === status ? "#7c3aed" : "white",
                color: selectedStatus === status ? "white" : "#6b7280",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
                flex: "0 1 auto",
              }}
            >
              {status === "all" ? "All" : status}
            </button>
          ))}
        </div>

        {/* Category Filter Buttons */}
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "#6b7280",
              width: "100%",
              marginBottom: "8px",
            }}
          >
            Category:
          </span>
          {["all", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid var(--border-color)",
                background: selectedCategory === cat ? "#7c3aed" : "white",
                color: selectedCategory === cat ? "white" : "#6b7280",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat === "all" ? "All categories" : cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "16px",
            width: "100%",
          }}
          className="products-grid"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card"
              style={{
                padding: "0",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
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
              {/* Product Image Area */}
              <div
                style={{
                  height: "140px",
                  background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "48px",
                  fontWeight: "bold",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={getProductImage(product.name)}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                  }}
                >
                  <span
                    className={`badge ${getStatusBadgeClass(product.status)}`}
                  >
                    {product.status}
                  </span>
                </span>
              </div>

              {/* Product Info */}
              <div
                style={{
                  padding: "16px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1f2937",
                      marginBottom: "4px",
                    }}
                  >
                    {product.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                    SKU: {product.sku}
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "12px",
                    paddingTop: "12px",
                    borderTop: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#6b7280" }}>
                      Price
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#1f2937",
                      }}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ fontSize: "12px", color: "#6b7280" }}>
                      Stock
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          product.stock > 50
                            ? "#10b981"
                            : product.stock > 0
                              ? "#f59e0b"
                              : "#ef4444",
                      }}
                    >
                      {product.stock}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "6px", marginTop: "auto" }}>
                  <button
                    style={{
                      flex: 1,
                      padding: "6px 10px",
                      background: "transparent",
                      border: "1px solid var(--border-color)",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#7c3aed",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    👁️ View
                  </button>
                  <button
                    style={{
                      flex: 1,
                      padding: "6px 10px",
                      background: "transparent",
                      border: "1px solid var(--border-color)",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#7c3aed",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Inventory Summary */}
        <div className="card">
          <div
            style={{
              marginBottom: "16px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937" }}
            >
              Inventory summary
            </div>
            <div
              style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}
            >
              High level view of how your catalog looks right now.
            </div>
          </div>

          {inventorySummary.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "12px",
                marginBottom: "12px",
                borderBottom:
                  index < inventorySummary.length - 1
                    ? "1px solid var(--border-light)"
                    : "none",
              }}
            >
              <span style={{ fontSize: "12px", color: "#6b7280" }}>
                {item.label}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#1f2937",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Catalog Health */}
        <div className="card">
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#1f2937",
                marginBottom: "8px",
              }}
            >
              Catalog health
            </div>
            <div
              style={{
                width: "100%",
                height: "6px",
                background: "#f3f4f6",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${catalogHealth}%`,
                  background: "#10b981",
                  borderRadius: "3px",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
            <div
              style={{ fontSize: "12px", color: "#6b7280", marginTop: "6px" }}
            >
              {catalogHealth}% products fully configured
            </div>
          </div>
        </div>

        {/* Publishing Status */}
        <div className="card">
          <div
            style={{
              marginBottom: "16px",
              paddingBottom: "12px",
              borderBottom: "1px solid var(--border-light)",
            }}
          >
            <div
              style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937" }}
            >
              Publishing status
            </div>
          </div>

          {publishingStats.map((stat, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "10px",
                marginBottom: "10px",
                fontSize: "12px",
                borderBottom:
                  index < publishingStats.length - 1
                    ? "1px solid var(--border-light)"
                    : "none",
              }}
            >
              <span style={{ color: "#6b7280" }}>{stat.label}</span>
              <span
                style={{
                  fontWeight: "600",
                  color:
                    stat.value === "76%"
                      ? "#10b981"
                      : stat.value === "12%"
                        ? "#f59e0b"
                        : "#6b7280",
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add Product Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add New Product</div>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProduct}>
              <div className="form-group">
                <label className="form-label">Product Name</label>
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
                <label className="form-label">SKU</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.sku}
                  onChange={(e) =>
                    setFormData({ ...formData, sku: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-input"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Stock Quantity</label>
                <input
                  type="number"
                  className="form-input"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
