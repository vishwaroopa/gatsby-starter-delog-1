import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

const Layout = ({ children }) => {
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
      <footer className="footer-dark bg-slate-blue">
        <div className="footer-top padding-six-tb lg-padding-eight-tb md-padding-50px-tb">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3 col-sm-6 order-sm-1 order-lg-0 last-paragraph-no-margin md-margin-40px-bottom xs-margin-25px-bottom">
                <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Registered Address</span>
                <p>Flat.No.101, Kacham Diamond Residency, Praga Tools Colony, Suchitra, Hyderabad, Telangana - 500014 IN</p>
                <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">Corporate Address</span>
                <p>GVR's Pride, 2<sup>nd</sup> Floor, KPHB 5<sup>th</sup> Phase, Kukatpally, Hyderabad, Telangana - 500072 IN</p>
              </div>
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
            </div>
          </div>
        </div>

        <div className="footer-bottom padding-15px-tb border-top border-color-white-transparent">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 sm-margin-10px-bottom xs-margin-15px-bottom">
                <ul className="footer-horizontal-link d-flex flex-column flex-sm-row justify-content-sm-center justify-content-md-start">
                  <li><a href="terms-to-use.html">Terms of Use</a></li>
                  <li><a href="refund-cancellation.html">Refund & Cancellation</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  {/* Add more footer links here */}
                </ul>
              </div>
              <div className="col-12 col-md-6 text-start text-md-end last-paragraph-no-margin">
                <div className="social-icon-style-12">
                  <ul className="extra-small-icon light">
                    <li><a className="facebook" href="https://www.facebook.com/vider.india" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a className="dribbble" href="https://www.linkedin.com/company/viderindia/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    {/* Add more social media icons here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
