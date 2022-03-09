import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
			<meta name='keywords' content={keywords} />
			<meta name='author' content='Monir Hossain' />
			<meta name='description' content={description} />
			<title>{title}</title>
			<script async src={`https://www.googletagmanager.com/gtag/js?id=G-781TZL953Q`} />
			<script
				dangerouslySetInnerHTML={{
					__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', 'G-781TZL953Q');`,
				}}
			/>
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Coworking Spaces | Private Offices | Staff Leasing - Philippines',
	keywords: 'Coworking Spaces, Staffing ',
	description:
		'Private Offices for Rent, Coworking Spaces, Staffing, and Outsourcing Services Provider in Metro Manila, Cebu, and Iloilo, Philippines. Visit our website today.',
};

export default Meta;
