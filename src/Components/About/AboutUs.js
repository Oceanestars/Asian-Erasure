import React from "react";
import PersonProfile from "./Profile";
import "./css/Style.css";

export const AboutUs = () => {
  const title = "Our story";
  const ourStoryP =
    "2020 was an undoubtedly rough year for the AAPI community; Anti-AAPI American hate crimes shockingly increased almost 150% over the past year. Due to that, the AAPI community members has been continuously spreading their voices to fight for their rights and recognitions. Despite the horrifying challenges they face and the tremendous effort they put in, however, the AAPI community members are still underrepresented in politics, social media, and even Hollywood. One of the common examples is that many Asian characters are still casted by white actors or asian actors with random origin. Seeing talented asian actors being mistreated and marginalized in Hollywood, we felt compelled to create a fame of hall for these underrated Asian creators to show appreciation (check out the Trailblazers page) to their amazing works and contradict discrimination / micro-aggression (check out the Pitfalls page) in the industry.  ";
  // const listStyle =
  return (
    <main>
      <div className="OurStoryContainer">
        <h1>{title}</h1>
        <p> {ourStoryP}</p>
      </div>
      <div className="TeamMemberContainer">
        <h2>Team members</h2>
        <ul>
          <PersonProfile />
        </ul>
      </div>
    </main>
  );
};
