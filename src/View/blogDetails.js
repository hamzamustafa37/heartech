import React from 'react';
import { useLocation } from 'react-router';
import { Col, Row } from 'reactstrap';
import BlogLeftbar from '../Components/blog/blogLeftbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header';
const BlogDetails = (props) => {
	const location = useLocation();
	const { form } = location.state;
	console.log(form, 'this is good');
	return (
		<>
			<Row className='p-3'>
				<Header />
				<Col md='9' lg='9' sm='12' xs='12'>
					
					<div className='img-container mt-3 p-3'>
						<div className='img-card w-100 p-3'>
							<img
								src={form.image || '/assets/img/cover.png'}
								alt='cover'
								width='100%'
							/>
							<div className='bg-light date-upload p-2 ml-3 text-muted'>
								last Update<p>{form.date || '02, May 2021'}</p>
							</div>
						</div>
					</div>
					<div className='content-detail p-3'>
						<h3 className='p-3'>{form?.fullTitle ||'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat in consequat posuere et ornare lacus.'}</h3>
						<p className='p-3'>{form?.details||'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique quam sit cursus pulvinar. Dui sodales tristique eu cursus at magna vulputate amet sit. Venenatis dictumst in tellus, tempus. Enim phasellus suscipit consectetur gravida felis nulla. Ullamcorper risus odio donec in integer proin at est, cras. Tortor, scelerisque donec dolor, massa sapien enim, fermentum sed non. Est viverra natoque tristique ac morbi dignissim lacinia. Donec mattis ante dui sapien cum duis ut massa, mollis. Dui turpis lacus, leo mi bibendum. Gravida eget amet ut sit pellentesque tincidunt congue scelerisque purus. Morbi hac lacus nisi, elit, pellentesque. Quis eget iaculis turpis lectus tellus. Eget consequat odio risus, lacus tellus vestibulum eu. Pulvinar erat ultricies malesuada feugiat ipsum neque, auctor auctor.'}</p>
						<div className='images-content d-flex flex-row w-100'>
							<div className='right-img w-50 h-100 p-3'>
							<img src={form?.detailImg?.firstImg||'/assets/img/heartblue.png'} alt="" height="300px" width="100%"/>
							</div>
							<div className='left-img w-50 h-100 p-3' >
							<img src={form?.detailImg?.firstImg||'/assets/img/stethoscope.png'} alt="" width="100%" height="300px"/>
							</div>
	
						</div>
						<div className='p-3'>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique quam sit cursus pulvinar. Dui sodales tristique eu cursus at magna vulputate amet sit. Venenatis dictumst in tellus, tempus. Enim phasellus suscipit consectetur gravida felis nulla. Ullamcorper risus odio donec in integer proin at est, cras. Tortor, scelerisque donec dolor, massa sapien enim, 
								fermentum sed non. Est viverra natoque tristique ac morbi dignissim lacinia. Donec mattis ante dui sapien cum duis ut massa, mollis. Dui turpis lacus, leo mi bibendum. Gravida eget amet ut sit pellentesque tincidunt congue scelerisque purus. Morbi hac lacus nisi, elit, pellentesque. Quis eget iaculis turpis lectus tellus. Eget consequat odio risus, lacus tellus vestibulum eu. Pulvinar erat ultricies malesuada feugiat ipsum neque, auctor auctor.
								</p>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique quam sit cursus pulvinar. Dui sodales tristique eu cursus at magna vulputate amet sit. Venenatis dictumst in tellus, tempus. Enim phasellus suscipit consectetur gravida felis nulla. Ullamcorper risus odio donec in integer proin at est, cras. Tortor, scelerisque donec dolor, massa sapien enim, 
								fermentum sed non. Est viverra natoque tristique ac morbi dignissim lacinia. Donec mattis ante dui sapien cum duis ut massa, mollis. Dui turpis lacus, leo mi bibendum. Gravida eget amet ut sit pellentesque tincidunt congue scelerisque purus. Morbi hac lacus nisi, elit, pellentesque. Quis eget iaculis turpis lectus tellus. Eget consequat odio risus, lacus tellus vestibulum eu. Pulvinar erat ultricies malesuada feugiat ipsum neque, auctor auctor.
								</p>
							</div>
							<div className=' date-upload p-2 ml-3 text-muted'>
								<p style={{fontWeight:"bold" }}> {form.date || '02, May 2021'} </p>(22 shares)
							</div>
							<div className='icons-img d-flex flex-row'>
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
					
				</Col>
				<BlogLeftbar />
			</Row>
			<Footer />
		</>
	);
};

export default BlogDetails;
