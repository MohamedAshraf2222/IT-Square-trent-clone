// ============================================================
// Types
// ============================================================

export type Category = {
  id: string;
  name: string;          // Arabic name
  nameEn: string;        // English name
  slug: string;
  image?: string;
};

export type Product = {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  category: string;      // category slug
  price: number;         // SAR
  oldPrice?: number;     // for discount badge
  discount?: number;     // percentage e.g. 20
  rating: number;        // 0–5
  reviews: number;
  image: string;
  images: string[];
  badge?: "new" | "best-seller" | "sale" | "limited";
  inStock: boolean;
  description: string;
};

export type PromoBanner = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  bg: string;            // tailwind bg class or hex
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

// ============================================================
// Categories
// ============================================================

export const categories: Category[] = [
  { id: "c1", name: "تاجير معدات",  nameEn: "Equipments rent",   slug: "rental",  image: "/images/category-rental.png" },
  { id: "c2", name: "معدات انشاء",       nameEn: "Construction Equipments",       slug: "construction",            image: "/images/category-construction.png" },
  { id: "c3", name: "لوازم الحفلات", nameEn: "Party supplies", slug: "party",            image: "/images/category-party.png" },
  { id: "c4", name: "معدات تصوير", nameEn: "Photography Equipments",     slug: "camera",         image: "/images/category-camera.png" },
  { id: "c5", name: "مقتنيات شخصية",       nameEn: "Personal belongings",        slug: "personal",      image: "/images/category-personal.png" },
  { id: "c6", name: "الكترونيات",       nameEn: "Electronics",          slug: "electronics",        image: "/images/category-electronics.png" },
  { id: "c7", name: "اخرى",       nameEn: "Other",       slug: "other",      image: "/images/category-other.png" },
];

// ============================================================
// Products
// ============================================================

