/**
 * Site Configuration
 *
 * This file contains all customizable content for your link portal.
 * Edit the values below to personalize your site.
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  title: string;
  handle: string;
  url: string;
  /** Icon type: "github" | "twitter" | "instagram" | "linkedin" | "youtube" | "tiktok" | "substack" | "medium" | "figma" | "dribbble" | "custom" */
  icon: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  badge: "live" | "coming-soon";
  link: string;
  buttonLabel: string;
}

export interface TagData {
  label: string;
  bg: string;
  text: string;
}

export interface Tool {
  id: string;
  name: string;
  /** Path to icon (PNG recommended, 100x100 or larger) */
  icon: string;
  url: string;
  description: string;
  tags: TagData[];
  /** Set to true for smaller icons (optional) */
  smallIcon?: boolean;
}

export interface SiteConfig {
  metadata: {
    title: string;
    description: string;
    /** Path to favicon (relative to /public) */
    favicon: string;
  };
  analytics: {
    /** Google Analytics Measurement ID (leave empty to disable) */
    googleAnalyticsId: string;
  };
  branding: {
    /** Path to logo image (relative to basePath, or null to hide) */
    logo: string | null;
    /** Alt text for logo */
    logoAlt: string;
    /** Main website URL (linked from globe icon) */
    websiteUrl: string;
    /** Tagline displayed in footer */
    tagline: string;
    /** Contact email displayed in footer */
    email: string;
    /** Copyright year(s) */
    copyrightYear: string;
  };
  features: {
    /** Enable the CRT terminal background effect */
    crtEffect: boolean;
    /** CRT effect tint color (hex) */
    crtTint: string;
    /** CRT effect brightness (0-1) */
    crtBrightness: number;
    /** Enable the subscribe modal for resources */
    subscribeModal: boolean;
  };
  theme: {
    /** Primary accent color (hex) - used for CTAs, links, badges */
    accentColor: string;
    /** Dark background color (hex) */
    darkBg: string;
    /** Light background color (hex) */
    lightBg: string;
  };
  /** Navigation items shown in expandable header menu */
  nav: NavItem[];
  /** Social media links (max 5 recommended) */
  socialLinks: SocialLink[];
  /** Featured resources/projects (max 3 recommended) */
  resources: Resource[];
  /** Tools/tech stack items (16 slots, placeholder icons if needed) */
  tools: Tool[];
  blog: {
    /** Enable the blog section */
    enabled: boolean;
    /** RSS feed URL (e.g., Substack, Medium, or any RSS feed) */
    feedUrl: string;
    /** Section title */
    title: string;
    /** Substack subscribe URL (for newsletter form, leave empty to hide) */
    subscribeUrl: string;
  };
}

// ============================================
// CONFIGURATION
// ============================================

// Common tag styles for reuse
const COMMON_TAG_STYLES = { bg: "#f0f0f0", text: "#414651" };

// GymBuddy India category colors
const GYM_TAG_COLORS = {
  Training: "#455218",
  Nutrition: "#2d5a1b",
  Tools: "#1a4020",
  Platform: "#c0ff72",
};

