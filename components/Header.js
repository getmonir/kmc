import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
	RiCloseCircleLine,
	RiMenu2Fill,
	RiLinkedinBoxFill,
	RiTwitterFill,
	RiGithubFill,
	RiInstagramLine,
	RiFacebookCircleFill,
} from 'react-icons/ri';
const Header = () => {
	const [stickyClass, setStickyClass] = useState('relative');
	useEffect(() => {
		window.addEventListener('scroll', stickNavbar);

		return () => {
			window.removeEventListener('scroll', stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			windowHeight > 80 ? setStickyClass('fixed-header') : setStickyClass('relative');
		}
	};
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<header className={`header ${stickyClass}`}>
			<div className='container'>
				<div className='navbar'>
					<div className='navbar__logo'>
						<Link href='/'>KMC</Link>
					</div>
					<ul className={click ? 'navbar__nav active' : 'navbar__nav'}>
						<li className='option' onClick={closeMobileMenu}>
							<Link href='/spaces'>KMC Spaces </Link>
						</li>

						<li className='option' onClick={closeMobileMenu}>
							<Link href='/spaces'>KMC Teams </Link>
						</li>

						<li className='option' onClick={closeMobileMenu}>
							<Link href='/spaces'>KMC Enterprise </Link>
						</li>

						<li className='option' onClick={closeMobileMenu}>
							<Link href='/spaces'>About </Link>
						</li>
						<li className='option' onClick={closeMobileMenu}>
							<Link href='/spaces'>Contact Us </Link>
						</li>
					</ul>
					<div className={click ? 'navbar__toggler active' : 'navbar__toggler'} onClick={handleClick}>
						{click ? <RiCloseCircleLine /> : <RiMenu2Fill />}
					</div>
				</div>
			</div>
			<div className={click ? 'mobile-body-overly active' : 'mobile-body-overly'} onClick={closeMobileMenu}></div>
		</header>
	);
};

export default Header;
