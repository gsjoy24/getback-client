'use client';
import { useParams } from 'next/navigation';

const EditClaim = () => {
	const { id } = useParams<{ id: string }>();
	return (
		<div>
			<h1>This is EditClaim component</h1>
		</div>
	);
};

export default EditClaim;
