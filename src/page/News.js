import React from "react";
import "./news.css";
// third-party
import { Helmet } from "react-helmet";
import BlockSlideShow from "../components/blocks/BlockSlideShow";
import { postHome } from "../data/blogPosts";
import BlockPosts from "../components/blocks/BlockPosts";

function News() {
  return (
    <div class="content-wrapper">
      <div class="container">
        <div class="col-sm-12">
          <div class="card" data-aos="fade-up">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <h3 class="font-weight-600 mb-4">Hoạt động</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <div class="row">
                    <div class="col-sm-4 grid-margin">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_7.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                      <h4 class="font-weight-600 mb-2">
                        No charges over 2017 battle bus cases
                      </h4>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                      <p class="fs-15">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 grid-margin">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_8.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                      <h4 class="font-weight-600 mb-2">
                        No charges over 2017 battle bus cases
                      </h4>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                      <p class="fs-15">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 grid-margin">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_9.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                      <h4 class="font-weight-600 mb-2">
                        Kaine: Trump Jr. may have committed treason
                      </h4>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                      <p class="fs-15">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 grid-margin">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_10.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                      <h4 class="font-weight-600 mb-2">
                        South Korea’s Moon Jae-in sworn in vowing to address
                      </h4>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                      <p class="fs-15">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 grid-margin">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_11.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                      <h4 class="font-weight-600 mb-2">
                        No charges over 2017 battle bus cases
                      </h4>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                      <p class="fs-15">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4 grid-margin">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_12.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-sm-8 grid-margin">
                      <h4 class="font-weight-600 mb-2">
                        Kaine: Trump Jr. may have committed treason
                      </h4>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                      <p class="fs-15">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <h4 class="mb-4 text-primary font-weight-600">Latest news</h4>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="border-bottom pb-4 pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                              Ways to stay social online while in self..
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="images/magazine/Magzine_1.jpg"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="border-bottom pb-4 pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                              Premier League players join charity..
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="images/magazine/Magzine_2.jpg"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="pt-4">
                        <div class="row">
                          <div class="col-sm-8">
                            <h5 class="font-weight-600 mb-1">
                              UK Athletics board changed stance on..
                            </h5>
                            <p class="fs-13 text-muted mb-0">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </p>
                          </div>
                          <div class="col-sm-4">
                            <div class="rotate-img">
                              <img
                                src="images/magazine/Magzine_3.jpg"
                                alt="banner"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="trending">
                    <h4 class="mb-4 text-primary font-weight-600">Trending</h4>
                    <div class="mb-4">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_4.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                      <h3 class="mt-3 font-weight-600">
                        Virus Kills Member Of Advising Iran’s Supreme
                      </h3>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                    </div>
                    <div class="mb-4">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_5.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                      <h3 class="mt-3 font-weight-600">
                        Virus Kills Member Of Advising Iran’s Supreme
                      </h3>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                    </div>
                    <div class="mb-4">
                      <div class="rotate-img">
                        <img
                          src="images/magazine/Magzine_6.jpg"
                          alt="banner"
                          class="img-fluid"
                        />
                      </div>
                      <h3 class="mt-3 font-weight-600">
                        Virus Kills Member Of Advising Iran’s Supreme
                      </h3>
                      <p class="fs-13 text-muted mb-0">
                        <span class="mr-2">Photo </span>10 Minutes ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default News;
