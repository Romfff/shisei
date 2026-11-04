"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake, Eye, Target, Award, CheckCircle2, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutShinsei() {
  const { isJa } = useLanguage();

  const coreValues = isJa
    ? [
        { title: "安全", desc: "100%の原材料検査、1方向動線調理、24時間の検食保管を徹底。" },
        { title: "品質", desc: "作りたての美味しさ、栄養バランス、美しい盛り付けを維持。" },
        { title: "責任", desc: "時間厳守の配膳、産地の透明性、迅速なフィードバック対応。" },
        { title: "共創", desc: "パートナー企業様の声に真摯に耳を傾け、最適な給食プランを柔軟に設計。" },
        { title: "改善", desc: "日本式5S基準を継続的に実践し、スタッフ教育と業務改善を日々推進。" },
      ]
    : [
        { title: "An Toàn", desc: "Kiểm soát nghiêm ngặt 100% nguyên liệu, chế biến một chiều và lưu mẫu thức ăn." },
        { title: "Chất Lượng", desc: "Bảo đảm hương vị tươi ngon, khẩu phần dinh dưỡng cân đối và trình bày chỉn chu." },
        { title: "Trách Nhiệm", desc: "Đúng giờ trong từng ca phục vụ, minh bạch nguồn gốc và phản hồi nhanh chóng." },
        { title: "Đồng Hành", desc: "Lắng nghe, thấu hiểu và thiết kế giải pháp ẩm thực linh hoạt theo từng đối tác." },
        { title: "Cải Tiến", desc: "Không ngừng hoàn thiện quy trình, đào tạo nhân sự và áp dụng chuẩn 5S Nhật Bản." },
      ];

  const servicePrinciples = isJa
    ? [
        "施設を利用される皆様の実態とご要望を最優先に考えたサービス提供。",
        "分量・カロリー・衛生基準の透明性と、迅速な改善対応体制。",
        "法令遵守および各施設の運営ルール・衛生基準の厳格な遵守。",
      ]
    : [
        "Lấy nhu cầu thực tế của đơn vị sử dụng dịch vụ làm trung tâm phục vụ.",
        "Minh bạch định lượng, tiêu chuẩn chất lượng và phương án xử lý phản hồi kịp thời.",
        "Tuân thủ nghiêm ngặt quy định pháp luật và yêu cầu đặc thù của từng địa điểm vận hành.",
      ];

  return (
    <section id="about" className="py-24 bg-[#ffffff] border-b border-black/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
            <span>{isJa ? "会社概要 · 代表メッセージ" : "Về chúng tôi"}</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
            {isJa ? "株式会社 SHINSEI" : "Công ty Cổ phần Thương Mại Shinsei"}
          </h2>
          <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
            {isJa
              ? "日本式5S衛生管理基準に基づく給食・カフェ事業 — 毎日の食に安心を、すべての体験に真心を。"
              : "Dịch vụ Bếp ăn & Café theo tiêu chuẩn 5S Nhật Bản — An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm."}
          </p>
        </div>

        {/* Message from Representative & Company Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left: Thông điệp người đại diện - Đỗ Thị Trang (7 cols) with prominent circular portrait */}
          <div className="lg:col-span-7 bg-[#fbf7ef] p-8 sm:p-10 border border-[#75182d]/15 flex flex-col justify-between shadow-sm relative">
            <div>
              
              {/* Header block with large circular portrait */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 mb-6 border-b border-black/10">
                <div className="relative shrink-0 mx-auto sm:mx-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-[#75182d] p-1.5 bg-white shadow-lg">
                    <img
                      src="/images/shinsei-trang-zoomed.jpg"
                      alt="Đỗ Thị Trang - Chủ tịch Hội đồng Quản trị SHINSEI"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-1">
                    {isJa ? "代表挨拶" : "Thông điệp người đại diện"}
                  </span>
                  <h3 className="font-title text-2xl sm:text-3xl font-normal text-[#222222] leading-tight">
                    Đỗ Thị Trang
                  </h3>
                  <p className="text-xs text-[#222222]/80 font-mono mt-1 font-semibold">
                    {isJa ? "代表取締役社長 · 法定代表者" : "Chủ tịch Hội đồng Quản trị · Người đại diện pháp luật"}
                  </p>
                  <p className="text-[11px] text-[#75182d] font-medium mt-0.5">
                    {isJa ? "株式会社 SHINSEI" : "CÔNG TY CỔ PHẦN THƯƠNG MẠI SHINSEI"}
                  </p>
                </div>
              </div>

              {/* Quote & Philosophy */}
              <blockquote className="font-title italic text-lg sm:text-xl font-light text-[#222222] mb-4 leading-snug border-l-2 border-[#75182d] pl-4">
                {isJa
                  ? "「食事の価値は、食材と美味しさだけにとどまりません。安全性、時間通りの配膳、そして調理・提供の全工程に注がれる誠実な責任感にこそ宿ると確信しています。」"
                  : "“Chúng tôi tin rằng chất lượng của một bữa ăn không chỉ nằm ở nguyên liệu và hương vị, mà còn ở tính an toàn, sự đúng giờ và tinh thần trách nhiệm trong từng công đoạn phục vụ.”"}
              </blockquote>
              
              <div className="space-y-3 text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal">
                <p>
                  {isJa
                    ? "SHINSEIは、明確な作業動線、清潔に整頓された作業環境、各施設様の個別ニーズへの柔軟な対応力を強みとしています。現場での緊密な連携と継続的なカイゼン活動を重視しています。"
                    : "SHINSEI hướng đến xây dựng mô hình dịch vụ ăn uống có quy trình rõ ràng, môi trường làm việc ngăn nắp và khả năng thích ứng với nhu cầu của từng đơn vị. Chúng tôi coi trọng sự minh bạch trong phối hợp, chất lượng phục vụ và cải tiến liên tục."}
                </p>
                <p>
                  {isJa
                    ? "日本で培った5S管理精神を基軸に、ベトナムの学校、官公庁、製造工場、一般企業の皆様にとって最も信頼できる長期的なパートナーを目指します。"
                    : "Từ định hướng quản lý theo tinh thần 5S Nhật Bản, SHINSEI mong muốn trở thành đối tác lâu dài của Quý Đối Tác trong trường học, cơ quan và doanh nghiệp tại Việt Nam."}
                </p>
                <div className="p-3.5 bg-[#f1e2c8]/50 border border-[#75182d]/20 text-[#75182d] font-semibold text-xs sm:text-sm">
                  {isJa
                    ? "「安全で美味しい毎日の食事が、健康と学び、そして高い生産性を支える基盤となります！」"
                    : "“Mỗi bữa ăn an toàn và ngon miệng là nền tảng cho sức khoẻ, học tập và làm việc hiệu quả!”"}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Tầm nhìn & Sứ mệnh (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Tầm nhìn Card */}
            <div className="bg-[#75182d] text-white p-8 border border-black/15 shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#f1e2c8]">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#f1e2c8] font-bold">
                  {isJa ? "ビジョン" : "Tầm nhìn"}
                </span>
              </div>
              <h4 className="font-title text-xl font-normal text-white mb-2">
                {isJa ? "安定した品質と透明性の高い企業ガバナンス" : "Chất lượng ổn định & Quản trị minh bạch"}
              </h4>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                {isJa
                  ? "すべてのお客様に対し、ブレのない高品質な食事と透明性の高い運営を提供し、持続的に成長できるフードサービス企業を目指します。"
                  : "Phát triển thành đơn vị cung cấp giải pháp dịch vụ ăn uống có chất lượng ổn định, quản trị minh bạch và khả năng mở rộng linh hoạt theo nhu cầu của từng khách hàng."}
              </p>
            </div>

            {/* Sứ mệnh Card */}
            <div className="bg-[#f1e2c8]/40 p-8 border border-[#75182d]/20 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#75182d] flex items-center justify-center text-white">
                  <Target className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold">
                  {isJa ? "ミッション" : "Sứ mệnh"}
                </span>
              </div>
              <h4 className="font-title text-xl font-normal text-[#222222] mb-2">
                {isJa ? "安全な食事と、真心のこもったサービス" : "Bữa ăn an toàn, dịch vụ tận tâm"}
              </h4>
              <p className="text-xs sm:text-sm text-[#222222]/85 leading-relaxed font-normal">
                {isJa
                  ? "衛生的で栄養バランスに優れた食事と、真心を込めた接客を通じて、健やかで活力ある学習・労働環境の創出に貢献します。"
                  : "Cung cấp bữa ăn phù hợp, an toàn và dịch vụ tận tâm; góp phần tạo dựng môi trường học tập, làm việc thuận tiện, văn minh và lành mạnh."}
              </p>
            </div>

          </div>

        </div>

        {/* 3 Nguyên Tắc Phục Vụ Banner */}
        <div className="bg-[#fbf7ef] border border-black/10 p-6 sm:p-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold block mb-1">
                Phương châm hành động
              </span>
              <h4 className="font-title text-xl sm:text-2xl font-light text-[#222222]">
                3 Nguyên Tắc Phục Vụ Cốt Lõi
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              {servicePrinciples.map((principle, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#222222]/85 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Giá Trị Cốt Lõi */}
        <div className="border-t border-black/10 pt-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
              Giá trị cốt lõi
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
              5 Cam kết chuẩn mực của Shinsei
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#fbf7ef] p-6 border border-black/10 hover:border-[#75182d] transition-all text-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#75182d]/20 flex items-center justify-center text-[#75182d] font-bold text-sm mx-auto mb-4 group-hover:bg-[#75182d] group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="font-title text-lg font-normal text-[#222222] mb-1.5">
                  {val.title}
                </h4>
                <p className="text-xs text-[#222222]/75 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
