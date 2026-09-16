"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Search,
  MapPin,
  Heart,
  ShoppingBasket,
  Menu as MenuIcon,
} from "lucide-react";
import NavbarBtn from "../ui/NavbarBtn";
import MobileMenu from "./MobileMenu";
import Switch from "../ui/Switch";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="pt-2.5 pb-3 bg-background border-b border-[#e8e6e5d9] sticky top-0 z-40">
        <div className="mx-3 sm:mx-4.5">
          <div className="flex items-center justify-between w-full border border-nav-border rounded-[22px] gap-2 sm:gap-2.5 py-2 sm:py-2.5 px-2.5 sm:px-3.5 bg-gradient-to-br from-white to-[#fafcfc] shadow-[0_8px_16px_#0000000d]">
            <Image
              src="/images/logo.png"
              width={100}
              height={70}
              alt="Trent SA"
              className="w-16 sm:w-20 lg:w-25 h-auto"
              priority
            />

            <div className="hidden lg:flex flex-1 items-center justify-center rounded-3xl max-w-107 px-3 border border-border min-h-12.5 bg-background shadow-[0_8px_16px_#0000000a]">
              <Link
                href="/"
                className="flex items-center w-full justify-between gap-3"
              >
                <div className="flex justify-center items-center gap-2.5">
                  <div className="rounded-[14px] bg-[#e6f4f1] p-2.5">
                    <Search className="w-4 h-4 text-[#919191]" />
                  </div>
                  <p className="cursor-pointer text-[13px] text-[#3c3c3ccc] font-semibold">
                    ما الذي تبحث عنه؟
                  </p>
                </div>
                <div className="rounded-[14px] bg-[#002f36] p-2.5">
                  <ArrowUpRight className="w-5 h-5 text-background stroke-3" />
                </div>
              </Link>
            </div>

            <Link
              href="/"
              className="hidden lg:flex border border-nav-border cursor-pointer w-55 min-h-13 bg-[#f8fbfa] rounded-[18px] items-center gap-1 py-2.5 px-3"
            >
              <MapPin className="w-4.25 h-4.25 text-[#002f36] stroke-3" />
              <div className="text-[#002f36] flex flex-col justify-center items-center">
                <p className="text-[#3c3c3ccc] text-[9px] font-semibold">
                  التوصيل إلى
                </p>
                <p className="text-[12px] font-black">حدد موقعك</p>
              </div>
            </Link>

            <Link
              href="/search"
              aria-label="بحث"
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-[14px] bg-[#e6f4f1]"
            >
              <Search className="w-4 h-4 text-[#002f36]" />
            </Link>

            <NavbarBtn
              title="المفضلة"
              iconBg="#fff1f1"
              url="/"
              icon={<Heart className="w-4 h-4 text-[#002f36]" />}
            />

            <NavbarBtn
              title="السلة"
              iconBg="#e6f4f1"
              url="/"
              icon={<ShoppingBasket className="w-4 h-4 text-[#002f36]" />}
            />

            <Link
              href="/"
              className="hidden lg:flex flex-col items-center justify-center gap-1 min-w-23.5 min-h-12 p-[10px_12px] border border-nav-border rounded-[18px] bg-white text-[12px] font-bold text-[#002f36] shadow-[0_4px_10px_#00000008]"
            >
              <div className="text-[#3c3c3ccc] text-[9px] font-medium">
                اللغة
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/images/united-kingdom.png"
                  width={18}
                  height={18}
                  alt="UK"
                />
                <div className="text-[12px] font-black text-[#002f36]">
                  English
                </div>
              </div>
            </Link>

          <div className="hidden  lg:flex items-center justify-between gap-2.5 border border-nav-border rounded-[18px] bg-white p-[10px_12px] shadow-[0_4px_10px_#00000008]">
            <Switch />
            <p className="text-[14px] font-semibold text-[#3c3c3ccc]">
              وضع العارض
            </p>
          </div>
            <Link
              href="/"
              className="hidden lg:flex items-center justify-center min-w-23.5 min-h-12 p-[10px_12px] rounded-[18px] bg-[#002f36] text-[16px] font-black text-background shadow-[0_4px_10px_#00000008]"
            >
              تسجيل الدخول
            </Link>
            <button
              type="button"
              aria-label="القائمة"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-[14px] bg-[#002f36] text-white"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="lg:hidden mt-2 flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 border border-border bg-background shadow-[0_8px_16px_#0000000a]">
            <div className="flex items-center gap-2.5">
              <div className="rounded-[14px] bg-[#e6f4f1] p-2">
                <Search className="w-4 h-4 text-[#919191]" />
              </div>
              <p className="text-[13px] text-[#3c3c3ccc] font-semibold">
                ما الذي تبحث عنه؟
              </p>
            </div>
            <div className="rounded-[14px] bg-[#002f36] p-2">
              <ArrowUpRight className="w-4 h-4 text-background stroke-3" />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
