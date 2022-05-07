import React from 'react';
import { Col, Row } from 'reactstrap';
import '../../styles/blogs.css';
import Deals from '../Deals/Deals';
import BlogLeftbar from './blogLeftbar';

const BlogList = () => {
	return (
		<>
			<Row className='p-3'>
				<Col lg='12' md='12' sm='12' xs='12'>
					<div className='titlePage p-2'>Blogs</div>
				</Col>
				<Col lg='9' md='9' sm='12' xs='12' className='mt-4'>
					<Deals />
					
				</Col>
				<BlogLeftbar/>
			</Row>
		</>
	);
};

export default BlogList;
