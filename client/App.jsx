import "./global.css";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import DashboardPage from "./pages/DashboardPage";
import SalesPage from "./pages/SalesPage";
import CatalogPage from "./pages/CatalogPage";
import ProvidersPage from "./pages/ProvidersPage";
import StoreProfilePage from "./pages/StoreProfilePage";
import ReportsPage from "./pages/ReportsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "sales":
        return <SalesPage />;
      case "catalog":
        return <CatalogPage />;
      case "providers":
        return <ProvidersPage />;
      case "store-profile":
        return <StoreProfilePage />;
      case "reports":
        return <ReportsPage />;
      default:
        return <DashboardPage />;
    }
  };

  const getBreadcrumb = () => {
    const breadcrumbs = {
      dashboard: "Dashboard / Overview",
      sales: "Sales / Performance",
      catalog: "Catalog / Products",
      providers: "Providers / Management",
      "store-profile": "Store / Profile",
      reports: "Reports / Overview",
    };
    return breadcrumbs[currentPage] || "Dashboard / Overview";
  };

  return (
    <div className="app-container">
      <Sidebar
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="main-content">
        <TopBar
          breadcrumb={getBreadcrumb()}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <div className="page-content">{renderPage()}</div>
      </div>
    </div>
  );
}
