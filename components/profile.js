import React from "react";
import data from "../public/Static/dataProfile";
import aboutStyles from "../styles/about.module.scss";
import Image from "next/image";

import ProfilePlaceholder1 from "../public/Assets/Images/Grace.svg";
import ProfilePlaceholder2 from "../public/Assets/Images/Oceane.svg";
import ProfilePlaceholder3 from "../public/Assets/Images/Dan.svg";


export default function PersonProfile() {
  var picArray = [ProfilePlaceholder1,ProfilePlaceholder2, ProfilePlaceholder3];
  // console.log(picArray[index].src);
  return (
    <section>
      {data.map((item, index) => (
        
        <li key={index} className={aboutStyles.ProfileContainer}>
          <div
            style={item.style1}
            className={
              index % 2 === 0
                ? aboutStyles.BioContainerLeft
                : aboutStyles.BioContainerRight
            }
          >
            <h3 style={{ color: item.Color }}>{item.Name}</h3>
            <p>{item.Bio}</p>
          </div>
          <div
            style={item.style2}
            className={
              index % 2 === 0
                ? aboutStyles.HeadshotContainerRight
                : aboutStyles.HeadshotContainerLeft
            }
          >
            <Image
              src={picArray[index].src}
              alt={item.ProfilePicAlt}
              width="400"
              height="500"
            />
          </div>
        </li>
      ))}
    </section>
  );
}
