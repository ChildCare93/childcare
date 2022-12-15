import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { PayPalButton } from "react-paypal-button-v2";

const Payments = () => {

    const [key, setKey] = useState('internationalPayments');
    const [toDonateAmt, setToDonateAmt] = useState();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        console.log(toDonateAmt);
    }, [clicked, toDonateAmt])

    return (
        <div className='container mt-5'>
            <div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="internationalPayments" title="International Payments">
                        <div className='d-flex justify-content-center align-items-center mb-5'>
                            <div className='mt-3 d-flex align-items-center'>
                                <div className='font-weight-bold'> Amount You Wish to donate</div>
                                <div>(in USD)</div>
                                <input className='mx-2' type="number" value={toDonateAmt} onChange={(e) => { setToDonateAmt(e.target.value) }} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <PayPalButton
                                options={{
                                    clientId: "AXMkJeXRDYeMH3YNjYTj3x_eECVClpS9LjRWlec4Dnj0xNtgluFysTLDelVoP3xnjraqWPIOuNY_yHwp",
                                    currency: "USD",
                                }}
                                amount={`${parseFloat(toDonateAmt).toFixed(2)}`}
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                onSuccess={(details, data) => {
                                    alert("Transaction completed by " + details.payer.name.given_name);
                                    // console.log({ details, data })
                                }}
                            />
                        </div>
                    </Tab>
                    <Tab eventKey="domesticPayments" title="Domestic Payments">
                        <div className='d-flex justify-content-center align-items-center'>
                            <a href="https://razorpay.me/@childcareorganization" target="_blank" className="btn btn-outline-success">Donate Now</a>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Payments