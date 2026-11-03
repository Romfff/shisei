"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Check, ChevronDown, Utensils, Coffee, Users, ShoppingBag, Salad, Sparkles, ShieldCheck } from "lucide-react";

interface ServiceTier {
  id: string;
  number: string;
  name: string;
  priceDisplay: string;
  target: string;
  image: string;
  calories: string;
  description: string;
  dishes: {
    main: string;
    side: string;
    veg: string;
    soup: string;
    dessert: string;
  };
  features: string[];
}

export function FoodCoffee() {
  const serviceCategories = [
    {
      id: "industrial",
      title: "Suất ăn Công nghiệp",
      sub: "30k – 35k – 40k",
      icon: Utensils,
      desc: "Trường học, cơ quan, doanh nghiệp, bệnh viện, khu công nghiệp",
    },
    {
      id: "popular",
      title: "Suất ăn Phổ thông",
      sub: "35k – 40k – 45k – 50k",
      icon: Users,
      desc: "Trường học bán trú, khối văn phòng, cơ quan nhà nước",
    },
    {
      id: "premium",
      title: "Suất ăn Cao cấp",
      sub: "60k – 80k – 100k – 120k",
      icon: Flame,
      desc: "Tiếp khách, hội nghị, chuyên gia nước ngoài, ban lãnh đạo VIP",
    },
    {
      id: "banquet",
      title: "Đặt tiệc Bàn 6 - 8 - 10",
      sub: "Từ 120k / người",
      icon: Users,
      desc: "Tiệc liên hoan công ty, tất niên, lễ kỷ niệm, sự kiện nội bộ",
    },
    {
      id: "takeaway",
      title: "Cơm hộp – Mang đi",
      sub: "Đóng gói tiện lợi",
      icon: ShoppingBag,
      desc: "Học sinh, sinh viên, nhân viên văn phòng, sự kiện, hội thảo ngoài trời",
    },
    {
      id: "coffee",
      title: "Café & Đồ uống",
      sub: "Vận hành trọn gói",
      icon: Coffee,
      desc: "Pha chế, phục vụ và quản lý quầy đồ uống tại trường học, cơ quan, doanh nghiệp",
    },
  ];

  const mealTiers: Record<string, ServiceTier> = {
    industrial: {
      id: "industrial",
      number: "01.",
      name: "Suất ăn Tập thể & Công nghiệp · 定食トレー",
      priceDisplay: "30.000đ – 35.000đ – 40.000đ / suất",
      target: "Trường học, cơ quan, doanh nghiệp, khu công nghiệp, bệnh viện",
      image: "/images/japan-industrial-meal.jpg",
      calories: "750 – 850 kcal",
      description: "Suất cơm khay inox SUS 304 chuẩn định lượng dinh dưỡng Shokuiku Nhật Bản. Thực đơn đổi món mỗi ngày, cơm trắng dẻo thơm và nước canh nóng được phục vụ thêm tự do miễn phí.",
      dishes: {
        main: "Cá thu Nhật nướng muối Saba Shioyaki · Thịt heo sốt gừng Shogayaki · Gà giòn Karaage",
        side: "Trứng cuộn Tamagoyaki · Đậu phụ sốt thịt băm Mabo Tofu",
        veg: "Rau cải thìa luộc sốt mè rang · Bắp cải xào cà rốt nấm",
        soup: "Canh súp thịt nạc bí xanh · Canh chua cá thanh mát",
        dessert: "Dưa hấu tươi mát · Chuối chín tráng miệng",
      },
      features: [
        "Thực đơn xoay vòng 4 tuần không trùng lặp món",
        "100% nguyên liệu tươi nhập trong ngày có tem kiểm định",
        "Khay inox SUS 304 giữ ấm trên 65°C đến bàn ăn",
      ],
    },
    popular: {
      id: "popular",
      number: "02.",
      name: "Suất ăn Phổ thông · 学校・官公庁",
      priceDisplay: "35.000đ – 40.000đ – 45.000đ – 50.000đ / suất",
      target: "Trường học bán trú, cơ quan nhà nước, bệnh viện, khối văn phòng",
      image: "/images/japan-popular-meal.jpg",
      calories: "650 – 750 kcal",
      description: "Thực đơn khẩu phần ăn thanh nhẹ, hạn chế dầu mỡ, tăng cường rau củ quả theo mùa và canh hầm xương tự nhiên, phù hợp với học sinh và nhân viên văn phòng.",
      dishes: {
        main: "Cá basa phi lê sốt Teriyaki · Thịt lợn xào ớt chuông nấm · Đùi gà hấp nấm hương",
        side: "Chả quế sốt cà chua · Đậu hũ non sốt nấm thịt",
        veg: "Cải ngọt luộc sốt dầu hào · Su su xào tỏi giòn ngọt",
        soup: "Canh sườn hầm củ sen bắp ngọt · Canh súp gà ngô non",
        dessert: "Sữa chua tiệt trùng · Cam sành mọng nước",
      },
      features: [
        "Khẩu vị phù hợp từng lứa tuổi học sinh và cán bộ công chức",
        "Định lượng calo và dinh dưỡng theo chuẩn Bộ Y Tế",
        "Lưu mẫu thức ăn 24 giờ trong tủ lạnh độc lập có niêm phong",
      ],
    },
    premium: {
      id: "premium",
      number: "03.",
      name: "Suất ăn Đặc biệt & Sự kiện · 会席・VIP",
      priceDisplay: "60.000đ – 80.000đ – 100.000đ – 120.000đ / suất",
      target: "Hội nghị, tiếp khách, sự kiện, chuyên gia nước ngoài, ban lãnh đạo VIP",
      image: "/images/japan-premium-meal.jpg",
      calories: "600 – 700 kcal",
      description: "Phục vụ theo hình thức đĩa riêng từng món theo chuẩn bàn ăn Nhật Bản hoặc hộp bento sơn mài truyền thống, bài trí trang nhã và nguyên liệu thượng hạng.",
      dishes: {
        main: "Thăn bò Úc nướng sốt tiêu đen · Cá hồi Nauy áp chảo sốt Teriyaki · Heo chiên xù Tonkatsu",
        side: "Salad rong biển bắp cải tím sốt mè rang Kewpie",
        veg: "Măng tây xào nấm đùi gà · Rau củ hầm kiểu Nhật Chikuzenni",
        soup: "Canh tương đậu Miso rong biển Wakame & đậu hũ non",
        dessert: "Nho mẫu đơn · Trái cây nhập khẩu · Chè sen long nhãn",
      },
      features: [
        "Thành phần nguyên liệu cao cấp tươi sống tuyển chọn",
        "Bộ dụng cụ ăn uống sứ và đũa gỗ tiệt trùng sang trọng",
        "Giao tận phòng họp hoặc bài trí bàn ăn VIP riêng biệt",
      ],
    },
    banquet: {
      id: "banquet",
      number: "04.",
      name: "Đặt Tiệc Bàn 6 – 8 – 10 Người · 宴会コース",
      priceDisplay: "Từ 120.000đ / người",
      target: "Liên hoan tổng kết, tiệc tất niên, khai xuân, sự kiện công ty",
      image: "/images/japan-banquet-table.jpg",
      calories: "Theo cơ cấu mâm tiệc",
      description: "Tổ chức mâm cỗ tiệc trọn gói ngay tại hội trường hoặc căng tin cơ quan với đầy đủ bát đĩa sứ, ly cốc và đội ngũ nhân viên phục vụ tận bàn.",
      dishes: {
        main: "Gà ta hấp lá chanh · Tôm sú nướng bơ tỏi · Bò sốt tiêu đen kèm bánh bao nóng",
        side: "Nộm bò bóp thấu củ hũ dừa · Nem hải sản chiên xù",
        veg: "Lơ xanh xào tỏi nấm hải sản tươi",
        soup: "Lẩu thái hải sản chua cay hoặc Lẩu gà nấm thanh ngọt",
        dessert: "Bưởi da xanh · Thạch dừa xiêm tráng miệng",
      },
      features: [
        "Miễn phí bàn ghế, khăn trải bàn, chén đĩa tiệc sang trọng",
        "Nhân viên phục vụ riêng từng mâm tiệc chu đáo",
        "Linh hoạt thực đơn theo ngân sách của doanh nghiệp",
      ],
    },
    takeaway: {
      id: "takeaway",
      number: "05.",
      name: "Cơm hộp – Mang đi · 持ち帰り弁当",
      priceDisplay: "35.000đ – 60.000đ / hộp tiện lợi",
      target: "Học sinh, sinh viên, nhân viên văn phòng, hội thảo, sự kiện dã ngoại ngoài trời",
      image: "/images/japan-takeaway-bento.jpg",
      calories: "650 – 800 kcal",
      description: "Suất đóng hộp bento nhiều ngăn sâu lòng chuẩn Nhật, giữ ấm tốt, kiểm soát chặt chẽ nhiệt độ và thời gian giao nhận để bảo đảm chất lượng bữa ăn tươi ngon nhất.",
      dishes: {
        main: "Thịt heo chiên xù Tonkatsu · Gà sốt chua ngọt · Sườn rim nước dừa",
        side: "Trứng cuộn rong biển Tamagoyaki · Xúc xích nướng",
        veg: "Bắp cải xào nấm · Salad dưa chuột cà chua bi",
        soup: "Canh đựng cốc giữ nhiệt riêng biệt · Cơm dẻo thơm",
        dessert: "Trái cây tươi đóng gói vệ sinh kèm khăn ướt, thìa đũa tiệt trùng",
      },
      features: [
        "Hộp bento nhiều ngăn chịu nhiệt an toàn, chống tràn đổ",
        "Kèm đủ thìa đũa tăm và khăn ướt tiệt trùng",
        "Giao hàng đúng giờ tận tay người nhận",
      ],
    },
    coffee: {
      id: "coffee",
      number: "06.",
      name: "Café & Đồ uống · カフェ・ドリンク",
      priceDisplay: "Mô hình hợp tác kinh doanh trọn gói",
      target: "Khuôn viên trường học, cơ quan, doanh nghiệp, bệnh viện, nhà xưởng",
      image: "/images/shinsei-cups-beverages.png",
      calories: "Menu Thức uống & Điểm tâm",
      description: "Pha chế, phục vụ và quản lý chuyên nghiệp quầy đồ uống tại cơ sở của đối tác. Menu đa dạng từ cà phê pha máy, trà trái cây tươi, sinh tố đá xay đến điểm tâm sáng dinh dưỡng trong bộ cốc nhận diện thương hiệu Shinsei độc quyền.",
      dishes: {
        main: "Cà phê pha máy Espresso · Americano · Cà phê muối · Cà phê sữa Shinsei",
        side: "Trà đào cam sả · Trà vải hoa hồng · Nước ép hoa quả nhiệt đới",
        veg: "Sinh tố dâu tây đá xay phủ kem tươi · Sữa hạt dinh dưỡng tươi",
        soup: "Bánh sừng bò Croissant · Bánh ngọt nướng tươi trong ngày",
        dessert: "Bộ cốc giấy giữ nhiệt & cốc nắp cầu in logo Shinsei cao cấp",
      },
      features: [
        "Bộ cốc giấy giữ nhiệt đỏ vang & cốc trong suốt nắp cầu mang đi tiện lợi",
        "Đồng phục nhân viên polo đỏ rượu vang & tạp dề chuẩn phong cách Nhật",
        "Quản lý quầy bar, máy móc pha chế hiện đại và thanh toán tiện lợi",
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("industrial");
  const current = mealTiers[activeTab] || mealTiers.industrial;

  // Bám sát Hồ sơ năng lực / 11: Giải pháp thực đơn & dinh dưỡng
  const nutritionPillars = [
    {
      code: "01",
      category: "Suất ăn tập thể",
      structure: "Tinh bột + Đạm + Rau + Canh riêng",
      controls: "Kiểm soát định lượng calo, chi phí tối ưu, an toàn vệ sinh và tính đa dạng xoay vòng 4 tuần.",
      target: "Trường học, cơ quan, KCN, bệnh viện",
    },
    {
      code: "02",
      category: "Suất ăn đặc biệt",
      structure: "Món chính & Món phụ theo yêu cầu",
      controls: "Kiểm soát dị ứng thực phẩm, khẩu vị chuyên gia, hình thức trình bày và lịch phục vụ VIP linh hoạt.",
      target: "Hội nghị, tiếp khách, sự kiện",
    },
    {
      code: "03",
      category: "Cơm hộp mang đi",
      structure: "Suất đóng hộp chuyên nghiệp",
      controls: "Kiểm soát bao bì đạt chuẩn ATTP, giữ nhiệt độ trên 65°C và thời gian vận chuyển nhanh chóng.",
      target: "Văn phòng, sự kiện, dã ngoại",
    },
    {
      code: "04",
      category: "Café & Đồ uống",
      structure: "Cà phê, Trà, Nước trái cây, Bánh tươi",
      controls: "Chuẩn hóa công thức pha chế, định lượng nguyên liệu sạch, vệ sinh quầy bar và dịch vụ tận tâm.",
      target: "Khuôn viên cơ quan, trường học, nhà xưởng",
    },
  ];

  return (
    <section id="food-coffee" className="py-24 bg-[#ffffff] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-10 border-b border-black/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
              <span>Hồ sơ năng lực / 06 & 11 · Danh mục dịch vụ</span>
            </div>
            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
              Food & Coffee · Bếp ăn & Quầy Café chuẩn 5S
            </h2>
            <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
              Thiết kế thực đơn luân phiên theo mùa, nhóm tuổi, thời gian phục vụ và ngân sách; luôn có phương án thay thế linh hoạt khi nguyên liệu biến động.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
              Hình thức phục vụ linh hoạt
            </span>
            <span className="text-sm font-semibold text-[#222222]">
              Khay inox · Bát đĩa riêng · Cơm hộp · Tiệc bàn · Quầy Café
            </span>
          </div>
        </div>

        {/* 6 Service Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-4 text-left border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#75182d] text-white border-[#75182d] shadow-lg"
                    : "bg-[#fbf7ef] text-[#222222] border-black/10 hover:border-[#75182d]/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-4 h-4 ${isSelected ? "text-[#f1e2c8]" : "text-[#75182d]"}`} />
                    <span className={`text-[10px] font-mono ${isSelected ? "text-[#f1e2c8]" : "text-[#222222]/50"}`}>
                      Shinsei
                    </span>
                  </div>
                  <h3 className="font-title text-sm sm:text-base font-normal leading-tight mb-1">
                    {cat.title}
                  </h3>
                </div>
                <div className={`text-[11px] font-mono font-semibold mt-2 ${isSelected ? "text-[#f1e2c8]" : "text-[#75182d]"}`}>
                  {cat.sub}
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeFoodTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#f1e2c8]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Meal Showcase Card */}
        <div className="bg-[#fbf7ef] border border-[#75182d]/20 p-8 sm:p-12 mb-16 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Photo on Left */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] overflow-hidden border border-black/15 bg-stone-200 group">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-[#75182d] text-white px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-[#f1e2c8]" />
                  <span>{current.calories}</span>
                </div>

                <div className="mt-3 text-xs text-[#222222]/70 italic">
                  Đối tượng phục vụ: {current.target}
                </div>
              </div>

              {/* Details on Right */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-black/10 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/60">
                      Mức đơn giá áp dụng
                    </span>
                    <div className="font-title text-2xl sm:text-3xl font-light text-[#75182d] mt-0.5">
                      {current.priceDisplay}
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold px-3 py-1 bg-white border border-[#75182d]/20 text-[#75182d]">
                    {current.number} Phân loại
                  </span>
                </div>

                <p className="text-sm text-[#222222] leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Sample Dishes Table */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#75182d] font-semibold">
                      Món chính
                    </span>
                    <span className="sm:col-span-2 font-medium text-[#222222]">
                      {current.dishes.main}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#75182d] font-semibold">
                      Món phụ
                    </span>
                    <span className="sm:col-span-2 text-[#222222]/85">
                      {current.dishes.side}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#75182d] font-semibold">
                      Rau xanh mùa vụ
                    </span>
                    <span className="sm:col-span-2 text-[#222222]/85">
                      {current.dishes.veg}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#75182d] font-semibold">
                      Canh & Tráng miệng
                    </span>
                    <span className="sm:col-span-2 text-[#222222]/85">
                      {current.dishes.soup} · {current.dishes.dessert}
                    </span>
                  </div>
                </div>

                {/* Features Highlights */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#222222]">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="shushi-btn shushi-btn-primary">
                    <span>Đăng ký nếm thử thực đơn này</span>
                  </a>
                  <a href="#calculator" className="shushi-btn shushi-btn-outline">
                    <span>Tính dự toán ngân sách</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bám sát Hồ sơ năng lực / 11: Giải Pháp Thực Đơn & Dinh Dưỡng */}
        <div className="bg-[#fbf7ef] border border-black/10 p-8 sm:p-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-black/10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
                Hồ sơ năng lực / 11
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-[#222222]">
                Giải Pháp Thực Đơn & Dinh Dưỡng Cân Bằng
              </h3>
              <p className="text-xs sm:text-sm text-[#222222]/75 mt-2 leading-relaxed">
                Thiết kế thực đơn luân phiên theo mùa, nhóm tuổi, thời gian phục vụ và ngân sách của từng đơn vị; luôn có phương án nguyên liệu thay thế đảm bảo dinh dưỡng và ổn định chi phí.
              </p>
            </div>
            <div className="text-xs font-mono text-[#75182d] bg-white px-4 py-2 rounded-full border border-[#75182d]/20 shrink-0">
              Kiểm soát định lượng & ATTP nghiêm ngặt
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {nutritionPillars.map((item, idx) => (
              <div key={idx} className="bg-white p-6 border border-black/10 hover:border-[#75182d] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3">
                    <span className="font-mono text-sm font-bold text-[#75182d]">{item.code}</span>
                    <span className="text-[10px] font-mono text-[#222222]/60 uppercase">Phân loại</span>
                  </div>
                  <h4 className="font-title text-lg font-normal text-[#222222] mb-1">
                    {item.category}
                  </h4>
                  <div className="text-xs text-[#75182d] font-medium mb-3">
                    {item.structure}
                  </div>
                  <p className="text-xs text-[#222222]/75 leading-relaxed">
                    {item.controls}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/5 text-[11px] text-[#222222]/60 italic">
                  Đối tượng: {item.target}
                </div>
              </div>
            ))}
          </div>

          {/* Bao bì & Dịch vụ Café điểm tâm bổ trợ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 border border-black/10">
            <div className="lg:col-span-5">
              <div className="aspect-[16/10] overflow-hidden bg-stone-100 border border-black/10">
                <img
                  src="/images/shinsei-packaging.png"
                  alt="Bao bì túi giấy và hộp bánh quà tặng Shinsei"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold block">
                Bao bì quầy café & quà tặng Shinsei
              </span>
              <h4 className="font-title text-xl sm:text-2xl font-light text-[#222222]">
                Quy Chuẩn Bao Bì Túi Giấy & Hộp Bánh Quầy Café
              </h4>
              <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed font-normal">
                Bên cạnh các suất cơm khay inox và suất ăn tập thể, quầy Café Shinsei cung cấp các sản phẩm bánh ngọt điểm tâm nướng tươi (Croissant, Tart trái cây) được đóng gói trong hộp có nắp mica trong suốt và túi giấy quai xách đỏ rượu vang lượn sóng be kem sang trọng, thân thiện môi trường.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#75182d]">
                <span>✓ Túi giấy quai xách thương hiệu</span>
                <span>✓ Hộp quai xách tiện dụng</span>
                <span>✓ Thân thiện môi trường & an toàn thực phẩm</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
