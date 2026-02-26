// src/FaqPage.jsx
import React, { useState } from "react";
import "./faq.scss";

const faqItems = [
  {
    key: "1",
    question: "Mục đích chính của trang web này là gì?",
    answer: (
      <p>
        <strong>Aptis Practice</strong> được xây dựng để giúp bạn luyện tập và ghi nhớ các "key"
        và cấu trúc câu quan trọng cho kỳ thi Aptis ESOL, đặc biệt theo phương pháp học
        story-based. Trang web tập trung vào việc tạo ra các bài tập tương tác mô phỏng điều kiện
        thi thật.
      </p>
    ),
  },
  {
    key: "2",
    question: "Trang web này có phải là đề thi thật không?",
    answer: (
      <p>
        <strong>Không.</strong> Toàn bộ nội dung trên trang web này (câu hỏi, đáp án, bài mẫu)
        đều được tổng hợp và biên soạn từ các nguồn tài liệu ôn thi công khai. Chúng chỉ mang tính
        chất tham khảo và luyện tập, không phải là đề thi thật từ Hội đồng Anh.
      </p>
    ),
  },
  {
    key: "3",
    question:
      'Tại sao trang "Làm bài Part 1" (Listening) lại yêu cầu ghi nhớ key?',
    answer: (
      <p>
        Phần thi Listening Part 1 (Câu 1-13) có một ngân hàng câu hỏi và đáp án tương đối cố định.
        Việc học thuộc "key" (đáp án đúng) cho các bối cảnh phổ biến là một chiến lược hiệu quả để
        tối đa hóa điểm số ở phần này. Trang "Làm bài Part 1" được thiết kế để bạn kiểm tra khả
        năng ghi nhớ các key đó.
      </p>
    ),
  },
  {
    key: "4",
    question: "Làm thế nào để luyện tập Speaking hiệu quả với trang web?",
    answer: (
      <>
        <p>Vì trình duyệt không thể ghi âm trực tiếp, cách tốt nhất là:</p>
        <ol>
          <li>Mở ứng dụng ghi âm trên điện thoại của bạn.</li>
          <li>
            Trên trang Thi thử Speaking, nhấn nút "Bắt đầu trả lời" và bắt đầu ghi âm cùng lúc.
          </li>
          <li>
            Sau khi hoàn thành, bạn có thể nghe lại file ghi âm của mình để tự đánh giá hoặc gửi
            cho bạn bè/giáo viên để nhận feedback.
          </li>
        </ol>
      </>
    ),
  },
  {
    key: "5",
    question: 'Tại sao trang "Phân Tích Đề Bài" (Writing) lại quan trọng?',
    answer: (
      <p>
        Lỗi sai nghiêm trọng nhất trong Writing Part 4 là "lạc đề" (trả lời không đúng yêu cầu).
        Trang "Phân Tích Đề Bài" cung cấp các bài quiz ngắn giúp bạn rèn luyện kỹ năng đọc hiểu
        và xác định TẤT CẢ các nhiệm vụ mà đề bài yêu cầu, đảm bảo bạn không bỏ sót bất kỳ ý nào.
      </p>
    ),
  },
  {
    key: "6",
    question: "Tôi có thể đóng góp câu hỏi hoặc báo lỗi ở đâu?",
    answer: (
      <p>
        Cảm ơn bạn đã quan tâm! Đây là một dự án cá nhân và rất hoan nghênh sự đóng góp. Nếu bạn
        phát hiện lỗi hoặc có ý tưởng mới, vui lòng tạo một{" "}
        <a
          href="https://github.com/VennCyrus/Aptic-Practice"
          target="_blank"
          rel="noreferrer"
        >
          "Issue" trên trang GitHub của dự án
        </a>
        .
      </p>
    ),
  },
];

const FaqPage = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__logo">Aptis Practice</div>
          <nav className="site-header__nav">
            <a href="#">Trang Chủ</a>
            <a href="#">Giới thiệu</a>
            <a href="#">Từ vựng</a>
            <a href="#">Reading</a>
            <a href="#">Listening</a>
            <a href="#">Writing</a>
            <a href="#">Speaking</a>
          </nav>
        </div>
      </header>
      <div className="content-pusher">
        <div className="container">
          <div className="page-intro">
            <h1>Câu Hỏi Thường Gặp (FAQ)</h1>
            <p>
              Giải đáp các thắc mắc phổ biến về chức năng và phương pháp học trên trang web.
            </p>
          </div>

          <div className="faq-container">
            {faqItems.map((item) => {
              const isActive = activeKey === item.key;
              return (
                <div className="faq-item" key={item.key}>
                  <div
                    className={`faq-question ${isActive ? "active" : ""}`}
                    onClick={() => handleToggle(item.key)}
                  >
                    {item.question}
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: isActive ? "500px" : 0,
                      paddingBottom: isActive ? "20px" : 0,
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <footer id="footer-placeholder"></footer>
      </div>
    </>
  );
};

export default FaqPage;
