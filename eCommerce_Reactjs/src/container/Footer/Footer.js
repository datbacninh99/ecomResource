import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Sản Phẩm Nổi Bật</h4>
              <ul>
                <li><a href="#">Áo Thời Trang</a></li>
                <li><a href="#">Quần Jean</a></li>
                <li><a href="#">Phụ Kiện</a></li>
                <li><a href="#">Giày Dép</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Dịch Vụ</h4>
              <ul>
                <li><a href="#">Tư Vấn Thời Trang</a></li>
                <li><a href="#">Chăm Sóc Khách Hàng</a></li>
                <li><a href="#">Dịch Vụ Giao Hàng</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Thông Tin</h4>
              <ul>
                <li><a href="#">Việc Làm</a></li>
                <li><a href="#">Tài Sản Thương Hiệu</a></li>
                <li><a href="#">Quan Hệ Nhà Đầu Tư</a></li>
                <li><a href="#">Điều Khoản Dịch Vụ</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 single-footer-widget">
              <h4>Tài Nguyên</h4>
              <ul>
                <li><a href="#">Hướng Dẫn Mua Sắm</a></li>
                <li><a href="#">Nghiên Cứu Xu Hướng</a></li>
                <li><a href="#">Chuyên Gia Thời Trang</a></li>
                <li><a href="#">Đại Lý và Cửa Hàng</a></li>
              </ul>
            </div>

          </div>
          <div className="footer-bottom row justify-content-center">
            <p className="footer-text m-0 col-lg-8 col-md-12">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Bản quyền ©2024
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;