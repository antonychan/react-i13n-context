import React, { useContext } from 'react';

import { CoolContext } from './contexts/CoolContext';
import withI13nContext from './contexts/hocs/withI13nContext';
import Woot from './Woot';

const AwesomeComponentWithUseContext = props => {
  const coolContext = useContext(CoolContext);

  const handleClick = () => {
    console.log(coolContext);
    console.log(props);
  }

  return (
    <Woot handleClick={handleClick}/>
  );
};

export default withI13nContext(AwesomeComponentWithUseContext);
