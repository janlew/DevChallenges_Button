import React from "react";
import { done } from "material-design-icons";

import "../styles/Button.css";

const types = {
	normal: "",
	outline: "outline",
	text: "text",
};

const colors = {
	default: "default",
	primary: "primary",
	secondary: "secondary",
	danger: "danger",
	confirm: "confirm",
};

const sizes = {
	small: "",
	medium: "medium",
	big: "big",
};

const Button = ({
	text,
	type,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	size,
	color,
	...props
}) => {
	const shadow = disableShadow ? "" : "shadow";
	const chosenClass = `${colors[color]} ${shadow} ${sizes[size]} ${types[type]}`;

	if (startIcon) {
		return (
			<button className={chosenClass} disabled={disabled}>
				<div className="icon-button">
					<div>
						<span class="material-icons">{startIcon}</span>
					</div>
					<div>{text}</div>
				</div>
			</button>
		);
	} else if (endIcon) {
		return (
			<button className={chosenClass} disabled={disabled}>
				<div className="icon-button">
					<div>{text}</div>
					<div>
						<span class="material-icons">{endIcon}</span>
					</div>
				</div>
			</button>
		);
	}

	return (
		<button className={chosenClass} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
