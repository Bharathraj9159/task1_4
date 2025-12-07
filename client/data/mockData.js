export const mockProducts = [
  {
    id: 1,
    name: "Shirt",
    sku: "SKU-001",
    category: "Fruits",
    price: 2.99,
    unitsSold: 450,
    stock: 500,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Banana",
    sku: "SKU-002",
    category: "Fruits",
    price: 1.49,
    unitsSold: 680,
    stock: 800,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Organic Milk",
    sku: "SKU-003",
    category: "Dairy",
    price: 4.99,
    unitsSold: 320,
    stock: 45,
    status: "Low Stock",
  },
  {
    id: 4,
    name: "Cheese Block",
    sku: "SKU-004",
    category: "Dairy",
    price: 8.99,
    unitsSold: 210,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 5,
    name: "T-Shirt Blue",
    sku: "SKU-005",
    category: "Apparel",
    price: 19.99,
    unitsSold: 380,
    stock: 200,
    status: "In Stock",
  },
];

export const mockSalesData = [
  {
    id: "ORD-001",
    customer: "John Smith",
    date: "2024-01-15",
    total: 245.5,
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    date: "2024-01-15",
    total: 128.75,
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    date: "2024-01-14",
    total: 89.99,
    paymentStatus: "Pending",
    fulfillmentStatus: "Processing",
  },
  {
    id: "ORD-004",
    customer: "Emma Davis",
    date: "2024-01-14",
    total: 342.0,
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
  },
  {
    id: "ORD-005",
    customer: "James Wilson",
    date: "2024-01-13",
    total: 156.8,
    paymentStatus: "Failed",
    fulfillmentStatus: "Canceled",
  },
  {
    id: "ORD-006",
    customer: "Lisa Anderson",
    date: "2024-01-13",
    total: 267.45,
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
  },
  {
    id: "ORD-007",
    customer: "David Martinez",
    date: "2024-01-12",
    total: 412.3,
    paymentStatus: "Paid",
    fulfillmentStatus: "Processing",
  },
  {
    id: "ORD-008",
    customer: "Jessica Taylor",
    date: "2024-01-12",
    total: 199.99,
    paymentStatus: "Pending",
    fulfillmentStatus: "Processing",
  },
];

export const mockProviders = [
  {
    id: 1,
    name: "Fresh Farms Co",
    company: "Fresh Farms Co",
    contact: "john@freshfarms.com",
    rating: 4.8,
    onTimeRate: 96,
    status: "Preferred",
  },
  {
    id: 2,
    name: "Global Produce",
    company: "Global Produce Ltd",
    contact: "info@globalproduce.com",
    rating: 4.2,
    onTimeRate: 88,
    status: "Standard",
  },
  {
    id: 3,
    name: "Quality Suppliers",
    company: "Quality Suppliers Inc",
    contact: "support@qualitysuppliers.com",
    rating: 4.5,
    onTimeRate: 92,
    status: "Preferred",
  },
  {
    id: 4,
    name: "Bulk Distributors",
    company: "Bulk Distributors LLC",
    contact: "sales@bulkdist.com",
    rating: 3.8,
    onTimeRate: 78,
    status: "Under Review",
  },
  {
    id: 5,
    name: "Premium Imports",
    company: "Premium Imports Group",
    contact: "premium@imports.com",
    rating: 4.7,
    onTimeRate: 94,
    status: "Preferred",
  },
  {
    id: 6,
    name: "Eco Partners",
    company: "Eco Partners Organic",
    contact: "eco@partners.com",
    rating: 4.3,
    onTimeRate: 85,
    status: "Standard",
  },
  {
    id: 7,
    name: "Express Logistics",
    company: "Express Logistics Co",
    contact: "express@logistics.com",
    rating: 4.1,
    onTimeRate: 82,
    status: "Standard",
  },
  {
    id: 8,
    name: "Direct Trade",
    company: "Direct Trade Solutions",
    contact: "trade@direct.com",
    rating: 4.6,
    onTimeRate: 91,
    status: "Preferred",
  },
];

export const dashboardRevenueData = [820, 950, 890, 1150, 920];
export const dashboardRevenueLabels = [
  "09:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
];

export const salesChartData = [
  4200, 5100, 4800, 6200, 5800, 7100, 6900, 7500, 8100, 8800, 9200, 9500, 10100,
  10800, 11200, 11900, 12300, 12800, 13400, 14100, 14600, 15200, 15800, 16300,
  16900, 17400, 18000, 18500, 19100, 19600,
];

