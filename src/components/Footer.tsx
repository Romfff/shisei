import { MapPin, Phone, Mail, Clock, ShieldCheck, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header of Footer: Brand + Slogan */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-title text-3xl font-light tracking-[0.08em] uppercase text-white">
                SHINSEI
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-widest text-[#f1e2c8] border border-[#f1e2c8]">
                FOOD & COFFEE · TRAVEL
              </span>
            </div>
            <p className="text-xs font-mono tracking-[0.18em] text-[#f1e2c8] uppercase mt-1">
              An tâm trong từng bữa ăn · Tận tâm trong từng trải nghiệm
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="shushi-btn shushi-btn-primary">
              <span>Liên hệ & Đăng ký nếm thử</span>
            </a>
          </div>
        </div>

        {/* 3 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1: Về Shinsei (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-lg font-normal text-white uppercase tracking-wider">
              CÔNG TY CỔ PHẦN SHINSEI
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal max-w-sm">
              Đơn vị tiên phong vận hành bếp ăn tập thể, căng tin tổng hợp, quầy café và dịch vụ lữ hành chuyên sâu theo tiêu chuẩn chất lượng và quản trị 5S Nhật Bản.
            </p>
            <div className="text-[11px] font-mono text-stone-400 space-y-1 pt-2">
              <div>Đối tượng phục vụ: Trường học, cơ quan nhà nước, doanh nghiệp, KCN, bệnh viện, khách du lịch</div>
              <div>Năng lực cung cấp: 50 đến trên 10.000 suất ăn / ngày</div>
            </div>
          </div>

          {/* Col 2: Hệ thống địa chỉ (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-lg font-normal text-white uppercase tracking-wider">
              Trụ Sở & Văn Phòng Đại Diện
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f1e2c8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Trụ sở Hà Nội:</div>
                  <div className="text-stone-300">Lô 6, A19 Thiên Khôi, Geleximco A, Tây Mỗ, Hà Nội</div>
                  <div className="text-stone-400 text-[11px] mt-0.5">(A19-32 NV8 Khu A - KĐT Geleximco Lê Trọng Tấn)</div>
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

          {/* Col 3: Hotline & Chứng chỉ (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-lg font-normal text-white uppercase tracking-wider">
              Hotline Tư Vấn B2B
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div>
                <span className="text-stone-400 block font-mono text-[11px]">Đường dây nóng Việt Nam (24/7):</span>
                <span className="font-title text-2xl font-light text-[#f1e2c8] tracking-wide font-mono">
                  0981.365.391
                </span>
              </div>

              <div>
                <span className="text-stone-400 block font-mono text-[11px]">Đường dây nóng Nhật Bản:</span>
                <span className="font-title text-lg font-light text-white font-mono">
                  080.2392.2268
                </span>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 p-2.5 bg-white/5 border border-white/10 text-[#f1e2c8] text-[11px] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#f1e2c8] shrink-0" />
                  <span>Tiêu chuẩn vận hành 5S Nhật Bản & HACCP</span>
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
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Về chúng tôi
            </a>
            <a href="#standards-5s" className="hover:text-white transition-colors">
              Tiêu chuẩn 5S
            </a>
            <a href="#food-coffee" className="hover:text-white transition-colors">
              Food & Coffee
            </a>
            <a href="#travel" className="hover:text-white transition-colors">
              Travel
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Liên hệ
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
