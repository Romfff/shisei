import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { 
  Activity, ShieldCheck, Award, HeartPulse, Building2, MapPin, 
  CheckCircle2, ArrowRight, Stethoscope, Sparkles, UserCheck, 
  FileCheck, Droplets, Zap, Dna, Clock, Microscope, HeartHandshake, Eye
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Du Lịch Y Tế Tại Nhật Bản · Liệu Pháp DFPP, Tế Bào Gốc, NK & 6 Bệnh Viện Top Đầu | SHINSEI TRAVEL",
  description:
    "Du lịch y tế Nhật Bản toàn diện: Liệu pháp lọc máu DFPP, tế bào gốc tự thân trẻ hóa, tế bào miễn dịch NK phòng chống ung thư, StemSup Exosomes và tầm soát công nghệ cao liên kết 6 bệnh viện hàng đầu Nhật Bản.",
};

export default function DuLichYTePage() {
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
      desc: "Bệnh viện Quốc tế St. Luke’s được thành lập từ năm 1901 tại thủ đô Tokyo bởi bác sĩ công giáo người Mỹ Rudolf Roesler, mang tên vị Thánh LUCA. Đây là bệnh viện đầu tiên thể hiện sự kết hợp của hai nền y học bậc nhất thế giới là Nhật Bản và Hoa Kỳ, thiết bị Nhật Bản và kỹ thuật y khoa Hoa Kỳ. Bệnh viện là nơi chăm sóc sức khỏe và điều trị bệnh tin cậy cho Hoàng Gia Nhật Bản cũng như các vị lãnh đạo cao cấp trong chính phủ Nhật Bản từ trước đến nay.",
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
      desc: "Bệnh viện Đa khoa Shonan Kamakura được thành lập vào tháng 11 năm 1988 tại thành phố Kamakura, tỉnh Kanagawa. Bệnh viện được công nhận là Bệnh viện của năm tại giải thưởng Chăm sóc sức khỏe Châu Á năm 2025.",
      highlights: [
        "Được vinh danh Bệnh viện của năm tại Asian Healthcare Awards 2025",
        "Trung tâm can thiệp tim mạch và xạ trị proton hàng đầu châu lục",
        "Hệ thống cấp cứu và điều trị nội trú đẳng cấp thế giới",
      ],
    },
    {
      name: "Trung tâm Nghiên Cứu Tế Bào CIRA · Đại học Kyoto",
      japanese: "京都大学iPS細胞研究所",
      address: "53 Kawahara-cho, Shogoin, Sakyo-ku, Kyoto 606-8507",
      img: "/images/Hospital/cira-stem-cell-center.png",
      tag: "Nobel Y Học 2012 · Giáo sư Shinya Yamanaka",
      desc: "Đây là trung tâm hàng đầu thế giới chuyên nghiên cứu iPS cell, tế bào gốc đa năng cảm ứng, được thành lập bởi Đại học Kyoto và dẫn dắt bởi Giáo sư Shinya Yamanaka — người đoạt Giải Nobel Y học 2012 với phát hiện ra phương pháp tạo iPS cells từ tế bào trưởng thành.",
      highlights: [
        "Viện nghiên cứu tế bào gốc iPS danh tiếng số 1 thế giới",
        "Dẫn dắt trực tiếp bởi GS Shinya Yamanaka · Nobel Y học 2012",
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
                Du Lịch Y Tế Chuyên Sâu Tại Nhật Bản
              </h1>

              <p className="text-base sm:text-lg text-[#f1e2c8]/90 font-normal leading-relaxed">
                Nhật Bản là quốc gia dẫn đầu toàn cầu về tuổi thọ và chất lượng chăm sóc y khoa. Dịch vụ Du lịch Y tế Shinsei kết nối trực tiếp bệnh nhân và khách hàng tinh hoa với mạng lưới bệnh viện đại học hàng đầu, mang đến các liệu pháp tiên tiến bậc nhất thế giới: <strong>Lọc máu DFPP, Tế bào gốc tự thân, Liệu pháp miễn dịch tế bào NK, StemSup Exosomes và Chẩn đoán hình ảnh tầm soát sớm</strong>.
              </p>

              {/* Quick Jump Navigator */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs">
                {[
                  { label: "1. Bệnh Viện Top Đầu", href: "#top-hospitals" },
                  { label: "2. Liệu Pháp Lọc Máu DFPP", href: "#dfpp-section" },
                  { label: "3. Tế Bào Gốc Chống Lão Hóa", href: "#stem-cell-section" },
                  { label: "4. Tế Bào Miễn Dịch NK", href: "#nk-cell-section" },
                  { label: "5. Tế Bào Gốc StemSup", href: "#stemsup-section" },
                  { label: "6. Tầm Soát Ung Thư & Thiết Bị", href: "#screening-section" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="bg-white/10 hover:bg-white text-white hover:text-[#75182d] px-3 py-1.5 rounded-sm border border-white/20 transition-all font-mono"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1. Danh Sách 6 Bệnh Viện Top Đầu Nhật Bản */}
        <section id="top-hospitals" className="py-24 bg-[#ffffff] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Danh Mục 01 · Cơ Sở Y Tế Uy Tín Bậc Nhất
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                1. Bệnh Viện Top Đầu Nhật Bản
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/80 mt-3 leading-relaxed">
                Chúng tôi tự hào liên kết trực tiếp với các bệnh viện đại học và viện nghiên cứu quốc tế uy tín bậc nhất Nhật Bản. Mỗi cơ sở y tế đều có thế mạnh chuyên khoa sâu và cùng chung triết lý: <strong>chẩn đoán chính xác – an toàn tuyệt đối – điều trị cá nhân hóa</strong>.
              </p>
            </div>

            <div className="space-y-16">
              {hospitals.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-[#fbf7ef] border border-black/15 shadow-sm overflow-hidden hover:border-[#75182d] transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
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

                      {h.subImg && (
                        <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white">
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

                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <div className="inline-block bg-[#f1e2c8]/80 text-[#75182d] text-[11px] font-mono uppercase px-3 py-1 rounded-full font-bold mb-2">
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

        {/* 2. LIỆU PHÁP LỌC MÁU DFPP */}
        <section id="dfpp-section" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Danh Mục 02 · Công Nghệ Thanh Lọc Máu Độc Quyền
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                2. Liệu Pháp Lọc Máu DFPP
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                Double Filtration Plasmapheresis · Lọc Huyết Tương Hai Lần
              </p>
            </div>

            {/* Overview & Mechanism */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
              <div className="lg:col-span-7 space-y-5 text-sm text-[#222222]/85 leading-relaxed">
                <p>
                  <strong>DFPP – Liệu pháp lọc huyết tương hai lần (Double Filtration Plasmapheresis)</strong> là phương pháp lọc máu ngoài cơ thể, trong đó huyết tương của bệnh nhân được tách ra và đi qua <strong>hai lớp màng lọc chuyên biệt khác nhau</strong>. Mục tiêu cốt lõi là <strong>loại bỏ chọn lọc</strong> các phân tử có hại (cholesterol xấu LDL, chất béo trung tính triglyceride, các yếu tố gây viêm, kháng thể bất thường, độc tố đại phân tử...) trong khi bảo tồn trọn vẹn các thành phần huyết tương quý giá như protein và albumin.
                </p>
                <div className="p-4 bg-[#75182d]/10 border-l-4 border-[#75182d] text-xs sm:text-sm text-[#75182d] leading-relaxed">
                  Liệu pháp thanh lọc máu DFPP đã được <strong>Bộ Y tế, Lao động và Phúc lợi Nhật Bản phê duyệt</strong> chính thức để điều trị tăng lipid máu, xơ vữa động mạch và loại bỏ các sản phẩm glycation liên quan đến lão hóa, giúp ngăn ngừa tình trạng viêm mãn tính và lão hóa lan rộng khắp cơ thể.
                </div>

                {/* 3-Step Basic Process */}
                <div className="pt-2">
                  <h4 className="font-title text-xl text-[#222222] mb-3">
                    Quy Trình Cơ Bản Của DFPP (Thời gian: 2,5 – 3 giờ / lần)
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-black/10 rounded flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#75182d] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <div>
                        <strong className="text-[#222222]">Tách huyết tương:</strong> Máu của bệnh nhân được đưa ra ngoài cơ thể qua màng lọc thứ nhất, nơi các tế bào máu (hồng cầu, bạch cầu, tiểu cầu) được tách an toàn ra khỏi huyết tương.
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-black/10 rounded flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#75182d] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <div>
                        <strong className="text-[#222222]">Lọc chọn lọc:</strong> Huyết tương đi qua màng lọc thứ hai có cấu trúc lỗ màng siêu vi, giữ lại chính xác các phân tử gây hại (LDL-C, lipoprotein bất thường, chất gây viêm, độc tố).
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-black/10 rounded flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#75182d] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <div>
                        <strong className="text-[#222222]">Trả lại máu sạch:</strong> Huyết tương sau khi được thanh lọc tinh khiết sẽ được hòa trộn lại với tế bào máu và đưa trở lại cơ thể an toàn tuyệt đối.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ưu điểm & Ứng dụng */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="p-4 bg-white border border-black/10">
                    <h5 className="font-mono text-xs uppercase font-bold text-[#75182d] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Ưu Điểm Vượt Trội
                    </h5>
                    <ul className="text-xs space-y-1.5 text-[#222222]/80 list-disc list-inside">
                      <li><strong>Loại bỏ chọn lọc:</strong> Không lấy đi toàn bộ huyết tương như phương pháp thay huyết tương truyền thống.</li>
                      <li><strong>Ít tác dụng phụ:</strong> Giữ lại tối đa protein, albumin, yếu tố đông máu tự nhiên.</li>
                      <li><strong>Hiệu quả tức thì:</strong> Giảm mạnh cholesterol LDL, lipoprotein(a) và độc tố trong máu.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-black/10">
                    <h5 className="font-mono text-xs uppercase font-bold text-[#75182d] mb-2 flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5" />
                      Ứng Dụng Lâm Sàng
                    </h5>
                    <ul className="text-xs space-y-1.5 text-[#222222]/80 list-disc list-inside">
                      <li><strong>Bệnh tim mạch:</strong> Điều trị tăng cholesterol máu khó hạ bằng thuốc, xơ vữa động mạch.</li>
                      <li><strong>Bệnh thận:</strong> Hội chứng thận hư, viêm cầu thận do miễn dịch.</li>
                      <li><strong>Bệnh tự miễn:</strong> Lupus ban đỏ, nhược cơ, đa xơ cứng.</li>
                      <li><strong>Detox & Chống lão hóa:</strong> Thanh lọc máu, phục hồi vi tuần hoàn toàn thân.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Photos Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/images/Medical/dfpp-therapy.jpg"
                    alt="Hình ảnh thực tế bệnh nhân đang thực hiện liệu pháp lọc máu DFPP tại viện Nhật Bản"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ Bệnh nhân thực hiện liệu pháp lọc máu DFPP tại viện
                  </div>
                </div>

                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/images/Medical/dfpp-filter-result.jpg"
                    alt="Hình ảnh màng lọc huyết tương trước và sau khi lọc máu DFPP"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ Màng lọc giữ lại lượng lớn chất béo xấu & tạp chất độc hại
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-black/10 rounded overflow-hidden">
                    <img src="/images/Medical/dfpp-lab-before.jpg" alt="Chỉ số xét nghiệm Before" className="w-full h-auto" />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono font-bold">Chỉ số xét nghiệm BEFORE</p>
                  </div>
                  <div className="border border-black/10 rounded overflow-hidden">
                    <img src="/images/Medical/dfpp-lab-after.jpg" alt="Chỉ số xét nghiệm After" className="w-full h-auto" />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono font-bold text-[#75182d]">Chỉ số xét nghiệm AFTER</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white p-6 sm:p-8 border border-black/10 shadow-sm overflow-x-auto">
              <h4 className="font-title text-2xl text-[#222222] mb-4">
                Bảng So Sánh Các Phương Pháp Lọc Máu Hiện Nay
              </h4>
              <table className="w-full text-xs sm:text-sm text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-[#75182d] text-white">
                    <th className="p-3 border border-[#75182d]/30 font-semibold w-1/5">Tiêu chí</th>
                    <th className="p-3 border border-[#75182d]/30 font-semibold w-1/4">Hemodialysis (Lọc máu thường)</th>
                    <th className="p-3 border border-[#75182d]/30 font-semibold w-1/4">Plasma Exchange (Thay huyết tương)</th>
                    <th className="p-3 border border-[#75182d]/30 font-semibold w-3/10 bg-[#5b1222] text-[#f1e2c8]">
                      DFPP (Lọc huyết tương hai lần Nhật)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10 text-[#222222]/85">
                  <tr>
                    <td className="p-3 font-semibold bg-stone-50">Nguyên lý</td>
                    <td className="p-3">Lọc qua màng bán thấm để loại bỏ ure, creatinine, nước dư thừa.</td>
                    <td className="p-3">Tách huyết tương ra và thay thế toàn bộ bằng dung dịch albumin/huyết tương mới.</td>
                    <td className="p-3 bg-[#75182d]/5 font-medium text-[#75182d]">Tách huyết tương, rồi lọc chọn lọc phân tử lớn qua màng thứ 2, giữ lại phần “tốt”.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-stone-50">Loại bỏ</td>
                    <td className="p-3">Chất độc nhỏ, ure, creatinine, muối, nước.</td>
                    <td className="p-3">Loại bỏ toàn bộ huyết tương (cả thành phần tốt và xấu).</td>
                    <td className="p-3 bg-[#75182d]/5 font-medium text-[#75182d]">Loại bỏ chọn lọc: LDL-C, kháng thể bất thường, yếu tố viêm, lipid xấu.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-stone-50">Giữ lại</td>
                    <td className="p-3">Tế bào máu.</td>
                    <td className="p-3">Không giữ lại huyết tương (vì thay toàn bộ).</td>
                    <td className="p-3 bg-[#75182d]/5 font-medium text-[#75182d]">Protein, albumin, yếu tố đông máu có lợi tự nhiên.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-stone-50">Tác dụng phụ</td>
                    <td className="p-3">Thường an toàn, nhưng có thể tụt huyết áp, mệt mỏi.</td>
                    <td className="p-3 text-red-700">Nguy cơ dị ứng, nhiễm trùng, rối loạn đông máu do mất protein.</td>
                    <td className="p-3 bg-[#75182d]/5 font-medium text-emerald-800">Không tác dụng phụ vì bảo tồn phần lớn protein và albumin.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-stone-50">Thời gian</td>
                    <td className="p-3">3–5 giờ/lần (2–3 lần/tuần cho bệnh nhân suy thận).</td>
                    <td className="p-3">2–3 giờ/lần (số lần tùy bệnh lý nặng).</td>
                    <td className="p-3 bg-[#75182d]/5 font-medium text-[#75182d]">2,5–3 giờ/lần, định kỳ (tùy mục đích: điều trị hay detox máu).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-stone-50">Ứng dụng chính</td>
                    <td className="p-3">Suy thận mạn giai đoạn cuối.</td>
                    <td className="p-3">Bệnh tự miễn, nhiễm độc huyết tương nặng.</td>
                    <td className="p-3 bg-[#75182d]/5 font-medium text-[#75182d]">Tim mạch (xơ vữa, mỡ máu cao), bệnh tự miễn, chống lão hóa & detox.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. TẾ BÀO GỐC - ĐẨY LÙI LÃO HÓA */}
        <section id="stem-cell-section" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Danh Mục 03 · Y Học Tái Sinh Đạt Giải Nobel
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                3. Tế Bào Gốc - Đẩy Lùi Lão Hóa
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                Stem Cell Therapy · Tái Tạo Tế Bào & Sửa Chữa Mô Tự Nhiên
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
              <div className="lg:col-span-7 space-y-5 text-sm text-[#222222]/85 leading-relaxed">
                <div className="p-4 bg-[#fbf7ef] border border-[#75182d]/20 rounded text-xs sm:text-sm">
                  <p className="text-[#75182d] font-semibold mb-1">
                    ✦ Nền tảng pháp lý và khoa học vững chắc từ Nhật Bản:
                  </p>
                  <p>
                    Nhật Bản là nước tiên phong trên thế giới ban hành <strong>Luật đảm bảo an toàn trong y học tái tạo (tháng 11/2014)</strong>. Đây cũng là quốc gia được vinh danh 2 lần tại Lễ trao giải Nobel với các nghiên cứu mang tính bước ngoặt về cơ chế tái sinh của tế bào (GS Shinya Yamanaka 2012, GS Yoshinori Ohsumi 2016).
                  </p>
                </div>

                <p>
                  <strong>Tế bào gốc</strong> là những tế bào đặc biệt có khả năng phân chia và biệt hóa thành nhiều loại tế bào khác nhau trong cơ thể. Chúng được mệnh danh là <em>“tế bào mẹ”</em> nhờ khả năng tự làm mới và tạo ra các tế bào mới để thay thế những tế bào già cỗi hoặc bị tổn thương. Nhờ tính năng này, tế bào gốc đóng vai trò sinh tử trong việc phục hồi và tái tạo mô, duy trì sự trẻ trung và khỏe mạnh bền vững.
                </p>

                <p>
                  Khi tuổi tác tăng lên, khả năng sản sinh tế bào mới giảm sút, dẫn đến hiện tượng lão hóa sớm, làn da xỉn màu và suy giảm chức năng nội tạng. <strong>Tế bào gốc trung mô MSC</strong> kích thích mạnh mẽ quá trình sản xuất <strong>collagen và elastin</strong> – hai protein chủ chốt duy trì độ đàn hồi của da, đồng thời tiết ra cytokine và yếu tố tăng trưởng đóng vai trò hình thành mạch máu mới, kháng viêm và ức chế quá trình chết tế bào (apoptosis).
                </p>

                {/* 3 Tác Dụng Cốt Lõi */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 bg-[#fbf7ef] border border-black/10">
                    <h5 className="font-title text-base font-medium text-[#75182d] mb-1">
                      ✦ Trẻ hóa và làm đẹp da chuyên sâu
                    </h5>
                    <p className="text-xs text-[#222222]/80">
                      Tái tạo tế bào da mới, giảm nếp nhăn, mờ nám tàn nhang, phục hồi sự săn chắc và đàn hồi. Exosome từ MSC bảo vệ tế bào khỏi stress oxy hóa gây lão hóa nhanh.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbf7ef] border border-black/10">
                    <h5 className="font-title text-base font-medium text-[#75182d] mb-1">
                      ✦ Nâng cao năng lượng sống & Sức khỏe toàn diện
                    </h5>
                    <p className="text-xs text-[#222222]/80">
                      Giảm mệt mỏi mãn tính, cải thiện khả năng vận động, phục hồi cơ bắp, tăng cường miễn dịch, giảm nguy cơ các bệnh thoái hóa khớp, tiểu đường và tim mạch.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbf7ef] border border-black/10">
                    <h5 className="font-title text-base font-medium text-[#75182d] mb-1">
                      ✦ Hỗ trợ điều trị bệnh mãn tính & Thần kinh
                    </h5>
                    <p className="text-xs text-[#222222]/80">
                      Hỗ trợ tái tạo tế bào thần kinh bị tổn thương, giảm viêm trong các bệnh lý thoái hóa liên quan tuổi già như Alzheimer, Parkinson.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photos & Certificates */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md">
                  <img
                    src="/images/Medical/stem-cell-clean-lab.jpg"
                    alt="Phòng nuôi cấy tế bào gốc đạt chuẩn y học tái tạo Nhật Bản"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-[#fbf7ef] text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ Phòng nuôi cấy tế bào gốc vô trùng chuẩn quốc tế
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded overflow-hidden border border-black/10 bg-white">
                    <img
                      src="/images/Medical/stem-cell-certificate.jpg"
                      alt="Giấy chứng nhận phân tích chất lượng tế bào Certificate of Analysis"
                      className="w-full h-auto object-contain p-2"
                    />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono font-bold">Chứng nhận kiểm định tế bào COA</p>
                  </div>

                  <div className="rounded overflow-hidden border border-black/10 bg-white">
                    <img
                      src="/images/Medical/stem-cell-technician.png"
                      alt="Kỹ thuật viên phòng thí nghiệm kiểm tra chất lượng tế bào"
                      className="w-full h-auto object-cover"
                    />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono font-bold">Kiểm tra tế bào nghiêm ngặt</p>
                  </div>
                </div>

                <div className="rounded overflow-hidden border border-black/10">
                  <img
                    src="/images/Medical/stem-cell-lounge.jpg"
                    alt="Không gian phòng khám và phòng nghỉ chuẩn Nhật"
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-[10px] text-center py-1 bg-[#fbf7ef] font-mono">Không gian tiếp đón và điều trị chuẩn 5 sao</p>
                </div>
              </div>
            </div>

            {/* 5-Step Stem Cell Protocol */}
            <div className="bg-[#fbf7ef] p-6 sm:p-10 border border-black/10">
              <h4 className="font-title text-2xl text-[#222222] mb-6 text-center">
                Quy Trình Trị Liệu Tế Bào Gốc Chuẩn Nhật (5 Bước)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { step: "01", title: "Tư Vấn Ban Đầu", desc: "Bác sĩ chuyên khoa thăm khám, đánh giá sức khỏe và chỉ định liệu trình tế bào gốc phù hợp." },
                  { step: "02", title: "Lấy Mẫu Tự Thân", desc: "Lấy mẫu từ mô mỡ hoặc máu trong môi trường vô trùng tuyệt đối, an toàn và không gây đau." },
                  { step: "03", title: "Xử Lý & Nuôi Cấy", desc: "Nuôi cấy trong phòng thí nghiệm đạt chuẩn Nhật Bản để tăng sinh số lượng và đạt độ tinh khiết tối đa." },
                  { step: "04", title: "Tiêm/Truyền Cơ Thể", desc: "Sau khi đạt tiêu chuẩn kiểm nghiệm, tế bào gốc được đưa vào cơ thể tại vùng cần điều trị hoặc qua tĩnh mạch." },
                  { step: "05", title: "Theo Dõi Định Kỳ", desc: "Hướng dẫn chăm sóc chuyên sâu và theo dõi định kỳ để tối ưu hóa kết quả phục hồi lâu dài." },
                ].map((st, sIdx) => (
                  <div key={sIdx} className="bg-white p-5 border border-black/10 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xl font-bold text-[#75182d] block mb-2">{st.step}</span>
                      <h5 className="font-title text-base font-medium text-[#222222] mb-1">{st.title}</h5>
                      <p className="text-xs text-[#222222]/75 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. ĐẨY LÙI UNG THƯ - TẾ BÀO MIỄN DỊCH NK */}
        <section id="nk-cell-section" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Danh Mục 04 · Khắc Tinh Của Khối U Ác Tính
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                4. Đẩy Lùi Ung Thư - Tế Bào Miễn Dịch NK
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                Natural Killer Cells · Đội Quân Phòng Thủ Tự Nhiên Bảo Vệ Cơ Thể
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 space-y-5 text-sm text-[#222222]/85 leading-relaxed">
                <div className="p-4 bg-white border border-[#75182d]/20 rounded">
                  <span className="font-mono text-xs uppercase font-bold text-[#75182d] block mb-1">
                    ✦ Giải Thưởng Nobel Y Học 2018
                  </span>
                  <p className="text-xs sm:text-sm">
                    Năm 2018, Nhật Bản được trao giải Nobel nhờ phát triển liệu pháp điều trị ung thư mới áp dụng <strong>cơ chế kích hoạt hệ miễn dịch tự nhiên</strong>, mở ra kỷ nguyên mới điều trị ung thư không độc hại cho bệnh nhân.
                  </p>
                </div>

                <p>
                  <strong>Tế bào miễn dịch NK (Natural Killer – Tế bào diệt tự nhiên)</strong> đóng vai trò quan trọng nhất trong việc nhận biết và tiêu diệt ngay lập tức các tế bào nhiễm virus hoặc tế bào ung thư đột biến. Chúng tuần tra bên trong cơ thể 24/7. Tuy nhiên, khi tuổi tác càng cao, số lượng và hoạt lực của tế bào NK suy giảm đáng kể, tạo kẽ hở cho tế bào ác tính bùng phát.
                </p>

                {/* Liệu pháp NK tại Nhật */}
                <div className="p-4 bg-white border border-black/10 space-y-2">
                  <h5 className="font-title text-base font-semibold text-[#75182d]">
                    Quy Trình Liệu Pháp Miễn Dịch NK Tại Nhật Bản:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-[#fbf7ef] border border-black/5">
                      <strong className="text-[#75182d] block font-mono mb-1">Bước 1: Lấy máu</strong>
                      Lấy 30–50ml máu tự thân nhẹ nhàng từ tĩnh mạch.
                    </div>
                    <div className="p-3 bg-[#fbf7ef] border border-black/5">
                      <strong className="text-[#75182d] block font-mono mb-1">Bước 2: Hoạt hóa</strong>
                      Phân tách tế bào Lympho, nuôi cấy và hoạt hóa nhân sinh tế bào NK lên gấp hàng ngàn lần.
                    </div>
                    <div className="p-3 bg-[#fbf7ef] border border-black/5">
                      <strong className="text-[#75182d] block font-mono mb-1">Bước 3: Truyền cơ thể</strong>
                      Truyền đội quân tế bào NK sung sức trở lại cơ thể qua đường tĩnh mạch.
                    </div>
                  </div>
                </div>

                {/* Ứng dụng lâm sàng */}
                <div className="space-y-1.5 text-xs">
                  <span className="font-mono uppercase font-bold text-[#75182d] block">
                    Hiệu quả lâm sàng nổi bật:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#222222]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                      <span>Phòng ngừa ung thư và ngăn tái phát di căn.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                      <span>Giảm đáng kể tác dụng phụ của hóa trị/xạ trị.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                      <span>Tăng cường hiệu quả điều trị đa mô thức.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                      <span>Làm chậm tiến triển ung thư, cải thiện chất lượng sống.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photos Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/images/Medical/nk-cell-attack.jpg"
                    alt="Tế bào miễn dịch NK tấn công và tiêu diệt tế bào ung thư"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ Tế bào NK tấn công và phá vỡ cấu trúc tế bào ung thư
                  </div>
                </div>

                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/images/Medical/nk-cell-diagram.jpg"
                    alt="Sơ đồ cơ chế liệu pháp tế bào miễn dịch tự thân tại Nhật Bản"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ Sơ đồ phân tách, nhân bản và tái truyền tế bào NK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TẾ BÀO GỐC STEMSUP (EXOSOMES) */}
        <section id="stemsup-section" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Danh Mục 05 · Viện Trị Liệu Sinh Học BIJ Nhật Bản
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                5. Tế Bào Gốc StemSup (Exosomes)
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                StemSup Therapy · Đột Phá Tăng Trưởng Gấp 3 Lần Tế Bào Gốc Thông Thường
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
              <div className="lg:col-span-7 space-y-5 text-sm text-[#222222]/85 leading-relaxed">
                <p>
                  <strong>StemSup</strong> được sản xuất bởi <strong>Viện trị liệu sinh học BIJ (Biotherapy Institute of Japan)</strong>, được chứng minh chứa hàm lượng cực lớn các hoạt chất sinh lý và yếu tố tăng trưởng như <strong>HGF, cytokine, exosome...</strong> giúp phục hồi và sửa chữa mô cơ quan tổn thương vượt bậc.
                </p>

                <div className="p-4 bg-[#75182d]/10 border border-[#75182d]/20 rounded text-xs sm:text-sm text-[#75182d] leading-relaxed">
                  <strong>Khác biệt vượt trội:</strong> StemSup chứa yếu tố tăng trưởng <strong>gấp 3 lần</strong> so với tế bào gốc thông thường. Khi đến nang tóc hay mô da, nó cung cấp dưỡng chất tối ưu để tế bào tự tái tạo thần tốc.
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="font-title text-lg text-[#222222]">Ứng Dụng Đa Đích Của StemSup Exosomes:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#fbf7ef] border border-black/10 rounded">
                      <strong className="text-[#75182d] block mb-1">Cải thiện cơ quan nội tạng:</strong>
                      Hỗ trợ rối loạn chức năng gan, phục hồi di chứng nhồi máu não, giảm biến chứng đái tháo đường.
                    </div>
                    <div className="p-3 bg-[#fbf7ef] border border-black/10 rounded">
                      <strong className="text-[#75182d] block mb-1">Cơ xương khớp & Thần kinh:</strong>
                      Giảm nhẹ thấp khớp, đau thần kinh tọa, phục hồi chức năng vận động cho khớp thoái hóa.
                    </div>
                    <div className="p-3 bg-[#fbf7ef] border border-black/10 rounded">
                      <strong className="text-[#75182d] block mb-1">Trẻ hóa thẩm mỹ da:</strong>
                      Tăng độ dày của da lên <strong>20%</strong> và kích thích tăng sinh collagen lên <strong>30%</strong>.
                    </div>
                    <div className="p-3 bg-[#fbf7ef] border border-black/10 rounded">
                      <strong className="text-[#75182d] block mb-1">Phục hồi mọc tóc:</strong>
                      Đánh thức các nang tóc thoái hóa, phục hồi tình trạng tóc thưa mỏng và rụng tóc nhiều.
                    </div>
                  </div>
                </div>

                {/* Protocol 3 steps */}
                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <span className="font-mono text-xs uppercase font-bold text-[#75182d] block mb-2">
                    Quy trình thực hiện StemSup:
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3 text-xs">
                    <div className="flex-1 p-2 bg-white border border-black/5">
                      <strong>Bước 1:</strong> Tư vấn bác sĩ (15 phút)
                    </div>
                    <div className="flex-1 p-2 bg-white border border-black/5">
                      <strong>Bước 2:</strong> Tiến hành truyền (1 giờ)
                    </div>
                    <div className="flex-1 p-2 bg-white border border-black/5">
                      <strong>Bước 3:</strong> Lặp lại chu kỳ định kỳ (1 tháng/lần)
                    </div>
                  </div>
                </div>
              </div>

              {/* Photos Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md">
                  <img
                    src="/images/Medical/stemsup-body-organs.jpg"
                    alt="Cơ chế tác động đa cơ quan của liệu pháp StemSup Exosomes"
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-[10px] text-center py-1.5 bg-[#fbf7ef] font-mono text-[#75182d]">Cơ chế tác động đa cơ quan của StemSup</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded overflow-hidden border border-black/10">
                    <img src="/images/Medical/stemsup-skin-before-after.jpg" alt="Hiệu quả trẻ hóa da" className="w-full h-auto" />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono">Trẻ hóa da (Collagen +30%)</p>
                  </div>
                  <div className="rounded overflow-hidden border border-black/10">
                    <img src="/images/Medical/stemsup-hair-before-after.jpg" alt="Hiệu quả phục hồi mọc tóc" className="w-full h-auto" />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono">Phục hồi tóc thưa rụng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TẦM SOÁT UNG THƯ SỚM & CÔNG NGHỆ CHẨN ĐOÁN HÌNH ẢNH CAO CẤP */}
        <section id="screening-section" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                Danh Mục 06 · Trang Thiết Bị Y Khoa Tối Tân Hàng Đầu Thế Giới
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                6. Tầm Soát Ung Thư & Thiết Bị Hiện Đại
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                Cancer Screening · Thăm Khám Sức Khỏe Định Kỳ Chuẩn Nhật
              </p>
            </div>

            {/* Screening Packages Info */}
            <div className="bg-white p-6 sm:p-10 border border-black/10 shadow-sm mb-16">
              <div className="max-w-3xl mb-8">
                <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                  Tầm Soát Ung Thư Sớm & Khám Tổng Quát Chuyên Sâu
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 mt-2 leading-relaxed">
                  Định kỳ tối thiểu <strong>6 tháng/lần</strong>, việc thăm khám tầm soát giúp phát hiện sớm các đột biến DNA gen và mầm mống ung thư ngay từ giai đoạn vi thể, mở ra cơ hội chữa khỏi hoàn toàn:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <span className="font-mono text-xs uppercase font-bold text-[#75182d] block mb-1">Gói 01</span>
                  <h4 className="font-title text-base font-semibold text-[#222222] mb-1">Khám Tổng Quát Chuyên Sâu</h4>
                  <p className="text-xs text-[#222222]/75">Xét nghiệm máu toàn diện, chức năng gan – thận – tim mạch, đường huyết, mỡ máu, nội tiết tố.</p>
                </div>
                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <span className="font-mono text-xs uppercase font-bold text-[#75182d] block mb-1">Gói 02</span>
                  <h4 className="font-title text-base font-semibold text-[#222222] mb-1">Tầm Soát Ung Thư Sớm</h4>
                  <p className="text-xs text-[#222222]/75">Tầm soát ung thư dạ dày, đại tràng, phổi, gan, ung thư vú / cổ tử cung (nữ), tuyến tiền liệt (nam).</p>
                </div>
                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <span className="font-mono text-xs uppercase font-bold text-[#75182d] block mb-1">Gói 03</span>
                  <h4 className="font-title text-base font-semibold text-[#222222] mb-1">Chẩn Đoán Hình Ảnh Cao Cấp</h4>
                  <p className="text-xs text-[#222222]/75">Chụp CT đứng, PET/CT kỹ thuật số, MRI 3T, siêu âm tổng quát và nội soi tiêu hóa không đau.</p>
                </div>
                <div className="p-4 bg-[#fbf7ef] border border-black/10">
                  <span className="font-mono text-xs uppercase font-bold text-[#75182d] block mb-1">Gói 04</span>
                  <h4 className="font-title text-base font-semibold text-[#222222] mb-1">Tư Vấn Bác Sĩ Chuyên Khoa</h4>
                  <p className="text-xs text-[#222222]/75">Bác sĩ đầu ngành giải thích cặn kẽ kết quả, định hướng phác đồ chăm sóc dài hạn và lối sống chuẩn Nhật.</p>
                </div>
              </div>
            </div>

            {/* 4 World-Leading Medical Devices */}
            <div className="space-y-12">
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222] border-b border-black/10 pb-4">
                4 Hệ Thống Thiết Bị Chẩn Đoán Hình Ảnh Đẳng Cấp Thế Giới Tại Nhật Bản
              </h3>

              {/* Device 1: Chụp CT dạng đứng Canon */}
              <div className="bg-white p-6 sm:p-8 border border-black/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-2">
                  <img src="/images/Medical/canon-upright-ct-overview.jpg" alt="Chụp CT dạng đứng Canon" className="w-full h-auto rounded border border-black/10" />
                  <div className="grid grid-cols-2 gap-2">
                    <img src="/images/Medical/canon-upright-ct-standing.jpg" alt="Tư thế đứng trong máy CT" className="w-full h-auto rounded border border-black/10" />
                    <img src="/images/Medical/canon-upright-ct-patient.jpg" alt="Bệnh nhân trong máy CT" className="w-full h-auto rounded border border-black/10" />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <span className="inline-block bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                    Thiết bị hiếm hoi trên thế giới
                  </span>
                  <h4 className="font-title text-2xl font-light text-[#222222]">
                    Chụp CT Dạng Đứng (Canon Medical Systems)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                    Tính đến cuối 2023, chỉ có một vài thiết bị hiếm hoi này được lắp đặt trên toàn thế giới. Máy cho phép chụp ảnh ở <strong>cả tư thế đứng và ngồi</strong> dưới tác động tự nhiên của trọng lực — điều mà máy CT nằm truyền thống không thể thực hiện được.
                  </p>
                  <ul className="text-xs space-y-1.5 text-[#222222]/85 list-disc list-inside">
                    <li>Loại bỏ cảm giác ngột ngạt khép kín, người bệnh hoàn toàn thoải mái.</li>
                    <li>Đánh giá chính xác rối loạn cơ xương khớp (chỉnh hình), tiết niệu và tiêu hóa ở trạng thái sinh hoạt thực tế.</li>
                    <li>Hỗ trợ xác định vị trí phẫu thuật ngực, mí mắt và đánh giá chuyên sâu hậu phẫu.</li>
                  </ul>
                </div>
              </div>

              {/* Device 2: Máy PET/CT kỹ thuật số bán dẫn */}
              <div className="bg-white p-6 sm:p-8 border border-black/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <img src="/images/Medical/pet-ct-semiconductor.jpg" alt="Máy PET/CT kỹ thuật số bán dẫn" className="w-full h-auto rounded border border-black/10" />
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <span className="inline-block bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                    Ra mắt tháng 4/2023 · Công nghệ bán dẫn AI
                  </span>
                  <h4 className="font-title text-2xl font-light text-[#222222]">
                    Máy PET/CT Kỹ Thuật Số (Bán Dẫn)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                    Hệ thống PET/CT bán dẫn hàng đầu của Nhật Bản tích hợp <strong>trí tuệ nhân tạo (AI) học sâu</strong> để triệt tiêu nhiễu do chuyển động hô hấp và dị vật kim loại, tăng cường độ tương phản hình ảnh sắc nét.
                  </p>
                  <ul className="text-xs space-y-1.5 text-[#222222]/85 list-disc list-inside">
                    <li><strong>Giảm liều lượng phơi nhiễm bức xạ</strong> xuống mức an toàn tối đa cho bệnh nhân.</li>
                    <li>Rút ngắn đáng kể thời gian nằm chụp trong buồng máy.</li>
                    <li>Phát hiện sớm các ổ tổn thương ung thư nhỏ chỉ vài milimet với độ xâm lấn tối thiểu.</li>
                  </ul>
                </div>
              </div>

              {/* Device 3: Máy PET chuyên dụng vùng đầu & Máy MRI 3T Canon */}
              <div className="bg-white p-6 sm:p-8 border border-black/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 grid grid-cols-2 gap-2">
                  <div className="border border-black/10 rounded overflow-hidden">
                    <img src="/images/Medical/pet-head-scanner.jpg" alt="Máy PET chụp vùng đầu" className="w-full h-auto" />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono">Máy PET chuyên dụng vùng đầu</p>
                  </div>
                  <div className="border border-black/10 rounded overflow-hidden">
                    <img src="/images/Medical/mri-3t-canon.jpg" alt="Máy chụp cộng hưởng từ MRI 3T" className="w-full h-auto" />
                    <p className="text-[10px] text-center py-1 bg-stone-100 font-mono">Máy cộng hưởng từ MRI 3T</p>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <span className="inline-block bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                    Công nghệ Canon Medical Systems
                  </span>
                  <h4 className="font-title text-2xl font-light text-[#222222]">
                    Máy PET Chuyên Dụng Vùng Đầu & Máy Chụp Cộng Hưởng Từ MRI 3T
                  </h4>
                  <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                    Trang bị công nghệ <strong>giảm tiếng ồn độc quyền</strong> của Canon Medical Systems kết hợp trí tuệ nhân tạo học sâu, mang lại cảm giác dễ chịu, giảm đau và căng thẳng trong quá trình quét chụp não và hệ thần kinh.
                  </p>
                  <ul className="text-xs space-y-1.5 text-[#222222]/85 list-disc list-inside">
                    <li>Độ phân giải siêu cao 3 Tesla phát hiện sớm tai biến, u não và sa sút trí tuệ.</li>
                    <li>Thu được chất lượng hình ảnh sắc nét trong thời gian nhanh kỷ lục.</li>
                  </ul>
                </div>
              </div>

              {/* Device 4: Máy quét PET vú dạng vòng đầu tiên trên thế giới */}
              <div className="bg-white p-6 sm:p-8 border border-black/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <img src="/images/Medical/pet-ring-breast-scanner.jpg" alt="Máy quét PET vú dạng vòng đầu tiên trên thế giới" className="w-full h-auto rounded border border-black/10" />
                  <p className="text-[10px] text-center py-1 bg-stone-100 font-mono">Chụp không đau – Bệnh nhân nằm sấp</p>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <span className="inline-block bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                    Đột phá y khoa · Không đau, ít bức xạ
                  </span>
                  <h4 className="font-title text-2xl font-light text-[#222222]">
                    Máy Quét PET Vú Dạng Vòng Đầu Tiên Trên Thế Giới
                  </h4>
                  <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                    Thiết bị cực kỳ hiếm với chỉ một vài máy được triển khai tại Nhật Bản. Đầu dò di động dạng vòng cho phép chụp ảnh PET độ phân giải cao não và vú mà <strong>hoàn toàn không gây đau đớn</strong> (không bị ép chặt như chụp nhũ ảnh Mammography thông thường).
                  </p>
                  <ul className="text-xs space-y-1.5 text-[#222222]/85 list-disc list-inside">
                    <li>Bệnh nhân chỉ cần nằm sấp thoải mái trên giường và đưa vú vào đầu dò.</li>
                    <li>Không kèm máy quét CT nên <strong>mức độ phơi nhiễm bức xạ cực kỳ thấp</strong>.</li>
                    <li>Độ chính xác tầm soát ung thư vú cao vượt trội ngay cả với mô tuyến vú đặc của phụ nữ châu Á.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Quy Trình Hỗ Trợ 5 Bước Trọn Gói */}
        <section id="process" className="py-24 bg-white border-b border-black/10">
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
                { step: "03", title: "Xin Visa Y Tế Chính Thức", desc: "Bảo lãnh và xin cấp Visa Y tế Medical Stay Visa cho bệnh nhân và người nhà đi cùng." },
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
