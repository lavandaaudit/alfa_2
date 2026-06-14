// ─────────────────────────────────────────────
// CORE PRODUCT TYPES
// ─────────────────────────────────────────────

export interface PricingTier {
  qty: number;       // minimum quantity for this tier
  pricePerUnit: number;
}

export interface ProductMedia {
  main: string;          // primary image URL or path
  gallery: string[];     // 3-6 gallery images
  video?: string;        // optional MP4 path (e.g. /videos/production-1.mp4)
  mockup?: string;       // mockup preview image
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory?: string;
  description: string;
  basePrice: number;          // price at lowest tier (e.g. 500+ units)
  tiers: PricingTier[];       // sorted ascending by qty
  media: ProductMedia;
  colorTags: BrandColor[];    // which brand color themes this product suits
  printOptions?: string[];    // e.g. ["Screen Print", "Embroidery", "DTG"]
  minOrderQty: number;
  productionDays: number;     // base production time in days
  popular?: boolean;
}

// ─────────────────────────────────────────────
// ENUMS / UNION TYPES
// ─────────────────────────────────────────────

export type ProductCategory =
  | "Apparel"
  | "Bags"
  | "Notebooks & Stationery"
  | "Drinkware"
  | "Printing"
  | "Packaging"
  | "Event";

export type BrandColor =
  | "green-eco"
  | "corporate-blue"
  | "luxury-black"
  | "neutral-beige"
  | "vibrant-campaign"
  | "all";

export type KitPreset =
  | "conference"
  | "press"
  | "corporate-welcome"
  | "exhibition"
  | "ngo-campaign"
  | "marketing";

// ─────────────────────────────────────────────
// KIT SYSTEM TYPES
// ─────────────────────────────────────────────

export interface KitItem {
  productId: string;
  defaultQty: number;
}

export interface Kit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  preset: KitPreset;
  items: KitItem[];
  coverImage: string;
  colorTag: BrandColor;
  evertonBasePrice?: number;  // calculated, optional override
}

// ─────────────────────────────────────────────
// BUILDER STATE TYPES
// ─────────────────────────────────────────────

export interface SelectedItem {
  productId: string;
  quantity: number;
  customQty?: boolean;
}

export interface BuilderState {
  mode: "catalog" | "kit";
  activeKitId?: string;
  selectedItems: SelectedItem[];
  activeCategory: ProductCategory | "all";
  activeColor: BrandColor;
  eventPreset?: KitPreset;
  searchQuery: string;
}

// ─────────────────────────────────────────────
// PRICING ENGINE TYPES
// ─────────────────────────────────────────────

export interface LineItem {
  product: Product;
  quantity: number;
  pricePerUnit: number;
  lineTotal: number;
  appliedTier: PricingTier;
}

export interface PricingSummary {
  lineItems: LineItem[];
  subtotal: number;
  currency: "EUR";
  productionDays: number;  // max across all items
  estimatedDelivery: string;
}

// ─────────────────────────────────────────────
// LEGACY COMPAT (Phase 1 → Phase 2)
// ─────────────────────────────────────────────

/** @deprecated Use PricingTier instead */
export interface OldPricingTier {
  min: number;
  discount: number;
}
