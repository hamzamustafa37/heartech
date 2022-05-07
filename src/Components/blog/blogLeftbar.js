import React from "react";
import { Col } from "reactstrap";


const BlogLeftbar =()=>{
    return(
        <>
        <Col lg='3' md='3' sm='12' xs='12'>
					<div className='left-content p-3'>
						<div className=' bg-light left-card'>
							<div className='card-title p-3'>
								<div className='share mt-3'>Share It</div>
								<div className=''> Lorem ipsum dolor</div>
							</div>
							<div className='card-img-top'>
								<img src='/assets/img/doc.png' alt='' />
							</div>
							<div className='social p-3'>
								<div className='date text-muted'>
									02, May 2021
								</div>
                                <div className='icons-img d-flex flex-row  mt-3'>
                                    <div className='f-img'>
                                        <img src="/assets/facebook.png" alt="facebook" height='25px'/>
                                    </div>
                                    <div className='f-img'>
                                        <img src="/assets/twitter.png" alt="twitter" height='25px'/>
                                    </div>
                                    <div className='f-img'>
                                        <img src="/assets/pinterest.png" alt="pinterest" height='25px'/>
                                    </div>
                                </div>
							</div>
						</div>
						<div className=' bg-light left-card mt-3'>
							<div className='card-img-top'>
								<img src='/assets/img/tree.png' alt=''  />
							</div>
							
						</div>
					</div>
				</Col>
        </>
    )
}


export default BlogLeftbar;