export const products: Product[] = [
  // --- Electronics ---
  {
    id: "p1",
    name: "طقم كاسات كريستال RCR Timeless — إيطالي الصنع",
    nameEn: "RCR Timeless Crystal Glass Set — Made in Italy",
    slug: "rcr-timeless-crystal-glass-set",
    category: "home",
    price: 210,
    oldPrice: 280,
    discount: 25,
    rating: 4.7,
    reviews: 132,
    image: "/images/products/p1.jpg",
    images: ["/images/products/p1.jpg", "/images/products/p1-2.jpg"],
    badge: "sale",
    inStock: true,
    description: "طقم كاسات كريستال فاخر من RCR الإيطالية، مثالي للمناسبات والحفلات.",
  },
  {
    id: "p2",
    name: "سماعات لاسلكية Sony WH-1000XM5",
    nameEn: "Sony WH-1000XM5 Wireless Headphones",
    slug: "sony-wh-1000xm5",
    category: "electronics",
    price: 1499,
    oldPrice: 1799,
    discount: 17,
    rating: 4.9,
    reviews: 842,
    image: "/images/products/p2.jpg",
    images: ["/images/products/p2.jpg"],
    badge: "best-seller",
    inStock: true,
    description: "أفضل سماعات إلغاء الضوضاء مع جودة صوت استثنائية وبطارية تدوم 30 ساعة.",
  },
  {
    id: "p3",
    name: "آيفون 15 برو ماكس 256 جيجا",
    nameEn: "iPhone 15 Pro Max 256GB",
    slug: "iphone-15-pro-max-256",
    category: "electronics",
    price: 5199,
    rating: 4.8,
    reviews: 2134,
    image: "/images/products/p3.jpg",
    images: ["/images/products/p3.jpg"],
    badge: "new",
    inStock: true,
    description: "أحدث إصدار من آيفون مع شريحة A17 Pro وكاميرا احترافية.",
  },
  {
    id: "p4",
    name: "ساعة سامسونج Galaxy Watch 6",
    nameEn: "Samsung Galaxy Watch 6",
    slug: "samsung-galaxy-watch-6",
    category: "electronics",
    price: 1099,
    oldPrice: 1299,
    discount: 15,
    rating: 4.6,
    reviews: 421,
    image: "/images/products/p4.jpg",
    images: ["/images/products/p4.jpg"],
    badge: "sale",
    inStock: true,
    description: "ساعة ذكية بتصميم أنيق وتتبع صحي متقدم.",
  },
  {
    id: "p5",
    name: "لابتوب MacBook Air M3",
    nameEn: "MacBook Air M3",
    slug: "macbook-air-m3",
    category: "electronics",
    price: 4499,
    rating: 4.9,
    reviews: 689,
    image: "/images/products/p5.jpg",
    images: ["/images/products/p5.jpg"],
    badge: "new",
    inStock: true,
    description: "خفيف، سريع، وبطارية تدوم طوال اليوم مع شريحة M3.",
  },

  // --- Fashion ---
  {
    id: "p6",
    name: "قميص رجالي كلاسيك قطن",
    nameEn: "Men's Classic Cotton Shirt",
    slug: "mens-classic-cotton-shirt",
    category: "fashion",
    price: 149,
    oldPrice: 199,
    discount: 25,
    rating: 4.4,
    reviews: 218,
    image: "/images/products/p6.jpg",
    images: ["/images/products/p6.jpg"],
    badge: "sale",
    inStock: true,
    description: "قميص قطن 100% بقصة عصرية، متوفر بعدة ألوان.",
  },
  {
    id: "p7",
    name: "عباية نسائية مطرزة",
    nameEn: "Women's Embroidered Abaya",
    slug: "womens-embroidered-abaya",
    category: "fashion",
    price: 349,
    rating: 4.8,
    reviews: 176,
    image: "/images/products/p7.jpg",
    images: ["/images/products/p7.jpg"],
    badge: "best-seller",
    inStock: true,
    description: "عباية أنيقة بتطريز يدوي، مثالية للمناسبات.",
  },
  {
    id: "p8",
    name: "حذاء رياضي Nike Air Max",
    nameEn: "Nike Air Max Sneakers",
    slug: "nike-air-max-sneakers",
    category: "fashion",
    price: 599,
    oldPrice: 749,
    discount: 20,
    rating: 4.7,
    reviews: 534,
    image: "/images/products/p8.jpg",
    images: ["/images/products/p8.jpg"],
    badge: "sale",
    inStock: true,
    description: "حذاء رياضي مريح بتصميم عصري وتقنية Air Max.",
  },
  {
    id: "p9",
    name: "حقيبة يد جلد طبيعي",
    nameEn: "Genuine Leather Handbag",
    slug: "genuine-leather-handbag",
    category: "fashion",
    price: 459,
    rating: 4.6,
    reviews: 92,
    image: "/images/products/p9.jpg",
    images: ["/images/products/p9.jpg"],
    inStock: true,
    description: "حقيبة يد أنيقة من الجلد الطبيعي، متوفرة بعدة ألوان.",
  },

  // --- Home & Kitchen ---
  {
    id: "p10",
    name: "طقم أواني طهي 10 قطع",
    nameEn: "10-Piece Cookware Set",
    slug: "10-piece-cookware-set",
    category: "home",
    price: 399,
    oldPrice: 549,
    discount: 27,
    rating: 4.5,
    reviews: 311,
    image: "/images/products/p10.jpg",
    images: ["/images/products/p10.jpg"],
    badge: "sale",
    inStock: true,
    description: "طقم أواني طهي غير لاصق، مناسب لجميع أنواع المواقد.",
  },
  {
    id: "p11",
    name: "ماكينة قهوة نسبريسو",
    nameEn: "Nespresso Coffee Machine",
    slug: "nespresso-coffee-machine",
    category: "home",
    price: 899,
    rating: 4.8,
    reviews: 654,
    image: "/images/products/p11.jpg",
    images: ["/images/products/p11.jpg"],
    badge: "best-seller",
    inStock: true,
    description: "ماكينة قهوة أنيقة وسهلة الاستخدام، مثالية للمنزل والمكتب.",
  },
  {
    id: "p12",
    name: "مفرش سرير قطني 4 قطع",
    nameEn: "4-Piece Cotton Bed Sheet Set",
    slug: "cotton-bed-sheet-set",
    category: "home",
    price: 279,
    oldPrice: 349,
    discount: 20,
    rating: 4.3,
    reviews: 147,
    image: "/images/products/p12.jpg",
    images: ["/images/products/p12.jpg"],
    badge: "sale",
    inStock: true,
    description: "مفرش سرير قطني ناعم، متوفر بمقاسات وألوان متعددة.",
  },

  // --- Beauty ---
  {
    id: "p13",
    name: "عطر شانيل رقم 5",
    nameEn: "Chanel No. 5 Perfume",
    slug: "chanel-no-5-perfume",
    category: "beauty",
    price: 799,
    rating: 4.9,
    reviews: 982,
    image: "/images/products/p13.jpg",
    images: ["/images/products/p13.jpg"],
    badge: "best-seller",
    inStock: true,
    description: "عطر أيقوني للنساء، برائحة زهرية أنيقة تدوم طويلاً.",
  },
  {
    id: "p14",
    name: "كريم مرطب للوجه La Roche-Posay",
    nameEn: "La Roche-Posay Face Moisturizer",
    slug: "la-roche-posay-moisturizer",
    category: "beauty",
    price: 189,
    oldPrice: 229,
    discount: 17,
    rating: 4.7,
    reviews: 423,
    image: "/images/products/p14.jpg",
    images: ["/images/products/p14.jpg"],
    badge: "sale",
    inStock: true,
    description: "كريم مرطب مناسب للبشرة الحساسة، خالٍ من العطور.",
  },
  {
    id: "p15",
    name: "طقم فرش مكياج 12 قطعة",
    nameEn: "12-Piece Makeup Brush Set",
    slug: "12-piece-makeup-brush-set",
    category: "beauty",
    price: 129,
    rating: 4.5,
    reviews: 267,
    image: "/images/products/p15.jpg",
    images: ["/images/products/p15.jpg"],
    inStock: true,
    description: "طقم فرش مكياج احترافي، مناسب لجميع أنواع المكياج.",
  },

  // --- Sports ---
  {
    id: "p16",
    name: "دمبل قابل للتعديل 20 كجم",
    nameEn: "Adjustable Dumbbell 20kg",
    slug: "adjustable-dumbbell-20kg",
    category: "sports",
    price: 449,
    oldPrice: 599,
    discount: 25,
    rating: 4.6,
    reviews: 189,
    image: "/images/products/p16.jpg",
    images: ["/images/products/p16.jpg"],
    badge: "sale",
    inStock: true,
    description: "دمبل قابل للتعديل، مثالي للتمارين المنزلية.",
  },
  {
    id: "p17",
    name: "سجادة يوغا غير قابلة للانزلاق",
    nameEn: "Non-Slip Yoga Mat",
    slug: "non-slip-yoga-mat",
    category: "sports",
    price: 99,
    rating: 4.4,
    reviews: 312,
    image: "/images/products/p17.jpg",
    images: ["/images/products/p17.jpg"],
    inStock: true,
    description: "سجادة يوغا مريحة وغير قابلة للانزلاق، بسماكة 6 مم.",
  },

  // --- Toys ---
  {
    id: "p18",
    name: "مكعبات ليغو 500 قطعة",
    nameEn: "LEGO 500-Piece Set",
    slug: "lego-500-piece-set",
    category: "toys",
    price: 299,
    rating: 4.8,
    reviews: 456,
    image: "/images/products/p18.jpg",
    images: ["/images/products/p18.jpg"],
    badge: "best-seller",
    inStock: true,
    description: "مجموعة مكعبات ليغو إبداعية، مناسبة للأطفال من عمر 6 سنوات.",
  },
  {
    id: "p19",
    name: "لعبة تحكم عن بعد سيارة سباق",
    nameEn: "RC Racing Car",
    slug: "rc-racing-car",
    category: "toys",
    price: 199,
    oldPrice: 259,
    discount: 23,
    rating: 4.5,
    reviews: 178,
    image: "/images/products/p19.jpg",
    images: ["/images/products/p19.jpg"],
    badge: "sale",
    inStock: true,
    description: "سيارة سباق بالتحكم عن بعد، سرعة عالية وبطارية قابلة للشحن.",
  },
];

