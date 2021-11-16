import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import personCardStyles from '../styles/personcard.module.css'

export const PersonCards = React.memo(function PersonCards(props) {

  return (
    <a href={props.data.Links} target="_blank" rel="noreferrer" >
      <div className={`${personCardStyles.card}`} >
          <Image src={props.data.Image} alt={props.data.FirstName + ' ' +  props.data.LastName + ' photo'} layout="responsive" objectFit="cover" width={100} height={144} className={personCardStyles.cardImg}/>
          <h2 className={personCardStyles.title}>{props.data.FirstName + ' ' +  props.data.LastName }</h2>
          <h3 className={personCardStyles.timelineButton}>{props.data.Role}</h3>
      </div>
    </a>
  );
});
export default PersonCards