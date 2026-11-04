import { Phone, MapPin, Globe, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white pt-20 pb-12 border-t border-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Brand Statement & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/images/shinsei-mark-red.png"
                alt="SHINSEI Emblem"
                className="h-7 w-auto object-contain brightness-125"
              />
              <span className="font-title text-3xl font-light tracking-[0.14em] text-[#f1e2c8] uppercase">
                SHINSEI
              </span>
            </div>
            <p className="text-sm text-stone-300 font-serif italic max-w-md">
              An tâm trong từng bữa ăn · Tận tâm trong từng trải nghiệm.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:0981365391" className="shushi-btn !bg-white/10 !text-white hover:!bg-white/20 border border-white/20 text-xs">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#f1e2c8]" />
              <span className="font-mono">0981.365.391</span>
            </a>
            <a href="#contact" className="shushi-btn shushi-btn-primary text-xs">
              <span>Liên hệ & Đăng ký nếm thử</span>
            </a>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1: Về Shinsei (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              CÔNG TY CỔ PHẦN THƯƠNG MẠI SHINSEI
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal max-w-sm">
              Đơn vị tiên phong vận hành bếp ăn tập thể, căng tin tổng hợp, quầy café và dịch vụ lữ hành chuyên sâu theo tiêu chuẩn chất lượng và quản trị 5S Nhật Bản.
            </p>
            <div className="text-[11px] font-mono text-stone-400 space-y-1 pt-2">
              <div>Đối tượng phục vụ: Doanh nghiệp, KCN, trường học, cơ quan, bệnh viện</div>
              <div>Năng lực cung ứng: 50 đến trên 10.000 suất ăn / ngày</div>
            </div>
          </div>

          {/* Col 2: Hệ thống trang chuyên biệt (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              Dịch Vụ & Trang Chuyên Đề
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-stone-300">
              <Link href="/bep-an-thuc-don" className="hover:text-[#f1e2c8] transition-colors">
                ✦ Bếp ăn • Thực đơn 5S
              </Link>
              <Link href="/do-uong" className="hover:text-[#f1e2c8] transition-colors">
                ✦ Đồ uống & Kiosk Café
              </Link>
              <Link href="/ve-chung-toi" className="hover:text-[#f1e2c8] transition-colors">
                ✦ Về chúng tôi (Hồ sơ năng lực)
              </Link>
              <Link href="/du-toan-chi-phi" className="hover:text-[#f1e2c8] transition-colors">
                ✦ Dự toán chi phí B2B
              </Link>
              <Link href="/du-lich" className="hover:text-[#f1e2c8] transition-colors font-semibold text-white">
                ✦ Shinsei Travel (Tổng quan)
              </Link>
              <div className="pl-3 space-y-1.5 border-l border-white/15 text-[11px] text-stone-400">
                <Link href="/du-lich/y-te" className="hover:text-white block">
                  • Du lịch Y tế (6 bệnh viện top đầu)
                </Link>
                <Link href="/du-lich/golf" className="hover:text-white block">
                  • Du lịch Golf (Sân PGA Phú Sĩ)
                </Link>
                <Link href="/du-lich/trai-nghiem" className="hover:text-white block">
                  • Du lịch Trải nghiệm văn hóa & ẩm thực
                </Link>
              </div>
            </div>
          </div>

          {/* Col 3: Trụ sở & Đại diện (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              Trụ Sở & Văn Phòng
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f1e2c8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Trụ sở Hà Nội:</div>
                  <div className="text-stone-300">A19 Geleximco A, Tây Mỗ, Nam Từ Liêm, Hà Nội</div>
                  <div className="text-stone-400 text-[11px] mt-0.5">(A19-32 NV8 Khu A - Geleximco Lê Trọng Tấn)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#f1e2c8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Văn phòng đại diện Nhật Bản:</div>
                  <div className="text-stone-300">Hotline: 080.2392.2268 (Kết nối dịch vụ y tế & golf)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Hotline & Email (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              Liên Hệ Trực Tiếp
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div>
                <span className="text-stone-400 block font-mono text-[11px]">Hotline Việt Nam:</span>
                <a href="tel:0981365391" className="font-mono text-base font-semibold text-[#f1e2c8] hover:underline">
                  0981.365.391
                </a>
              </div>

              <div>
                <span className="text-stone-400 block font-mono text-[11px]">Email tiếp nhận:</span>
                <a
                  href="mailto:info.shinseivn@gmail.com"
                  className="font-mono text-xs font-semibold text-[#f1e2c8] hover:underline block mt-0.5"
                >
                  info.shinseivn@gmail.com
                </a>
                <a
                  href="mailto:ddcjp.ceo@gmail.com"
                  className="font-mono text-[11px] text-stone-400 hover:text-white block mt-0.5"
                >
                  ddcjp.ceo@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 p-2 bg-white/5 border border-white/10 text-[#f1e2c8] text-[10.5px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f1e2c8] shrink-0" />
                  <span>Chuẩn 5S Nhật Bản</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-mono gap-4">
          <div>
            © 2026 CÔNG TY CỔ PHẦN THƯƠNG MẠI SHINSEI. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="hover:text-white transition-colors">
              Trang chủ
            </Link>
            <Link href="/bep-an-thuc-don" className="hover:text-white transition-colors">
              Bếp ăn • Thực đơn
            </Link>
            <Link href="/do-uong" className="hover:text-white transition-colors">
              Đồ uống
            </Link>
            <Link href="/ve-chung-toi" className="hover:text-white transition-colors">
              Về chúng tôi
            </Link>
            <Link href="/du-toan-chi-phi" className="hover:text-white transition-colors">
              Dự toán B2B
            </Link>
            <Link href="/du-lich" className="hover:text-white transition-colors">
              Du lịch Nhật Bản
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
