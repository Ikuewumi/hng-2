import { FC } from "react";
import "./index.scss";
interface Props {
	label: string,
	id: string,
	showIcon?: boolean
}

const CustomInput: FC<Props> = ({ label, id, showIcon }) => {
	return <div className="cinput-field" data-inputid={id}>
		<label htmlFor={id} className="cinput-label">{label}</label>
		<input id={id} type="text" className="cinput" required={true} />
		{showIcon ? <svg className="cinput-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19.5 2.30775V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.30775C1.80258 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H17.6923C18.1974 0.5 18.625 0.675 18.975 1.025C19.325 1.375 19.5 1.80258 19.5 2.30775ZM2 4.404H18V2.30775C18 2.23075 17.9679 2.16025 17.9038 2.09625C17.8398 2.03208 17.7693 2 17.6923 2H2.30775C2.23075 2 2.16025 2.03208 2.09625 2.09625C2.03208 2.16025 2 2.23075 2 2.30775V4.404ZM2 7.596V13.6923C2 13.7692 2.03208 13.8398 2.09625 13.9038C2.16025 13.9679 2.23075 14 2.30775 14H17.6923C17.7693 14 17.8398 13.9679 17.9038 13.9038C17.9679 13.8398 18 13.7692 18 13.6923V7.596H2Z" fill="black" />
		</svg> : ""}

	</div>
}

export default CustomInput
