export type ProductCategory =
  | "rental"
  | "construction"
  | "party"
  | "camera"
  | "personal"
  | "electronics"
  | "other";

export type Category = {
  id: string;
  name: string;         
  nameEn: string;       
  slug: string;
  image?: string;
};

  export type Slide = {
  id: number;
  image: string;
  title: string;
};
export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  slug: string;
  category: ProductCategory;
  categoryName: string;     
  categoryNameEn: string;   
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