// ============================================================
// Promo Banners
// ============================================================

export const promoBanners: PromoBanner[] = [
  {
    id: "b1",
    title: "تخفيضات الصيف",
    subtitle: "خصم يصل إلى 60% على الإلكترونيات",
    cta: "اكتشف العروض",
    href: "/offers/summer",
    image: "/images/banner-summer.jpg",
    bg: "#B91C1C",
  },
  {
    id: "b2",
    title: "أسبوع الجمال",
    subtitle: "اشتري 2 واحصل على 1 مجاناً",
    cta: "تسوق الآن",
    href: "/offers/beauty",
    image: "/images/banner-beauty.jpg",
    bg: "#0C4DA2",
  },
  {
    id: "b3",
    title: "توصيل مجاني",
    subtitle: "لجميع الطلبات فوق 200 ريال",
    cta: "اعرف المزيد",
    href: "/shipping",
    image: "/images/banner-shipping.jpg",
    bg: "#002f36",
  },
];

// ============================================================
// Featured / Curated Lists
// ============================================================

export const featuredProducts = products.filter((p) => p.badge === "best-seller");
export const newArrivals = products.filter((p) => p.badge === "new");
export const onSale = products.filter((p) => p.discount && p.discount > 0);

// ============================================================
// Reviews (sample)
// ============================================================

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p1",
    author: "أحمد",
    rating: 5,
    comment: "جودة ممتازة وتغليف احترافي. أنصح به بشدة.",
    date: "2025-08-12",
  },
  {
    id: "r2",
    productId: "p2",
    author: "سارة",
    rating: 5,
    comment: "أفضل سماعات استخدمتها، عزل الضوضاء رائع.",
    date: "2025-08-05",
  },
  {
    id: "r3",
    productId: "p6",
    author: "خالد",
    rating: 4,
    comment: "قميص مريح وجودة القماش جيدة، لكن المقاس أصغر قليلاً.",
    date: "2025-07-28",
  },
];

// ============================================================
// Helper functions
// ============================================================

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getFeatured(limit = 8): Product[] {
  return featuredProducts.slice(0, limit);
}

export function getNewArrivals(limit = 8): Product[] {
  return newArrivals.slice(0, limit);
}

export function getOnSale(limit = 8): Product[] {
  return onSale.slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}