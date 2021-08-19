import React from 'react';
import MovieCards from './MovieCards';
import data from '../../Static/data';
export const Pitfalls = () => {
    const temp = 'Relevant Movies \n';
    return (
      <div>
      <h2 style={{float: 'left'}}>{temp}</h2>
      <ul style={{display: 'inline'}}> 
      {data.map(item =><li style={{float: 'left', marginRight:'1%', marginTop:'6em', listStyleType:'none'}}><MovieCards data={item}/></li>)}
      </ul>
      </div>
      
      );
  };
   