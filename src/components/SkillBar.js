import React from "react";
import "./SkillBar.css";

const SkillBar = ({ data = null }) => {
	return (
		data && (
			<div className="progress">
				<div>
					<b>
						{data.subData ? (
							<>
								<nav className="sub-progress">
									<details>
										<summary>
											{data.logo && data.logo}
											{data.title}
										</summary>
										{data.subData &&
											data.subData.map((el, index) => (
												<SkillBar key={index} data={el} />
											))}
									</details>
								</nav>
							</>
						) : (
							<>
								{data.logo && data.logo}
								{data.title}
							</>
						)}
					</b>
					<b>{`${data.value}%`}</b>
				</div>
				<progress value={data.value} min="0" max="100"></progress>
			</div>
		)
	);
};

export default SkillBar;
