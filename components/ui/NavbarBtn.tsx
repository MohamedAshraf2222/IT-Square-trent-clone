import Link from "next/link";

interface NavbarBtnProps {
  title: string;
  iconBg: string;
  url: string;
  icon: React.ReactNode;
}
const NavbarBtn: React.FC<NavbarBtnProps> = ({ title, iconBg, url, icon }) => {
  return (
    <Link
      href={url}
      className="
      shrink-0 snap-start lg:snap-none lg:shrink
  flex items-center justify-center gap-2.5
  min-w-23.5 min-h-12
  p-[10px_12px]
  border border-nav-border
  rounded-[18px]
  bg-white
  text-[12px] font-bold text-[#002f36]
  shadow-[0_4px_10px_#00000008]
"
    >
      <div
        className="flex items-center justify-center p-2 rounded-xl gap-2.5"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <p className="text-[12px] font-bold text-[#002f36]">{title}</p>
    </Link>
  );
};

export default NavbarBtn;
