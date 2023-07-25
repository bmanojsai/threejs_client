import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
	const snap = useSnapshot(state);

	const generateStyles = (type) => {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: "#fff",
			};
		} else if (type === "outline") {
			return {
				borderWidth: "1px",
				borderColor: snap.color,
				color: getContrastingColor(snap.color),
			};
		}
	};

	return (
		<button
			className={`px-2 py-2 flex-1 rounded-md ${customStyles}`}
			onClick={handleClick}
			style={generateStyles(type)}
		>
			{title}
		</button>
	);
};

export default CustomButton;
