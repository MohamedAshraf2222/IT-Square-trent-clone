export type ProductCategory =
  | "rental"
  | "construction"
  | "party"
  | "camera"
  | "personal"
  | "electronics"
  | "other";


export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  slug: string;
  category: ProductCategory;
  categoryName: string;     // ← Arabic
  categoryNameEn: string;   // ← English
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  location: string;
  image: string;
  images?: string[];
  badge?: string;
  inStock: boolean;
  description?: string;
}