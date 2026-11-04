import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Utensils, ShieldCheck, CheckCircle2, Flame, Award, HeartHandshake, ArrowRight, Sparkles, Clock, Truck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bếp Ăn & Thực Đơn Chuẩn 5S Nhật Bản | CÔNG TY CP THƯƠNG MẠI SHINSEI",
  description:
    "Dịch vụ cung cấp suất ăn công nghiệp 30k - 35k - 40k - 50k, tiệc bàn doanh nghiệp, cơm khay bento và takeaway theo tiêu chuẩn 5S Nhật Bản, bảo đảm an toàn thực phẩm 100%.",
};

export default function BepAnThucDonPage() {
  const mealPackages = [
    {
      price: "30.000đ",
      name: "Gói Tiêu Chuẩn · Standard",
      target: "Phù hợp nhà máy sản xuất, ca kíp xí nghiệp số lượng lớn",
      tag: "Phổ biến nhất",
      features: [
        "01 Món chính giàu đạm: Thịt kho trứng / Gà sốt chua ngọt / Cá nướng sốt cà",
        "01 Món xào: Rau muống xào tỏi / Su su xào thịt / Đỗ luộc",
        "01 Món canh theo mùa: Canh cua rau đay / Canh bí hầm / Canh rau ngót thịt băm",
        "Cơm trắng dẻo thơm không giới hạn khẩu phần",
        "Tráng miệng: Chuối / Dưa hấu tươi / Trà đá sạch thanh nhiệt",
      ],
      desc: "Thực đơn thay đổi liên tục trong 30 ngày không trùng lặp, tối ưu năng lượng từ 2.400 - 2.800 kcal cho người lao động.",
    },
    {
      price: "35.000đ",
      name: "Gói Nâng Cao · Enhanced",
      target: "Văn phòng, cán bộ quản lý, trường học bán trú",
      tag: "Được ưa chuộng",
      features: [
        "01 Món chính đạm chất lượng: Sườn rim mặn ngọt / Bò sốt tiêu / Cá basa phi lê áp chảo",
        "01 Món phụ kèm: Trứng cuộn tamagoyaki / Đậu phụ nhồi thịt / Chả lá lốt",
        "01 Món xào rau củ ngũ sắc tươi sạch VietGAP",
        "01 Món canh hầm xương giàu canxi & vitamin",
        "Cơm trắng dẻo / Cơm gạo lứt bổ dưỡng",
        "Tráng miệng: Sữa chua / Trái cây tươi 4 mùa",
      ],
      desc: "Cân đối hoàn hảo 4 nhóm chất: Đạm, đường bột, chất béo tốt và vitamin khoáng chất.",
    },
    {
      price: "40.000đ",
      name: "Gói Chất Lượng Cao · Premium",
      target: "Doanh nghiệp FDI, chuyên gia kỹ thuật, văn phòng cao cấp",
      tag: "Chất lượng cao",
      features: [
        "01 Món chính cao cấp: Bò lúc lắc nấm / Mực xào cần tỏi / Gà nướng mật ong sốt tare",
        "01 Món phụ phong cách Á - Nhật: Thịt heo xá xíu / Tôm rim thịt ba chỉ / Đậu Nhật xào nấm",
        "01 Món rau xanh đặc biệt: Cải thìa sốt nấm hương / Bông cải xanh xào tỏi",
        "01 Món canh súp đặc biệt: Súp gà ngô non / Canh sườn hầm rong biển",
        "Tráng miệng: Bánh pudding / Chè thanh nhiệt / Nước ép hoa quả",
      ],
      desc: "Chế biến chỉn chu theo khẩu vị của chuyên gia, trình bày đẹp mắt trên khay bento chuyên dụng.",
    },
    {
      price: "50.000đ+",
      name: "Gói Phong Cách Nhật · Japanese Bento",
      target: "Ban giám đốc, chuyên gia Nhật Bản, hội nghị & tiếp khách VIP",
      tag: "Phong cách Nhật",
      features: [
        "01 Món chính chuẩn Nhật: Cá hồi nướng sốt Teriyaki / Bò Wagyu xào hành tây / Tonkatsu giòn tan",
        "01 Món phụ truyền thống: Tempura rau củ / Trứng cuộn dashi / Rong biển tươi trộn mè",
        "Salad hoa quả tươi kèm sốt mè rang Kewpie Nhật Bản",
        "Canh Miso đậu hũ non và rong biển Wakame truyền thống",
        "Cơm gạo Nhật Japonica dẻo thơm rắc vừng đen",
        "Tráng miệng thạch matcha / trà xanh nguyên chất Uji",
      ],
      desc: "Mang trọn vẹn tinh hoa ẩm thực xứ hoa anh đào vào từng suất ăn, an tâm và chuẩn vị tuyệt đối.",
    },
  ];

  const services = [
    {
      title: "Bếp Ăn Công Nghiệp & Tập Thể",
      desc: "Thiết kế, đầu tư thiết bị và vận hành trọn gói bếp ăn tại chỗ cho các nhà máy, xí nghiệp, trường học bán trú từ 200 đến 10.000+ suất/ngày.",
      img: "/images/japan-industrial-meal.jpg",
      points: ["Quy trình bếp 1 chiều", "Lưu mẫu 24 giờ", "Kiểm định vi sinh định kỳ"],
    },
    {
      title: "Cơm Khay Bento Văn Phòng",
      desc: "Suất ăn chia sẵn trong khay chuyên dụng 4-5 ngăn cao cấp, giữ nhiệt tối ưu, phục vụ các tòa nhà văn phòng, khu công nghệ cao.",
      img: "/images/japan-popular-meal.jpg",
      points: ["Giao nóng tận bàn", "Thực đơn thay đổi theo ngày", "Đóng gói vệ sinh tuyệt đối"],
    },
    {
      title: "Tiệc Bàn Doanh Nghiệp 6 - 8 - 10 Người",
      desc: "Phục vụ các sự kiện kỷ niệm thành lập, tiệc tất niên, đón tiếp đối tác, liên hoan công đoàn với thực đơn tiệc bàn sang trọng, phục vụ chuyên nghiệp.",
      img: "/images/japan-banquet-table.jpg",
      points: ["Đội ngũ phục vụ tận tâm", "Dụng cụ bàn tiệc cao cấp", "Thiết kế món theo ngân sách"],
    },
    {
      title: "Cơm Hộp Mang Đi · Takeaway Bento",
      desc: "Hộp bento đóng gói thân thiện môi trường, nhỏ gọn, kín mùi, chuyên dùng cho các đoàn công tác, tour du lịch, hội thảo dã ngoại.",
      img: "/images/japan-takeaway-bento.jpg",
      points: ["Hộp bento sinh học cao cấp", "Giữ ấm liên tục", "Kèm đầy đủ dụng cụ tiện lợi"],
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
                  <span>Bếp Ăn & Thực Đơn · Tiêu Chuẩn 5S Nhật Bản</span>
                </div>

                <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                  An tâm trong từng bữa ăn, trọn vẹn dinh dưỡng mỗi ngày.
                </h1>

                <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed max-w-2xl">
                  Shinsei cung cấp giải pháp ẩm thực tập thể chuẩn mực: từ suất ăn công nghiệp nhà máy, cơm bento văn phòng đến tiệc sự kiện doanh nghiệp với nguồn nguyên liệu 100% sạch và kiểm soát khép kín.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#menu-packages" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg">
                    <span>Xem các gói thực đơn</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a href="#contact" className="shushi-btn shushi-btn-outline !border-white/30 !text-white hover:!bg-white/10">
                    <span>Đăng ký nếm thử miễn phí</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-2xl group">
                  <img
                    src="/images/shinsei-hero-bento-kitchen.jpg"
                    alt="Khay cơm bento dinh dưỡng và bếp chế biến 5S Shinsei"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#f1e2c8]">Bếp trung tâm Shinsei</span>
                      <h3 className="font-title text-xl text-white font-light">Tiêu chuẩn HACCP & ISO 22000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Dịch Vụ Cốt Lõi */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Hệ Sinh Thái Phục Vụ
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                4 Mô Hình Dịch Vụ Ẩm Thực Chuyên Nghiệp
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Linh hoạt thích ứng với từng mô hình tổ chức của doanh nghiệp, cơ quan và trường học tại Việt Nam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] border border-black/10 overflow-hidden shadow-sm hover:border-[#75182d] transition-all group flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                      Dịch vụ 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-title text-2xl font-light text-[#222222] mb-3 group-hover:text-[#75182d] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/10 space-y-2">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs font-mono text-[#75182d]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Các Gói Thực Đơn Chi Tiết */}
        <section id="menu-packages" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Bảng Thực Đơn Dinh Dưỡng
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Các Gói Khẩu Phần Tiêu Chuẩn Shinsei
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Được nghiên cứu bởi chuyên gia dinh dưỡng, định lượng rõ ràng và cam kết kiểm nghiệm vệ sinh an toàn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {mealPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="inline-block bg-[#f1e2c8]/60 text-[#75182d] text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold mb-4">
                      {pkg.tag}
                    </div>

                    <div className="border-b border-black/10 pb-5 mb-5">
                      <div className="font-title text-3xl sm:text-4xl font-light text-[#75182d]">
                        {pkg.price}
                      </div>
                      <h4 className="font-title text-lg font-medium text-[#222222] mt-1">
                        {pkg.name}
                      </h4>
                      <p className="text-[11px] text-[#222222]/60 mt-1 font-mono">
                        {pkg.target}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#75182d] font-bold block">
                        Chi tiết khẩu phần:
                      </span>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="text-xs text-[#222222]/80 leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#75182d] shrink-0 mt-1.5"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/10">
                    <p className="text-[11px] text-[#222222]/60 italic mb-4">
                      {pkg.desc}
                    </p>
                    <a
                      href="#contact"
                      className="block text-center w-full py-2.5 bg-[#fbf7ef] group-hover:bg-[#75182d] text-[#75182d] group-hover:text-white border border-[#75182d]/30 font-mono text-xs uppercase font-bold tracking-wider transition-colors"
                    >
                      Đăng ký nếm thử
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs text-[#222222]/70 font-mono">
                * Doanh nghiệp có thể yêu cầu thiết kế thực đơn riêng biệt: Ăn chay, kiêng mặn hoặc chế độ dinh dưỡng đặc thù cho trường học và vận động viên.
              </p>
            </div>
          </div>
        </section>

        {/* Cam Kết 5S ATVSTP */}
        <section className="py-20 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                  Cam Kết Chất Lượng
                </span>
                <h3 className="font-title text-3xl sm:text-4xl font-light text-[#222222] leading-tight mb-4">
                  Quy Trình Kiểm Soát 5S Khép Kín 100%
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed mb-6">
                  Chúng tôi đặt yếu tố an toàn vệ sinh thực phẩm lên hàng đầu. Mọi ca phục vụ đều có hồ sơ kiểm thực 3 bước và mẫu thức ăn lưu trữ 24 giờ đúng tiêu chuẩn Bộ Y tế.
                </p>
                <div className="space-y-3">
                  {[
                    "100% Thực phẩm có hóa đơn, chứng nhận xuất xứ rõ ràng",
                    "Quy trình bếp một chiều phân định ranh giới nhiễm bẩn",
                    "Định kỳ kiểm nghiệm vi sinh tại Viện Kiểm nghiệm ATVSTP Quốc gia",
                    "Bảo hiểm trách nhiệm vệ sinh an toàn thực phẩm toàn diện",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#222222]">
                      <ShieldCheck className="w-4 h-4 text-[#75182d] shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-sm">
                  <img src="/images/kitchen-5s.jpg" alt="Quy trình bếp 5S sạch sẽ" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm">
                  <img src="/images/japan-premium-meal.jpg" alt="Suất ăn cao cấp tươi ngon" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm">
                  <img src="/images/shinsei-truck.jpg" alt="Xe bán tải bảo ôn giao hàng" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm">
                  <img src="/images/shinsei-uniform-chef-full.jpg" alt="Đồng phục đầu bếp chuẩn 5S" className="w-full h-48 object-contain bg-[#fbf7ef]" />
                </div>
              </div>
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
