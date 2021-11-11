import React from "react";
import data from "../public/Static/dataProfile";
import aboutStyles from '../styles/about.module.css'
import Image from 'next/image'

import ProfilePlaceholder from "../public/Assets/Graphics/KittyPlaceholder.svg";

export default function PersonProfile() {
  return (
    <section>
      {data.map((item, index) => (
        <li key={index} className={aboutStyles.ProfileContainer}>
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
            <Image src="https://via.placeholder.com/350" alt={item.ProfilePicAlt} width="400" height="500"/>
          </div>
        </li>
      ))}
    </section>
  );
}

