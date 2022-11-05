import React from 'react';
import './Home.css';
import WomenEmpowerment1 from '../../assets/images/20160309_180832.jpg';
import WomenEmpowerment2 from '../../assets/images/20180207_140925 (1).jpg';
import Agriculture1 from '../../assets/images/20200120_133356.jpg';
import Agriculture2 from '../../assets/images/20170725_114433.jpg';
import hands from '../../assets/images/icons/hands.png';
import receive from '../../assets/images/icons/receive.png';
import heart from '../../assets/images/icons/heart.png';
import teamImage from '../../assets/images/team.jpg';
import FarmImage from '../../assets/images/20170630_173123.jpg';
import ChildrenImage from '../../assets/images/children_study.jpeg';
import ChildrenEating from '../../assets/images/children_eating.jpeg';
import logo from '../../assets/images/cco_logo.jpeg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

const Home = () => {
  return (
    <div className='homeComponent'>
      <section className='mb-4' id="section_1">
        <div className='img-carousel'>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={WomenEmpowerment1} class="d-block w-100" alt="..." height="500px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Banzara Art Bags Making</h5>
                  {/* <p>Some representative placeholder content for the first slide.</p> */}
                </div>
              </div>
              <div class="carousel-item">
                <img src={ChildrenEating} class="d-block w-100" alt="..." height="500px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Mid Day Meal</h5>
                  {/* <p>Post Sewing machine training , distribution of certificates</p> */}
                </div>
              </div>
              <div class="carousel-item">
                <img src={WomenEmpowerment2} class="d-block w-100" alt="..." height="500px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Certificate Distribution</h5>
                  <p>Post Sewing machine training , distribution of certificates</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={Agriculture1} class="d-block w-100" alt="..." height="500px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>FPO Supported Activity</h5>
                  {/* <p>Some representative placeholder content for the third slide.</p> */}
                </div>
              </div>
              <div class="carousel-item">
                <img src={Agriculture2} class="d-block w-100" alt="..." height="500px" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Distribution of Ramb Lamb</h5>
                  <p>Distribution of ramb lamb to ST farmers supported by NABARD.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='img-carousel-overlap'>
          <div className='img-carousel-overlap-text'>be a Kind Heart</div>
        </div>
      </section>

      <section className='mb-4' id="section_2">
        <div>
          <div className='container'>
            <h2 className='text-center'>Welcome to Child Care Organization</h2>
            <div className='d-flex justify-content-around'>
              <div className='card'>
                <img src={heart} alt="hands" className='card-image' />
                <a className='card-text'><span className='card-text-bold'>Caring</span> Earth</a>
              </div>
              <div className='card'>
                <img src={receive} alt="hands" className='card-image' />
                <a className='card-text' href="https://razorpay.me/@childcareorganization" target="_blank">Make a <span className='card-text-bold'>Donation</span></a>
              </div>
              <div className='card'>
                <img src={hands} alt="hands" className='card-image' />
                <a className='card-text' href="#section_6">Become a <span className='card-text-bold'>Volunteer</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-4' id="section_3">
        <div>
          <div className='custom-container'>
            <div className='d-flex ourStorySection'>
              <div className='p-2'>
                <img src={teamImage} alt="team-image" className='team-image' />
              </div>
              <div className='m-2'>
                <div className='OurStoryBrief'>
                  <div className='heading2 mb-1'>Our Story</div>
                  <div className='subheading mb-3'>Child Care Organization, Non-Profit Organization</div>
                  <div>
                    We have started Child Care Organization, a Non-Profit organization in 1993 to support and help Differently Abled Children in
                    their education and livelyhood. But have expanded to help women by conducting trainings on sewing machine and some small scale
                    works for their financial stability and with help of NABARD we have taken to help farmers and Rural tribes in farming trainings
                    in using organic and natural pesticides and in practicing organic farming.
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='OurStoryBrief'>
                    <div className='heading2 mb-1'>Our Mission</div>
                    <div className=''>Our Mission is to</div>
                    <div>
                      <ul>
                        <li>To help and Support Disabled and Needy Children.</li>
                        <li>To Empower Women.</li>
                        <li>To Educate & help Farmers and rural tribes.</li>
                      </ul>
                    </div>
                  </div>
                  <div className='OurStoryBrief px-4'>
                    <div className='foundedYear'>1993</div>
                    <div className='foundedYearTitle'> Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section section-padding section-bg" id="section_4">
        <div className='circleTop'></div>
        <div className='circleBottomBg'></div>
        <div className='circleBottomFg'></div>
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-5 col-12 ms-auto">
              <h2 class="heading2 mb-0">Make an impact. <br /> Save lives.</h2>
            </div>
            <div class="col-lg-5 col-12">
              <a href="" class="makeaDonationText me-4">Make a donation</a>
              <a href="https://razorpay.me/@childcareorganization" target="_blank" class="btn btn-outline-success">Donate</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding" id="section_5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center mb-4">
              <h2>Our Causes</h2>
            </div>
            <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div class="custom-block-wrap">
                <img src={ChildrenImage}
                  class="custom-block-image img-fluid" alt="" />
                <div class="custom-block">
                  <div class="custom-block-body">
                    <h5 class="mb-3">Children Education</h5>
                    <p>We take in children that needs special attention with Disabilities and need some patience and give them the chance of education.</p>
                  </div>
                  <a href="https://razorpay.me/@childcareorganization" target="_blank" class="custom-btn btn">Donate now</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div class="custom-block-wrap">
                <img src={WomenEmpowerment2}
                  class="custom-block-image img-fluid" alt="" />

                <div class="custom-block">
                  <div class="custom-block-body">
                    <h5 class="mb-3">Women Empowerment</h5>

                    <p>We help in improving livelihood of village women by conducting trainings and workshops for them to have income and have acheive financial Stability.</p>
                  </div>

                  <a href="https://razorpay.me/@childcareorganization" target="_blank" class="custom-btn btn">Donate now</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
              <div class="custom-block-wrap">
                <img src={Agriculture2}
                  class="custom-block-image img-fluid" alt="" />

                <div class="custom-block">
                  <div class="custom-block-body">
                    <h5 class="mb-3">Helping Farmers</h5>

                    <p>We Educate and help Farmers and Rural tribes by conducting trainings and give them land and pesticides to farm and have thier livelyhood.
                    </p>
                  </div>

                  <a href="https://razorpay.me/@childcareorganization" target="_blank" class="custom-btn btn">Donate now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
                  <li class="footer-menu-item"><a href="#section_3" class="footer-menu-link">Our Story</a></li>
                  <li class="footer-menu-item"><a href="#section_5" class="footer-menu-link">Causes</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 col-12 mx-auto">
                <h5 class="site-footer-title mb-3">Contact Infomation</h5>

                <p class="text-white d-flex mb-2">
                  <div class=" me-2"><BsTelephoneFill /></div>

                  <p class="site-footer-link">
                  +91 85004 97940
                  </p>
                </p>

                <p class="text-white d-flex">
                  <div class="me-2"> <AiOutlineMail /></div>

                  <p class="site-footer-link">
                  ccare93@gmail.com
                  </p>
                </p>

                <p class="text-white d-flex mt-3">
                  <div class=" me-2"><GoLocation /></div>
                  SamataNagar, Prakasam District, Ongole Town, Andhra Pradesh
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
    </div>
  )
}

export default Home 