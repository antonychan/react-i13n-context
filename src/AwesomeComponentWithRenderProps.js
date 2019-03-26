import React, { PureComponent } from 'react';

import { CoolContext } from './contexts/CoolContext';
import Woot from './Woot';
import withI13nContext from './contexts/hocs/withI13nContext';

const withCoolerContext = Component => props => (
  <CoolContext.Consumer>
    {
      foreground => (
        <Component foreground={foreground} {...props} />
      )
    }
  </CoolContext.Consumer>
);

class AwesomeComponentWithRenderProps extends PureComponent {
  handleClick = () => {
    console.log(this.props);
  }

  render() {
    return (
      <Woot handleClick={this.handleClick}/>
    );
  }
}

export default withI13nContext(withCoolerContext(AwesomeComponentWithRenderProps))
