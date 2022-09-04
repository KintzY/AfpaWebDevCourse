import React from "react";

const ContactItem = ({ href, label, value }) => {
  return (
    <div className={"contact-item"}>
      <span>{label}</span>
      {href ? <a href={href}>{value}</a> : <span>{value}</span>}
    </div>
  );
};

export default ContactItem;
