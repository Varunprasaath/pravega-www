import React, { PropTypes } from 'react';

class Container {
  render() {
    return (
      <div>
        <SmartComponent>
          <div>1</div>
          <div>2</div>
        </SmartComponent>
        <SmartComponent>
          <div>Hi</div>
          <div>Ho</div>
        </SmartComponent>
      </div>
    );
  }
}

class SmartComponent {

  static propTypes = {
    children: PropTypes.array.isRequired
  }
  render() {
    const first = this.props.children[0];
    const second = this.props.children[1];

    const firstMod = React.cloneElement(first, {
      className: 'color-red'
    });

    const secondMod = React.cloneElement(second, {
      className: 'color-blue'
    });

    return (
      <div>
        {firstMod}
        {secondMod}
      </div>
    );
  }
}

export default Container;
