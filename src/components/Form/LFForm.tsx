import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type TFormConfig = {
	resolver?: any;
};

type TLFFormProps = {
	children: React.ReactNode;
	onSubmit: SubmitHandler<FieldValues>;
	resetForm?: boolean;
} & TFormConfig;

const LFForm = ({ children, onSubmit, resolver, resetForm }: TLFFormProps) => {
	const formConfig: TFormConfig = {};

	if (resolver) {
		formConfig.resolver = resolver;
	}
	const methods = useForm(formConfig);
	const { handleSubmit, reset } = methods;
	const submit: SubmitHandler<FieldValues> = (data) => {
		onSubmit(data);
		resetForm && reset();
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(submit)}>{children}</form>
		</FormProvider>
	);
};

export default LFForm;
