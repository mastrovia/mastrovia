export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  year: string;
  client: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
  };
  screenshots: {
    url: string;
    caption: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cowork-kerala",
    title: "Co-Work Kerala",
    category: "Coworking & Virtual Offices",
    description:
      "We help you find your ideal workspace in Kerala. Discover premium coworking spaces and virtual offices across God's Own Country. Professional workspaces in Kochi, Trivandrum, Calicut, Thrissur and more.",
    image: "/works/co-work/page-hero.png",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    link: "https://www.coworkkerala.com/",
    year: "2025",
    client: "Co-Work Kerala",
    overview:
      "Co-Work Kerala is a comprehensive platform connecting professionals with premium coworking spaces and virtual office solutions across Kerala. The platform streamlines workspace discovery and booking for freelancers, startups, and established businesses.",
    challenge:
      "Kerala's growing startup ecosystem lacked a centralized platform for discovering and booking coworking spaces. Businesses struggled to find verified, professional workspaces that matched their requirements and budget.",
    solution:
      "We developed a sophisticated marketplace platform with detailed workspace listings, virtual tours, real-time availability, and seamless booking management. The solution includes both customer-facing and vendor management systems.",
    results: [
      "50+ verified coworking spaces listed",
      "Coverage across 10+ cities in Kerala",
      "200+ active monthly bookings",
      "4.8/5 average customer rating",
    ],
    features: [
      "Interactive map-based search",
      "Virtual office packages",
      "Day pass and monthly membership options",
      "Meeting room booking system",
      "Vendor dashboard for space management",
      "Integrated payment gateway",
      "Review and rating system",
      "Multi-language support (English, Malayalam)",
    ],
    technologies: {
      frontend: [
        "Next.js 14",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Mapbox GL",
      ],
      backend: ["Node.js", "Express", "MongoDB", "Redis", "Stripe API"],
      infrastructure: ["Vercel", "MongoDB Atlas", "AWS S3", "Cloudflare"],
    },
    screenshots: [
      {
        url: "/banners/Cowork-Homepage.png",
        caption: "Homepage with featured coworking spaces",
      },
    ],
    testimonial: {
      quote:
        "The platform has revolutionized how we connect with clients. The booking system is intuitive and the technical infrastructure is rock-solid.",
      author: "Priya Menon",
      role: "Operations Manager, Co-Work Kerala",
    },
  },
  {
    id: "microconnect",
    title: "MicroConnect",
    category: "Nano-Distribution Ecosystem",
    description:
      "Empowering local entrepreneurs to build sustainable businesses through a structured nano-distribution model. MicroConnect transforms last-mile commerce through community leadership and systematic growth.",
    image: "/banners/microconnect-homepage.png",
    tags: ["Entrepreneurship", "Distribution", "Sustainability"],
    link: "#",
    year: "2024",
    client: "MicroConnect",
    overview:
      "MicroConnect is a hyper-local micro distribution ecosystem connecting brands directly to households through trained local entrepreneurs. It is a structured, system-driven door-to-door distribution model that empowers community leaders to become market builders.",
    challenge:
      "Traditional distribution models often struggle with last-mile fragmentation and a lack of transparency. Local entrepreneurs need structured systems, professional training, and access to diverse product portfolios to build sustainable, scalable businesses.",
    solution:
      "We implemented a territory-based 'Nano Distribution' model where every panchayat has a dedicated certified distributor. The ecosystem is supported by professional training programs (YCMD & YCSA), centralized governance, and a multi-category product portfolio ranging from FMCG to home essentials.",
    results: [
      "1000+ Active Micro Distributors",
      "5000+ Trained Sales Associates",
      "100% Territory coverage across active regions",
      "₹0 Franchise fee model for accessible entrepreneurship",
    ],
    features: [
      "Exclusive Territory Rights (Zero internal competition)",
      "Multi-Category Access (FMCG, Food, Kitchen, Furniture)",
      "Professional Certification (YCMD & YCSA)",
      "Structure Support (Territory mapping, planning, execution)",
      "Digital Enablement (Inventory and performance tracking)",
      "Transparent Operational Systems & SOPs",
    ],
    technologies: {
      frontend: ["React", "Tailwind CSS", "Lucide Icons"],
      backend: ["Node.js", "Centralized Governance System"],
      infrastructure: ["Cloud Architecture", "Digital SCM"],
    },
    screenshots: [
      {
        url: "/banners/microconnect-homepage.png",
        caption: "MicroConnect Ecosystem Overview",
      },
    ],
    testimonial: {
      quote:
        "Markets grow when local people lead them. MicroConnect is not just a business platform; it's a movement that turns local trust into sustainable growth.",
      author: "Leadership Team",
      role: "MicroConnect",
    },
  },
  {
    id: "letsellr",
    title: "Letsellr",
    category: "Accommodation",
    description:
      "Choose your next home. Discover quality PGs, apartments, and hostels tailored for your work or study needs. Your ideal accommodation is just a search away.",
    image: "/banners/letseller.png",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    link: "https://letsellr.in/",
    year: "2025",
    client: "Letsellr Inc.",
    overview:
      "Letsellr is a comprehensive accommodation discovery platform designed to simplify the search for quality living spaces. The platform connects students and working professionals with verified PGs, apartments, and hostels across major cities in India.",
    challenge:
      "The accommodation search market was fragmented with unreliable listings, lack of verification, and poor user experience. Users struggled to find trustworthy options that matched their specific needs and budget constraints.",
    solution:
      "We built a modern, full-stack web application with advanced search filters, real-time availability updates, and a robust verification system. The platform features an intuitive interface that makes browsing and booking accommodations seamless.",
    results: [
      "10,000+ verified listings across 15+ cities",
      "95% user satisfaction rate",
      "Average booking time reduced by 60%",
      "500+ successful bookings in first 3 months",
    ],
    features: [
      "Advanced search with multiple filters (location, price, amenities)",
      "Real-time availability tracking",
      "Verified listings with photo galleries",
      "Secure booking system with payment integration",
      "User reviews and ratings",
      "Mobile-responsive design",
      "Admin dashboard for property management",
      "Email notifications and alerts",
    ],
    technologies: {
      frontend: [
        "Next.js 14",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
      ],
      infrastructure: ["Vercel", "MongoDB Atlas", "AWS S3", "Cloudflare CDN"],
    },
    screenshots: [
      {
        url: "/banners/letseller.png",
        caption: "Homepage with featured listings and search functionality",
      },
    ],
    testimonial: {
      quote:
        "Mastrovia transformed our vision into a powerful platform that's helping thousands find their perfect home. The attention to detail and technical expertise was exceptional.",
      author: "Rajesh Kumar",
      role: "Founder, Letsellr",
    },
  },
];
