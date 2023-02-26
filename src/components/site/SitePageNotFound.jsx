// react
import React from "react";

// third-party
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// data stubs
import theme from "../../data/theme";

function SitePageNotFound() {
  return (
    <div className="block">
      <Helmet>
        <title>{`Lỗi 404`}</title>
      </Helmet>

      <div className="container">
        <div className="not-found">
          <div className="not-found__404">Oops! Lỗi 404</div>

          <div className="not-found__content">
            <h1 className="not-found__title">Không tìm thấy trang</h1>

            <p className="not-found__text">
              Chúng tôi không thể tìm thấy trang này
              <br />
              Hãy thử tìm kiếm
            </p>

            <form className="not-found__search">
              <input
                type="text"
                className="not-found__search-input form-control"
                placeholder="Từ khóa..."
              />
              <button
                type="submit"
                className="not-found__search-button btn btn-primary"
              >
                Tìm kiếm
              </button>
            </form>

            <p className="not-found__text">Hoặc đi đến trang chủ và thử lại.</p>

            <Link to="/" className="btn btn-secondary btn-sm">
              Trở về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePageNotFound;