export const siteConfig: SiteConfig = {
  // ============================================
  // METADATA
  // ============================================
  metadata: {
    title: "GymBuddy India | Links",
    description:
      "India's fitness social network — workout plans, food database, exercise library and more.",
    favicon: "/favicon.png",
  },

  // ============================================
  // ANALYTICS
  // ============================================
  analytics: {
    googleAnalyticsId: "",
  },

  // ============================================
  // BRANDING
  // ============================================
  branding: {
    logo: "/images/gymbuddy_logo.png",
    logoAlt: "GymBuddy India",
    websiteUrl: "https://gymbuddyindia.com/",
    tagline: "India's Fitness Social Network",
    email: "gymbuddyindia@gmail.com",
    copyrightYear: "2025",
  },

  // ============================================
  // FEATURES
  // ============================================
  features: {
    crtEffect: true,
    crtTint: "#c0ff72",
    crtBrightness: 0.05,
    subscribeModal: false,
  },

  // ============================================
  // THEME COLORS
  // ============================================
  theme: {
    accentColor: "#c0ff72",
    darkBg: "#0e1a02",
    lightBg: "#ffffff",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  nav: [
    { id: "nav-1", label: "Workout Plan", href: "https://tally.so/r/wLBV1j" },
    { id: "nav-2", label: "Website", href: "https://gymbuddyindia.com/" },
    { id: "nav-3", label: "Food Database", href: "https://gymbuddyindia.com/food-database" },
    { id: "nav-4", label: "Exercise Library", href: "https://gymbuddyindia.com/exercises/" },
    { id: "nav-5", label: "Fitness Calculators", href: "https://gymbuddyindia.com/tools" },
    { id: "nav-6", label: "Workout Templates", href: "https://gymbuddyindia.com/templates" },
  ],

  // ============================================
  // SOCIAL LINKS
  // ============================================
  socialLinks: [
    {
      id: "instagram",
      platform: "instagram",
      title: "Instagram",
      handle: "@gymbuddyindia",
      url: "https://instagram.com/gymbuddyindia",
      icon: "instagram",
    },
    {
      id: "website",
      platform: "custom",
      title: "Website",
      handle: "gymbuddyindia.com",
      url: "https://gymbuddyindia.com/",
      icon: "custom",
    },
  ],

  // ============================================
  // RESOURCES / PROJECTS
  // ============================================
  resources: [
    {
      id: "workout-plan",
      title: "Personalised Workout Plan",
      description:
        "Get a custom workout plan tailored to your goals, fitness level, and schedule.",
      badge: "live",
      link: "https://tally.so/r/wLBV1j",
      buttonLabel: "Get Your Plan",
    },
    {
      id: "food-database",
      title: "Indian Food Database",
      description:
        "Track macros and calories with India's most comprehensive food nutrition database.",
      badge: "live",
      link: "https://gymbuddyindia.com/food-database",
      buttonLabel: "Browse Foods",
    },
    {
      id: "exercise-library",
      title: "Exercise Library",
      description:
        "Explore hundreds of exercises with step-by-step instructions and muscle group breakdowns.",
      badge: "live",
      link: "https://gymbuddyindia.com/exercises/",
      buttonLabel: "Explore",
    },
  ],

  // ============================================
  // TOOLS / FEATURES
  // ============================================
  tools: [
    {
      id: "workout-plan-tool",
      name: "Workout Plan",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://tally.so/r/wLBV1j",
      description:
        "Get a personalised workout plan tailored to your goals and fitness level — free.",
      tags: [
        { label: "Training", bg: GYM_TAG_COLORS.Training, text: "#c0ff72" },
        { label: "Free", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "food-database-tool",
      name: "Food Database",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://gymbuddyindia.com/food-database",
      description:
        "India's most comprehensive food nutrition database for tracking macros and calories.",
      tags: [
        { label: "Nutrition", bg: GYM_TAG_COLORS.Nutrition, text: "#c0ff72" },
        { label: "Free", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "exercise-library-tool",
      name: "Exercise Library",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://gymbuddyindia.com/exercises/",
      description:
        "Browse hundreds of exercises with instructions and muscle group breakdowns.",
      tags: [
        { label: "Training", bg: GYM_TAG_COLORS.Training, text: "#c0ff72" },
        { label: "Reference", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "calculators-tool",
      name: "Fitness Calculators",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://gymbuddyindia.com/tools",
      description:
        "Calculate BMI, TDEE, macros, and more with our suite of fitness tools.",
      tags: [
        { label: "Tools", bg: GYM_TAG_COLORS.Tools, text: "#c0ff72" },
        { label: "Free", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "templates-tool",
      name: "Workout Templates",
      icon: "/icons/tech/command/placeholder.svg",
      url: "https://gymbuddyindia.com/templates",
      description:
        "Ready-to-use workout templates for different goals and experience levels.",
      tags: [
        { label: "Training", bg: GYM_TAG_COLORS.Training, text: "#c0ff72" },
        { label: "Templates", ...COMMON_TAG_STYLES },
      ],
    },
    {
      id: "gymbuddy-platform",
      name: "GymBuddy India",
      icon: "/images/gymbuddy_logo.png",
      url: "https://gymbuddyindia.com/",
      description:
        "India's fitness social network — connecting gym-goers and helping them reach their goals.",
      tags: [
        { label: "Platform", bg: GYM_TAG_COLORS.Platform, text: "#1a2009" },
        { label: "Social", ...COMMON_TAG_STYLES },
      ],
    },
  ],

  // ============================================
  // BLOG / RSS FEED
  // ============================================
  blog: {
    enabled: false,
    feedUrl: "",
    title: "Recent Posts",
    subscribeUrl: "",
  },
};

// ============================================
// HELPER EXPORTS
// ============================================

/** Get the base path for assets (used in components) */
export const getBasePath = () => {
  // In development or when basePath is not set, return empty string
  // In production with GitHub Pages, this should match next.config.ts basePath
  return process.env.NODE_ENV === "production" ? "/linktree-alternative" : "";
};

/** Prepend base path to asset URLs */
export const withBasePath = (path: string) => {
  const basePath = getBasePath();
  // If path already starts with basePath or is external URL, return as-is
  if (path.startsWith(basePath) || path.startsWith("http")) {
    return path;
  }
  return `${basePath}${path}`;
};
