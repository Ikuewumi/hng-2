import "./index.scss";
interface Props {
	label: string,
	id: string
}

const CustomInput = ({ label, id }: Props) => {
	return <div className="cinput-field" data-inputid={id}>
		<label htmlFor={id} className="cinput-label">{label}</label>
		<input id={id} type="text" className="cinput" required={true} />
	</div>
}

export default CustomInput
