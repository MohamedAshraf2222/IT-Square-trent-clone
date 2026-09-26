import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  MapPin,
  Truck,
  BadgeCheck,
  ShieldCheck,
  RotateCcw,
  Rocket,
  Store,
  Bike,
  MessageCircle,
  SlidersHorizontal,
  ChevronLeft,
} from "lucide-react";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import ProductsSection from "@/components/home/ProductsSection";
import { products } from "@/lib/dummy-data";

interface PageProps {
  params: Promise<{ product: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ product: p.id }));
}

export default async function ProductPage({ params }: PageProps) {
  const { product:id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const images = product.images;
  
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
    
  if (related.length < 4) {
  const fillers = products
    .filter((p) => p.id !== product.id && !related.some((r) => r.id === p.id))
    .slice(0, 4 - related.length);
  related.push(...fillers);
}

  return (
    <main className="w-full pb-16 bg-[#f8fafd]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#00685e] transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-gray-300" />
            <Link
              href={`/categories/${product.category}`}
              className="hover:text-[#00685e] transition-colors"
            >
              {product.categoryName}
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-900 font-semibold truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main product card */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Gallery — 6 cols */}
            <div className="lg:col-span-6">
              <ProductGallery
                images={images}
                name={product.name}
                discount={product.discount}
              />
            </div>

            {/* Info — 6 cols */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {/* Category + Stock */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#00685e] text-xs font-semibold">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  {product.categoryName}
                </span>
                {product.inStock && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    متوفر في المخزون (تسليم فوري)
                  </span>
                )}
              </div>

              {/* Titles */}
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                  {product.name}
                </h1>
                {product.nameEn && (
                  <p className="text-sm text-gray-500 font-medium tracking-wide">
                    {product.nameEn}
                  </p>
                )}
              </div>

              {/* Rating + Location */}
              <div className="flex items-center gap-3 text-xs text-gray-600 pb-3 border-b border-gray-100 flex-wrap">
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-sm">{product.rating}</span>
                  <span className="text-amber-700">
                    ({product.reviews} تقييم)
                  </span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>
                    الموقع:{" "}
                    <strong className="text-gray-800">{product.location}</strong>{" "}
                    (متاح للاستلام والتوصيل)
                  </span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1 text-teal-700">
                  <Truck className="w-4 h-4" />
                  <span>توصيل سريع متاح اليوم</span>
                </div>
              </div>

              {/* Price box */}
              <div className="p-4 rounded-xl bg-[#f7fafc] border border-gray-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#00685e]">
                    {product.price.toFixed(2)}
                  </span>
                  <span className="text-base font-bold text-[#00685e]">ر.س</span>
                  {product.oldPrice && product.oldPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through mr-1">
                      {product.oldPrice} ر.س
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {product.discount && (
                    <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 font-bold text-xs border border-rose-100">
                      وفر {product.discount}% (خصم خاص)
                    </span>
                  )}
                  <span className="text-xs text-gray-500">
                    شامل ضريبة القيمة المضافة
                  </span>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="text-sm text-gray-700 leading-relaxed bg-white rounded-xl p-3.5 border border-gray-100">
                  {product.description}
                </div>
              )}

              {/* Quantity + Actions (client island) */}
              <ProductActions product={product} />

              {/* Reassurance badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50/70">
                  <ShieldCheck className="text-teal-600 w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800">
                      ضمان ترينت
                    </span>
                    <span className="text-[11px] text-gray-500">
                      للأصالة والجودة
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50/70">
                  <RotateCcw className="text-teal-600 w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800">
                      استرجاع سهل
                    </span>
                    <span className="text-[11px] text-gray-500">
                      خلال 14 يوم
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50/70">
                  <Rocket className="text-teal-600 w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800">
                      شحن سريع
                    </span>
                    <span className="text-[11px] text-gray-500">
                      داخل الرياض بنفس اليوم
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specs + Delivery */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Specs — 7 cols */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-100">
              <SlidersHorizontal className="text-[#00685e] w-5 h-5" />
              <h2 className="text-base font-bold text-gray-900">
                مواصفات المنتج الأساسية
              </h2>
            </div>
            <dl className="divide-y divide-gray-100 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <dt className="text-gray-500">الفئة</dt>
                <dd className="font-semibold text-gray-900">
                  {product.categoryName}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-gray-500">الموقع</dt>
                <dd className="font-semibold text-gray-900">
                  {product.location}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-gray-500">التقييم</dt>
                <dd className="font-semibold text-gray-900">
                  {product.rating} من 5 ({product.reviews} تقييم)
                </dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-gray-500">التوفر</dt>
                <dd className="font-semibold text-gray-900">
                  {product.inStock ? "متوفر فوري" : "غير متوفر"}
                </dd>
              </div>
            </dl>
          </div>

          {/* Delivery — 5 cols */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-100">
                <Truck className="text-[#00685e] w-5 h-5" />
                <h2 className="text-base font-bold text-gray-900">
                  سياسة الاستلام والتوصيل
                </h2>
              </div>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Store className="text-[#00685e] w-5 h-5 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-gray-900 block font-bold mb-0.5">
                      استلام مباشر ومجاني
                    </strong>
                    <p className="text-gray-600">
                      يمكنك استلام المنتج ومعاينته مباشرة من مقر المتجر.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <Bike className="text-[#00685e] w-5 h-5 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-gray-900 block font-bold mb-0.5">
                      توصيل سريع في نفس اليوم
                    </strong>
                    <p className="text-gray-600">
                      توصيل آمن مغلف بعناية داخل جميع أحياء المدينة.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <ShieldCheck className="text-[#00685e] w-5 h-5 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <strong className="text-gray-900 block font-bold mb-0.5">
                      تغليف فائق الأمان
                    </strong>
                    <p className="text-gray-600">
                      تغليف مضاعف بطبقات حماية متخصصة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>دعم فني واستفسارات فورية:</span>
              <button className="text-[#00685e] font-bold hover:underline flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                محادثة خدمة العملاء
              </button>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-12">
            <ProductsSection
              header="منتجات ذات صلة"
              allProductUrl={`/categories/${product.category}`}
              products={related}
              padding=""
            />
          </div>
        )}
      </div>
    </main>
  );
}