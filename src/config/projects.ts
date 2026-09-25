export interface Project {
  id: string;
  name: string;
  brand: string;
  category: string;
  filterKey: 'restaurant' | 'fitness' | 'real-estate' | 'fashion' | 'automotive' | 'app-saas';
  label: string;
  tagline?: string;
  description: string;
  poster: string;
  thumbnailPath: string;
  video: string;
  videoPath: string;
  accentColor: string;
  conceptNotes: string;
  highlights: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "luna-cafe",
    name: "Luna Café",
    brand: "Luna Café",
    category: "Restaurant / Café",
    filterKey: "restaurant",
    label: "SPEC AD / CONCEPT DEMO",
    tagline: "Crafted for the Modern Palate.",
    description: "Cinematic food advertisement concept for a modern café.",
    poster: "/assets/portfolio/luna-cafe/poster.jpg",
    thumbnailPath: "/assets/portfolio/luna-cafe/poster.jpg",
    video: "/assets/portfolio/luna-cafe/luna-cafe.mp4",
    videoPath: "/assets/portfolio/luna-cafe/luna-cafe.mp4",
    accentColor: "#E5A93C",
    conceptNotes: "High-contrast steam and macro coffee pour, slow-motion pastry flake textures, warm ambient café glow designed to trigger instant cravings.",
    highlights: ["Artisan Espresso Macro Pull", "Slow-Mo Flaky Croissant", "Ambient Low-Light Aesthetic"]
  },
  {
    id: "apex-fitness",
    name: "Apex Fitness",
    brand: "Apex Fitness",
    category: "Fitness",
    filterKey: "fitness",
    label: "SPEC AD / CONCEPT DEMO",
    tagline: "Push Past Your Limits.",
    description: "High-energy fitness advertisement concept created for social media.",
    poster: "/assets/portfolio/apex-fitness/poster.jpg",
    thumbnailPath: "/assets/portfolio/apex-fitness/poster.jpg",
    video: "/assets/portfolio/apex-fitness/apex-fitness.mp4",
    videoPath: "/assets/portfolio/apex-fitness/apex-fitness.mp4",
    accentColor: "#E10600",
    conceptNotes: "Rapid BPM-synced pacing, sweat droplets caught in sharp red rim light, dynamic speed ramps to maximize viewer retention in the first 2 seconds.",
    highlights: ["140 BPM Audio Beat-Drop Sync", "Industrial Gym Silhouette", "Sub-2s Hook Architecture"]
  },
  {
    id: "nova-heights",
    name: "Nova Heights",
    brand: "Nova Heights",
    category: "Real Estate",
    filterKey: "real-estate",
    label: "SPEC AD / CONCEPT DEMO",
    tagline: "Skyline Living Redefined.",
    description: "Premium real-estate promotional video concept.",
    poster: "/assets/portfolio/nova-heights/poster.jpg",
    thumbnailPath: "/assets/portfolio/nova-heights/poster.jpg",
    video: "/assets/portfolio/nova-heights/nova-heights.mp4",
    videoPath: "/assets/portfolio/nova-heights/nova-heights.mp4",
    accentColor: "#C5A880",
    conceptNotes: "Gliding architectural drone perspectives, sunset golden reflections on floor-to-ceiling glass, and luxurious interior lifestyle staging.",
    highlights: ["Twilight City Skyline Panorama", "Infinity Pool Water Reflections", "Ultra-Minimalist Penthouse Walkthrough"]
  },
  {
    id: "velora",
    name: "Vélora",
    brand: "Vélora",
    category: "Fashion / Boutique",
    filterKey: "fashion",
    label: "SPEC AD / CONCEPT DEMO",
    tagline: "Wear Your Presence.",
    description: "Luxury fashion boutique advertisement concept.",
    poster: "/assets/portfolio/velora/poster.jpg",
    thumbnailPath: "/assets/portfolio/velora/poster.jpg",
    video: "/assets/portfolio/velora/velora.mp4",
    videoPath: "/assets/portfolio/velora/velora.mp4",
    accentColor: "#D4AF37",
    conceptNotes: "Monochrome high-fashion studio aesthetic, tailored silhouette motion, textured garment drape, and subtle red focal accents inspired by European haute couture.",
    highlights: ["Dramatic Chiaroscuro Lighting", "Textile Flow Macro Slow-Mo", "Minimalist Editorial Cuts"]
  },
  {
    id: "aeron-x1",
    name: "AERON X1",
    brand: "AERON X1",
    category: "Automotive",
    filterKey: "automotive",
    label: "SPEC AD / CONCEPT DEMO",
    tagline: "Own the Road.",
    description: "Premium cinematic automotive advertisement concept.",
    poster: "/assets/portfolio/aeron-x1/poster.jpg",
    thumbnailPath: "/assets/portfolio/aeron-x1/poster.jpg",
    video: "/assets/portfolio/aeron-x1/aeron-x1.mp4",
    videoPath: "/assets/portfolio/aeron-x1/aeron-x1.mp4",
    accentColor: "#E10600",
    conceptNotes: "Aggressive performance vehicle sliding across rain-slicked asphalt at night, razor-sharp LED light ribbons, atmospheric mist, and raw horsepower pacing.",
    highlights: ["Wet Asphalt Neon Drift", "LED Taillight Ribbon Trails", "Turbo Induction Sound Design"]
  },
  {
    id: "flowly",
    name: "Flowly",
    brand: "Flowly",
    category: "App / SaaS",
    filterKey: "app-saas",
    label: "SPEC AD / CONCEPT DEMO",
    tagline: "Less Chaos. More Done.",
    description: "40-second SaaS/product advertisement concept.",
    poster: "/assets/portfolio/flowly/poster.jpg",
    thumbnailPath: "/assets/portfolio/flowly/poster.jpg",
    video: "/assets/portfolio/flowly/flowly.mp4",
    videoPath: "/assets/portfolio/flowly/flowly.mp4",
    accentColor: "#3B82F6",
    conceptNotes: "Floating glass user interface visualization, kinetic typography, automated task routing diagrams, and snappy pain-point-to-solution transition pacing.",
    highlights: ["Kinetic UI Typography", "Workflow Automation Node Glow", "Frictionless Onboarding Demonstration"]
  }
];

export const projects = PORTFOLIO_PROJECTS;

export const PORTFOLIO_FILTERS = [
  { key: "all", label: "ALL" },
  { key: "restaurant", label: "RESTAURANT" },
  { key: "fitness", label: "FITNESS" },
  { key: "real-estate", label: "REAL ESTATE" },
  { key: "fashion", label: "FASHION" },
  { key: "automotive", label: "AUTOMOTIVE" },
  { key: "app-saas", label: "APP / SAAS" },
] as const;
