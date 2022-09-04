import React from 'react';

const ProfilePicture = ({ imgUrl }) => {
	return (
		<div className={'info-picture'}>
			<div className={'frame'}>
				<div className={'photo-wrapper'}>
					<img className="photo" src={imgUrl} alt="avatar"/>
				</div>
			</div>
		</div>
	);
};

export default ProfilePicture;