export const salesByCategoryData = [15000, 12500, 10800, 8900, 6200];
export const salesByCategoryLabels = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Grocery",
];

export const providerPerformanceData = [88, 91, 85, 92, 89, 94];
export const providerPerformanceLabels = [
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

export const monthlyRevenueData = [
  45000, 52000, 48000, 61000, 58000, 67000, 72000, 69000, 78000, 85000, 92000,
  98000,
];
export const monthlyRevenueLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const customerSignupData = [
  120, 150, 140, 180, 170, 210, 200, 240, 250, 280, 310, 350,
];

export const catalogSummary = [
  { label: "Total Products", value: "245", icon: "📦" },
  { label: "Active Products", value: "210", icon: "✓" },
  { label: "Low Stock Items", value: "12", highlight: true, icon: "⚠️" },
];

export const providerMetrics = [
  { label: "Active Providers", value: "18", icon: "🤝" },
  { label: "On-time Delivery Rate", value: "92%", icon: "✓" },
  { label: "Avg Lead Time", value: "4.5 days", icon: "⏱️" },
];

export const dashboardKPIs = [
  {
    label: "Total Revenue",
    value: "$235,645.00",
    subtext: "All time",
    primary: true,
  },
  { label: "Today's Sales", value: "$1,950.12", subtext: "vs yesterday +12%" },
  { label: "Orders Today", value: "128", subtext: "Completed orders" },
  { label: "New Customers", value: "34", subtext: "Last 24 hours" },
];

export const salesKPIs = [
  { label: "Total Sales (period)", value: "$45,320.86" },
  { label: "Orders", value: "892" },
  { label: "Average Order Value", value: "$50.82" },
  { label: "Refunded Amount", value: "$1,120.00" },
];

export const currentSalesStats = [
  { label: "Avg Order Value", value: "$68.20" },
  { label: "Conversion Rate", value: "3.4%" },
  { label: "Refund Rate", value: "1.2%" },
];

export const allProducts = [
  {
    id: 1,
    name: "Shirt",
    sku: "SKU-001",
    category: "Fruits",
    price: 2.99,
    stock: 500,
    status: "Active",
  },
  {
    id: 2,
    name: "Green Shirt",
    sku: "SKU-002",
    category: "Fruits",
    price: 1.49,
    stock: 800,
    status: "Active",
  },
  {
    id: 3,
    name: "Organic Milk",
    sku: "SKU-003",
    category: "Dairy",
    price: 4.99,
    stock: 45,
    status: "Active",
  },
  {
    id: 4,
    name: "Cheese Block",
    sku: "SKU-004",
    category: "Dairy",
    price: 8.99,
    stock: 0,
    status: "Draft",
  },
  {
    id: 5,
    name: "T-Shirt Blue",
    sku: "SKU-005",
    category: "Apparel",
    price: 19.99,
    stock: 200,
    status: "Active",
  },
  {
    id: 6,
    name: "Jeans Black",
    sku: "SKU-006",
    category: "Apparel",
    price: 59.99,
    stock: 150,
    status: "Active",
  },
  {
    id: 7,
    name: "Coffee Beans",
    sku: "SKU-007",
    category: "Snacks",
    price: 12.99,
    stock: 100,
    status: "Active",
  },
  {
    id: 8,
    name: "Chocolate Bar",
    sku: "SKU-008",
    category: "Snacks",
    price: 2.49,
    stock: 320,
    status: "Active",
  },
  {
    id: 9,
    name: "Bedsheet Set",
    sku: "SKU-009",
    category: "Home",
    price: 34.99,
    stock: 75,
    status: "Draft",
  },
  {
    id: 10,
    name: "Pillow",
    sku: "SKU-010",
    category: "Home",
    price: 24.99,
    stock: 200,
    status: "Active",
  },
];

export const topCategoriesData = [
  { name: "Fresh Produce", revenue: "$32,540", growth: 16 },
  { name: "Bakery & Snacks", revenue: "$28,120", growth: 12 },
  { name: "Beverages", revenue: "$19,870", growth: 8 },
  { name: "Dairy Products", revenue: "$17,410", growth: 5 },
];

export const topCategoriesLabels = [
  "Fresh Produce",
  "Bakery & Snacks",
  "Beverages",
  "Dairy Products",
];
