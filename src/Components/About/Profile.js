import React from "react";
import data from "../../Static/dataProfile";
import "./css/Style.css";
import ProfilePlaceholder from "../../Assets/Graphics/KittyPlaceholder.svg";

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
            <h3 style={{ color: item.Color }}>{item.Name}</h3>
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
            <img src={ProfilePlaceholder} alt={item.ProfilePicAlt} />
          </div>
        </li>
      ))}
    </section>
  );
});
export default PersonProfile;
