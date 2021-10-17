import React from "react";

export const PersonProfile = React.memo(function PersonProfile(props) {
  return (
    <section className="ProfileContainer">
      <div className={props.classTxt}>
        <h3>{props.data.Name}</h3>
        <p>{props.data.Bio}</p>
      </div>
      <div className={props.classImg}>
        <img src={props.data.ProfilePic} alt={props.data.ProfilePicAlt} />
      </div>
    </section>
  );
});
export default PersonProfile;
