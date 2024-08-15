import { Container, Divider, Typography } from '@mui/material';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
	title: 'Terms of Use - GetBack',
	description:
		'Welcome to GetBack! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.'
};

const TermsOfUsePage = () => {
	// as this content is not important, I took help from chatGPT to generate this content

	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Typography
				variant='h2'
				gutterBottom
				align='center'
				sx={{
					fontSize: {
						xs: '3rem',
						sm: '3.5rem'
					}
				}}
			>
				Terms of Use
			</Typography>
			<Typography variant='body1' paragraph>
				Welcome to GetBack! By accessing or using our website, you agree to comply with and be bound by the following
				terms and conditions of use. Please read these terms carefully before using our website.
			</Typography>
			<Divider sx={{ my: 4 }} />
			<Typography variant='h4' gutterBottom>
				1. Acceptance of Terms
			</Typography>
			<Typography variant='body1' paragraph>
				By accessing or using GetBack, you acknowledge that you have read, understood, and agree to be bound by these
				terms of use. If you do not agree to these terms, please do not use our website.
			</Typography>
			<Typography variant='h4' gutterBottom>
				2. Use License
			</Typography>
			<Typography variant='body1' paragraph>
				Permission is granted to temporarily download one copy of the materials (information or software) on Lost &
				Found for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
				title, and under this license you may not:
			</Typography>
			<ul>
				<li>modify or copy the materials;</li>
				<li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
				<li>attempt to decompile or reverse engineer any software contained on GetBack;</li>
				<li>remove any copyright or other proprietary notations from the materials; or</li>
				<li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
			</ul>
			<Typography variant='body1' paragraph>
				This license shall automatically terminate if you violate any of these restrictions and may be terminated by Get
				Back at any time. Upon terminating your viewing of these materials or upon the termination of this license, you
				must destroy any downloaded materials in your possession whether in electronic or printed format.
			</Typography>
			<Typography variant='h4' gutterBottom>
				3. User Content
			</Typography>
			<Typography variant='body1' paragraph>
				You acknowledge and agree that any content, including but not limited to text, images, or other material,
				provided by you on GetBack (User Content), will be deemed non-confidential and non-proprietary. By providing any
				User Content, you grant GetBack a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to
				use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content (in whole or in
				part) and to incorporate it into other works in any form, media, or technology now known or later developed,
				without compensation to you.
			</Typography>
			<Typography variant='h4' gutterBottom>
				4. Governing Law
			</Typography>
			<Typography variant='body1' paragraph>
				These terms and conditions are governed by and construed in accordance with the laws of the United States and
				you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
			</Typography>
			<Typography variant='h4' gutterBottom>
				5. Changes to Terms
			</Typography>
			<Typography variant='body1' paragraph>
				GetBack reserves the right to change these terms and conditions at any time without notice. By using our website
				you are agreeing to be bound by the then current version of these terms of use.
			</Typography>

			<Divider sx={{ my: 4 }} />
			<Typography variant='body1' paragraph>
				If you have any questions about these terms, please contact us at
			</Typography>
			<Typography variant='body1' paragraph>
				Email:{' '}
				<Link href='mailto:gour.joy@24@gmail.com' className='hover:underline underline-offset-4'>
					gour.joy@24@gmail.com
				</Link>
			</Typography>
			<Typography variant='body1' paragraph>
				Phone: (123) 456-7890
			</Typography>
			<Typography variant='body1' paragraph>
				Address: 1234 GetBack Way, New York, NY 10001
			</Typography>
		</Container>
	);
};

export default TermsOfUsePage;
