import React from "react";
import ContactItem from "./ContactItem";
import IconTitle from "./IconTitle";
import ProfilePicture from './ProfilePicture';

const PersonalSection = ({
	imageUrl,
	fullName,
	title,
	about,
	hobbies,
	contactItems,
}) => {
  return (
    <div className={"info"}>
        <ProfilePicture imgUrl={imageUrl} />
      <h1 className={"name"}>{fullName}</h1>
      <h2 className={"title"}>{title}</h2>
      <div className={"about"}>
        <p>{about}</p>
        <p>{hobbies}</p>
      </div>
      <div className={"contact"}>
        <IconTitle text="Contact" />
        {contactItems.map((i) => (
          <ContactItem
            key={i.label}
            label={i.label}
            value={i.value}
            href={i.href}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalSection;
