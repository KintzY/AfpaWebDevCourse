import React from 'react';
import IconTitle from './IconTitle';

const Section = props => {
	return (
		<div className={`section ${props.extraClassName}`}>
			<IconTitle text={props.title} />
			{props.children}
		</div>
	);
};

export default Section;