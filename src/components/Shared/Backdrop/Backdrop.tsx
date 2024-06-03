import Loading from '@/components/Loading/Loading';

const LFBackdrop = () => {
	return (
		<div className='absolute top-0 right-0 h-full w-full bg-slate-50/75 z-10 backdrop-blur-md flex justify-center items-center'>
			<Loading />
		</div>
	);
};

export default LFBackdrop;
