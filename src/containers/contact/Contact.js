import React from 'react'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <div>
      <div className='h-100 d-flex align-items-center justify-content-center mt-5'>
        <div>
          <h4>Address and contact details: </h4>
          <table className='table' >
            <tbody>
              <tr>
                <td>
                  <h6>Registered Postal Address:</h6>
                </td>
                <td>
                  <p>7-813 (3), Samata Nagar, Kurnool Road, <br />
                    Ongole – 2, Prakasham (Dist), <br />
                    Andhra Pradesh - 523002</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Contact person:</h6>
                </td>
                <td>
                  <p>Mr. J. Sreenivas Kumar (President – CCO)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Phone Number:</h6>
                </td>
                <td>
                  <p>+91-9346534647</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>E-mail:</h6>
                </td>
                <td>
                  <p>juturi_srinivas@yahoo.com</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  )

}

export default Contact