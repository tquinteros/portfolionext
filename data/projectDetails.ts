import type { ProjectDetails } from "@/src/components/ProjectDetails/ProjectDetailsDialog";

export const projectDetailsMap: Record<string, ProjectDetails> = {
  Courtly: {
    general: {
      mainStack: "Next.js 15, Server Actions (no API REST)",
      integrations: [
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "MongoDB",
        "Resend",
        "Pusher",
      ],
      features: [
        "Responsive design with light/dark theme",
        "Role-based access with NextAuth (User, Complex Owner, Admin)",
      ],
    },
    sections: [
      {
        title: "🏠 Landing & Search",
        items: [
          "Interactive landing page with search by: Sport type, complex name, date, time, and location",
          "Infinite scroll listing on /sport-complexes using useInfiniteQuery",
          "User geolocation support with Leaflet map visualization",
          "Map markers show all nearby sport complexes for quick access",
        ],
      },
      {
        title: "🏟️ Sport Complexes",
        items: [
          "Detailed complex view: amenities, schedules, reviews, and available fields",
          "Dynamic timeslot system showing real-time availability",
          "Interactive calendar for date selection",
          "Automatic detection of reserved/closed slots",
          "Fully reactive updates when switching dates",
          "Advanced analytics for complex owners (income, traffic, bookings per month)",
        ],
      },
      {
        title: "💳 Reservations",
        items: [
          "Checkout flow for selecting date and available time slot",
          "Real-time validation with server actions",
          "Automatic QR code generation for each reservation",
          "Live confirmation via Pusher",
          "Email notifications handled through Resend",
          "Added fixed recurring reservations (weekly slots)",
          "Support for both partial deposit and full payment (to be integrated)",
        ],
      },
      {
        title: "👤 User Profile",
        items: [
          "User dashboard with tabs: Overview & stats, Active and past reservations, Security (password, personal info), Reservation QR display",
          "Gamification system: missions (e.g., 'Create 3 reservations') with rewards",
          "Balance system for redeemable rewards within the platform",
        ],
      },
      {
        title: "🧑‍💼 Complex Owner Dashboard",
        items: [
          "Complex creation form with full information (details, location, amenities, etc.)",
          "Private dashboard restricted by userId with: Complex information management, Court management (create/edit/delete), Reservation management, Inventory management (pricing, stock, automatic calculations), Schedule and closure configuration, Reviews and feedback overview, Basic analytics view for total reservations and performance",
          "Added multiple sport complex management with dropdown selector",
        ],
      },
      {
        title: "🛠️ Admin Dashboard",
        items: [
          "Internal dashboard restricted by Admin role",
          "Paginated tables for Users, Complexes, Reservations, Sports, Surfaces, Dimensions",
          "Sport Complex approval system before publication with approval email for complex owner",
          "Ability to monitor platform usage and status",
        ],
      },
      // {
      //   title: "💰 Monetization (In Development)",
      //   items: [
      //     "Planned integration with MercadoPago Connect (Split Payments)",
      //     "Automatic payment distribution: Fixed $1,000 fee → platform commission. Owner gets the rest",
      //     "Support for 'deposit' and 'full payment' options",
      //   ],
      // },
    ],
    nextSteps: [
      "Export tools (CSV, PDF reports)",
      "Premium visibility plans and featured listings",
      "PWA / mobile version",
      "SEO optimization for local search",
      "Enhanced moderation tools and content validation",
    ],
  },
  "CMS Ecommerce Platform": {
    general: {
      mainStack: "Next.js 15, Server Actions (no API REST)",
      integrations: [
        "Zod",
        "MongoDB",
        "React Hook Form",
        "Recharts",
        "Shadcn UI",
        "Zustand",
        "Resend",
      ],
      features: [
        "Headless CMS with code-free content management",
        "Session-based role system (User, Admin)",
        "Responsive design with light/dark theme",
      ],
    },
    sections: [
      {
        title: "🏠 Home Page Management",
        items: [
          "Admin can manage all home page sections without code",
          "Dynamic hero section: upload images, edit texts, and configure CTAs",
          "Featured banners management with custom images and links",
          "Products carousel/grid configuration with featured products selection",
          "Real-time preview of changes before publishing",
        ],
      },
      {
        title: "Products & Catalog",
        items: [
          "Products page with infinite scroll for optimal performance",
          "Admin can create, edit, and delete products with full CRUD operations",
          "Advanced stock management system with real-time inventory tracking",
          "Category management: create, edit, and organize product categories",
          "Product details include: images, descriptions, pricing, stock, and category assignment",
        ],
      },
      {
        title: "👤 User Features",
        items: [
          "Shopping cart system for each user with persistent storage",
          "Wishlist functionality to save favorite products",
          "User profile dashboard: view and edit personal information",
          "Order history: view all past and current orders with detailed information",
          "Secure checkout page with order summary and payment processing",
          "Email confirmation on purchase using Resend with order details and receipt",
        ],
      },
      {
        title: "Coupon System",
        items: [
          "Admin can create custom coupons with flexible configuration",
          "Support for percentage-based discounts (e.g., 20% off)",
          "Support for fixed price discounts (e.g., $10 off)",
          "Usage limits: define how many times a coupon can be applied",
          "Coupon management: name, code, value, expiration dates, and usage tracking",
        ],
      },
      {
        title: "📊 Analytics Dashboard",
        items: [
          "Comprehensive analytics using Recharts for data visualization",
          "User analytics: registration trends, active users, and user behavior metrics",
          "Product analytics: best sellers, low stock alerts, and sales performance",
          "Revenue tracking and sales reports with interactive charts",
          "Real-time data updates for accurate business insights",
        ],
      },
      {
        title: "🧑‍💼 Admin Dashboard",
        items: [
          "Full ecommerce management without code modifications",
          "Order management: view, process, and track all customer orders",
          "Content management: edit FAQ questions and answers for FAQ page",
          "Product inventory management with stock alerts",
          "Category organization and hierarchy management",
          "User management and role assignment",
        ],
      },
      {
        title: "❓ FAQ Management",
        items: [
          "Admin can create, edit, and delete FAQ questions",
          "Dynamic FAQ page that updates automatically",
          "Organized FAQ sections for better user experience",
        ],
      },
    ],
  },
};

