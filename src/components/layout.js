import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">

      </header>
      {children}
  <footer class="footer-dark bg-slate-blue">
      <div
        class="footer-top padding-six-tb lg-padding-eight-tb md-padding-50px-tb"
      >
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-lg-3 col-sm-6 order-sm-1 order-lg-0 last-paragraph-no-margin md-margin-40px-bottom xs-margin-25px-bottom"
            >
              <span
                class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
                >Registered Address</span
              >
              <p>
                Flat.No.101, Kacham Diamond Residency, Praga Tools Colony,
                Suchitra, Hyderabad, Telangana - 500014 IN
              </p>
              <span
                class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
                >Corporate Address</span
              >
              <p>
                GVR's Pride, 2<sup>nd</sup> Floor, KPHB 5<sup>th</sup>
                Phase, Kukatpally, Hyderabad, Telangana - 500072 IN
              </p>
  
            </div>
            <!-- end footer column -->
            <!-- start footer column -->
            <div
              class="col-12 col-lg-2 offset-sm-1 col-sm-5 order-sm-2 order-lg-0 md-margin-40px-bottom xs-margin-25px-bottom"
            >
              <span
                class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
                >About Us</span
              >
              <ul>
                <li><a href="">Discover Us</a></li>
                <li><a href="">Services</a></li>
                <li>
                  <a href="https://medium.com/@socialmedia_19214" target="blank"
                    >Blog</a
                  >
                </li>
                <li><a href="">Products</a></li>
                <li><a href="./contactUs.html">Contact us</a></li>
              </ul>
            </div>
            <!-- end footer column -->
            <!-- start footer column -->
            <div
              class="col-12 col-lg-2 col-sm-5 offset-sm-1 offset-lg-0 order-sm-4 order-lg-0 xs-margin-25px-bottom"
            >
              <span
                class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
                >Products</span
              >
              <ul>
                <li><a href="./atom.html" target="_blank">Atom</a></li>
                <li><a href="./prism.html" target="_blank">Prism</a></li>
                <li><a href="./spectrum.html" target="_blank">Spectrum</a></li>
  
                <li><a href="./quantum.html" target="_blank">Quantum</a></li>
              </ul>
            </div>
            <!-- end footer column -->
            <!-- start footer column -->
            <div
              class="col-12 col-xl-3 offset-xl-1 col-lg-4 col-sm-6 order-sm-3 order-lg-0"
            >
              <span
                class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
                >Subscribe to newsletter</span
              >
              <p>
                Enter your email address for receiving valuable newsletters.
              </p>
              <form
                action="email-templates/subscribe-newsletter.php"
                method="post"
              >
                <div class="newsletter-style-03 position-relative">
                  <input
                    class="small-input border-color-medium-gray rounded m-0 required"
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                  />
                  <input type="hidden" name="redirect" value="" />
                  <button
                    class="btn no-border btn-gradient-sky-blue-pink rounded-end submit"
                    type="submit"
                  >
                    <i
                      class="feather icon-feather-mail icon-extra-small m-0"
                    ></i>
                  </button>
                  <div
                    class="form-results rounded position-absolute d-none"
                  ></div>
                </div>
              </form>
              <div style = "margin-top: 20px;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.383797563538!2d78.3938154!3d17.4790427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdd4b14d48a2bb57%3A0x4fea9f7a5e0edfea!2sVider%20Business%20Solutions!5e0!3m2!1sen!2sin!4v1682338785861!5m2!1sen!2sin" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>&copy; 2023 Copyrights reserved by
                <span class="text-white">Vider</span></div>
                <div style="padding-top: 20px;"><a href="./atom.html" class="footer-logo"
                  ><img
                    src="./images/vider-logo-white.png"
                    data-at2x="./images/vider-logo-white.png"
                    alt="logo"
                /></a></div>
            </div>
            
            <!-- end footer column -->
          </div>
        </div>
      </div>
  
      <div class="footer-bottom padding-15px-tb border-top border-color-white-transparent">
        <div class="container"> 
            <div class="row">
                <div class="col-12 col-md-6 sm-margin-10px-bottom xs-margin-15px-bottom">
                    <ul class="footer-horizontal-link d-flex flex-column flex-sm-row justify-content-sm-center justify-content-md-start">
                      
                        <li><a href="terms-to-use.html">Terms of Use</a></li>
                        <li><a href="refund-cancellation.html">Refund & Cancellation</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 text-start text-md-end last-paragraph-no-margin">
                    <!-- <p>&copy; 2021 Litho is Proudly Powered by <a href="https://www.themezaa.com/" target="_blank" class="text-decoration-line-bottom text-white">ThemeZaa</a></p> -->
                    <!-- <div class="col-12 col-md-3  text-md-end"> -->
                      <div class="social-icon-style-12">
                        <ul class="extra-small-icon light">
                          <li>
                            <a
                              class="facebook"
                              href="https://www.facebook.com/vider.india"
                              target="_blank"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              class="dribbble"
                              href="https://www.linkedin.com/company/viderindia/"
                              target="_blank"
                              ><i class="fab fa-linkedin"></i
                            ></a>
                          </li>
                          <li>
                            <a
                            class="twitter"
                            href="https://twitter.com/Vider_India"
                            target="_blank"
                            ><i class="fab fa-twitter"></i
                          ></a>
                          </li>
                          <li>
                            <a
                              class="instagram"
                              href="https://www.instagram.com/vider_india/"
                              target="_blank"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                          <li>
                            <a
                              class="youtube"
                              href="https://www.youtube.com/@Vider_India"
                              target="_blank"
                              ><i class="fab fa-youtube"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  
                  
                  </div>
            </div>
        </div>
    </div>
      <!-- <div
        class="footer-bottom padding-35px-tb border-top border-width-1px border-color-white-transparent"
      >
        <div class="container">
          <div class="row align-items-center">
            <div
              class="col-12 col-md-3 text-center text-md-start sm-margin-20px-bottom"
            >
              <a href="./atom.html" class="footer-logo"
                ><img
                  src="./images/vider-logo-white.png"
                  data-at2x="./images/vider-logo-white.png"
                  alt="logo"
              /></a>
            </div>
            <div
              class="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom"
            >
              <p>
                &copy; 2022 copy rights reserved by
                <span class="text-white">Vider</span>
              </p>
            </div>
            <div class="col-12 col-md-3 text-center text-md-end">
              <div class="social-icon-style-12">
                <ul class="extra-small-icon light">
                  <li>
                    <a
                      class="facebook"
                      href="https://www.facebook.com/vider.india"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="dribbble"
                      href="https://www.linkedin.com/company/viderindia/"
                      target="_blank"
                      ><i class="fab fa-linkedin"></i
                    ></a>
                  </li>
                  <li>
                    <a
                    class="twitter"
                    href="https://twitter.com/Vider_India"
                    target="_blank"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  </li>
                  <li>
                    <a
                      class="instagram"
                      href="https://www.instagram.com/vider_india/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="youtube"
                      href="https://www.youtube.com/@Vider_India"
                      target="_blank"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </footer>
    </div>
  )
}
