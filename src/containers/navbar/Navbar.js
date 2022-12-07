import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/cco_logo.jpeg';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <div className='d-flex align-items-center'>
                        <div>
                            <img className='px-2' src={logo} alt="..." width="60" />
                        </div>
                        <div>
                            <div className='brand-name'>Child Care Organization</div>
                            <div className='brand-subTitle'>NON-PROFIT ORGANIZATION</div>
                        </div>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center d-flex">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/#section_1">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#section_3">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                What we Do
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/#section_5">ChildCare</a></li>
                                <li><a class="dropdown-item" href="/#section_5">Women Empowerment</a></li>
                                {/* <li><hr class="dropdown-divider" /></li> */}
                                <li><a class="dropdown-item" href="/#section_5">Horticulture / Agriculture</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact-us">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://razorpay.me/@childcareorganization" target="_blank">
                                <div className='donate'>Donate</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar