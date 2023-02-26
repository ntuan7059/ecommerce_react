import React from "react";
import "./homepage.css";
// third-party
import { Helmet } from "react-helmet";
import BlockSlideShow from "../components/blocks/BlockSlideShow";
import { postHome } from "../data/blogPosts";
import BlockPosts from "../components/blocks/BlockPosts";

function HomePage() {
  const slides = [
    {
      title: "Uy tín &<br>Chất lượng",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.",
      image_classic: "images/slides/slide-home-1.jpg",
      image_full: "images/slides/slide-home-1-full.jpg",
      image_mobile: "images/slides/slide-home-1-mobile.jpg",
    },
    {
      title: "An toàn &<br>Hiệu quả",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.",
      image_classic: "images/slides/slide-home-2.jpg",
      image_full: "images/slides/slide-home-2-full.jpg",
      image_mobile: "images/slides/slide-home-2-mobile.jpg",
    },
    {
      title: "Độc đáo &<br>Hiện đại",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.",
      image_classic: "images/slides/slide-home-3.jpg",
      image_full: "images/slides/slide-home-3-full.jpg",
      image_mobile: "images/slides/slide-home-3-mobile.jpg",
    },
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>{`BSMART`}</title>
      </Helmet>

      <BlockSlideShow withDepartments slides={slides} />
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Về chúng tôi</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <img
                width="500"
                height="320"
                src="https://sancopack.com/wp-content/uploads/2022/10/dich-vu-dong-kien-go-thiet-ke-theo-uu-cau-2-1024x768.jpg"
                style={{ borderRadius: "12px" }}
                alt=""
                decoding="async"
                loading="lazy"
                sizes="(max-width: 1020px) 100vw, 1020px"
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h3>
                CÔNG TY CP THƯƠNG MẠI & DỊCH VỤ QUỐC TẾ SAO NAM – SANCOPACK
              </h3>
              <p>
                Công Ty Cổ Phần Thương Mại & Dịch Vụ Quốc Tế Sao Nam sở hữu
                thương hiệu SANCOPACK được thành lập từ năm 2000 với mong muốn
                hỗ trợ các doanh nghiệp xuất khẩu của Việt Nam đưa sản phẩm
                “Made in Vietnam” ra thị trường thế giới một cách hiệu quả bằng
                việc cung cấp các giải pháp đóng gói bảo vệ hàng hóa phù hợp với
                tiêu chuẩn quốc tế.
              </p>
              <a href="#" className="btn-learn-more">
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="cta"
        class="cta container mt-5"
        style={{ borderRadius: "5px" }}
      >
        <div class="" data-aos="zoom-in">
          <div class="row">
            <div class="col-lg-9 text-center text-lg-start">
              <h3>
                SANCOPACK – GIẢI PHÁP ĐÓNG GÓI, BẢO VỆ HÀNG HÓA CHẤT LƯỢNG CAO
              </h3>
              <p>
                Với 20 năm kinh nghiệm trong lĩnh vực xuất nhập khẩu và cung cấp
                bao bì bảo vệ hàng hóa nên Sancopack có uy tín, vị thế đối với
                ngành hàng Bao bì đóng gói tại Việt Nam. Chúng tôi tự tin có thể
                trở thành đối tác chiến lược cho tất cả các doanh nghiệp có quy
                mô nhỏ, vừa và lớn tại Việt Nam.
              </p>
            </div>
            <div class="col-lg-3 cta-btn-container text-center">
              <a class="cta-btn align-middle" href="#">
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5"></div>
      <BlockPosts
        title="sản phẩm và dịch vụ nổi bật"
        layout="list-sm"
        posts={postHome}
      />
    </React.Fragment>
  );
}

export default HomePage;
