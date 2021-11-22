import React from "react";

import "../styles/Button.css";

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

	if (startIcon) {
		return (
			<button
				className={`${colors[color]} ${shadow} ${sizes[size]}`}
				disabled={disabled}
			>
				<div className="icon-button">
					<div>{text}</div>
					<div>heh</div>
				</div>
			</button>
		);
	} else if (endIcon) {
		return (
			<button
				className={`${colors[color]} ${shadow} ${sizes[size]}`}
				disabled={disabled}
			>
				<div className="icon-button">
					<div>heh</div>
					<div>{text}</div>
				</div>
			</button>
		);
	}

	return (
		<button
			className={`${colors[color]} ${shadow} ${sizes[size]}`}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
