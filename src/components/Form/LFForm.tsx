import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type TFormConfig = {
	resolver?: any;
};

type TLFFormProps = { children: React.ReactNode; onSubmit: SubmitHandler<FieldValues> } & TFormConfig;

const LFForm = ({ children, onSubmit, resolver }: TLFFormProps) => {
	const formConfig: TFormConfig = {};

	if (resolver) {
		formConfig.resolver = resolver;
	}
	const methods = useForm(formConfig);
	const { handleSubmit, reset } = methods;
	const submit: SubmitHandler<FieldValues> = (data) => {
		onSubmit(data);
		reset();
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(submit)}>{children}</form>
		</FormProvider>
	);
};

export default LFForm;
