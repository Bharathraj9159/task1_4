# ROCERS - E-Commerce Admin Dashboard

A production-ready, full-stack React admin dashboard with an integrated Express server. Built with modern technologies for managing products, sales, reports, and store operations.

## 🌟 Features

- **Complete Dashboard** - Real-time KPI metrics, revenue trends, and sales performance
- **Product Catalog** - Manage inventory with filtering, search, and categorization
- **Sales Tracking** - Monitor sales performance and trends
- **Reports** - Comprehensive analytics with charts and insights
- **Provider Management** - Track and manage suppliers
- **Store Profile** - Manage store information and settings
- **Responsive Design** - Fully mobile-optimized interface
- **Modern UI** - Professional design with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation & Running

```bash
# 1. Install dependencies
pnpm install

# 2. Start the development server
pnpm dev
```

The app will be available at `http://localhost:8080`

## 📦 Project Structure

```
client/                    # React SPA frontend
├── pages/                 # Route components (Index.tsx = home)
├── components/
│   ├── ui/               # Pre-built UI component library
│   ├── Sidebar.jsx       # Navigation sidebar
│   ├── TopBar.jsx        # Top navigation bar
│   └── Charts/           # Chart components
├── data/
│   └── mockData.js       # Sample data
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── App.jsx               # Main app with routing
├── global.css            # TailwindCSS theming
└── main.jsx              # React entry point

server/                    # Express API backend
├── index.ts              # Main server setup
└── routes/               # API endpoints

shared/                    # Types & interfaces
└── api.ts                # Shared API types
```

## 🛠️ Available Commands

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Building
pnpm build            # Build for production
pnpm build:client     # Build client only
pnpm build:server     # Build server only

# Production
pnpm start            # Start production server

# Quality Checks
pnpm test             # Run tests with Vitest
pnpm typecheck        # TypeScript validation
pnpm format.fix       # Format code with Prettier
```

## 🎨 Technology Stack

- **Frontend**: React 18 + React Router 6 + TypeScript
- **Styling**: TailwindCSS 3 + Custom CSS
- **Backend**: Express.js
- **Build Tool**: Vite
- **Testing**: Vitest
- **UI Components**: Radix UI + Lucide Icons
- **Forms**: React Hook Form + Zod

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1400px+)
- Tablet (768px - 1400px)
- Mobile (320px - 768px)

All layouts and components automatically adapt to screen size.

## 🌐 Navigation

### Main Routes

| Route | Description |
|-------|-------------|
| `/` | Dashboard home page |
| `/sales` | Sales metrics and performance |
| `/catalog` | Product inventory management |
| `/providers` | Supplier management |
| `/store-profile` | Store settings and information |
| `/reports` | Analytics and reporting |

## 🎯 Key Pages

### Dashboard
- Overview of key metrics
- Revenue trends
- Sales performance
- Customer insights

### Catalog
- Product listing with search and filters
- Category and status filtering
- Add new products
- Inventory summary and health metrics

### Reports
- Monthly revenue analysis
- Customer growth tracking
- Product performance metrics
- Provider reliability reports

### Sales
- Sales channel breakdown
- Performance by category
- Detailed transaction history

## 🔧 Customization

### Adding New Pages

1. Create a new component in `client/pages/YourPage.jsx`
2. Import and add route in `client/App.jsx`:
   ```jsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Add menu item to sidebar in `client/components/Sidebar.jsx`

### Theme Customization

Colors and styling can be customized in:
- `client/global.css` - CSS variables and custom styles
- `tailwind.config.ts` - Tailwind theme configuration

### Adding API Endpoints

1. Create handler in `server/routes/your-route.ts`
2. Register in `server/index.ts`:
   ```typescript
   import { handleYourRoute } from "./routes/your-route";
   app.get("/api/your-endpoint", handleYourRoute);
   ```

## 📊 Sample Data

The dashboard uses mock data defined in `client/data/mockData.js`. This includes:
- Revenue data
- Customer information
- Product catalog
- Sales metrics
- Provider details

Replace with real API calls as needed.

## 🚀 Deployment

### Building for Production

```bash
pnpm build
```

This creates optimized builds in `dist/` directory.

### Hosting Options

- **Netlify**: Recommended - automatic deployments with git integration
- **Vercel**: Fast serverless deployments
- **Traditional Hosting**: Use `pnpm start` to run the production server

## 🎨 Design System

The app includes a comprehensive UI component library with:
- Buttons (primary, secondary, ghost, danger)
- Cards and modals
- Forms and inputs
- Badges and alerts
- Tables and data displays
- Charts and visualizations

All components use TailwindCSS for styling with consistent color variables.

## 📈 Performance

- Single-port development for fast iteration
- Hot module reloading (HMR) for instant updates
- Optimized production builds
- Responsive images and assets

## 🤝 Contributing

When modifying the codebase:
1. Follow the existing code style and patterns
2. Use TypeScript for type safety
3. Keep components small and focused
4. Write tests for critical functionality
5. Run `pnpm format.fix` before committing

## ⚙️ Environment Variables

Currently, the app uses sample data. To connect to a backend:
1. Set API endpoint in environment variables
2. Update fetch calls to use real endpoints
3. Add authentication as needed

## 📝 License

This is a template project. Feel free to use and modify as needed.

## 🆘 Support

For issues or questions:
1. Check the existing code examples
2. Review the component library in `client/components/ui/`
3. Refer to the tech stack documentation

---

**Built with ❤️ for modern e-commerce management**
