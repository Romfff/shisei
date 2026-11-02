import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactName, phone, email, serviceType, quantity, notes } = body;

    const recipientEmail = "ddcjp.ceo@gmail.com";

    // Format service type label
    const serviceLabels: Record<string, string> = {
      "suat-an": "Suất ăn công nghiệp / Bếp ăn tập thể",
      "tiec-ban": "Đặt tiệc bàn 6-8-10 người",
      "com-hop": "Cơm hộp – Mang đi (Takeaway Bento)",
      "cafe": "Vận hành Căng tin & Quầy Café",
      "travel": "Shinsei Travel (Y tế / Golf / Trải nghiệm)",
      "khac": "Tư vấn & Đào tạo 5S",
    };

    const serviceText = serviceLabels[serviceType] || serviceType || "Chưa chọn";
    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // Console log for audit trail & server monitoring
    console.log("==================================================");
    console.log(`[SHINSEI B2B INQUIRY] New consultation request for: ${recipientEmail}`);
    console.log(`Time: ${timestamp}`);
    console.log(`Company: ${companyName}`);
    console.log(`Contact Person: ${contactName}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email || "Không cung cấp"}`);
    console.log(`Service: ${serviceText}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Notes: ${notes || "Không có"}`);
    console.log("==================================================");

    // Forward to FormSubmit to deliver directly to ddcjp.ceo@gmail.com
    try {
      const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Shinsei B2B] Yêu cầu tư vấn & nếm thử: ${companyName} - ${contactName}`,
          _template: "table",
          _captcha: "false",
          "Thời gian gửi": timestamp,
          "Tên doanh nghiệp / Đơn vị": companyName,
          "Người phụ trách / Chức vụ": contactName,
          "Số điện thoại / Zalo": phone,
          "Email liên hệ": email || "Chưa cung cấp",
          "Dịch vụ quan tâm": serviceText,
          "Quy mô suất ăn dự kiến": quantity,
          "Ghi chú / Yêu cầu đặc biệt": notes || "Không có",
        }),
      });

      if (!formSubmitResponse.ok) {
        console.warn("[FormSubmit Warning] Response status:", formSubmitResponse.status);
      }
    } catch (deliveryError) {
      console.error("[Email Delivery Warning] Could not reach mail forwarder:", deliveryError);
      // We don't fail the user request if mail forwarding encounters network issues
    }

    return NextResponse.json({
      success: true,
      recipient: recipientEmail,
      message: `Thông tin tư vấn đã được gửi thành công đến ${recipientEmail}`,
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Đã xảy ra lỗi khi tiếp nhận thông tin. Vui lòng thử lại hoặc gọi hotline." },
      { status: 500 }
    );
  }
}
