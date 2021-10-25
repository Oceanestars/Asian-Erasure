import React from "react";
import data from "../../Static/dataProfile";
import "./Style.css";

export const PersonProfile = React.memo(function PersonProfile() {
  return (
    <section>
      {data.map((item, index) => (
        <li key={index} className="ProfileContainer">
          <div
            style={item.style1}
            className={
              index % 2 == 0
                ? "BioContainer BioContainerLeft"
                : "BioContainer BioContainerRight"
            }
          >
            <h3>{item.Name}</h3>
            <p>{item.Bio}</p>
          </div>
          <div
            style={item.style2}
            className={
              index % 2 == 0
                ? "HeadshotContainer HeadshotContainerRight"
                : "HeadshotContainer HeadshotContainerLeftt"
            }
          >
            <img src={item.ProfilePic} alt={item.ProfilePicAlt} />
          </div>
        </li>
      ))}
    </section>
  );
});
export default PersonProfile;
