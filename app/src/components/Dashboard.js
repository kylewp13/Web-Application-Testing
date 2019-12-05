import React from 'react';

const DashBoard = (props) => {
  return ( 
    <div>
      <button data-testid='btnStrikes' onClick={props.handleStrikes}>strikes</button>
      <button onClick={props.handleBalls}>ball</button>
      <button onClick={props.handleFoul}>foul</button>
      <button onClick={props.handleHit}>hit</button>
    </div>
   );
}
 
export default DashBoard;