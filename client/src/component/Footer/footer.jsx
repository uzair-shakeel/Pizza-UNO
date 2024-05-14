import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './footer.css';
import { AuthContext } from '../../context/AuthContext'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  const year = new Date().getFullYear();
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className='container newsletter rounded-3  align-items-center d-flex mt-5' style={{ marginTop: '-50px', position: 'relative', zIndex: '1' }}>
        <div className='row d-flex align-items-center justify-content-between mx-md-auto mx-0'>
          <div className='col-md-4 col-12 d-flex align-items-center news-letter-text '>
            <h5 className=''>Subscribe <br className='d-md-block d-none' /> To Our Newsletter</h5>
          </div>
          <div className='col-lg-5 col-md-8 col-12 pb-2 pb-lg-0 '>
            <div className='newsletter-input my-auto '>
              <input type='email' placeholder='Your Email' />
              <button className='btn newsletter-btn'>Subscribe</button>
            </div>
          </div>
          <div className='col-lg-3 col-12 social-links d-flex align-items-center justify-content-center gap-1'>
            <span>
              <Link to="#"><i className='ri-youtube-fill'></i></Link>
            </span>
            <span>
              <Link to="#"><i className='ri-github-fill'></i></Link>
            </span>
            <span>
              <Link to="#"><i className='ri-facebook-fill'></i></Link>
            </span>
            <span>
              <Link to="#"><i className='ri-instagram-line'></i></Link>
            </span>
          </div>
        </div>
      </div>
      <footer className="container-fluid text-center text-lg-start text-muted footer-section">
        <section className="pb-1 ">
          <div className="container text-center text-md-start ">
            <div className="row ">
              <footer className="text-center text-lg-start text-muted">
                <section className="footer-columns">
                  <div className="container-fluid text-center text-md-start">
                    <div className="" style={{display:'flex'}}>
                      <div className="col-md-3 col-lg-3 foot-texts footer-logo mx-auto mb-4 mt-2">
                        <img className='img-fluid ' src={logo} alt="" />
                        <p style={{fontSize:'15px'}}>lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim. Amet consectetur adipisicing elit.</p>
                      </div>
                      <div style={{color:'white'}}>
                       <h2 style={{fontSize:'18px'}}>Contact Info</h2>
                       <p style={{fontSize:'16px'}}>51 St. Lukes Terrace, Sunderland SR4 6NF</p>
                       <h2 style={{fontSize:'18px'}}>Telephone Orders Welcome</h2>
                       <a href="tel:01915100176" style={{color:'#90E051', fontSize:'15px'}}>01915100176</a>
                      </div>
                      <div className="col-md-4 col-lg-3 mx-auto mb-4 foot-texts footer-quick-links">
                        {/* <h6 className="text-uppercase footer-heading footer-link-title fw-bold mb-4">Explore</h6> */}
                        <div className="">
                          <div className="col-md-8 explore-text">
                            <p><Link to="/" className="text-reset"><i className="ri-arrow-right-s-line"></i> Home</Link></p>
                            <p><Link to="/menu" className="text-reset"><i className="ri-arrow-right-s-line"></i> Terms & Conditions</Link></p>
                            <p><Link to="/privacy-policy" className="text-reset"><i className="ri-arrow-right-s-line"></i> Privacy Policy</Link></p>
                          </div>
                          <div className="col-md-8 explore-text">
                            <p><a href={`/my-orders/${user?._id}`} className="text-reset"><i className="ri-arrow-right-s-line"></i>My Order</a></p>
                            <p><Link to="/cookie-policy" className="text-reset"><i className="ri-arrow-right-s-line"></i> Cookie Policy </Link></p>
                            <p><Link to="/service-disclaimer" className="text-reset"><i className="ri-arrow-right-s-line"></i> Service Disclaimer</Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="col-12 d-flex justify-content-center">
                  <p className="copyright foot-texts"> Pizza Uno Sunderland © {year}. All rights reserved. Designed By Takeaway Apps, EPOS - eTakeaway Max</p>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer