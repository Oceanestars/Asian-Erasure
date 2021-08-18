import React from 'react';
import MovieCards from './MovieCards';
import data from '../../Static/data';
export const Pitfalls = () => {
    const temp = 'Relevant Movies';
    return (
      <div>
      <h1>{temp}</h1>
      
      <ul>
      {data.map(item =><MovieCards data={item}/> )}
      </ul>
      </div>
      
      );
  };
   