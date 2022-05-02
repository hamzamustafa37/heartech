import React from 'react';
import { Col, Row } from 'reactstrap';
import Header from '../Components/Header';

const Heartech = () => {
	return (
		<>
			<Header />
			<Row className='p-5'>
				<Col md='6' lg='6' sm='12' xs='12'>
					<div className='text-section mt-5'>
					<div>
							<p className='first-head'>Find Best Clinics</p>
                            </div>
                            <div>
						<p className='second-head-bold'>For Better Solutions</p>
                        </div>
                        <div className='pera-div'>
						<p className='pera'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Viverra est donec congue consequat iaculis
							erat. Nibh risus ipsum platea duis gravida maecenas
							sed. Libero amet tincidunt etiam gravida id. Ac
							phasellus iaculis lacus purus, volutpat at erat.
						</p>
                        </div>
                        <button className='appoint-btn'>Schedule an Appointment</button>
					</div>
				</Col>

			
				<Col md='6' lg='6' sm='12' xs='12' >
                    <div className='imgsection'>
                <div className="imgcontainer d-flex justify-content-center">
  <img src="./assets/img/bgblue.png" alt="Cinque Terre" width="500" height="300" className="mt-5"/>
  <div className="center"><img src='/assets/img/doc.png' height="500" /></div>
                      </div>
                      </div>
				</Col>
			</Row>
		</>
	);
};

export default Heartech;
