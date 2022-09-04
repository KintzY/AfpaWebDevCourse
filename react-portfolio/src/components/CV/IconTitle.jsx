import React from 'react';

const IconTitle = ({ text }) => {
	return (
		<div className={'section-main'}>
			<div className={'frame frame--small'}>
				<span>{text[0].toUpperCase()}</span>
			</div>
			<h3 className={'section-header'}>{text}</h3>
		</div>
	);
};

export default IconTitle;