import React from 'react';
// import "../../componentsStyles/card.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
const DealsCard = (props) => {
	return (
		<div
			//   className="w-75"

			style={{ width: '250px' }}
		>
			<div>
				<img
					src={props?.item?.image || '/assets/doctor.png'}
					className='card-img-top'
					alt=''
				/>
			</div>
			<div className='bg-light p-3 des-container'>
				<div className='card-title'>
					<p>{props?.item?.title || 'title'}</p>
				</div>
				<div className='card-description'>
					<p>
						{props.item?.description ||
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa ipsum, at quis.'}
					</p>
				</div>
				{props.location.pathname === '/blog' ? (
					<div className='d-flex justify-content-end see-more '>
						<Link
							to='/blogdetails'
							state={{form:props?.item}}
							style={{textDecoration:'none', color:"#2EC2A5"}}
						>
							Read More<i className="bi bi-chevron-compact-right"></i>
						</Link>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default DealsCard;
