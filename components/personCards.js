import React from 'react';
import Image from 'next/image'
import personCardStyles from '../styles/personcard.module.scss'

export const PersonCards = React.memo(function PersonCards(props) {

  return (
    <a href={props.data.Links} target="_blank" rel="noreferrer" >
      <div className={`${personCardStyles.card}`} >
          <Image src={props.data.Image} alt={props.data.FirstName + ' ' +  props.data.LastName + ' photo'} layout="responsive" objectFit="cover" width={100} height={144} className={personCardStyles.cardImg}/>
          <h2 className={personCardStyles.title}>{props.data.FirstName + ' ' +  props.data.LastName }</h2>
          <h3 className={personCardStyles.timelineButton}>{props.data.Role}</h3> <br></br> 
      </div>
    </a>
  );
});
export default PersonCards