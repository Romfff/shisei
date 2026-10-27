import { Clock, ShieldCheck, Flame, ThermometerSnowflake, PackageCheck, Truck, ArrowRight } from "lucide-react";

export function ProductionProcess() {
  const schedule = [
    {
      time: "04:00 – 05:30",
      step: "01",
      title: "Kiểm định nguồn nguyên liệu",
      kanji: "検品",
      desc: "Kiểm tra hóa đơn nguồn gốc, tem kiểm dịch thú y trong ngày. Đo độ tươi sống và nhiệt độ thịt cá trước khi nhập kho mát.",
    },
    {
      time: "05:30 – 07:30",
      step: "02",
      title: "Sơ chế phân khu độc lập",
      kanji: "下処理",
      desc: "Rau củ được ngâm sục ozon khử khuẩn. Khu sơ chế thịt sống, thủy sản và rau quả sử dụng dao thớt và tạp dề phân màu riêng biệt.",
    },
    {
      time: "07:30 – 09:30",
      step: "03",
      title: "Chế biến nhiệt cao chuẩn xác",
      kanji: "調理",
      desc: "Hệ thống chảo nghiêng đối lưu và nồi hơi công nghiệp. Đo tâm nhiệt độ thực phẩm đạt trên 85°C để diệt khuẩn hoàn toàn.",
    },
    {
      time: "09:30 – 10:30",
      step: "04",
      title: "Đóng khay phòng vô trùng",
      kanji: "盛付",
      desc: "Không khí phòng đóng khay lọc qua màng HEPA, khử trùng đèn UV. Nhân viên mang trang phục bảo hộ và găng tay y tế một lần.",
    },
    {
      time: "10:30 – 10:45",
      step: "05",
      title: "Lưu mẫu niêm phong 24 giờ",
      kanji: "保存食",
      desc: "Trích xuất tối thiểu 150g mỗi món ăn trong hộp inox tiệt trùng, bảo quản tủ mát 2°C – 8°C có chữ ký xác nhận của cán bộ kiểm nghiệm.",
    },
    {
      time: "10:45 – 11:30",
      step: "06",
      title: "Vận chuyển bảo ôn trên 65°C",
      kanji: "配送",
      desc: "Khay cơm xếp vào thùng cách nhiệt đa tầng, vận chuyển bằng xe chuyên dụng đến căng-tin nhà máy, đảm bảo ấm nóng đến bàn ăn.",
    },
  ];

  return (
    <section id="standards" className="py-24 bg-[#fff9f3] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shushi FZ Flex Header: Title left, Description right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-black/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#e94222] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
              <span>Quy trình bếp một chiều · 衛生管理</span>
            </div>
            <h2 className="font-title text-4xl sm:text-5xl font-light text-[#0d1717] tracking-tight leading-[1.05]">
              Chế biến với kỷ luật và cái tâm người làm bếp.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#3a3a3a]/80 leading-relaxed">
              Mỗi khẩu phần ăn phục vụ hàng ngàn công nhân đều tuân thủ nguyên tắc một chiều khép kín, 
              không để thực phẩm sống và chín giao nhau tại bất kỳ thời điểm nào.
            </p>
          </div>
        </div>

        {/* 6 Steps Grid (Shushi FZ elegant cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5ece4] p-8 border border-black/10 hover:border-[#0d1717] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-5">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#e94222]">
                    {item.time}
                  </span>
                  <span className="font-mono text-xl font-light text-[#0d1717]/30 group-hover:text-[#0d1717] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-title text-xl font-normal text-[#0d1717] tracking-tight">
                    {item.title}
                  </h3>
                  <span className="font-title text-sm text-[#0d1717]/40 tracking-widest">
                    {item.kanji}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#3a3a3a]/80 leading-relaxed font-normal mt-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-xs text-[#0d1717]/60">
                <span className="font-mono uppercase tracking-wider">Tiêu chuẩn HACCP</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Kitchen Facility Highlight Card */}
        <div className="mt-12 bg-[#0d1717] text-white p-8 sm:p-12 border border-black/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e94222] font-semibold">
              Khảo sát thực địa
            </span>
            <h3 className="font-title text-2xl sm:text-3xl font-light leading-snug">
              Kính mời Ban giám đốc và Khối thu mua tham quan trực tiếp Bếp trung tâm Shisei Food
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Minh bạch mọi khâu chế biến: Quý doanh nghiệp có thể kiểm tra kho lạnh, quy trình sơ chế, 
              nhật ký lưu mẫu và hồ sơ khám sức khỏe định kỳ của toàn thể đội ngũ cấp dưỡng.
            </p>
          </div>

          <div className="shrink-0">
            <a href="#trial-tasting" className="shushi-btn shushi-btn-primary">
              <span>Đăng ký tham quan bếp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
