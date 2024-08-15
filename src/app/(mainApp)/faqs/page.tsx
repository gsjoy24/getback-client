import FaqItem from '@/components/FaqItem/FaqItem';
import PageTitle from '@/components/Shared/PageTitle';
import TagIcon from '@mui/icons-material/Tag';
import { Container, Divider, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
type TData = {
	category: string;
	questions: {
		question: string;
		answer: string;
	}[];
}[];

const data: TData = [
	{
		category: 'General Questions',
		questions: [
			{
				question: 'What is this website for?',
				answer:
					'This website is designed to help people report and find lost and found items. Users can post details about items they have lost or found, and browse through other posts to help reunite owners with their belongings.'
			},
			{
				question: 'How do I use the website?',
				answer:
					'Simply sign up for an account, then you can post details about a lost or found item. You can also search through the listings to see if someone has found your lost item or to help reunite found items with their owners.'
			},
			{
				question: 'Is this website free to use?',
				answer:
					'Yes, this website is completely free to use. There are no fees or charges for posting or searching for lost and found items.'
			},
			{
				question: 'How can I help someone find their lost item?',
				answer:
					'If you come across a lost item that you think belongs to someone else, you can report it on the website. Provide a detailed description of the item, where you found it, and any identifying features. This can help the rightful owner recognize their item and claim it.'
			},
			{
				question: 'How can I increase the chances of finding my lost item?',
				answer:
					'To increase the chances of finding your lost item, provide as much detail as possible in your post. Include a description of the item, where it was last seen, and any identifying features. You can also upload photos to help others identify the item.'
			}
		]
	},
	{
		category: 'Posting Lost Items',
		questions: [
			{
				question: 'How do I report a lost item?',
				answer:
					"To report a lost item, click on the 'Report Lost Item' button on the homepage. Fill out the form with details about the item, including a description, where it was last seen, and any identifying features. You can also upload maximum 5 photos of the item to help others identify it."
			},
			{
				question: 'Can I edit my lost item post?',
				answer:
					'Yes, you can edit your post by going to your profile, click on the three dots icon on the post card and click on edit, and make the necessary changes.'
			},
			{
				question: 'What should I do if someone claims my lost item?',
				answer:
					'If someone claims your lost item, verify their claim with details about the item that only the owner would know. Arrange a safe location to retrieve the item, such as a public place.'
			},
			{
				question: 'Can I delete my lost item post?',
				answer:
					'Yes, you can delete your post by going to your profile, click on the three dots icon on the post card and click on delete.'
			}
		]
	},
	{
		category: 'Posting Found Items',
		questions: [
			{
				question: 'How do I report a found item?',
				answer:
					"To report a found item, click on the 'Report Found Item' button on the homepage. Provide a detailed description of the item, where you found it, and any identifying features. Uploading maximum 5 photos can also help the rightful owner recognize their item."
			},
			{
				question: 'What should I do if someone claims the item I found?',
				answer:
					'If someone claims the item you found, verify their claim with the details they provided about the item that only the owner would know. Arrange a safe location to return the item, such as a public place.'
			},
			{
				question: 'Can I edit my found item post?',
				answer:
					'Yes, you can edit your post by going to your profile, click on the three dots icon on the post card and click on edit, and make the necessary changes.'
			},
			{
				question: 'What if the owner of the item I found doesn’t claim it?',
				answer:
					'If the owner of the item you found doesn’t claim it within a reasonable time frame, you can keep the item or donate it to a local charity. Make sure to follow the laws and regulations in your area regarding found items.'
			},
			{
				question: 'How long should I wait before keeping the item I found?',
				answer:
					'It is recommended to wait at least 30 days before keeping the item you found. This allows the owner enough time to see your post and claim their item. If the owner doesn’t claim the item within that time frame, you can consider it yours.'
			},
			{
				question: 'Can I delete my found item post?',
				answer:
					'Yes, you can delete your post by going to your profile, click on the three dots icon on the post card and click on delete.'
			},
			{
				question: 'What if the item I found is valuable or sensitive?',
				answer:
					'If the item you found is valuable or sensitive, such as a wallet or identification documents, you should take extra precautions to ensure the item is returned to the rightful owner. You can contact the local authorities or relevant organizations for guidance on how to handle the situation.'
			},
			{
				question: 'What should I do if I find a pet?',
				answer:
					'If you find a lost pet, you can report it as a found item on the website. Provide a detailed description of the pet, including breed, color, and any identifying features. You can also upload photos to help the owner identify their pet. Additionally, you can contact local animal shelters, veterinarians, and online pet databases to report the found pet and help reunite it with its owner.'
			}
		]
	},
	{
		category: 'Searching for Items',
		questions: [
			{
				question: 'How do I search for a lost or found item?',
				answer:
					'Use the search bar at the top of the item page to enter keywords related to the item you’re looking for, such as name, description, location and more. You can filter the results by category narrow down your search.'
			},
			{
				question: 'What if I can’t find my lost item on the website?',
				answer:
					'If you don’t see your lost item listed, make sure to post a detailed report about it. Additionally, check back regularly as new items are posted frequently.'
			},
			{
				question: 'What if I find my lost item?',
				answer:
					'If you find your lost item, you can mark your item as found by click on the three dots icon on the post card and click on mark as found. This will remove your post from the listings.'
			}
		]
	},
	{
		category: 'Account Management',
		questions: [
			{
				question: 'How do I create an account?',
				answer:
					"Click on the 'Sign Up' button at the top of the page and fill out the registration form with your email address and a password. Once you’ve completed the form, you’ll receive a confirmation email to verify your account."
			},
			{
				question: 'How do I reset my password?',
				answer:
					"If you’ve forgotten your password, click on the 'Forgot Password' link on the login page. Enter your email address, and you’ll receive instructions on how to reset your password."
			},
			{
				question: 'How do I change my password?',
				answer:
					'You can change your password by going to your profile page, click on the change password option. Enter your current password and the new password you would like to use. Click on the button change password to update your password.'
			},
			{
				question: 'How do I update my profile information?',
				answer:
					'You can update your profile information by going to your profile page, click on the edit profile option. You can update your name, email address, profile picture, and other details. Click on the save button to update your profile information.'
			},
			{
				question: 'How do I change my email address?',
				answer:
					'You can change your email address by going to your profile page, click on the change email option. Enter your new email address and click on the button change email to update your email address.'
			}
		]
	},
	{
		category: 'Safety and Privacy',
		questions: [
			{
				question: 'Is my personal information safe on this website?',
				answer:
					'Yes, we take your privacy seriously. Your personal information is protected and only used to facilitate the process of reuniting lost and found items. For more details, please review our Privacy Policy.'
			},
			{
				question: 'What precautions should I take when meeting someone to exchange an item?',
				answer:
					'Always meet in a public place, bring a friend if possible, and inform someone you trust about the meeting details. Avoid sharing personal information like your home address.'
			},
			{
				question: 'How can I report suspicious activity on the website?',
				answer:
					'If you encounter any suspicious activity or posts on the website, please report them immediately through the contact us page. Our team will investigate the matter and take appropriate action.'
			},
			{
				question: 'How can I protect my account from unauthorized access?',
				answer:
					'To protect your account, use a strong password that includes a combination of letters, numbers, and special characters. Avoid sharing your password with others and log out of your account when using a shared device.'
			},
			{
				question: 'How can I delete my account?',
				answer:
					'You can delete your account by going to your profile page, click on delete account. Please note that this action is irreversible and will permanently delete all your data.'
			},
			{
				question: 'How can I report a user?',
				answer:
					'If you encounter a user who is violating our terms of service or engaging in suspicious activity, you can report them by clicking on the three dots icon on their profile and selecting the report option. Our team will investigate the matter and take appropriate action.'
			}
		]
	},
	{
		category: 'Support',
		questions: [
			{
				question: 'How can I contact customer support?',
				answer:
					"If you need assistance, you can contact our customer support team by clicking on the 'Contact Us' link at the bottom of the page. Fill out the form with your inquiry, and we’ll get back to you as soon as possible."
			},
			{
				question: 'What should I do if I encounter a problem on the website?',
				answer:
					"If you experience any issues or technical difficulties, please report them through the 'Contact Us' page. Provide as much detail as possible about the problem, and our support team will assist you."
			},
			{
				question: 'How can I provide feedback about the website?',
				answer:
					'We welcome your feedback to help us improve our services. You can send us your suggestions and comments through the contact us page.'
			}
		]
	}
];

export const metadata: Metadata = {
	title: 'GetBAck: FAQs - Find Answers to Common Questions About Reporting and Recovering Lost and Found Items.',
	description:
		'GetBAck: Find Answers to Common Questions About Reporting and Recovering Lost and Found Items. Learn How to Use the Website, Report Lost and Found Items, and More. Get Help Now!'
};

const FaqsPage = () => {
	return (
		<Container
			maxWidth='md'
			sx={{
				py: 4
			}}
		>
			<PageTitle
				title='FAQs'
				desc='Find Answers to Common Questions About Reporting and Recovering Lost and Found Items.'
			/>
			<Divider sx={{ my: 4 }} />
			{data.map((category) => (
				<Stack key={category?.category}>
					<Typography
						variant='h5'
						sx={{
							display: 'flex',
							alignItems: 'center',
							my: 2
						}}
					>
						<TagIcon sx={{ fontSize: '30px' }} /> {category.category}
					</Typography>
					{category?.questions.map((faq) => (
						<FaqItem key={faq?.question} question={faq?.question} answer={faq?.answer} />
					))}
				</Stack>
			))}
		</Container>
	);
};

export default FaqsPage;
