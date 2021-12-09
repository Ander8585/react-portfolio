import React from "react";
import "./SkillBar.css";

const SkillBar = ({ children = "", value = "0" }) => {
	return (
		<div className="progress">
			<p>
				<b>{children}</b>
				<b>{`${value}%`}</b>
			</p>
			<progress value={value} min="0" max="100"></progress>
		</div>
	);
};

export default SkillBar;
