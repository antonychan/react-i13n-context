import React from 'react';

const Woot = props => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={props.handleClick}>
      Woot
    </div>
  );
}

export default Woot;
