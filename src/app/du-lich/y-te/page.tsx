import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Activity, ShieldCheck, Award, HeartPulse, Building2, MapPin, CheckCircle2, ArrowRight, Stethoscope, Sparkles, UserCheck, FileCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Du Lịch Y Tế Tại Nhật Bản · 6 Bệnh Viện Hàng Đầu | SHINSEI TRAVEL",
  description:
    "Du lịch y tế Nhật Bản: Tầm soát ung thư sớm, y học tái tạo tế bào gốc iPS Nobel GS Yamanaka, khám chuyên sâu Ningen Dock liên kết ĐH Y Tokyo, Fujita, Jikei, St. Luke's, Shonan Kamakura, Viện CiRA Kyoto.",
};

export default function DuLichYTePage() {
  const fields = [
    { title: "Khám Tổng Quát Chuyên Sâu", desc: "Gói Ningen Dock toàn diện phát hiện sớm bệnh lý tim mạch, mạch máu não và các nguy cơ tiềm ẩn từ giai đoạn chưa có triệu chứng." },
    { title: "Điều Trị Chuyên Khoa Kỹ Thuật Cao", desc: "Ứng dụng phẫu thuật nội soi robot da Vinci, xạ trị proton/ion nặng và phác đồ điều trị đa mô thức hiện đại nhất thế giới." },
    { title: "Y Học Tái Tạo & Tế Bào Gốc (iPS)", desc: "Trị liệu tế bào gốc tự thân tái tạo sụn khớp, trẻ hóa tế bào, hỗ trợ tim mạch và hệ thần kinh theo phát minh Nobel Y học 2012." },
    { title: "Tầm Soát & Điều Trị Ung Thư Sớm", desc: "Công nghệ sinh thiết lỏng ctDNA, chụp PET/CT độ phân giải siêu cao và liệu pháp miễn dịch nhắm trúng đích." },
    { title: "Thẩm Mỹ & Chống Lão Hóa Chuẩn Y Khoa", desc: "Quy chuẩn y khoa khắt khe, công nghệ trẻ hóa tế bào sinh học an toàn tuyệt đối, duy trì vẻ đẹp tự nhiên lâu bền." },
    { title: "Phục Hồi Chức Năng & Dưỡng Sinh Dài Hạn", desc: "Phục hồi vận động sau tai biến, kết hợp nghỉ dưỡng suối khoáng nóng Onsen và chế độ ăn dinh dưỡng phục hồi." },
  ];

  const hospitals = [
    {
      name: "Bệnh viện Đại học Y Khoa Tokyo",
      japanese: "東京大学医学部附属病院",
      address: "7-3-1 Hongo, Bunkyo-ku, Tokyo",
      img: "/images/Hospital/tokyo-univ-hospital.png",
      tag: "Cái nôi y học hiện đại Nhật Bản",
      desc: "Bệnh viện Đại học Y Khoa Tokyo là một trong những cơ sở y tế lâu đời và tiên tiến nhất Nhật Bản, được xem là cái nôi của y học hiện đại, nơi đặt nền móng cho tiêu chuẩn điều trị và nghiên cứu y khoa trên toàn quốc.",
      highlights: [
        "Dẫn đầu quốc gia trong điều trị các ca bệnh phức tạp và phẫu thuật chuyên sâu",
        "Trung tâm nghiên cứu lâm sàng và xây dựng tiêu chuẩn điều trị quốc tế",
        "Đội ngũ giáo sư, bác sĩ đầu ngành y khoa Nhật Bản",
      ],
    },
    {
      name: "Bệnh viện Đại học Y Khoa Fujita Tokyo",
      japanese: "藤田医科大学 羽田クリニック",
      address: "1-1-4, Hanedakuko, Ota-ku, Haneda Innovation City Zone A",
      img: "/images/Hospital/fujita-univ-hospital.png",
      subImg: "/images/Hospital/fujita-suga-opening.png",
      subCaption: "Tháng 9/2023, Bệnh viện Đại học Y Khoa Fujita Tokyo vinh dự đón nguyên Thủ tướng Yoshihide Suga đến tham dự lễ khai trương.",
      tag: "Quy mô 1.435 giường · Lớn nhất Nhật Bản",
      desc: "Bệnh viện Đại học Y Khoa Fujita là cơ sở y tế quy mô lớn nhất Nhật Bản với 1.435 giường bệnh, sở hữu hệ thống trang thiết bị máy móc y tế hiện đại tối tân nhất trên thế giới hiện nay.",
      highlights: [
        "Quy mô giường bệnh lớn nhất toàn Nhật Bản (1.435 giường)",
        "Tọa lạc tại Haneda Innovation City cực kỳ thuận tiện cho khách quốc tế",
        "Trang thiết bị chẩn đoán hình ảnh và y học chính xác tối tân hàng đầu",
      ],
    },
    {
      name: "Bệnh viện Đại học Y Khoa Jikei",
      japanese: "東京慈恵会医科大学附属病院",
      address: "3-19-18 Nishi-Shinbashi, Minato-ku, Tokyo",
      img: "/images/Hospital/jikei-univ-hospital.png",
      tag: "140 năm lịch sử · Đặc trị ung thư & bệnh nan y",
      desc: "Bệnh viện Đại học Y Khoa Jikei với hơn 140 năm lịch sử, là một trong những bệnh viện thuộc top hàng đầu và tiên tiến ở Nhật. Được nhà nước chứng nhận là bệnh viện điều trị ung thư và điều trị các bệnh nan y hiệu quả nhất của khu vực Tokyo.",
      highlights: [
        "Hơn 140 năm lịch sử uy tín y khoa bậc nhất thủ đô Tokyo",
        "Được chính phủ chứng nhận điều trị ung thư & bệnh nan y hiệu quả nhất",
        "Hệ thống phác đồ điều trị cá nhân hóa tiên tiến",
      ],
    },
    {
      name: "Bệnh viện Quốc tế St. Luke’s",
      japanese: "聖路加国際病院",
      address: "9-1 Akashicho, Chuo City, Tokyo",
      img: "/images/Hospital/st-lukes-hospital.png",
      tag: "Chăm sóc Hoàng Gia & Lãnh đạo chính phủ",
      desc: "Bệnh viện Quốc tế St. Luke’s được thành lập từ năm 1901 tại thủ đô Tokyo bởi bác sĩ công giáo người Mỹ Rudolf Roesler, mang tên vị Thánh LUCA. Đây là bệnh viện đầu tiên thể hiện sự kết hợp của 2 nền y học bậc nhất thế giới là Nhật và Mỹ (thiết bị của Nhật – kỹ thuật của Mỹ). Bệnh viện là nơi chăm sóc sức khỏe và điều trị bệnh tin cậy cho Hoàng Gia Nhật Bản cũng như các vị lãnh đạo cao cấp trong chính phủ Nhật Bản từ trước đến nay.",
      highlights: [
        "Nơi chăm sóc sức khỏe tin cậy của Hoàng Gia Nhật Bản và lãnh đạo chính phủ",
        "Sự kết hợp hoàn hảo giữa kỹ thuật Mỹ tiên tiến và thiết bị y tế Nhật Bản",
        "Tiêu chuẩn dịch vụ quốc tế JCI, môi trường chăm sóc an yên bậc nhất",
      ],
    },
    {
      name: "Bệnh viện Đa khoa Shonan Kamakura",
      japanese: "湘南鎌倉総合病院",
      address: "1370-1 Okamoto, Kamakura, Kanagawa",
      img: "/images/Hospital/shonan-kamakura-hospital.png",
      tag: "Bệnh viện của năm · Châu Á 2025",
      desc: "Bệnh viện Đa khoa Shonan Kamakura được thành lập vào tháng 11 năm 1988 tại thành phố Kamakura, tỉnh Kanagawa. Bệnh viện được công nhận là 'Bệnh viện của năm' tại giải thưởng Chăm sóc sức khỏe Châu Á năm 2025.",
      highlights: [
        "Được vinh danh 'Bệnh viện của năm' tại Asian Healthcare Awards 2025",
        "Trung tâm can thiệp tim mạch và xạ trị proton hàng đầu châu lục",
        "Hệ thống cấp cứu và điều trị nội trú đẳng cấp thế giới",
      ],
    },
    {
      name: "Trung tâm Nghiên Cứu Tế Bào CIRA (Đại học Kyoto)",
      japanese: "京都大学iPS細胞研究所",
      address: "53 Kawahara-cho, Shogoin, Sakyo-ku, Kyoto 606-8507",
      img: "/images/Hospital/cira-stem-cell-center.png",
      tag: "Nobel Y Học 2012 · Giáo sư Shinya Yamanaka",
      desc: "Đây là trung tâm hàng đầu thế giới chuyên nghiên cứu iPS cell (tế bào gốc đa năng cảm ứng), được thành lập bởi Đại học Kyoto và dẫn dắt bởi Giáo sư Shinya Yamanaka — người đoạt Giải Nobel Y học 2012 với phát hiện ra phương pháp tạo iPS cells từ tế bào trưởng thành.",
      highlights: [
        "Viện nghiên cứu tế bào gốc iPS danh tiếng số 1 thế giới",
        "Dẫn dắt trực tiếp bởi GS Shinya Yamanaka (Nobel Y học 2012)",
        "Tiên phong trong liệu pháp y học tái tạo và tế bào trị liệu thế hệ mới",
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
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <Activity className="w-3.5 h-3.5" />
                <span>Medical Tourism Japan · 医療ツーリズム</span>
              </div>

              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                Về Du Lịch Y Tế Tại Nhật Bản
              </h1>

              <p className="text-base sm:text-lg text-[#f1e2c8]/90 font-normal leading-relaxed">
                Không chỉ nổi tiếng với hoa anh đào hay văn hóa tinh tế, Nhật Bản còn được biết đến là một trong những quốc gia có nền y tế hàng đầu thế giới. Du lịch y tế tại Nhật Bản ra đời từ chính triết lý: <strong>kết hợp công nghệ y học tiên tiến, tiêu chuẩn an toàn nghiêm ngặt và tinh thần chăm sóc tận tâm</strong> dành cho từng bệnh nhân.
              </p>

              <div className="p-4 bg-white/10 border border-white/20 text-white text-xs sm:text-sm leading-relaxed rounded italic">
                &ldquo;Mỗi hành trình y tế tại Nhật không đơn thuần là điều trị, mà là một trải nghiệm hồi phục toàn diện cho cả sức khỏe thể chất lẫn tinh thần.&rdquo;
              </div>

              <div className="pt-2">
                <a href="#hospitals-list" className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] shadow-lg inline-flex items-center">
                  <span>Khám phá 6 bệnh viện hàng đầu</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Lĩnh Vực Thế Mạnh */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Lĩnh Vực Trọng Điểm
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                6 Thế Mạnh Y Học Hàng Đầu Thế Giới
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/75 mt-3">
                Tất cả quy trình đều được thiết kế cá nhân hóa, đảm bảo tính chính xác, an toàn và minh bạch — những giá trị cốt lõi làm nên uy tín y tế Nhật Bản trên toàn cầu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fields.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] p-6 sm:p-8 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-4">
                      <span className="font-mono text-2xl font-light text-[#75182d]">
                        0{idx + 1}
                      </span>
                      <Stethoscope className="w-4 h-4 text-[#75182d]/60 group-hover:text-[#75182d] transition-colors" />
                    </div>
                    <h3 className="font-title text-xl font-medium text-[#222222] mb-2 group-hover:text-[#75182d] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-xs text-[#222222]/80 leading-relaxed font-normal">
                      {f.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-black/5 text-[11px] font-mono text-[#75182d]">
                    Chuẩn y khoa Nhật Bản
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Bệnh Viện Top Đầu Nhật Bản */}
        <section id="hospitals-list" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Cơ Sở Y Tế Uy Tín Bậc Nhất
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                1. Bệnh Viện Top Đầu Nhật Bản
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/80 mt-3 leading-relaxed">
                Trong hành trình du lịch y tế tại Nhật Bản, việc lựa chọn đúng bệnh viện là yếu tố quan trọng hàng đầu. Chúng tôi tự hào liên kết với các bệnh viện đại học và bệnh viện quốc tế uy tín bậc nhất Nhật Bản, nơi hội tụ nền y học tiên tiến, đội ngũ bác sĩ đầu ngành và tiêu chuẩn chăm sóc khắt khe. Mỗi bệnh viện đều có thế mạnh chuyên sâu riêng, nhưng cùng chung một triết lý: <strong>điều trị chính xác – an toàn – lấy bệnh nhân làm trung tâm</strong>.
              </p>
            </div>

            <div className="space-y-16">
              {hospitals.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-black/15 shadow-sm overflow-hidden hover:border-[#75182d] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                    
                    {/* Image Column (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="relative rounded overflow-hidden border border-black/10 shadow-md">
                        <img
                          src={h.img}
                          alt={h.name}
                          className="w-full h-64 sm:h-72 object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                          Bệnh viện 0{idx + 1}
                        </div>
                      </div>

                      {/* Extra image for Fujita Suga ceremony */}
                      {h.subImg && (
                        <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-stone-50">
                          <img
                            src={h.subImg}
                            alt="Lễ khai trương bệnh viện Fujita cùng nguyên Thủ tướng Suga"
                            className="w-full h-auto object-cover"
                          />
                          {h.subCaption && (
                            <p className="text-[11px] text-[#222222]/80 p-2.5 italic bg-[#fbf7ef] border-t border-black/10 font-mono">
                              ✦ {h.subCaption}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Details Column (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <div className="inline-block bg-[#f1e2c8]/60 text-[#75182d] text-[11px] font-mono uppercase px-3 py-1 rounded-full font-bold mb-2">
                          {h.tag}
                        </div>
                        <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222] leading-tight">
                          {h.name}
                        </h3>
                        <p className="text-xs font-mono text-[#75182d] font-semibold mt-0.5">
                          {h.japanese}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-[#222222]/65 mt-2 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-[#75182d] shrink-0" />
                          <span>Địa chỉ: {h.address}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal pt-2 border-t border-black/10">
                        {h.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#75182d] font-bold block">
                          Đặc điểm chuyên môn nổi bật:
                        </span>
                        {h.highlights.map((item, hlIdx) => (
                          <div key={hlIdx} className="flex items-start gap-2.5 text-xs text-[#222222]">
                            <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                        <a
                          href="#contact"
                          className="shushi-btn shushi-btn-primary !py-2 !px-4 text-xs inline-flex items-center"
                        >
                          <span>Tư vấn đặt lịch khám tại bệnh viện này</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quy Trình Hỗ Trợ 5 Bước Trọn Gói */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Đồng Hành Y Tế Trọn Gói
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                Quy Trình Khám & Điều Trị Tại Nhật Bản
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Hồ Sơ Bệnh Án", desc: "Tiếp nhận hồ sơ, dịch thuật bệnh án sang tiếng Nhật y khoa và xin ý kiến chuyên môn hội chẩn từ bác sĩ Nhật." },
                { step: "02", title: "Xác Nhận & Lên Lộ Trình", desc: "Bệnh viện tại Tokyo/Kyoto gửi thư tiếp nhận chính thức và lịch hẹn khám, phác đồ điều trị dự kiến." },
                { step: "03", title: "Xin Visa Y Tế Chính Thức", desc: "Bảo lãnh và xin cấp Visa Y tế (Medical Stay Visa) cho bệnh nhân và người nhà đi cùng." },
                { step: "04", title: "Đồng Hành Tại Nhật", desc: "Xe đưa đón riêng, phiên dịch viên y tế có chứng chỉ quốc tế đồng hành 1:1 trong suốt quá trình thăm khám." },
                { step: "05", title: "Hậu Phẫu & Theo Dõi", desc: "Bàn giao hồ sơ bệnh án song ngữ, hướng dẫn dùng thuốc và kết nối hội chẩn từ xa định kỳ sau khi về nước." },
              ].map((s, idx) => (
                <div key={idx} className="bg-[#fbf7ef] p-6 border border-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-light text-[#75182d] block mb-2">{s.step}</span>
                    <h4 className="font-title text-lg font-medium text-[#222222] mb-2">{s.title}</h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-black/5 text-[10px] font-mono text-[#75182d] font-bold">
                    Tiêu chuẩn an tâm 100%
                  </div>
                </div>
              ))}
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
