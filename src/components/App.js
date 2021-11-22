import React from "react";
import Button from "./Button";

const App = () => {
	return (
		<div style={{ padding: "50px" }}>
			<div style={{ display: "flex", gap: "10px" }}>
				<Button
					text="Default"
					disableShadow={false}
					disabled={false}
					color="default"
					size="small"
				/>
				<Button
					text="Primary"
					disableShadow={false}
					disabled={false}
					color="primary"
					size="small"
				/>
				<Button
					text="Secondary"
					disableShadow={false}
					disabled={false}
					color="secondary"
					size="small"
				/>
				<Button
					text="Danger"
					disableShadow={false}
					disabled={false}
					color="danger"
					size="small"
				/>
				<Button
					text="Confirm"
					disableShadow={false}
					disabled={false}
					color="confirm"
					size="small"
				/>
			</div>
			<div style={{ display: "flex", gap: "10px" }}>
				<Button
					text="Default"
					disableShadow={false}
					disabled={false}
					color="default"
					size="small"
					startIcon
				/>
			</div>
		</div>
	);
};

export default App;
