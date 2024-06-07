import { Container, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicyPage = () => {
		// as this content is not important, I took help from chatGPT to generate this content

	return (
		<Container maxWidth='md' sx={{ py: 6 }}>
			<Typography
				variant='h2'
				gutterBottom
				align='center'
				sx={{
					fontSize: {
						xs: '3rem',
						sm: '4rem'
					}
				}}
			>
				Privacy Policy
			</Typography>
			<Typography variant='body1' paragraph>
				At GetBack, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and
				disclose information about you when you use our website and services.
			</Typography>
			<Divider sx={{ my: 4 }} />
			<Typography variant='h4' gutterBottom>
				Information We Collect
			</Typography>
			<Typography variant='body1' paragraph>
				When you use our website, we may collect the following types of information:
			</Typography>
			<ul>
				<li>
					<strong>Personal Information:</strong> When you create an account or contact us, we may collect personal
					information such as your name, email address, and phone number.
				</li>
				<li>
					<strong>Usage Information:</strong> We may collect information about how you interact with our website, such
					as the pages you visit and the actions you take.
				</li>
				<li>
					<strong>Device Information:</strong> We may collect information about the device you use to access our
					website, such as your IP address, browser type, and operating system.
				</li>
				<li>
					<strong>Cookies and Similar Technologies:</strong> We may use cookies and similar technologies to collect
					information about your browsing behavior and preferences.
				</li>
			</ul>
			<Typography variant='h4' gutterBottom mt={4}>
				How We Use Your Information
			</Typography>
			<Typography variant='body1' paragraph>
				We may use the information we collect for various purposes, including to:
			</Typography>
			<ul>
				<li>Provide and personalize our services;</li>
				<li>Communicate with you, including responding to your inquiries and sending you important updates;</li>
				<li>Improve our website and services, including analyzing usage trends and optimizing content;</li>
				<li>Comply with legal obligations and enforce our terms of service;</li>
				<li>Protect the rights, property, and safety of our users and others.</li>
			</ul>
			<Typography variant='h4' gutterBottom mt={4}>
				Information Sharing and Disclosure
			</Typography>
			<Typography variant='body1' paragraph>
				We may share your information with third parties for various purposes, including:
			</Typography>
			<ul>
				<li>
					Service Providers: We may share your information with third-party service providers who help us operate our
					website and provide services.
				</li>
				<li>
					Legal Compliance: We may disclose your information in response to legal requests or to comply with applicable
					laws, regulations, or legal processes.
				</li>
				<li>
					Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your
					information may be transferred to the acquiring entity.
				</li>
			</ul>
			<Typography variant='body1' paragraph>
				We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
			</Typography>
			<Typography variant='h4' gutterBottom mt={4}>
				Your Choices
			</Typography>
			<Typography variant='body1' paragraph>
				You may have certain choices regarding the information we collect and how it is used:
			</Typography>
			<ul>
				<li>
					<strong>Account Information:</strong> You can update or delete your account information at any time by logging
					into your account settings.
				</li>
				<li>
					<strong>Cookies:</strong> You can set your browser to refuse all or some browser cookies, or to alert you when
					websites set or access cookies.
				</li>
				<li>
					<strong>Marketing Communications:</strong> You can opt out of receiving marketing communications from us by
					following the instructions in the communication.
				</li>
			</ul>
			<Typography variant='h4' gutterBottom mt={4}>
				Data Security
			</Typography>
			<Typography variant='body1' paragraph>
				We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access,
				disclosure, alteration, and destruction.
			</Typography>
			<Typography variant='h4' gutterBottom>
				Changes to this Privacy Policy
			</Typography>
			<Typography variant='body1' paragraph>
				We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting
				the updated policy on our website.
			</Typography>
			<Typography variant='h4' gutterBottom>
				Contact Us
			</Typography>
			<Typography variant='body1' paragraph>
				If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
				<Link href='mailto:gour.joy24@gmail.com' className='hover:underline underline-offset-4'>
					gour.joy24@gmail.com
				</Link>
				.
			</Typography>
		</Container>
	);
};

export default PrivacyPolicyPage;
