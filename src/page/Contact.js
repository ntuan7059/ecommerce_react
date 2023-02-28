import React from "react";

// third-party
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Input } from "reactstrap";
import "./contact.css";

function Contact() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{`BSMART`}</title>
      </Helmet>
      <div
        style={{ translate: "20% 0" }}
        class="row justify-content-center container"
      >
        <div class="col-md-12">
          <div class="wrapper">
            <div class="row mb-3 mt-5">
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-map-marker"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Address:</span> 198 West 21th Street, Suite 721 New
                      York NY 10016
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-phone"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Phone:</span>{" "}
                      <a href="tel://1234567920">+ 1235 2355 98</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-paper-plane"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Email:</span>{" "}
                      <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span class="fa fa-globe"></span>
                  </div>
                  <div class="text">
                    <p>
                      <span>Website</span> <a href="#">yoursite.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-md-7">
                <div class="contact-wrap w-100 p-md-5 p-4">
                  <h3 class="mb-4">Contact Us</h3>
                  <div id="form-message-warning" class="mb-4"></div>
                  <div id="form-message-success" class="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    class="contactForm"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="name">
                            Full Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="#">
                            Message
                          </label>
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            class="btn btn-primary"
                          />
                          <div class="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 d-flex align-items-stretch">
                <div class="info-wrap w-100 p-5 img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3742737483763!2d106.70116072457344!3d10.782619667744164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f494c51b237%3A0x962cf157df25ad43!2zMjNCIMSQLiBUw7RuIMSQ4bupYyBUaOG6r25nLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1664875787825!5m2!1sen!2s"
                    width="400"
                    height="400"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
