import Link from 'next/link';
const Footer = () => {
	return (
		<div className='py-100 bg-light'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-5'>
						<div className='footer-widget'>
							<div className='row'>
								<h5 className='mb-4'>KMC Solutions</h5>
								<div className='col-6'>
									<ul>
										<li>
											<Link href='/spaces'>Serviced Offices</Link>
										</li>
										<li>
											<Link href='/spaces'>Coworking Spaces</Link>
										</li>
										<li>
											<Link href='/spaces'>Private Office</Link>
										</li>
										<li>
											<Link href='/spaces'>Virtual Office</Link>
										</li>
									</ul>
								</div>
								<div className='col-6'>
									<ul>
										<li>
											<Link href='/spaces'>Clark</Link>
										</li>
										<li>
											<Link href='/spaces'>Iloilo</Link>
										</li>
										<li>
											<Link href='/spaces'>Alabang</Link>
										</li>
										<li>
											<Link href='/spaces'>Cebu</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='footer-widget'>
							<div className='row'>
								<h5 className='mb-4'>Locations</h5>
								<div className='col-6'>
									<ul>
										<li>
											<Link href=''>Makati</Link>
										</li>
										<li>
											<Link href=''>BGC</Link>
										</li>
										<li>
											<Link href=''>Ortigas City</Link>
										</li>
										<li>
											<Link href=''>Pasay</Link>
										</li>
										<li>
											<Link href=''>Mandaluyong</Link>
										</li>
									</ul>
								</div>
								<div className='col-6'>
									<ul>
										<li>
											<Link href=''>Clark</Link>
										</li>
										<li>
											<Link href=''>Iloilo</Link>
										</li>
										<li>
											<Link href=''>Alabang</Link>
										</li>
										<li>
											<Link href=''>Cebu</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-3'>
						<div className='footer-widget'>
							<h5 className='mb-4'>Company</h5>
							<ul>
								<li>
									<Link href=''>About Us</Link>
								</li>
								<li>
									<Link href=''>{`Careers`}</Link>
								</li>
								<li>
									<Link href=''>Company News</Link>
								</li>
								<li>
									<Link href=''>Blogs</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col mt-5'>
						<p>&copy; Copyright 2022 KMC Solutions - All Rights Reserved</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
