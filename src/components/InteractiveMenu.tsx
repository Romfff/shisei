"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Flame, ChevronDown, Check } from "lucide-react";

interface MealCategory {
  id: string;
  number: string;
  name: string;
  kanji: string;
  price: string;
  target: string;
  calories: string;
  image: string;
  description: string;
  sampleDishes: {
    main: string;
    side: string;
    veg: string;
    soup: string;
    dessert: string;
  };
  highlights: string[];
}

export function InteractiveMenu() {
  const categories: MealCategory[] = [
    {
      id: "factory-standard",
      number: "1.",
      name: "Suất ăn Tiêu chuẩn Nhà máy",
      kanji: "標準給食",
      price: "28.000đ – 35.000đ",
      target: "Dành cho nhà máy may mặc, lắp ráp linh kiện, điện tử",
      calories: "750 – 850 kcal",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
      description: "Thực đơn cân bằng năng lượng giúp công nhân duy trì sự tỉnh táo suốt ca làm việc dài. Cơm trắng và nước canh nóng được phục vụ thêm không giới hạn.",
      sampleDishes: {
        main: "Thịt ba chỉ kho củ cải kiểu Nhật / Gà phi lê áp chảo xốt mè rang",
        side: "Đậu phụ dồn thịt sốt cà chua tươi / Trứng cuộn rong biển",
        veg: "Bắp cải xào nấm đùi gà / Cải thìa luộc sốt dầu hào",
        soup: "Canh bí đỏ hầm thịt nạc / Canh chua cá lăng thì là",
        dessert: "Dưa hấu tươi mát / Chuối Nam Mỹ tráng miệng",
      },
      highlights: [
        "2 lựa chọn món mặn mỗi ngày",
        "Gia vị nấu thuần tự nhiên, không mì chính hóa học",
        "Khay cơm SUS 304 sâu lòng chống tràn canh",
      ],
    },
    {
      id: "factory-heavy",
      number: "2.",
      name: "Suất ăn Tăng cường Năng lượng",
      kanji: "高カロリー",
      price: "38.000đ – 45.000đ",
      target: "Dành cho xưởng cơ khí, đóng tàu, kho vận logistics, đúc thép",
      calories: "950 – 1.150 kcal",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
      description: "Tăng cường tỷ lệ protein động vật và các khoáng chất thiết yếu bù đắp sự mất nước và sức lao động tiêu hao của các ngành công nghiệp nặng.",
      sampleDishes: {
        main: "Sườn heo nướng mật ong sả / Bò xào ớt chuông cần tây",
        side: "Chả cá thác lác rim nước dừa tươi",
        veg: "Rau muống xào tỏi giòn / Đậu cô-ve xào thịt băm",
        soup: "Canh sườn hầm củ sen bắp ngọt thanh",
        dessert: "Sữa chua tiệt trùng / Cam sành mọng nước",
      },
      highlights: [
        "Định lượng thịt cá tươi trên 130g",
        "Bổ sung muối khoáng và điện giải tự nhiên",
        "Cơm nóng xới trực tiếp tại bàn ăn",
      ],
    },
    {
      id: "expert-bento",
      number: "3.",
      name: "Bento Chuyên gia & Văn phòng",
      kanji: "高級弁当",
      price: "55.000đ – 75.000đ",
      target: "Dành cho ban giám đốc, khối điều hành và chuyên gia Nhật Bản",
      calories: "650 – 750 kcal",
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1000&auto=format&fit=crop",
      description: "Hộp bento đóng gói chỉn chu theo phong cách ẩm thực Nhật Bản cao cấp. Thanh đạm, giàu chất xơ, trang nhã và giữ đúng phong vị nguyên bản.",
      sampleDishes: {
        main: "Cá hồi áp chảo sốt Teriyaki / Heo chiên xù Tonkatsu giòn tan",
        side: "Salad rong biển bắp cải tím sốt mè rang Kewpie",
        veg: "Rau củ hầm kiểu Nhật (Chikuzenni) / Măng tây xào tỏi",
        soup: "Canh tương Miso đậu hũ non và rong biển Wakame",
        dessert: "Chè hạt sen long nhãn / Nho xanh tươi",
      },
      highlights: [
        "Hộp bento chia ngăn cao cấp chống lẫn vị",
        "Bộ đũa muỗng gỗ tiệt trùng thân thiện môi trường",
        "Giao tận phòng họp đúng giờ hẹn chính xác",
      ],
    },
    {
      id: "school-nutrition",
      number: "4.",
      name: "Dinh dưỡng Bán trú Học đường",
      kanji: "学校給食",
      price: "35.000đ – 45.000đ",
      target: "Dành cho hệ thống trường quốc tế, trường bán trú tiểu học & THCS",
      calories: "600 – 700 kcal",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
      description: "Thực đơn dinh dưỡng học đường xây dựng trên triết lý Shokuiku Nhật Bản, kích thích vị giác của học sinh với nguyên liệu tươi mềm và tạo hình đẹp mắt.",
      sampleDishes: {
        main: "Thịt băm viên sốt cà ri Nhật ngọt / Cá phi lê hấp gừng hành",
        side: "Khoai tây nghiền bơ sữa tươi nguyên chất",
        veg: "Bông cải xanh và cà rốt tỉa hoa hấp thanh ngọt",
        soup: "Canh súp gà ngô ngọt non nấm hương",
        dessert: "Sữa hạt dinh dưỡng / Bánh flan caramen mềm mịn",
      },
      highlights: [
        "Tuyệt đối không sử dụng phụ gia hóa học",
        "Nguyên liệu cắt nhỏ phù hợp độ tuổi",
        "Phiếu xét nghiệm vi sinh kèm theo mỗi bữa giao",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const current = categories[activeIndex];

  // Accordion state for detailed menu items
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const accordionMenu = [
    {
      title: "Nhóm món mặn giàu đạm (Proteins)",
      subtitle: "Thịt nạc tươi VietGAP & Thủy hải sản kiểm định thú y",
      items: [
        { name: "Thịt ba chỉ kho củ cải phong cách Tokyo", desc: "Nước dừa tươi hầm mềm củ cải trắng thấm vị", price: "Định lượng 120g", tag: "Món chính" },
        { name: "Cá basa phi lê sốt cà chua thì là", desc: "Cá tươi áp chảo giòn da, sốt cà chua hữu cơ", price: "Định lượng 130g", tag: "Món chính" },
        { name: "Gà ta rang lá chanh sả ớt", desc: "Thịt gà thả vườn chắc thịt, dậy mùi thơm thanh", price: "Định lượng 125g", tag: "Món chính" },
        { name: "Trứng cuộn rong biển Tamagoyaki", desc: "Trứng gà tươi đánh xốp cuộn rong biển Nori", price: "Định lượng 80g", tag: "Món phụ" },
      ]
    },
    {
      title: "Nhóm rau củ hữu cơ & Canh thanh nhiệt (Vitamins)",
      subtitle: "Rau sạch chuẩn nông trại VietGAP Đà Lạt & Củ Chi",
      items: [
        { name: "Bắp cải xào nấm bào ngư & cà rốt", desc: "Xào lửa lớn giữ trọn vị giòn ngọt và vitamin C", price: "Định lượng 100g", tag: "Rau xanh" },
        { name: "Cải thìa luộc sốt dầu hào tỏi phi", desc: "Rau cải thìa tươi non luộc xanh mướt", price: "Định lượng 100g", tag: "Rau xanh" },
        { name: "Canh sườn non hầm củ sen bắp ngọt", desc: "Nước dùng hầm xương tủy tự nhiên 6 tiếng", price: "Bát 250ml", tag: "Canh hầm" },
        { name: "Canh chua cá lăng nấu măng le", desc: "Vị chua thanh mát từ me tươi và măng rừng", price: "Bát 250ml", tag: "Canh hầm" },
      ]
    },
    {
      title: "Thực đơn Cơm hộp Bento Chuyên gia Nhật (Executive)",
      subtitle: "Chuẩn vị Kaiseki thu nhỏ đóng hộp gỗ tiệt trùng",
      items: [
        { name: "Cá hồi Nauy áp chảo xốt Teriyaki mè rang", desc: "Cá hồi nhập khẩu trực tiếp phi lê không xương", price: "65.000đ", tag: "Bento VIP" },
        { name: "Thịt heo tẩm bột chiên giòn Tonkatsu", desc: "Thịt thăn heo mềm ngọt ăn kèm sốt Tonkatsu đặc chế", price: "60.000đ", tag: "Bento VIP" },
        { name: "Bò Úc cuộn nấm kim châm nướng sốt tiêu đen", desc: "Thịt bò thăn mềm cuộn nấm giòn ngọt tự nhiên", price: "70.000đ", tag: "Bento VIP" },
        { name: "Canh tương đậu Miso rong biển Wakame", desc: "Đậu phụ non mềm tan, tương đậu Miso nhập khẩu", price: "Kèm theo", tag: "Canh Miso" },
      ]
    }
  ];

  return (
    <section id="menus" className="py-24 bg-[#f5ece4] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#e94222] mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
            <span>Khẩu vị & Cơ cấu suất ăn</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-title text-4xl sm:text-5xl font-light text-[#0d1717] tracking-tight leading-[1.05]"
          >
            Độ tươi ngon trong từng suất ăn. Khẩu vị nguyên bản.
          </motion.h2>
          <p className="text-base text-[#3a3a3a]/80 mt-4 leading-relaxed font-normal">
            Thực đơn được các chuyên gia dinh dưỡng và bếp trưởng thiết kế riêng biệt cho từng ngành nghề, 
            kết hợp văn hóa ẩm thực truyền thống Việt Nam và tiêu chuẩn cân bằng calo của Nhật Bản.
          </p>
        </div>

        {/* Categories Tab Selector (Shushi FZ numbered slides) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-5 text-left border transition-all duration-300 cursor-pointer relative ${
                activeIndex === idx
                  ? "bg-[#0d1717] text-white border-[#0d1717] shadow-xl"
                  : "bg-[#fff9f3] text-[#0d1717] border-black/10 hover:border-black/30"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-sm font-light ${activeIndex === idx ? "text-[#e94222]" : "text-[#0d1717]/40"}`}>
                  {cat.number}
                </span>
                <span className={`text-xs font-mono tracking-widest ${activeIndex === idx ? "text-white/60" : "text-[#0d1717]/40"}`}>
                  {cat.kanji}
                </span>
              </div>
              <h3 className="font-title text-base sm:text-lg font-normal leading-tight">
                {cat.name}
              </h3>
              <div className={`text-xs mt-2 font-mono font-semibold ${activeIndex === idx ? "text-[#e94222]" : "text-[#3a3a3a]/70"}`}>
                {cat.price}
              </div>

              {/* Active bar */}
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeCategoryBar"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#e94222]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Selected Category Showcase (Animated Crossfade Card) */}
        <div className="bg-[#fff9f3] border border-black/10 p-8 sm:p-12 mb-16 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Image (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] overflow-hidden border border-black/15 bg-stone-200 group">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-[#0d1717] text-[#f5ece4] px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5 text-[#e94222]" />
                  <span>{current.calories}</span>
                </div>

                <div className="mt-3 text-xs text-[#3a3a3a]/70 italic">
                  {current.target}
                </div>
              </div>

              {/* Menu Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-black/10 pb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0d1717]/50">
                      Ngân sách tham khảo
                    </span>
                    <div className="font-title text-3xl sm:text-4xl font-light text-[#e94222] mt-0.5">
                      {current.price}
                      <span className="text-xs text-[#3a3a3a]/70 font-sans ml-1.5">/ suất ăn</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0d1717]/50 block">
                      Khẩu vị vùng miền
                    </span>
                    <span className="text-xs font-semibold text-[#0d1717]">
                      Bắc · Trung · Nam tùy chỉnh
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#3a3a3a] leading-relaxed">
                  {current.description}
                </p>

                {/* Sample Dishes Table */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0d1717]/60 font-semibold">
                      Món chính gợi ý
                    </span>
                    <span className="sm:col-span-2 font-medium text-[#0d1717]">
                      {current.sampleDishes.main}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0d1717]/60 font-semibold">
                      Món phụ cân đối
                    </span>
                    <span className="sm:col-span-2 text-[#3a3a3a]">
                      {current.sampleDishes.side}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0d1717]/60 font-semibold">
                      Rau xanh mùa vụ
                    </span>
                    <span className="sm:col-span-2 text-[#3a3a3a]">
                      {current.sampleDishes.veg}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 py-2 border-b border-black/5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0d1717]/60 font-semibold">
                      Canh & Tráng miệng
                    </span>
                    <span className="sm:col-span-2 text-[#3a3a3a]">
                      {current.sampleDishes.soup} · {current.sampleDishes.dessert}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#0d1717]">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a href="#trial-tasting" className="shushi-btn shushi-btn-primary">
                    <span>Nếm thử thực đơn {current.name}</span>
                  </a>
                  <span className="text-xs text-[#0d1717]/60 font-mono">
                    Giao 5-10 suất mẫu đến tận nhà xưởng
                  </span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Detailed Accordion Menu (Exact Shushi FZ 'section our-menu' UX) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-black/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#e94222] font-bold">
                Chi tiết món ăn luân phiên
              </span>
              <h3 className="font-title text-2xl font-light text-[#0d1717]">
                Danh mục món ăn tiêu biểu trong chu kỳ 28 ngày
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#0d1717]/50">
              Nhấp để xem từng nhóm món
            </span>
          </div>

          {accordionMenu.map((group, gIdx) => {
            const isOpen = expandedSection === gIdx;
            return (
              <div
                key={gIdx}
                className="bg-[#fff9f3] border border-black/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedSection(isOpen ? null : gIdx)}
                  className="w-full p-6 text-left flex items-center justify-between cursor-pointer hover:bg-stone-50 transition-colors"
                >
                  <div>
                    <h4 className="font-title text-xl font-normal text-[#0d1717]">
                      {group.title}
                    </h4>
                    <p className="text-xs text-[#3a3a3a]/70 mt-1">
                      {group.subtitle}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-[#f5ece4] flex items-center justify-center text-[#0d1717] shrink-0 ml-4"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="border-t border-black/10 px-6 pb-6 pt-4 space-y-4"
                    >
                      {group.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 py-3 border-b border-black/5 last:border-none group hover:pl-2 transition-all"
                        >
                          <div className="max-w-xl">
                            <div className="flex items-center gap-2">
                              <span className="font-title text-base text-[#0d1717] font-normal group-hover:text-[#e94222] transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f5ece4] text-[#0d1717]/70 border border-black/10">
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-xs text-[#3a3a3a]/70 mt-0.5">
                              {item.desc}
                            </p>
                          </div>

                          <div className="hidden sm:block menu-leader-dots"></div>

                          <span className="font-mono text-xs font-bold text-[#e94222] shrink-0">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
