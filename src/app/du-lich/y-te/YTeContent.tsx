"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { 
  Activity, ShieldCheck, MapPin, CheckCircle2, ArrowRight, Sparkles, HeartPulse
} from "lucide-react";

export function YTeContent() {
  const { isJa } = useLanguage();

  const hospitals = isJa
    ? [
        {
          name: "東京大学医学部附属病院",
          address: "東京都文京区本郷7-3-1",
          img: "/images/Hospital/tokyo-univ-hospital.png",
          tag: "近代日本医学の発祥地 · 最高峰の学術拠点",
          desc: "東京大学医学部附属病院は、日本で最も長い歴史と先進的な治療実績を誇る総合医療機関です。近代日本医学の礎を築き、全国の臨床ガイドライン策定や高度医療研究を常に牽引しています。",
          highlights: [
            "難治性疾患の集学的治療および高度先進外科手術で国内トップ実績",
            "国際水準の臨床研究中核病院としての確固たる地位",
            "日本医学界をリードする最高峰の教授陣・専門医体制",
          ],
        },
        {
          name: "藤田医科大学 羽田クリニック",
          address: "東京都大田区羽田空港1-1-4 HANEDA INNOVATION CITY ZONE A",
          img: "/images/Hospital/fujita-univ-hospital.png",
          subImg: "/images/Hospital/fujita-suga-opening.png",
          subCaption: "2023年9月、藤田医科大学羽田クリニック開院式典には菅義偉前内閣総理大臣が来賓出席されました。",
          tag: "総病床数1,435床 · 国内最大規模",
          desc: "藤田医科大学は1,435床を有する日本最大規模の医療機関であり、世界最新鋭の精密画像診断システムと再生医療拠点を備えています。羽田空港隣接のイノベーションシティに位置し、国際的なアクセスも抜群です。",
          highlights: [
            "日本最大規模を誇る充実した医療・研究体制（本院1,435床）",
            "羽田空港直結のロケーションで、海外からの受診にも極めて便利",
            "世界最新鋭の半導体PET/CTや立位CTなど高精度画像診断機器を完備",
          ],
        },
        {
          name: "東京慈恵会医科大学附属病院",
          address: "東京都港区西新橋3-19-18",
          img: "/images/Hospital/jikei-univ-hospital.png",
          tag: "創立140余年の歴史 · がん・難病専門治療拠点",
          desc: "140年以上の伝統を誇り、日本屈指の先進医療を提供する名門大学病院。国から「がんゲノム医療中核拠点病院」および難病診療拠点病院の指定を受け、個別化医療を実践しています。",
          highlights: [
            "140年余の信頼と実績を誇る東京都心の名門大学病院",
            "厚生労働省指定の高度がんゲノム医療および難治性疾患診療拠点",
            "最新のエビデンスに基づくオーダーメイド個別化治療プロトコル",
          ],
        },
        {
          name: "聖路加国際病院",
          address: "東京都中央区明石町9-1",
          img: "/images/Hospital/st-lukes-hospital.png",
          tag: "皇室・各国要人に選ばれ続ける国際病院",
          desc: "1901年に宣教医師ルドルフ・トイスラーにより創設。日本のホスピタリティと米国の最先端医療技術を融合させ、古くから日本の皇室や政財界要人、海外VIPの信頼を集める国際的医療機関です。",
          highlights: [
            "日本の皇室および国内外の要人に長年選ばれ続ける最高峰のホスピタリティ",
            "米国式先進医療技術と最新鋭の日本医療機器の完全融合",
            "国際医療機能評価JCI認証取得。洗練された癒しの診療環境",
          ],
        },
        {
          name: "湘南鎌倉総合病院",
          address: "神奈川県鎌倉市岡本1370-1",
          img: "/images/Hospital/shonan-kamakura-hospital.png",
          tag: "Hospital of the Year (アジア最優秀病院 2025)",
          desc: "1988年設立。循環器内科・心臓血管外科のカテーテル治療実績は世界水準。アジア・ヘルスケア・アワード2025において「Hospital of the Year（年間最優秀病院）」に選出されました。",
          highlights: [
            "Asian Healthcare Awards 2025「Hospital of the Year」受賞",
            "最先端陽子線がん治療センターおよびアジア有数の心臓病カテーテル治療",
            "24時間365日の救急・急性期から先進再生医療まで包括対応",
          ],
        },
        {
          name: "京都大学iPS細胞研究所 (CiRA)",
          address: "京都府京都市左京区聖護院川原町53",
          img: "/images/Hospital/cira-stem-cell-center.png",
          tag: "2012年ノーベル医学生理学賞 · 山中伸弥教授創設",
          desc: "成熟細胞から多能性幹細胞を作り出す画期的なiPS細胞技術の世界的拠点。ノーベル賞受賞者・山中伸弥教授が設立を主導し、世界の再生医療・難病創薬のフロントランナーとして研究を推進しています。",
          highlights: [
            "世界最高峰の知名度を誇るiPS細胞専門研究機関",
            "2012年ノーベル医学生理学賞受賞・山中伸弥教授が主導",
            "次世代再生医療・細胞治療の臨床応用における世界的先駆拠点",
          ],
        },
      ]
    : [
        {
          name: "Bệnh viện Đại học Y Khoa Tokyo",
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

  const quickNav = isJa
    ? [
        { label: "1. 名門提携病院", href: "#top-hospitals" },
        { label: "2. DFPP血液浄化療法", href: "#dfpp-section" },
        { label: "3. 自己幹細胞治療", href: "#stem-cell-section" },
        { label: "4. NK細胞免疫療法", href: "#nk-cell-section" },
        { label: "5. StemSupエクソソーム", href: "#stemsup-section" },
        { label: "6. 先端検診 & 診断機器", href: "#screening-section" },
      ]
    : [
        { label: "1. Bệnh Viện Top Đầu", href: "#top-hospitals" },
        { label: "2. Liệu Pháp Lọc Máu DFPP", href: "#dfpp-section" },
        { label: "3. Tế Bào Gốc Chống Lão Hóa", href: "#stem-cell-section" },
        { label: "4. Tế Bào Miễn Dịch NK", href: "#nk-cell-section" },
        { label: "5. Tế Bào Gốc StemSup", href: "#stemsup-section" },
        { label: "6. Tầm Soát Ung Thư & Thiết Bị", href: "#screening-section" },
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
                <span>{isJa ? "国際先端医療ツーリズム · 日本" : "Medical Tourism Japan · Du Lịch Y Tế"}</span>
              </div>

              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                {isJa ? "日本の先端医療・再生医療ツーリズム" : "Du Lịch Y Tế Chuyên Sâu Tại Nhật Bản"}
              </h1>

              <p className="text-base sm:text-lg text-[#f1e2c8]/90 font-normal leading-relaxed">
                {isJa
                  ? "世界最高峰の平均寿命と医療水準を誇る日本。SHINSEIは国内トップクラスの大学病院や研究機関と直接提携し、DFPP二重濾過血漿交換療法、自己脂肪由来幹細胞治療、NK細胞免疫療法、StemSupエクソソーム、超早期がんスクリーニングをお届けします。"
                  : "Nhật Bản là quốc gia dẫn đầu toàn cầu về tuổi thọ và chất lượng chăm sóc y khoa. Dịch vụ Du lịch Y tế Shinsei kết nối trực tiếp bệnh nhân và khách hàng tinh hoa với mạng lưới bệnh viện đại học hàng đầu, mang đến các liệu pháp tiên tiến bậc nhất thế giới: Lọc máu DFPP, Tế bào gốc tự thân, Liệu pháp miễn dịch tế bào NK, StemSup Exosomes và Chẩn đoán hình ảnh tầm soát sớm."}
              </p>

              {/* Quick Jump Navigator */}
              <div className="pt-4 flex flex-wrap gap-2 text-xs">
                {quickNav.map((item, idx) => (
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
                {isJa ? "提携ネットワーク 01 · 日本屈指の名門医療機関" : "Danh Mục 01 · Cơ Sở Y Tế Uy Tín Bậc Nhất"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "1. 日本の名門提携病院一覧" : "1. Bệnh Viện Top Đầu Nhật Bản"}
              </h2>
              <p className="text-sm sm:text-base text-[#222222]/80 mt-3 leading-relaxed">
                {isJa
                  ? "確かな診断精度・絶対的な安全性・個別のテーラーメイド治療を追求する日本有数の大学病院・総合医療センターと提携。"
                  : "Chúng tôi tự hào liên kết trực tiếp với các bệnh viện đại học và viện nghiên cứu quốc tế uy tín bậc nhất Nhật Bản. Mỗi cơ sở y tế đều có thế mạnh chuyên khoa sâu và cùng chung triết lý: chẩn đoán chính xác – an toàn tuyệt đối – điều trị cá nhân hóa."}
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
                          {isJa ? `病院 0${idx + 1}` : `Bệnh viện 0${idx + 1}`}
                        </div>
                      </div>

                      {h.subImg && (
                        <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white">
                          <img
                            src={h.subImg}
                            alt="Fujita"
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
                        <div className="flex items-center gap-1.5 text-xs text-[#222222]/65 mt-2 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-[#75182d] shrink-0" />
                          <span>{isJa ? `所在地：${h.address}` : `Địa chỉ: ${h.address}`}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal pt-2 border-t border-black/10">
                        {h.desc}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#75182d] font-bold block">
                          {isJa ? "専門診療のハイライト：" : "Đặc điểm chuyên môn nổi bật:"}
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
                          <span>{isJa ? "この医療機関での受診を相談する" : "Tư vấn đặt lịch khám tại bệnh viện này"}</span>
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
                {isJa ? "先進医療技術 02 · 血液クレンジング" : "Danh Mục 02 · Công Nghệ Thanh Lọc Máu Độc Quyền"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "2. DFPP二重濾過血漿交換療法" : "2. Liệu Pháp Lọc Máu DFPP"}
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                {isJa ? "Double Filtration Plasmapheresis · 血液浄化療法" : "Double Filtration Plasmapheresis · Lọc Huyết Tương Hai Lần"}
              </p>
            </div>

            {/* Overview & Mechanism */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
              <div className="lg:col-span-7 space-y-5 text-sm text-[#222222]/85 leading-relaxed">
                <p>
                  {isJa
                    ? "DFPP（二重濾過血漿交換療法）は、体外循環により血漿を分離し、2種類の異なる特殊ナノフィルターに通すことで、悪玉LDLコレステロール、中性脂肪、動脈硬化因子、炎症性サイトカインなどの有害物質を選択的に除去する高度先端療法です。アルブミン等の有益なタンパク質は体内に戻されます。"
                    : "DFPP – Liệu pháp lọc huyết tương hai lần (Double Filtration Plasmapheresis) là phương pháp lọc máu ngoài cơ thể, trong đó huyết tương của bệnh nhân được tách ra và đi qua hai lớp màng lọc chuyên biệt khác nhau. Mục tiêu cốt lõi là loại bỏ chọn lọc các phân tử có hại (cholesterol xấu LDL, chất béo trung tính triglyceride, các yếu tố gây viêm, kháng thể bất thường, độc tố đại phân tử...) trong khi bảo tồn trọn vẹn các thành phần huyết tương quý giá như protein và albumin."}
                </p>
                <div className="p-4 bg-[#75182d]/10 border-l-4 border-[#75182d] text-xs sm:text-sm text-[#75182d] leading-relaxed">
                  {isJa
                    ? "厚生労働省認可の高度医療機器を使用し、専門医・臨床工学技士の厳格な管理下で安全に施行されます。"
                    : "Liệu pháp thanh lọc máu DFPP đã được Bộ Y tế, Lao động và Phúc lợi Nhật Bản phê duyệt chính thức để điều trị tăng lipid máu, xơ vữa động mạch và loại bỏ các sản phẩm glycation liên quan đến lão hóa, giúp ngăn ngừa tình trạng viêm mãn tính và lão hóa lan rộng khắp cơ thể."}
                </div>

                {/* 3-Step Basic Process */}
                <div className="pt-2">
                  <h4 className="font-title text-xl text-[#222222] mb-3">
                    {isJa ? "DFPP治療の基本手順（施術時間：約2.5〜3時間）" : "Quy Trình Cơ Bản Của DFPP (Thời gian: 2,5 – 3 giờ / lần)"}
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-black/10 rounded flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#75182d] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <div>
                        <strong className="text-[#222222]">{isJa ? "血漿の分離：" : "Tách huyết tương:"}</strong> {isJa ? "第1フィルターにて、血液細胞（赤血球・白血球・血小板）と血漿成分を安全に分離します。" : "Máu của bệnh nhân được đưa ra ngoài cơ thể qua màng lọc thứ nhất, nơi các tế bào máu được tách an toàn ra khỏi huyết tương."}
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-black/10 rounded flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#75182d] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <div>
                        <strong className="text-[#222222]">{isJa ? "有害物質の選択濾過：" : "Lọc chọn lọc:"}</strong> {isJa ? "第2ナノフィルターにて、LDLコレステロールや老廃物などの巨大分子のみを高精度に捕捉・除去。" : "Huyết tương đi qua màng lọc thứ hai có cấu trúc lỗ màng siêu vi, giữ lại chính xác các phân tử gây hại."}
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-black/10 rounded flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#75182d] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <div>
                        <strong className="text-[#222222]">{isJa ? "清浄な血液の体内還流：" : "Trả lại máu sạch:"}</strong> {isJa ? "浄化された血漿を自身の血液細胞と再結合させ、安全に体内へお戻しします。" : "Huyết tương sau khi được thanh lọc tinh khiết sẽ được hòa trộn lại với tế bào máu và đưa trở lại cơ thể an toàn tuyệt đối."}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ưu điểm & Ứng dụng */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="p-4 bg-white border border-black/10">
                    <h5 className="font-mono text-xs uppercase font-bold text-[#75182d] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {isJa ? "DFPPの卓越した利点" : "Ưu Điểm Vượt Trội"}
                    </h5>
                    <ul className="text-xs space-y-1.5 text-[#222222]/80 list-disc list-inside">
                      <li><strong>{isJa ? "選択的除去：" : "Loại bỏ chọn lọc:"}</strong> {isJa ? "必要な血清タンパク質やアルブミンを最大限温存。" : "Không lấy đi toàn bộ huyết tương như phương pháp thay huyết tương truyền thống."}</li>
                      <li><strong>{isJa ? "高い安全性：" : "Ít tác dụng phụ:"}</strong> {isJa ? "アレルギーや感染症リスクが極めて低く、身体への負担が最小限。" : "Giữ lại tối đa protein, albumin, yếu tố đông máu tự nhiên."}</li>
                      <li><strong>{isJa ? "即効性の実感：" : "Hiệu quả tức thì:"}</strong> {isJa ? "1回の施術で血液粘稠度が劇的に低下し、微小循環を改善。" : "Giảm mạnh cholesterol LDL, lipoprotein(a) và độc tố trong máu."}</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white border border-black/10">
                    <h5 className="font-mono text-xs uppercase font-bold text-[#75182d] mb-2 flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5" />
                      {isJa ? "主な臨床適用分野" : "Ứng Dụng Lâm Sàng"}
                    </h5>
                    <ul className="text-xs space-y-1.5 text-[#222222]/80 list-disc list-inside">
                      <li><strong>{isJa ? "心血管疾患予防：" : "Bệnh tim mạch:"}</strong> {isJa ? "難治性脂質異常症、動脈硬化の進行予防。" : "Điều trị tăng cholesterol máu khó hạ bằng thuốc, xơ vữa động mạch."}</li>
                      <li><strong>{isJa ? "自己免疫疾患：" : "Bệnh tự miễn:"}</strong> {isJa ? "膠原病、慢性炎症の鎮静化。" : "Lupus ban đỏ, nhược cơ, đa xơ cứng."}</li>
                      <li><strong>{isJa ? "アンチエイジング：" : "Chống lão hóa & Detox:"}</strong> {isJa ? "老化関連AGEsの除去、全身の血行改善。" : "Thanh lọc máu, phục hồi vi tuần hoàn toàn thân."}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Photos Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/images/Medical/dfpp-therapy.jpg"
                    alt="DFPP"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ {isJa ? "日本国内の専門クリニックでのDFPP施術風景" : "Bệnh nhân thực hiện liệu pháp lọc máu DFPP tại viện"}
                  </div>
                </div>

                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img
                    src="/images/Medical/dfpp-filter-result.jpg"
                    alt="DFPP Filter"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-white text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ {isJa ? "フィルターに捕捉された大量の酸化脂質・老廃物" : "Màng lọc giữ lại lượng lớn chất béo xấu & tạp chất độc hại"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TẾ BÀO GỐC */}
        <section id="stem-cell-section" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "先端再生医療 03 · 自己幹細胞" : "Danh Mục 03 · Y Học Tái Sinh Đạt Giải Nobel"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "3. 自己脂肪由来 幹細胞治療" : "3. Tế Bào Gốc - Đẩy Lùi Lão Hóa"}
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                {isJa ? "Autologous Adipose-Derived Stem Cell Therapy" : "Stem Cell Therapy · Tái Tạo Tế Bào & Sửa Chữa Mô Tự Nhiên"}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
              <div className="lg:col-span-7 space-y-5 text-sm text-[#222222]/85 leading-relaxed">
                <div className="p-4 bg-[#fbf7ef] border border-[#75182d]/20 rounded text-xs sm:text-sm">
                  <p className="text-[#75182d] font-semibold mb-1">
                    ✦ {isJa ? "日本が誇る強固な法制度と再生医療実績：" : "Nền tảng pháp lý và khoa học vững chắc từ Nhật Bản:"}
                  </p>
                  <p>
                    {isJa
                      ? "日本は2014年11月に世界に先駆けて「再生医療等の安全性の確保等に関する法律」を施行。厚生労働省の厳格な審査承認を受けた特定細胞加工物製造施設（CPC）のみが細胞培養を許可されています。"
                      : "Nhật Bản là nước tiên phong trên thế giới ban hành Luật đảm bảo an toàn trong y học tái tạo (tháng 11/2014). Đây cũng là quốc gia được vinh danh 2 lần tại Lễ trao giải Nobel với các nghiên cứu mang tính bước ngoặt về cơ chế tái sinh của tế bào (GS Shinya Yamanaka 2012, GS Yoshinori Ohsumi 2016)."}
                  </p>
                </div>
                <p>
                  {isJa
                    ? "患者様ご自身の腹部皮下脂肪からごく微量を採取し、無菌クリーンルームで数週間かけて高純度に増殖培養（数千万〜1億個規模）。静脈点滴または局所投与により、加齢や損傷を受けた臓器・血管・関節組織の修復を促進します。"
                    : "Tế bào gốc tự thân (đặc biệt là tế bào gốc mô mỡ ADSC) sở hữu khả năng tự nhân đôi và biệt hóa thành nhiều loại mô khác nhau (xương, sụn, cơ, mạch máu, thần kinh...). Liệu pháp giúp trẻ hóa tế bào, điều hòa miễn dịch và phục hồi chức năng các cơ quan suy giảm do tuổi tác."}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md">
                  <img
                    src="/images/Medical/stem-cell-clean-lab.jpg"
                    alt="Stem cell clean lab CPC"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-[#fbf7ef] text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ {isJa ? "厚生労働省認可の高度細胞培養加工施設 (CPC)" : "Phòng nuôi cấy tế bào gốc vô trùng chuẩn quốc tế (CPC)"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 items-start">
                  <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white">
                    <img
                      src="/images/Medical/stem-cell-technician.jpg"
                      alt={isJa ? "培養専門技術者" : "Kỹ thuật viên nuôi cấy"}
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-2 bg-[#fbf7ef] text-[11px] font-mono text-center text-[#75182d] font-semibold border-t border-black/10">
                      ✦ {isJa ? "培養専門技術者" : "Kỹ thuật viên nuôi cấy"}
                    </div>
                  </div>
                  <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white">
                    <img
                      src="/images/Medical/stem-cell-certificate.png"
                      alt={isJa ? "厚生労働省特定細胞加工物認証" : "Chứng nhận Bộ Y Tế Nhật"}
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-2 bg-[#fbf7ef] text-[11px] font-mono text-center text-[#75182d] font-semibold border-t border-black/10">
                      ✦ {isJa ? "厚生労働省特定細胞加工物認証" : "Chứng nhận Bộ Y Tế Nhật"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. LIỆU PHÁP TẾ BÀO MIỄN DỊCH NK */}
        <section id="nk-cell-section" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "がん免疫療法 04 · 高活性NK細胞" : "Danh Mục 04 · Khắc Tinh Của Tế Bào Ung Thư"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "4. 高活性NK細胞 免疫療法" : "4. Liệu Pháp Miễn Dịch Tế Bào NK"}
              </h2>
              <p className="text-sm font-mono text-[#75182d] mt-1 font-semibold uppercase">
                {isJa ? "Natural Killer Cell Immunotherapy" : "Natural Killer Cell Immunotherapy · Tăng Cường Miễn Dịch Tự Nhiên"}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-4 text-sm text-[#222222]/85 leading-relaxed">
                <p>
                  {isJa
                    ? "NK細胞（ナチュラルキラー細胞）は、体内を常時パトロールし、がん細胞やウイルス感染細胞を発見次第、先制攻撃して破壊する自然免疫の主力部隊です。患者様の血液約20〜50mlを採取し、特許技術でNK細胞のみを数十億個規模まで大量増殖・活性化させて点滴投与します。"
                    : "NK cell (Natural Killer Cell) là loại tế bào lympho tinh nhuệ nhất của hệ miễn dịch bẩm sinh. Không cần huấn luyện trước, NK cell có khả năng nhận diện và tiêu diệt các tế bào bất thường, tế bào ung thư và tế bào nhiễm virus trong cơ thể ngay từ khi chúng mới hình thành."}
                </p>
                <div className="p-4 bg-white border border-black/10 rounded">
                  <h4 className="font-title text-base font-medium text-[#75182d] mb-2">
                    {isJa ? "NK細胞療法の主要メリット" : "Lợi thế vượt trội của liệu pháp NK tại Nhật"}
                  </h4>
                  <ul className="text-xs space-y-2 list-disc list-inside">
                    <li>{isJa ? "自身の血液由来のため、拒絶反応や重篤な副作用が極めて少ない。" : "100% Tế bào tự thân từ chính máu người bệnh, tương thích sinh học tuyệt đối."}</li>
                    <li>{isJa ? "がん予防、術後の再発防止、微小残存病変の消退を強力にサポート。" : "Tăng cường sức đề kháng toàn diện, đặc biệt hiệu quả trong phòng ngừa ung thư tái phát."}</li>
                    <li>{isJa ? "化学療法や放射線治療と併用し、生活の質（QOL）向上に寄与。" : "Không gây mệt mỏi, không rụng tóc, không độc tính tế bào như hóa trị thông thường."}</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img src="/images/Medical/nk-cell-attack.jpg" alt="NK Cells" className="w-full h-auto object-cover" />
                  <div className="p-3 text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ {isJa ? "顕微鏡下でがん細胞を攻撃する高活性NK細胞" : "Tế bào NK tấn công tiêu diệt tế bào ung thư dưới kính hiển vi"}
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white">
                  <img src="/images/Medical/nk-cell-diagram.jpg" alt="Cơ chế tế bào NK" className="w-full h-auto object-cover" />
                  <div className="p-2 text-[11px] font-mono text-[#222]/80 text-center border-t border-black/10">
                    {isJa ? "NK細胞による標的細胞認識・直接殺傷メカニズム" : "Cơ chế nhận diện và tiêu diệt trực tiếp mục tiêu của tế bào NK"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TẾ BÀO GỐC STEMSUP EXOSOMES */}
        <section id="stemsup-section" className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "次世代バイオ医療 05 · エクソソーム" : "Danh Mục 05 · Tinh Hoa Chiết Xuất Tế Bào Gốc"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "5. StemSup 高純度エクソソーム療法" : "5. Tế Bào Gốc StemSup Exosomes"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-4 text-sm text-[#222222]/85 leading-relaxed">
                <p>
                  {isJa
                    ? "StemSupは、幹細胞培養上清液から分泌されるナノサイズの小胞「エクソソーム」および数百種類におよぶ成長因子（EGF、FGF、VEGF、IGF等）を高濃度に精製した次世代バイオ製剤です。細胞そのものを含まないため安全性が極めて高く、細胞間のシグナル伝達を活性化して組織再生を強力に促します。"
                    : "StemSup là dịch nuôi cấy tế bào gốc tinh khiết không chứa tế bào (Cell-Free Therapy), giàu các túi ngoại bào Exosomes và hơn 200 loại yếu tố tăng trưởng tự nhiên (EGF, FGF, VEGF, IGF...). Liệu pháp mang lại hiệu quả trẻ hóa tế bào vượt bậc, thúc đẩy tái tạo collagen, cải thiện chức năng gan, thận và tuần hoàn não."}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded overflow-hidden border border-black/10 shadow-md bg-white">
                  <img src="/images/Medical/stemsup-exosome.jpg" alt="StemSup Vials" className="w-full h-auto object-cover" />
                  <div className="p-3 text-xs font-mono text-[#75182d] text-center border-t border-black/10">
                    ✦ {isJa ? "医療用StemSup高純度エクソソーム凍結乾燥アンプル" : "Lọ StemSup Exosomes đông khô chuẩn phòng thí nghiệm Nhật Bản"}
                  </div>
                </div>
                <div className="rounded overflow-hidden border border-black/10 shadow-sm bg-white">
                  <img src="/images/Medical/stemsup-body-organs.jpg" alt="StemSup tác động cơ quan nội tạng" className="w-full h-auto object-cover" />
                  <div className="p-2 text-[11px] font-mono text-[#222]/80 text-center border-t border-black/10">
                    {isJa ? "全身臓器・血管・免疫の総合若返り作用" : "Tác dụng phục hồi tế bào trẻ hóa toàn diện các cơ quan nội tạng"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TẦM SOÁT UNG THƯ NINGEN DOCK & THIẾT BỊ HÀNG ĐẦU */}
        <section id="screening-section" className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "精密人間ドック 06 · 最先端画像診断" : "Danh Mục 06 · Tầm Soát Ung Thư Sớm & Thiết Bị Thế Giới"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "6. 総合人間ドック & 世界最高峰の診断機器" : "6. Tầm Soát Ung Thư Ningen Dock & Thiết Bị Thế Giới"}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 border border-black/10 shadow-sm space-y-3">
                <img src="/images/Medical/canon-upright-ct-overview.jpg" alt="Canon Upright CT" className="w-full h-auto rounded border border-black/10" />
                <h4 className="font-title text-xl font-light text-[#222222]">
                  {isJa ? "世界希少：立位・座位CT装置 (Canon Medical)" : "Chụp CT Dạng Đứng (Canon Medical Systems)"}
                </h4>
                <p className="text-xs text-[#222222]/80 leading-relaxed">
                  {isJa
                    ? "重力が加わった自然な立ち姿勢・座り姿勢で撮影可能な最新鋭CT。従来の臥位CTでは見落とされがちだった関節・脊椎・内臓下垂の正確な診断を実現。"
                    : "Máy cho phép chụp ảnh ở cả tư thế đứng và ngồi dưới tác động tự nhiên của trọng lực — điều mà máy CT nằm truyền thống không thể thực hiện được."}
                </p>
              </div>

              <div className="bg-white p-6 border border-black/10 shadow-sm space-y-3">
                <img src="/images/Medical/pet-ct-semiconductor.jpg" alt="Semiconductor PET/CT" className="w-full h-auto rounded border border-black/10" />
                <h4 className="font-title text-xl font-light text-[#222222]">
                  {isJa ? "半導体デジタルPET/CTシステム (AI深層学習)" : "Máy PET/CT Kỹ Thuật Số (Bán Dẫn) Tích Hợp AI"}
                </h4>
                <p className="text-xs text-[#222222]/80 leading-relaxed">
                  {isJa
                    ? "被曝線量を最小限に抑えつつ、AIディープラーニングによる超高精細画像で数ミリ単位の微小ながん病巣を早期発見。"
                    : "Hệ thống PET/CT bán dẫn hàng đầu của Nhật Bản tích hợp trí tuệ nhân tạo học sâu, phát hiện sớm các ổ tổn thương ung thư nhỏ chỉ vài milimet."}
                </p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-black/10">
              <a
                href="#contact"
                className="shushi-btn shushi-btn-primary inline-flex"
              >
                <span>{isJa ? "医療ツアープランのご相談・お申し込み" : "Đăng ký tư vấn Du lịch Y tế Nhật Bản"}</span>
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
