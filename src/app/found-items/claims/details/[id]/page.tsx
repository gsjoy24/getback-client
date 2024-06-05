'use client';
import { useParams } from 'next/navigation';

const ClaimDetails = () => {
	const { id } = useParams<{ id: string }>();
	console.log(id);
	return (
		<div>
			<h1>This is ClaimDetails component</h1>
		</div>
	);
};

export default ClaimDetails;
