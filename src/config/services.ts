export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  format: string;
  iconName: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: "01",
    title: "AI UGC Ads",
    tagline: "Authentic creator feel, accelerated by AI.",
    description: "Short-form UGC-style advertisements with high organic engagement potential.",
    format: "9:16 Vertical · TikTok & Reels",
    iconName: "Sparkles"
  },
  {
    number: "02",
    title: "Short-Form Video Ads",
    tagline: "Dynamic storytelling for mobile feeds.",
    description: "Fast-paced, hook-driven video commercials crafted specifically for scroll platforms.",
    format: "9:16 Vertical · Multi-Platform",
    iconName: "Video"
  },
  {
    number: "03",
    title: "Product Ads",
    tagline: "Studio-grade product presentation.",
    description: "Cinematic product-focused advertisements designed to drive e-commerce sales.",
    format: "9:16 / 4:5 / 1:1 Feed & Stories",
    iconName: "Box"
  },
  {
    number: "04",
    title: "Instagram Reels",
    tagline: "High-retention scroll-stopping edits.",
    description: "Short-form vertical video edits designed for Instagram algorithmic reach.",
    format: "9:16 Vertical · Instagram & YouTube Shorts",
    iconName: "Smartphone"
  },
  {
    number: "05",
    title: "Restaurant & Café Ads",
    tagline: "Sensory food cinematography that drives footfall.",
    description: "Food-focused cinematic advertisements showcasing texture, flavor, and ambience.",
    format: "9:16 Vertical & 16:9 Landscape",
    iconName: "UtensilsCrossed"
  },
  {
    number: "06",
    title: "Fitness Ads",
    tagline: "High-adrenaline motion and explosive motivation.",
    description: "High-energy gym and training promotional videos synced to driving audio beats.",
    format: "9:16 Vertical · Dynamic Pace",
    iconName: "Flame"
  },
  {
    number: "07",
    title: "Real Estate Ads",
    tagline: "Architectural elegance and luxury lifestyle.",
    description: "Premium property walkthroughs and lifestyle showcases with cinematic drone perspectives.",
    format: "16:9 Cinematic & 9:16 Virtual Tour",
    iconName: "Building2"
  },
  {
    number: "08",
    title: "Fashion Ads",
    tagline: "Editorial aesthetics and garment in motion.",
    description: "Stylish lookbooks and boutique campaigns highlighting fabric, fit, and movement.",
    format: "9:16 Vertical · Lookbook & Campaign",
    iconName: "Shirt"
  },
  {
    number: "09",
    title: "Automotive Ads",
    tagline: "Raw power, speed dynamics and precision angles.",
    description: "Cinematic vehicle advertisements highlighting exterior lines, performance, and craftsmanship.",
    format: "16:9 Widescreen & 9:16 Teaser",
    iconName: "Car"
  },
  {
    number: "10",
    title: "App / SaaS Ads",
    tagline: "Frictionless product demos that convert clicks.",
    description: "Snappy software walkthroughs, kinetic UI motion, and startup advertisements.",
    format: "16:9 Demo & 9:16 Explainer",
    iconName: "Laptop"
  }
];
