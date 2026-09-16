"use client";
import Image from "next/image";
import Link from "next/link";
import { X, MapPin } from "lucide-react";
import Switch from "../ui/Switch";
import { useEffect } from "react";

type Props = { open: boolean; onClose: () => void };

export default function MobileMenu({ open, onClose }: Props) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl
          transition-transform duration-300 lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <Image src="/images/logo.png" width={80} height={56} alt="Trent SA" />
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-73px)]">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 border border-nav-border w-full bg-[#f8fbfa] rounded-[18px] py-2.5 px-3"
          >
            <MapPin className="w-4 h-4 text-[#002f36]" />
            <div className="flex flex-col">
              <p className="text-[#3c3c3ccc] text-[9px] font-semibold">
                التوصيل إلى
              </p>
              <p className="text-[12px] font-black text-[#002f36]">حدد موقعك</p>
            </div>
          </Link>

          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between border border-nav-border rounded-[18px] bg-white p-[10px_12px] shadow-[0_4px_10px_#00000008]"
          >
            <div className="text-[12px] font-medium text-[#3c3c3ccc]">
              اللغة
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/united-kingdom.png"
                width={18}
                height={18}
                alt="UK"
              />
              <span className="text-[12px] font-black text-[#002f36]">
                English
              </span>
            </div>
          </Link>

          <div className="flex items-center justify-between border border-nav-border rounded-[18px] bg-white p-[10px_12px] shadow-[0_4px_10px_#00000008]">
            <p className="text-[14px] font-semibold text-[#3c3c3ccc]">
              وضع العارض
            </p>
            <Switch />
          </div>
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-center rounded-[18px] bg-[#002f36] py-3.5 text-[15px] font-black text-background shadow-[0_4px_10px_#00000008]"
          >
            تسجيل الدخول
          </Link>
        </div>
      </aside>
    </>
  );
}
