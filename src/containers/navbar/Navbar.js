import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/cco_logo.jpeg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center d-flex">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#section_1">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#section_3">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                What we Do
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#section_5">ChildCare</a></li>
                                <li><a className="dropdown-item" href="/#section_5">Women Empowerment</a></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><a className="dropdown-item" href="/#section_5">Horticulture / Agriculture</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">
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