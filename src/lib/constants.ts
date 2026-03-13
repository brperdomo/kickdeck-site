import {
  Brain,
  ClipboardList,
  CreditCard,
  Trophy,
  Gamepad2,
  MapPin,
  FileText,
  LayoutDashboard,
  Mail,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export interface Feature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    id: "ai-scheduling",
    name: "AI-Powered Scheduling",
    tagline: "Build your entire schedule in minutes, not days",
    description:
      "Our intelligent scheduling engine analyzes field availability, team constraints, and tournament rules to generate conflict-free schedules automatically. No more late nights with spreadsheets.",
    bullets: [
      "Automatic conflict detection and resolution",
      "Field capacity optimization across complexes",
      "Rest period enforcement between games",
      "Drag-and-drop manual adjustments when needed",
    ],
    icon: Brain,
  },
  {
    id: "registration",
    name: "Registration & Team Management",
    tagline: "Streamline every registration from signup to roster",
    description:
      "Give teams a professional online registration experience. Collect all the information you need with customizable forms, track statuses, and manage rosters from one central hub.",
    bullets: [
      "Online registration with custom fee structures",
      "Bulk CSV team and roster imports",
      "Age group and division assignment",
      "Approval workflows with email notifications",
    ],
    icon: ClipboardList,
  },
  {
    id: "payments",
    name: "Integrated Payments",
    tagline: "Collect fees seamlessly with built-in payment processing",
    description:
      "Powered by Stripe Connect, each tournament gets its own secure payment pipeline. Fees are collected automatically and deposited directly into your bank account. No more chasing checks.",
    bullets: [
      "Per-tournament bank account setup",
      "Automatic fund distribution to organizers",
      "Multiple fee types and optional add-ons",
      "Full refund processing with audit trail",
    ],
    icon: CreditCard,
  },
  {
    id: "brackets",
    name: "Brackets & Tournament Formats",
    tagline: "Every format you need, ready out of the box",
    description:
      "Whether you run round robins, single elimination, or complex championship brackets, KickDeck handles it all. Configure multiple flights and divisions per age group.",
    bullets: [
      "Round Robin, Single & Double Elimination, Pool Play",
      "Swiss System and Championship formats",
      "Multiple flights per age group",
      "Configurable advancement and seeding rules",
    ],
    icon: Trophy,
  },
  {
    id: "scoring",
    name: "Game Management & Scoring",
    tagline: "Real-time scores, standings, and game cards",
    description:
      "From QR-coded game cards to live score entry, keep your tournament running smoothly. Standings update automatically with configurable point systems.",
    bullets: [
      "QR code game cards for quick field access",
      "Real-time score entry with audit trail",
      "Automatic standings with tiebreaker rules",
      "Penalty shootout and card tracking support",
    ],
    icon: Gamepad2,
  },
  {
    id: "fields",
    name: "Field & Complex Management",
    tagline: "Maximize your venue with smart field allocation",
    description:
      "Map your complexes, configure fields by size, and let KickDeck optimize game placement. Track amenities, parking, and operating hours for every venue.",
    bullets: [
      "Multi-venue and multi-field support",
      "Field size configurations (3v3 through 11v11)",
      "Amenity and facility tracking",
      "Tournament-specific availability scheduling",
    ],
    icon: MapPin,
  },
  {
    id: "forms",
    name: "Custom Form Builder",
    tagline: "Collect exactly the data you need",
    description:
      "Build custom registration forms with our drag-and-drop editor. Add conditional logic, multiple field types, and export responses to CSV for analysis.",
    bullets: [
      "Drag-and-drop form creation",
      "Conditional field logic",
      "Multiple field types and validation",
      "CSV export of all submissions",
    ],
    icon: FileText,
  },
  {
    id: "dashboard",
    name: "Admin Dashboard",
    tagline: "Your tournament command center",
    description:
      "Monitor registrations, track payments, approve teams, and view analytics from a single dashboard. Role-based access lets you delegate without losing control.",
    bullets: [
      "Real-time registration and payment analytics",
      "Team approval and status workflows",
      "Role-based staff access control",
      "Financial reporting and reconciliation",
    ],
    icon: LayoutDashboard,
  },
  {
    id: "communication",
    name: "Communication Tools",
    tagline: "Keep everyone informed without the chaos",
    description:
      "Automated email notifications for registration confirmations, approvals, and updates. Customizable templates ensure your brand stays consistent.",
    bullets: [
      "Automated transactional emails",
      "Customizable email templates",
      "Registration and payment confirmations",
      "Bulk communication capabilities",
    ],
    icon: Mail,
  },
  {
    id: "referees",
    name: "Referee Management",
    tagline: "Assign, track, and pay your officials",
    description:
      "Manage your referee pool from certifications to game assignments. Set pay rates, track availability, and streamline post-tournament payments.",
    bullets: [
      "Certification level tracking",
      "Game assignment and scheduling",
      "Availability management",
      "Pay rate configuration and tracking",
    ],
    icon: ShieldCheck,
  },
];

export interface PricingTier {
  name: string;
  price: number | null;
  period: string | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Basic",
    price: 99,
    period: "month",
    description:
      "Perfect for small tournaments and single-event organizers getting started.",
    features: [
      "Up to 3 tournaments per year",
      "Up to 32 teams per tournament",
      "AI-powered scheduling",
      "Online registration",
      "Basic bracket formats",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 249,
    period: "month",
    description:
      "For established organizations running multiple events throughout the year.",
    features: [
      "Unlimited tournaments",
      "Unlimited teams",
      "All bracket formats",
      "Stripe Connect payments",
      "Custom form builder",
      "Advanced analytics",
      "Referee management",
      "Priority support",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: null,
    period: null,
    description:
      "For large organizations and multi-venue operations that need dedicated support.",
    features: [
      "Everything in Pro",
      "Multi-venue management",
      "White-label options",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Onboarding support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export interface PainPoint {
  before: string;
  after: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    before: "Scheduling games in spreadsheets for days",
    after: "AI generates your entire schedule in minutes",
  },
  {
    before: "Chasing payments via Venmo, checks, and cash",
    after: "Automated online payments deposited to your account",
  },
  {
    before: "Managing rosters through email chains",
    after: "Centralized team and roster management portal",
  },
  {
    before: "Tracking scores on paper at the fields",
    after: "Real-time digital scoring with live standings",
  },
  {
    before: "Field conflicts and double-bookings",
    after: "Smart field allocation with conflict prevention",
  },
  {
    before: "Post-tournament financial reconciliation nightmares",
    after: "Complete financial dashboard with transaction history",
  },
];

export const STATS = [
  { label: "Tournaments Managed", value: 500, suffix: "+" },
  { label: "Teams Registered", value: 10000, suffix: "+" },
  { label: "Games Scheduled", value: 50000, suffix: "+" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "KickDeck cut our tournament setup time by 80%. What used to take our team two weeks of scheduling now takes a single afternoon.",
    name: "Maria Santos",
    role: "Tournament Organizer",
    organization: "Gulf Coast Classic",
  },
  {
    quote:
      "The payment processing alone was worth switching. No more chasing checks or reconciling Venmo payments. Everything just flows into our account.",
    name: "James Chen",
    role: "Club President",
    organization: "Metro United FC",
  },
  {
    quote:
      "Parents love the real-time standings and schedules. We get fewer phone calls and emails because everything is accessible online.",
    name: "Lisa Rodriguez",
    role: "League Administrator",
    organization: "Tri-State Youth Soccer League",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a free trial so you can explore every feature and see how KickDeck transforms your workflow. Just fill out the Get Started form and our team will set you up.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we prorate any differences.",
  },
  {
    question: "How does the payment processing work?",
    answer:
      "KickDeck uses Stripe Connect to create a secure, dedicated payment pipeline for each tournament. Registration fees are collected online and deposited directly into your bank account. A small platform fee (4% + $0.30) is applied per transaction.",
  },
  {
    question: "What tournament formats are supported?",
    answer:
      "KickDeck supports Round Robin, Single Elimination, Double Elimination, Pool Play, Swiss System, and Championship formats. You can configure multiple flights and divisions per age group.",
  },
  {
    question: "Do teams need an account to register?",
    answer:
      "No. Team managers can register through a public-facing registration page without creating an account. They receive email confirmations and updates throughout the process.",
  },
  {
    question: "Can I import existing team data?",
    answer:
      "Yes. KickDeck supports bulk CSV imports for teams, rosters, and player data. You can migrate your existing data in just a few clicks.",
  },
];
