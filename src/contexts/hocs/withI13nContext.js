import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/**
  HOC wrapper to 'provide' the i13n context as props
**/
export default function withI13nContext(Component) {
  return class ComponentWithI13nContext extends PureComponent {
    static contextTypes = {
      i13n: PropTypes.shape({
        executeEvent: PropTypes.func
      })
    };

    render() {
      const { i13n } = this.context;
      return (
        <Component i13n={i13n} {...this.props} />
      );
    }
  }
};
