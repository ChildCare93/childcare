import React from 'react';
import logo from '../../assets/images/cco_logo.jpeg';

const Footer = () => {
    return (
        <footer class="site-footer" id="section_6">
            <div className=' site-footer-top'>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-12 mb-4">
                            <img src={logo} class="logo m-2 img-fluid" alt="" height="100px" />
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-4">
                            <h5 class="site-footer-title mb-3">Quick Links</h5>

                            <ul class="footer-menu">
                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Our Story</a></li>
                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Causes</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mx-auto">
                            <h5 class="site-footer-title mb-3">Contact Infomation</h5>

                            <p class="text-white d-flex mb-2">
                                <i class="bi-telephone me-2"></i>

                                <p class="site-footer-link">
                                    {/*  */}
                                </p>
                            </p>

                            <p class="text-white d-flex">
                                <i class="bi-envelope me-2"></i>

                                <p class="site-footer-link">
                                    juturi_srinivas@yahoo.com
                                </p>
                            </p>

                            <p class="text-white d-flex mt-3">
                                <i class="bi-geo-alt me-2"></i>
                                SamataNagar, Prakasham District, Andhra Pradesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="site-footer-bottom">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-md-7 col-12">
                            <p class="copyright-text mb-0">Copyright © {new Date().getFullYear()} Child Care Org.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer