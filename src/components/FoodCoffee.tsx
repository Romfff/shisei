"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Check, ChevronDown, Utensils, Coffee, Users, ShoppingBag } from "lucide-react";

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
      desc: "Phục vụ nhà máy, khu công nghiệp, dây chuyền may mặc, cơ khí, linh kiện điện tử",
    },
    {
      id: "popular",
      title: "Suất ăn Phổ thông",
      sub: "35k – 40k – 45k – 50k",
      icon: Users,
      desc: "Trường học, cơ quan nhà nước, bệnh viện, khối văn phòng liên xưởng",
    },
    {
      id: "premium",
      title: "Suất ăn Cao cấp",
      sub: "60k – 80k – 100k – 120k",
      icon: Flame,
      desc: "Tiếp khách, hội nghị, chuyên gia nước ngoài, ban lãnh đạo, khách VIP",
    },
    {
      id: "banquet",
      title: "Đặt tiệc Bàn 6 - 8 - 10",
      sub: "Từ 120k / người",
      icon: Users,
      desc: "Tiệc liên hoan công ty, tất niên, lễ kỷ niệm, sự kiện nội bộ nhà xưởng",
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
      title: "Quầy Café & Căng tin",
      sub: "Vận hành trọn gói",
      icon: Coffee,
      desc: "Thiết kế, đầu tư và vận hành quầy thức uống, cà phê sạch & điểm tâm tại chỗ",
    },
  ];

  const mealTiers: Record<string, ServiceTier> = {
    industrial: {
      id: "industrial",
      number: "01.",
      name: "Suất ăn Công nghiệp · 定食トレー",
      priceDisplay: "30.000đ – 35.000đ – 40.000đ / suất",
      target: "Khu công nghiệp, nhà xưởng, công nhân ca ngày & ca đêm",
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
      name: "Suất ăn Cao cấp · 会席・VIP",
      priceDisplay: "60.000đ – 80.000đ – 100.000đ – 120.000đ / suất",
      target: "Chuyên gia Nhật Bản, ban lãnh đạo, khách tiếp đón hội nghị",
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
      target: "Sự kiện ngoài trời, hội thảo, học sinh dã ngoại, nhân viên văn phòng",
      image: "/images/japan-takeaway-bento.jpg",
      calories: "650 – 800 kcal",
      description: "Đóng gói trong hộp bento nhiều ngăn sâu lòng chống đổ tràn kiểu Nhật, giữ ấm lâu, trang trí bắt mắt và dễ dàng vận chuyển sử dụng ngay.",
      dishes: {
        main: "Thịt heo chiên xù Tonkatsu · Gà sốt chua ngọt · Sườn rim nước dừa",
        side: "Trứng cuộn rong biển Tamagoyaki · Xúc xích nướng",
        veg: "Bắp cải xào nấm · Salad dưa chuột cà chua bi",
        soup: "Canh đựng cốc giữ nhiệt riêng biệt",
        dessert: "Trái cây tươi đóng gói vệ sinh",
      },
      features: [
        "Hộp đựng chịu nhiệt an toàn thực phẩm, thân thiện môi trường",
        "Kèm đủ thìa đũa tăm và khăn ướt tiệt trùng",
        "Giao hàng đúng giờ tận tay người nhận",
      ],
    },
    coffee: {
      id: "coffee",
      number: "06.",
      name: "Vận hành Quầy Café & Căng tin Tổng hợp",
      priceDisplay: "Mô hình hợp tác kinh doanh trọn gói",
      target: "Doanh nghiệp, tòa nhà văn phòng, trường học, bệnh viện",
      image: "/images/japan-cafe-counter.jpg",
      calories: "Đồ uống & Điểm tâm sáng",
      description: "Shinsei đầu tư máy móc, quầy bar và nhân sự vận hành quầy cà phê nguyên chất, trà hoa quả và bữa sáng dinh dưỡng ngay tại cơ sở của đối tác.",
      dishes: {
        main: "Cà phê pha máy Espresso, Americano, Cà phê muối, Bạc xỉu",
        side: "Trà đào cam sả, Trà vải hoa hồng, Nước ép hoa quả tươi",
        veg: "Bánh mì kẹp thịt tươi nóng giòn sáng sớm",
        soup: "Bánh ngọt điểm tâm kiểu Nhật",
        dessert: "Sữa hạt dinh dưỡng tươi trong ngày",
      },
      features: [
        "Đồng phục quầy café Shinsei màu đỏ vang & be kem thanh lịch",
        "Không gian thư giãn sạch sẽ, nâng cao phúc lợi nhân viên",
        "Hệ thống thanh toán thẻ thông minh không dùng tiền mặt",
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("industrial");
  const current = mealTiers[activeTab] || mealTiers.industrial;

  return (
    <section id="food-coffee" className="py-24 bg-[#ffffff] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-10 border-b border-black/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
              <span>Hệ sinh thái ẩm thực Shinsei</span>
            </div>
            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
              Food & Coffee · Đa dạng khẩu phần, chuẩn vị Nhật
            </h2>
            <p className="text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
              Từ bữa ăn công nhân ấm nóng, suất ăn học đường dinh dưỡng đến bàn tiệc trang trọng và quầy cà phê hiện đại.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold block mb-1">
              Phục vụ linh hoạt
            </span>
            <span className="text-sm font-semibold text-[#222222]">
              Khay ăn · Bát đĩa riêng · Cơm hộp · Tiệc bàn
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

      </div>
    </section>
  );
}
