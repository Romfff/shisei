import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d1717] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header of Footer: Brand + Slogan */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-title text-3xl font-light tracking-[0.05em] uppercase text-white">
                Shisei Food
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-widest text-[#e94222] border border-[#e94222]">
                給食 · 5S
              </span>
            </div>
            <p className="text-xs font-mono tracking-[0.2em] text-emerald-400 uppercase mt-1">
              食でつながる 健やかな未来へ · Vì sức khỏe người lao động
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#trial-tasting" className="shushi-btn shushi-btn-primary">
              <span>Đăng ký nếm thử món</span>
            </a>
          </div>
        </div>

        {/* 3 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1: Giới thiệu (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-lg font-normal text-white uppercase tracking-wider">
              Về Shisei Food
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal max-w-sm">
              Đơn vị tiên phong vận hành bếp ăn công nghiệp và suất ăn tập thể theo 
              tiêu chuẩn 5S Nhật Bản. Đảm bảo dinh dưỡng cân bằng và kiểm định vệ sinh 
              an toàn thực phẩm nghiêm ngặt cho các nhà xưởng, khu công nghiệp và tổ chức giáo dục.
            </p>
            <div className="text-[11px] font-mono text-stone-400 space-y-0.5 pt-2">
              <div>ĐKKD: 0317892345 · Sở KH&ĐT TP.HCM</div>
              <div>Bảo hiểm trách nhiệm pháp lý sản phẩm: 10 tỷ đồng</div>
            </div>
          </div>

          {/* Col 2: Hệ thống bếp (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-lg font-normal text-white uppercase tracking-wider">
              Hệ thống Bếp Trung Tâm
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e94222] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Bếp trung tâm số 1 (Bình Dương)</div>
                  <div className="text-stone-400">Đường số 6, KCN VSIP 1, TP. Thuận An, Bình Dương</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e94222] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Bếp trung tâm số 2 (Đồng Nai)</div>
                  <div className="text-stone-400">Đường 3A, KCN Biên Hòa 2, TP. Biên Hòa, Đồng Nai</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e94222] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Văn phòng điều hành</div>
                  <div className="text-stone-400">Tòa nhà Shisei, Thảo Điền, TP. Thủ Đức, TP.HCM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Hotline & Chứng chỉ (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-lg font-normal text-white uppercase tracking-wider">
              Liên Hệ Khảo Sát & Hợp Tác
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div>
                <span className="text-stone-400 block font-mono">Hotline tư vấn B2B 24/7:</span>
                <span className="font-title text-xl font-bold text-white">090 888 9999</span>
              </div>

              <div>
                <span className="text-stone-400 block font-mono">Hòm thư tiếp nhận:</span>
                <span className="text-stone-200">contact@shiseifood.vn</span>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 p-2.5 bg-white/5 border border-white/10 text-emerald-300 text-[11px] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#e94222] shrink-0" />
                  <span>Chứng nhận ATTP số 452/2024/ATTP-CNĐK</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-mono gap-4">
          <div>
            © 2026 Shisei Food Corporation. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              Tiêu chuẩn 5S
            </a>
            <a href="#menus" className="hover:text-white transition-colors">
              Thực đơn mẫu
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              Dự toán chi phí
            </a>
            <a href="#trial-tasting" className="hover:text-white transition-colors">
              Đăng ký nếm thử
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
