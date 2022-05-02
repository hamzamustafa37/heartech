import React from 'react';
import { Nav, Container, NavbarBrand } from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<>

<nav className="navbar navbar-light bg-white px-5">
  <a className=" navbar-brand  " href="#">	<img
							src='/assets/img/htLogo.png'
							width='70'
							height='50'
							className='d-inline-block align-top m-2'
							alt='React Bootstrap logo'
						/></a>

  <div className=" justify-content-center" >
    <ul className="navbar-nav mr-auto d-flex flex-row ">
    <li>
								<a className='nav-link active mx-2'> Home</a>
							</li>
							<li>
								<a className='nav-link active mx-2'> Blog</a>
							</li>
   
    </ul>

  </div>
  <div className='justify-content-end'>
  <form className="form-inline my-2 my-lg-0 ">
    <button className="cs-btn whitebtn my-2 my-sm-0 mx-2" type="submit">Login</button>
    <button className="cs-btn greenbtn my-2 my-sm-0 mx-2" type="submit">Signup</button>

  </form>
  </div>
</nav>

			</>
	);
};

export default Header;
