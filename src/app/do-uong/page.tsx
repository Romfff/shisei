import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Coffee, Sparkles, Award, CheckCircle2, ArrowRight, HeartHandshake, ShieldCheck, Flame, GlassWater } from "lucide-react";

export const metadata: Metadata = {
  title: "Đồ Uống & Café Nhận Diện Thương Hiệu | SHINSEI FOOD & COFFEE",
  description:
    "Menu đồ uống & cà phê nhận diện Shinsei: Cà phê pha máy, Matcha Uji Nhật Bản, trà hoa quả tươi và dịch vụ phục vụ cà phê chuyên nghiệp cho văn phòng, nhà máy và sự kiện.",
};

export default function DoUongPage() {
  const drinkCategories = [
    {
      category: "Cà Phê Pha Máy & Cà Phê Việt Nam",
      japanese: "エスプレッソ & ベトナムコーヒー",
      desc: "Chiết xuất từ hạt Arabica Cầu Đất & Robusta rang mộc, giữ trọn hương vị đậm đà nguyên bản.",
      items: [
        { name: "Espresso Đậm Đà", price: "25.000đ", note: "Shot cà phê nguyên chất chuẩn Ý" },
        { name: "Americano Đá / Nóng", price: "30.000đ", note: "Thanh mát, hậu vị ngọt kéo dài" },
        { name: "Latte Bọt Mịn", price: "38.000đ", note: "Sữa tươi thanh trùng tiệt trùng cùng espresso" },
        { name: "Cappuccino Cổ Điển", price: "38.000đ", note: "Lớp bọt sữa xốp mịn rắc bột cacao Bỉ" },
        { name: "Cà Phê Muối Cung Đình", price: "35.000đ", note: "Kem muối béo ngậy độc quyền Shinsei" },
        { name: "Cà Phê Cốt Dừa Đá Xay", price: "39.000đ", note: "Cốt dừa Bến Tre thơm béo ngậy" },
        { name: "Cà Phê Đen / Nâu Truyền Thống", price: "25.000đ", note: "Pha phin truyền thống đậm gu Việt" },
      ],
    },
    {
      category: "Trà Nhật Bản & Matcha Uji Signature",
      japanese: "宇治抹茶 & ほうじ茶ラテ",
      desc: "Sử dụng 100% bột trà xanh Uji cao cấp nhập khẩu từ Kyoto, giàu chất chống oxy hóa EGCG.",
      items: [
        { name: "Uji Matcha Latte", price: "42.000đ", note: "Matcha Kyoto thơm đậm kết hợp sữa tươi" },
        { name: "Matcha Kem Cheese", price: "45.000đ", note: "Lớp kem phô mai béo mặn sánh mịn" },
        { name: "Hojicha Latte Rang Nướng", price: "42.000đ", note: "Trà xanh rang thơm lừng ít caffeine" },
        { name: "Genmaicha Gạo Lứt Rang", price: "32.000đ", note: "Hương thơm thanh tao, hỗ trợ tiêu hóa" },
        { name: "Trà Sữa Oolong Nướng Shinsei", price: "38.000đ", note: "Trân châu hoàng kim dai giòn sần sật" },
      ],
    },
    {
      category: "Trà Trái Cây Tươi & Trà Thảo Mộc",
      japanese: "フレッシュフルーツティー",
      desc: "Trái cây tươi tự nhiên ngâm ủ trong ngày, không dùng siro hóa chất, thanh lọc và bồi bổ cơ thể.",
      items: [
        { name: "Trà Đào Cam Sả Mật Ong", price: "35.000đ", note: "Miếng đào giòn tan cùng cam vàng tươi" },
        { name: "Trà Ổi Hồng Sen Tuyết", price: "38.000đ", note: "Hương ổi hồng ngọt thanh và thạch sen" },
        { name: "Trà Vải Hoa Hồng Hoàng Gia", price: "38.000đ", note: "Cánh hoa hồng Pháp thơm ngát quyến rũ" },
        { name: "Trà Xoài Chanh Leo Nhiệt Đới", price: "35.000đ", note: "Vị chua ngọt bùng nổ năng lượng" },
        { name: "Trà Dưỡng Nhan Táo Đỏ Kỷ Tử", price: "35.000đ", note: "Thảo mộc thanh mát, tốt cho làn da" },
      ],
    },
    {
      category: "Nước Ép Tươi & Sinh Tố Dinh Dưỡng",
      japanese: "コールドプレスジュース & スムージー",
      desc: "Nước ép nguyên chất ép chậm giữ trọn vitamin và khoáng chất tự nhiên.",
      items: [
        { name: "Nước Ép Cam - Cà Rốt Sáng Da", price: "35.000đ", note: "Bổ sung Vitamin A & C dồi dào" },
        { name: "Nước Ép Táo - Cần Tây Detox", price: "38.000đ", note: "Hỗ trợ thải độc, giữ dáng thon gọn" },
        { name: "Nước Ép Dưa Hấu Bạc Hà", price: "32.000đ", note: "Thanh nhiệt sảng khoái tức thì" },
        { name: "Sinh Tố Bơ Dừa Béo Ngậy", price: "42.000đ", note: "Bơ sáp Đắk Lắk ngọt thơm tự nhiên" },
        { name: "Sinh Tố Xoài Chuối Yến Mạch", price: "40.000đ", note: "Giàu năng lượng lành mạnh cho bữa xế" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-[#75182d] text-[#f1e2c8] overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-pulse"></span>
                  <span>Shinsei Food & Coffee · Signature Beverage</span>
                </div>

                <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                  Menu Đồ Uống & Café Văn Phòng
                </h1>

                <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed max-w-2xl">
                  Trải nghiệm hương vị cà phê pha máy thượng hạng, matcha Kyoto chuẩn Nhật và trà trái cây tươi mát ngay tại không gian làm việc. Giải pháp đồ uống & cà phê từ Shinsei giúp nâng cao đời sống tinh thần cho toàn bộ nhân sự.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#drink-menu" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg">
                    <span>Khám phá menu đồ uống</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="#cafe-service" className="shushi-btn shushi-btn-outline !border-white/30 !text-white hover:!bg-white/10">
                    <span>Dịch vụ Café doanh nghiệp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl group">
                  <img
                    src="/images/shinsei-hero-cups.jpg"
                    alt="Bộ cốc giữ nhiệt và thức uống mang đi thương hiệu Shinsei"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#f1e2c8]">Nhận diện thương hiệu</span>
                      <h3 className="font-title text-xl text-white font-light">Bộ cốc giữ nhiệt & Ly giấy Shinsei cao cấp</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dịch Vụ Cà Phê & Đồ Uống Doanh Nghiệp */}
        <section id="cafe-service" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block">
                  Giải Pháp Không Gian F&B
                </span>
                <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] leading-tight">
                  Dịch Vụ Đồ Uống & Café Phục Vụ Doanh Nghiệp
                </h2>
                <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed">
                  Shinsei cung cấp giải pháp thiết lập và phục vụ trọn gói đồ uống & cà phê cho tòa nhà, văn phòng, căng-tin hoặc khu nghỉ giải lao của doanh nghiệp:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Thiết kế & Pha chế chuyên nghiệp",
                      desc: "Shinsei trang bị hệ thống máy pha cà phê Ý cao cấp, tủ bảo quản lạnh và nguyên liệu tuyển chọn chuẩn vị.",
                    },
                    {
                      title: "Nhân sự chuẩn phong cách Nhật Omotenashi",
                      desc: "Đội ngũ Barista được đào tạo bài bản, mặc đồng phục polo đỏ burgundy Shinsei thanh lịch, thái độ ân cần, phục vụ nhanh chóng.",
                    },
                    {
                      title: "Bao bì & Cốc giữ nhiệt nhận diện riêng",
                      desc: "Ly giấy thân thiện môi trường và cốc giữ nhiệt in logo doanh nghiệp hoặc Shinsei, tạo dấu ấn chuyên nghiệp.",
                    },
                    {
                      title: "Chính sách trợ giá nội bộ cho nhân viên",
                      desc: "Mức giá ưu đãi đặc biệt dành riêng cho cán bộ công nhân viên trong đơn vị (chỉ từ 15k - 25k/ly).",
                    },
                  ].map((feat, idx) => (
                    <div key={idx} className="p-4 bg-[#fbf7ef] border border-black/10 rounded-sm">
                      <h4 className="font-title text-lg font-medium text-[#75182d] mb-1">
                        0{idx + 1}. {feat.title}
                      </h4>
                      <p className="text-xs text-[#222222]/75 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="rounded overflow-hidden border border-black/10 shadow-lg">
                  <img
                    src="/images/shinsei-staff-polo.jpg"
                    alt="Đội ngũ nhân sự quầy café Shinsei đồng phục polo đỏ rượu vang"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#fbf7ef] text-center border-t border-black/10">
                    <span className="text-xs font-mono text-[#75182d] font-bold">
                      Đồng phục nhân sự quầy café Shinsei · Tác phong chuyên nghiệp
                    </span>
                  </div>
                </div>

                <div className="rounded overflow-hidden border border-black/10 shadow-lg">
                  <img
                    src="/images/shinsei-hero-packaging.jpg"
                    alt="Bao bì hộp bánh và túi giấy Shinsei"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#fbf7ef] text-center border-t border-black/10">
                    <span className="text-xs font-mono text-[#75182d] font-bold">
                      Hộp bánh ngọt quà tặng & Bao bì thân thiện môi trường
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Chi Tiết */}
        <section id="drink-menu" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Thực Đơn Đồ Uống
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Menu Đồ Uống Tiêu Biểu
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Nguyên liệu tuyển chọn từ những vùng nông sản trứ danh, pha chế theo công thức chuẩn vị, ít ngọt lành mạnh.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {drinkCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-10 border border-black/10 shadow-sm hover:border-[#75182d] transition-all"
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10">
                    <div>
                      <h3 className="font-title text-2xl font-light text-[#222222]">
                        {cat.category}
                      </h3>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#75182d] font-bold mt-0.5">
                        {cat.japanese}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#75182d] bg-[#f1e2c8]/60 px-2.5 py-1 rounded">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-[#222222]/70 mb-6 italic">
                    {cat.desc}
                  </p>

                  <div className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start justify-between gap-4 pb-3 border-b border-dashed border-black/10 last:border-b-0"
                      >
                        <div>
                          <div className="font-title text-base text-[#222222] font-medium">
                            {item.name}
                          </div>
                          <div className="text-[11.5px] text-[#222222]/65 mt-0.5 font-normal">
                            {item.note}
                          </div>
                        </div>
                        <div className="font-mono font-bold text-[#75182d] text-sm shrink-0">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="shushi-btn shushi-btn-primary inline-flex"
              >
                <span>Đăng ký tư vấn dịch vụ Đồ uống & Café</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <ContactShinsei />
      </main>

      <Footer />
    </div>
  );
}
