"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Eye, Target } from "lucide-react";

export function VeChungToiContent() {
  const { isJa } = useLanguage();

  const coreValues = isJa
    ? [
        { title: "安全", desc: "原材料100%の厳格管理、一方通行調理動線、24時間検食保管による食の安全徹底。" },
        { title: "品質", desc: "常に出来立ての美味しさ、栄養バランスのとれた献立、丁寧で美しい盛り付けの提供。" },
        { title: "責任", desc: "各食事時間への完全な時間厳守配送、明確な産地証明、迅速なフィードバック対応。" },
        { title: "協働", desc: "パートナー企業のニーズとご予算に寄り添い、柔軟で最適な給食ソリューションを共創。" },
        { title: "改善", desc: "カイゼン（Kaizen）精神に基づき、日本式5S管理基準の継続的な改善と人材育成を推進。" },
      ]
    : [
        { title: "An Toàn", desc: "Kiểm soát nghiêm ngặt 100% nguyên liệu đầu vào, quy trình chế biến một chiều và lưu mẫu thức ăn 24 giờ." },
        { title: "Chất Lượng", desc: "Bảo đảm hương vị tươi ngon, khẩu phần dinh dưỡng cân đối và hình thức trình bày chỉn chu, bắt mắt." },
        { title: "Trách Nhiệm", desc: "Đúng giờ tuyệt đối trong từng ca phục vụ, minh bạch nguồn gốc và phản hồi giải quyết thắc mắc nhanh chóng." },
        { title: "Đồng Hành", desc: "Lắng nghe, thấu hiểu và thiết kế giải pháp ẩm thực linh hoạt theo ngân sách của từng đối tác doanh nghiệp." },
        { title: "Cải Tiến", desc: "Không ngừng hoàn thiện quy trình theo tinh thần Kaizen, đào tạo nhân sự và áp dụng triệt để chuẩn 5S Nhật Bản." },
      ];

  const steps5S = isJa
    ? [
        { code: "1S", name: "整理 (Seiri)", desc: "要るものと要らないものを明確に区分し、不要なものを厨房エリアから即座に処分。" },
        { code: "2S", name: "整頓 (Seiton)", desc: "乾物庫、冷蔵庫、色分け包丁・まな板の定位置・定品管理で交差汚染を防止。" },
        { code: "3S", name: "清掃 (Seiso)", desc: "調理台・床・機器を毎シフト前後に徹底清掃・消毒し、衛生的な環境を保持。" },
        { code: "4S", name: "清潔 (Seiketsu)", desc: "3S状態を維持・標準化し、厨房内チェックリストによる日常点検を義務化。" },
        { code: "5S", name: "躾 (Shitsuke)", desc: "衛生教育の継続実施、挨拶・身だしなみ・プロとしての自律的行動規範の徹底。" },
      ]
    : [
        { code: "1S", name: "Sàng Lọc", desc: "Phân loại rõ ràng nguyên liệu, dụng cụ cần thiết và loại bỏ ngay lập tức những thứ không phù hợp khỏi khu vực bếp." },
        { code: "2S", name: "Sắp Xếp", desc: "Quy định vị trí cố định, dán nhãn nhận diện cho từng khu vực: kho khô, kho lạnh, dao thớt theo màu sắc chống nhiễm chéo." },
        { code: "3S", name: "Sạch Sẽ", desc: "Vệ sinh, khử trùng toàn bộ bề mặt bàn chế biến, sàn nhà và thiết bị bếp liên tục trước, trong và sau mỗi ca nấu." },
        { code: "4S", name: "Săn Sóc", desc: "Duy trì và chuẩn hóa 3S đầu tiên thành thói quen kỷ luật hằng ngày, niêm yết bảng kiểm tra trực quan tại bếp." },
        { code: "5S", name: "Sẵn Sàng", desc: "Đào tạo thường xuyên, rèn luyện tinh thần tự giác và tác phong phục vụ chuyên nghiệp của toàn thể cán bộ nhân viên." },
      ];

  const implementationSteps = isJa
    ? [
        { num: "01", title: "現地調査・ヒアリング", desc: "ご要望の確認、厨房施設、稼働キャパシティ、工場・オフィスのシフト勤務形態を調査。" },
        { num: "02", title: "ご提案・ご試食会", desc: "ご予算に応じた最適献立プランを設計し、貴社責任者様向けの試食会を現地で開催。" },
        { num: "03", title: "契約締結 & SLA合意", desc: "品質保証基準、グラム数、納品時刻、検食保管体制に関するSLAを明確に締結。" },
        { num: "04", title: "設備準備 & 稼働開始", desc: "5S基準ユニフォーム着用の専任スタッフ配置、一方通行動線調理による安全稼働。" },
        { num: "05", title: "定期評価 & カイゼン", desc: "毎週の満足度アンケート実施、検食結果の透明な報告、継続的な献立改善を推進。" },
      ]
    : [
        { num: "01", title: "Khảo Sát Thực Tế", desc: "Tiếp nhận nhu cầu, khảo sát mặt bằng bếp, công suất và đặc thù ca kíp của nhà máy, văn phòng." },
        { num: "02", title: "Tư Vấn & Nếm Thử", desc: "Thiết kế phương án thực đơn tối ưu chi phí và tổ chức buổi nếm thử mẫu cơm trực tiếp cho cán bộ đơn vị." },
        { num: "03", title: "Ký Kết Hợp Đồng & SLA", desc: "Xác lập rõ ràng cam kết chất lượng, định lượng khẩu phần, thời gian giao hàng và cơ chế kiểm tra mẫu." },
        { num: "04", title: "Setup & Triển Khai", desc: "Chuẩn bị nhân sự đồng phục chuẩn 5S, thiết bị bếp và quy trình vận hành một chiều an toàn tuyệt đối." },
        { num: "05", title: "Đánh Giá & Cải Tiến", desc: "Khảo sát ý kiến người dùng hằng tuần, báo cáo minh bạch kết quả kiểm thực và cải tiến thực đơn liên tục." },
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-pulse"></span>
                <span>{isJa ? "会社情報 · SHINSEI 概要" : "Về Chúng Tôi · Thông Tin Doanh Nghiệp"}</span>
              </div>

              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
                {isJa ? "株式会社SHINSEI商事" : "Công ty Cổ phần Thương Mại Shinsei"}
              </h1>

              <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed">
                {isJa
                  ? "日本式5S管理基準の給食・社員食堂 & カフェ運営 — 毎食に安心を、すべてのご縁に真心を。"
                  : "Dịch vụ Bếp ăn & Café theo tiêu chuẩn 5S Nhật Bản — An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm."}
              </p>
            </div>
          </div>
        </section>

        {/* Thông điệp Chủ Tịch & Tầm Nhìn */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left: Thông điệp người đại diện - Đỗ Thị Trang (7 cols) */}
              <div className="lg:col-span-7 bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/20 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 mb-6 border-b border-black/10">
                    <div className="relative shrink-0 mx-auto sm:mx-0">
                      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-[3px] border-[#75182d] p-1.5 bg-white shadow-lg">
                        <img
                          src="/images/shinsei-trang-zoomed.jpg"
                          alt={isJa ? "取締役会長 ド・ティ・チャン" : "Đỗ Thị Trang - Chủ tịch Hội đồng Quản trị SHINSEI"}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>

                    <div className="text-center sm:text-left">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-1">
                        {isJa ? "代表メッセージ" : "Thông điệp người đại diện"}
                      </span>
                      <h3 className="font-title text-2xl sm:text-3xl font-normal text-[#222222] leading-tight">
                        {isJa ? "ド・ティ・チャン" : "Đỗ Thị Trang"}
                      </h3>
                      <p className="text-xs text-[#222222]/80 font-mono mt-1 font-semibold">
                        {isJa ? "代表取締役会長 · 法定代表者" : "Chủ tịch Hội đồng Quản trị · Người đại diện pháp luật"}
                      </p>
                      <p className="text-[11px] text-[#75182d] font-medium mt-0.5">
                        {isJa ? "株式会社SHINSEI商事" : "CÔNG TY CỔ PHẦN THƯƠNG MẠI SHINSEI"}
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-title italic text-lg sm:text-xl font-light text-[#222222] mb-4 leading-snug border-l-2 border-[#75182d] pl-4">
                    {isJa
                      ? "「食事の価値は、食材の鮮度や美味しさだけでなく、徹底した安全性、時間厳守の配送、そしてすべての工程における誠実な責任感に宿るものと確信しております。」"
                      : "“Chúng tôi tin rằng chất lượng của một bữa ăn không chỉ nằm ở nguyên liệu và hương vị, mà còn ở tính an toàn, sự đúng giờ và tinh thần trách nhiệm trong từng công đoạn phục vụ.”"}
                  </blockquote>
                  
                  <div className="space-y-3 text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal">
                    <p>
                      {isJa
                        ? "SHINSEIは、明確な作業手順、清潔で整然とした労働環境、そしてパートナー企業様ごとのニーズに応える高い適応力を兼ね備えた給食サービスの確立を目指しています。連携における透明性、真摯なサービス品質、そして飽くなき改善活動を最も大切にしています。"
                        : "SHINSEI hướng đến xây dựng mô hình dịch vụ ăn uống có quy trình rõ ràng, môi trường làm việc ngăn nắp và khả năng thích ứng với nhu cầu của từng đơn vị. Chúng tôi coi trọng sự minh bạch trong phối hợp, chất lượng phục vụ và cải tiến liên tục."}
                    </p>
                    <p>
                      {isJa
                        ? "日本式5S管理基準の精神に基づき、ベトナム国内の学校、公的機関、日系および外資系企業の皆様にとって、最も信頼できる長期的なパートナーであり続けることをお約束いたします。"
                        : "Từ định hướng quản lý theo tinh thần 5S Nhật Bản, SHINSEI mong muốn trở thành đối tác lâu dài của Quý Đối Tác trong trường học, cơ quan và doanh nghiệp tại Việt Nam."}
                    </p>
                    <div className="p-4 bg-[#f1e2c8]/60 border border-[#75182d]/20 text-[#75182d] font-semibold text-xs sm:text-sm">
                      {isJa
                        ? "「安全で美味しい毎日の食事が、健康と学び、そして高い仕事の成果を支える揺るぎない基盤です。」"
                        : "“Mỗi bữa ăn an toàn và ngon miệng là nền tảng cho sức khoẻ, học tập và làm việc hiệu quả!”"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Tầm nhìn & Sứ mệnh (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="bg-[#75182d] text-[#f1e2c8] p-8 sm:p-10 border border-black/10 shadow-sm flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-[#f1e2c8]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#f1e2c8]/90 font-bold">
                        {isJa ? "企業ビジョン" : "Tầm Nhìn"}
                      </span>
                    </div>
                    <h4 className="font-title text-2xl font-light text-white mb-3">
                      {isJa ? "安定した品質と透明なガバナンス" : "Chất lượng ổn định & Quản trị minh bạch"}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#f1e2c8]/85 leading-relaxed font-normal">
                      {isJa
                        ? "品質の安定性、経営の透明性、そしてお客様の成長に合わせた柔軟な拡張性を備えた給食ソリューションのトップブランドへ。"
                        : "Phát triển thành đơn vị cung cấp giải pháp dịch vụ ăn uống có chất lượng ổn định, quản trị minh bạch và khả năng mở rộng linh hoạt theo nhu cầu của từng khách hàng."}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/15 text-[11px] font-mono text-[#f1e2c8]/80">
                    {isJa ? "持続的発展ビジョン 2026 - 2030" : "Mục tiêu định hướng bền vững 2026 - 2030"}
                  </div>
                </div>

                <div className="bg-[#fbf7ef] text-[#222222] p-8 sm:p-10 border border-[#75182d]/20 shadow-sm flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#75182d]/10 flex items-center justify-center">
                        <Target className="w-5 h-5 text-[#75182d]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold">
                        {isJa ? "企業ミッション" : "Sứ Mệnh"}
                      </span>
                    </div>
                    <h4 className="font-title text-2xl font-light text-[#222222] mb-3">
                      {isJa ? "安心な食事と真心のサービス" : "Bữa ăn an toàn, dịch vụ tận tâm"}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed font-normal">
                      {isJa
                        ? "栄養バランスの取れた安心な食事と真心のこもったサービスを通じ、健康的で働きやすい職場・学習環境づくりに貢献します。"
                        : "Cung cấp bữa ăn phù hợp, an toàn và dịch vụ tận tâm; góp phần tạo dựng môi trường học tập, làm việc thuận tiện, văn minh và lành mạnh."}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-black/10 text-[11px] font-mono text-[#75182d] font-semibold">
                    {isJa ? "働くすべての人々の健康を支える" : "Đồng hành cùng sức khỏe người lao động"}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5 Giá Trị Cốt Lõi */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "コアバリュー" : "Giá Trị Cốt Lõi"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "SHINSEIを支える5大基盤" : "5 Trụ Cột Xuyên Suốt Của Shinsei"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-mono text-2xl font-light text-[#75182d] block mb-2">
                      0{idx + 1}
                    </span>
                    <h4 className="font-title text-xl font-normal text-[#222222] mb-3 group-hover:text-[#75182d] transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-black/5 text-[10.5px] font-mono text-[#75182d]">
                    {isJa ? "SHINSEI 5S品質基準" : "Chuẩn Shinsei 5S"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiêu chuẩn 5S Nhật Bản */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "日本式5S管理基準" : "Phương Pháp Quản Lý 5S Nhật Bản"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "全工程における規律と厳格な標準化" : "Kỷ Luật & Quy Chuẩn Trong Từng Khâu Vận Hành"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
              {steps5S.map((s, idx) => (
                <div key={idx} className="bg-[#fbf7ef] p-6 border border-black/10 hover:border-[#75182d] transition-all shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3">
                    <span className="font-mono text-xl font-bold text-[#75182d]">{s.code}</span>
                  </div>
                  <h4 className="font-title text-lg font-normal text-[#222222] mb-2">{s.name}</h4>
                  <p className="text-xs text-[#222222]/75 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Quy chuẩn đồng phục & Đội xe bảo ôn */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/20">
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-black/10 shadow-sm overflow-hidden flex flex-col">
                  <div className="h-64 bg-[#fbf7ef] flex items-center justify-center p-2">
                    <img
                      src="/images/shinsei-uniform-chef-full.jpg"
                      alt={isJa ? "SHINSEI 厨房ユニフォーム" : "Đồng phục Bếp 5S Shinsei"}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 text-center text-xs font-mono font-bold text-[#75182d] border-t border-black/5 bg-white">
                    {isJa ? "厨房・調理 5Sユニフォーム" : "Đồng phục Bếp & Chế biến 5S"}
                  </div>
                </div>

                <div className="bg-white border border-black/10 shadow-sm overflow-hidden flex flex-col">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/images/shinsei-staff-polo.jpg"
                      alt={isJa ? "ホール・カフェスタッフ ユニフォーム" : "Đồng phục Phục vụ & Café Shinsei"}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-3 text-center text-xs font-mono font-bold text-[#75182d] border-t border-black/5 bg-white">
                    {isJa ? "接客・カフェカウンター ユニフォーム" : "Đồng phục Phục vụ & Quầy Café"}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold block">
                  {isJa ? "5S身だしなみ & ロジスティクス" : "Nhận diện & Tác phong 5S"}
                </span>
                <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                  {isJa ? "プロの身だしなみと自社配送便" : "Đồng Phục & Vận Tải Chuyên Nghiệp"}
                </h3>
                <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
                  {isJa
                    ? "ワインレッドの縁取りにSHINSEI刺繍ロゴを配した厨房着、プリーツコック帽、専用エプロンを完備。接客スタッフはブランドポロシャツで丁寧に応対。自社保温配送車両が65℃以上の適温を保ち、温かいまま現場へお届けします。"
                    : "Trang phục bếp khép kín gồm áo viền đỏ thêu logo Shinsei, mũ xếp ly và tạp dề chuyên dụng. Đội ngũ phục vụ chỉn chu với áo polo đỏ đô và tạp dề lịch sự. Đội xe bán tải giao hàng thùng bảo ôn giữ nhiệt trên 65°C, bảo đảm suất ăn nóng sốt khi đến tay đối tác."}
                </p>
                <div className="pt-2">
                  <img
                    src="/images/shinsei-truck.jpg"
                    alt={isJa ? "SHINSEI 保温配送トラック" : "Xe bán tải giao hàng bảo ôn Shinsei"}
                    className="w-full h-40 object-cover border border-black/10 shadow-sm rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Bước Triển Khai Dịch Vụ */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "サービス導入の流れ" : "Quy Trình Phối Hợp"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "お客様との5ステップ導入プロセス" : "5 Bước Triển Khai Dịch Vụ Với Khách Hàng"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {implementationSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 border border-black/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-light text-[#75182d] block mb-3">
                      {step.num}
                    </span>
                    <h4 className="font-title text-lg font-medium text-[#222222] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#222222]/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-black/5 text-[10px] font-mono text-[#75182d] font-semibold">
                    {isJa ? "明確なSLA品質保証" : "Cam kết SLA rõ ràng"}
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
