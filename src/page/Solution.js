import React from "react";
import "./solution.css";
// third-party
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillDribbbleCircle,
  AiFillDropboxCircle,
  AiFillFire,
  AiFillSketchCircle,
} from "react-icons/ai";
import { Helmet } from "react-helmet";
import BlockSlideShow from "../components/blocks/BlockSlideShow";
import { postHome } from "../data/blogPosts";
import BlockPosts from "../components/blocks/BlockPosts";

function Solution() {
  const url =
    "https://media.istockphoto.com/id/480288960/photo/it-background-binary-code-a03.jpg?s=1024x1024&w=is&k=20&c=8E4Rd1yjQsT2U4zGlLNHt7yywME2uMzrwaYhAOl_nc4=";
  return (
    <>
      <section id="services" class="services section-bg mt-5">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Giải pháp</h2>
            <p>
              Công ty TNHH Smarthome Thái Nguyên là đơn vị phân phối độc quyền
              sản phẩm, giải pháp nhà thông minh Lumi tại Thái Nguyên, Tuyên
              Quang, Bắc Kạn. Giải pháp nhà thông minh Lumi đem đến cho quý
              khách hàng sự tiện nghi, an toàn và chủ động.
            </p>
          </div>

          <div class="row">
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon">
                  <AiFillDribbbleCircle size={70} />
                </div>
                <h4>
                  <a href="/details">Dự toán nhà phố thông minh</a>
                </h4>
                <p>
                  Nhà thông minh đã trở nên phổ biến với mọi gia đình Việt. Chỉ
                  từ 70 – 150 triệu, bạn đã sở hữu ngay ngôi nhà thông minh,
                  tiện nghi hơn cả sự mong đợi, với hệ thống chiếu sáng, điều
                  hòa, bình nóng lạnh, rèm cửa, âm thanh, hình ảnh… được con
                  người kiểm soát, điều khiển trên smartphone, ipad khi kết nối
                  internet. Hoặc bằng chính giọng nói tiếng Việt 3 miền Bắc,
                  Trung, Nam.
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon">
                  <AiFillDropboxCircle size={70} />
                </div>
                <h4>
                  <a href="/details">Dự toán chung cư thông minh</a>
                </h4>
                <p>
                  Để nhà thông minh không còn xa xỉ với người dùng, Lumi Việt
                  Nam đã tối ưu hóa và cho ra mắt nhiều gói sản phẩm phù hợp với
                  giá thành, điều kiện của người dùng. Chỉ từ 30 triệu đồng,
                  khách hàng đã sở hữu ngay căn hộ thông minh, tiện nghi, đẳng
                  cấp Châu Âu tại Việt Nam
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon">
                  <AiFillFire size={70} />
                </div>
                <h4>
                  <a href="/details">Dự toán biệt thự thông minh</a>
                </h4>
                <p>
                  Bạn đang sở hữu ngôi biệt thự hiện đại, đẳng cấp nhưng thiếu
                  đi sự thông minh. Bức tường đá sang trọng nhưng lại gắn chiếc
                  công tắc nhựa kém thẩm mỹ. Thay vào đó là chiếc công tắc thiết
                  kế tinh tế, sử dụng mặt kính cường lực cao cấp, viền nhôm
                  nguyên khối mạ vàng 14k, sẽ làm nên sự khác biệt cho ngôi nhà.
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon">
                  <AiFillSketchCircle size={70} />
                </div>
                <h4>
                  <a href="/details">Giải pháp chiếu sáng thông minh</a>
                </h4>
                <p>
                  Hệ thống chiếu sáng đối với mỗi ngôi nhà đều vô cùng quan
                  trọng. Không chỉ đơn thuần có chức năng thắp sáng căn nhà, giờ
                  đây với sự phát triển của công nghệ chiếu sáng hiện đại, ngôi
                  nhà hoàn toàn có thể trở nên sinh động, đầy tính thẩm mỹ, thể
                  hiện cá tính của chủ nhà. Bên cạnh đó, với sự giúp sức của
                  công nghệ 4.0, chủ nhà hiện đại có thể điều khiển được tất cả
                  hệ thống đèn trong nhà thông qua Smartphone hoặc bằng giọng
                  nói.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" class="pricing mt-5">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Bảng giá</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="box">
                <h3>Free Plan</h3>
                <h4>
                  <sup>$</sup>0<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Quam
                    adipiscing vitae proin
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Nec
                    feugiat nisl pretium
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Nulla
                    at volutpat diam uteera
                  </li>
                  <li class="na">
                    <AiOutlineClose style={{ display: "inline-block" }} />{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li class="na">
                    <AiOutlineClose style={{ display: "inline-block" }} />{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" class="buy-btn">
                  Get Started
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="box featured">
                <h3>Business Plan</h3>
                <h4>
                  <sup>$</sup>29<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Quam
                    adipiscing vitae proin
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Nec
                    feugiat nisl pretium
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Nulla
                    at volutpat diam uteera
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} />{" "}
                    Pharetra massa massa ultricies
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Massa
                    ultricies mi quis hendrerit
                  </li>
                </ul>
                <a href="#" class="buy-btn">
                  Get Started
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="box">
                <h3>Developer Plan</h3>
                <h4>
                  <sup>$</sup>49<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Quam
                    adipiscing vitae proin
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Nec
                    feugiat nisl pretium
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Nulla
                    at volutpat diam uteera
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} />{" "}
                    Pharetra massa massa ultricies
                  </li>
                  <li>
                    <AiOutlineCheck style={{ display: "inline-block" }} /> Massa
                    ultricies mi quis hendrerit
                  </li>
                </ul>
                <a href="#" class="buy-btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Solution;
