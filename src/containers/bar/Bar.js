import React from 'react';
import './Bar.css';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsYoutube } from 'react-icons/bs';

const Bar = () => {
    return (
        <div className='bar'>
            {/* <div className='container'> */}
            <div className='row'>
                <div className='col-md-8 d-flex align-items-center'>
                    <div className='d-flex align-items-center p-2'>
                        <div className='bar-icon p-2'><MdOutlineLocationOn /></div>
                        <div>SamataNagar, Prakasam District, Ongole Town, Andhra Pradesh</div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='bar-icon p-2'><HiOutlineMail /></div>
                        <div>ccare93@gmail.com</div>
                    </div>
                </div>
                <div className='col-md-4 d-flex align-items-center'>
                    {/* <div className='bar-icon px-4'><BsYoutube /></div> */}
                    {/* <div className='bar-icon px-4'>1</div>
                    <div className='bar-icon px-4'>1</div>
                    <div className='bar-icon px-4'>1</div> */}
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Bar