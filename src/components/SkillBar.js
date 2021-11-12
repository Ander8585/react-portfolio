import React from "react";
import "./SkillBar.css";

const SkillBar = ({ children, value }) => {
	return (
		<div className="progress">
			<p>
				<b>{children /* Desarrollo <i>Web Backend</i> */}</b>
				<b>{`${value}%`}</b>
				{/* 5 */}
			</p>
			<progress value={value} min="0" max="100"></progress>
		</div>
	);
};

export default SkillBar;
