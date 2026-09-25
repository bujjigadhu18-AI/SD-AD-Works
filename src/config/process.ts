export interface ProcessStep {
  step: string;
  name: string;
  description: string;
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "UNDERSTAND",
    description: "Understand the business, product and target audience.",
    deliverable: "Brief alignment & objective mapping"
  },
  {
    step: "02",
    name: "CONCEPT",
    description: "Develop the hook, storyline and visual direction.",
    deliverable: "Hook scripts & visual storyboard concept"
  },
  {
    step: "03",
    name: "CREATE",
    description: "Produce AI-assisted visuals, scenes and video elements.",
    deliverable: "Asset generation & high-res media renders"
  },
  {
    step: "04",
    name: "EDIT",
    description: "Combine visuals, voiceover, music, sound effects and transitions.",
    deliverable: "Pacing cut, audio mastering & color grade"
  },
  {
    step: "05",
    name: "DELIVER",
    description: "Deliver the final social-media-ready advertisement.",
    deliverable: "Export in platform-optimized 4K/1080p formats"
  }
];

export interface ValueProp {
  title: string;
  description: string;
}

export const WHY_US_CARDS: ValueProp[] = [
  {
    title: "CREATIVE-FIRST",
    description: "Every advertisement starts with an idea and hook."
  },
  {
    title: "SOCIAL-FIRST",
    description: "Videos are designed around modern short-form formats."
  },
  {
    title: "AI-ASSISTED",
    description: "AI tools help accelerate visual production and experimentation."
  },
  {
    title: "CUSTOM",
    description: "Each advertisement is developed around the individual business."
  }
];
