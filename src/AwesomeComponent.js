import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { CoolContext } from './contexts/CoolContext';
import Woot from './Woot';

export default class AwesomeComponent extends PureComponent {
  static contextType = CoolContext;
  static contextTypes = {
    i13n: PropTypes.shape({
      executeEvent: PropTypes.func
    })
  };

  handleClick = () => {
    console.log(this.context);
  }

  render() {
    return (
      <Woot handleClick={this.handleClick}/>
    );
  }
}
