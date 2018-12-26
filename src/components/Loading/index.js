import React, { Component } from 'react';

export default (loadingPropName, delay) => ComponentIn => {
  const ComponentOut = class extends Component {
    state = {
      timer: null,
      isDelayed: false
    };

    tryStartTimer = () => {
      this.setState({ isDelayed: false });

      if (this.props[loadingPropName]) {
        const timer = setTimeout(() => this.setState({ isDelayed: true }), delay);
        this.setState({ timer });
      }
    };

    componentDidMount() {
      this.tryStartTimer();
    }

    compoenntWillUnmount() {
      clearTimeout(this.state.timer);
    }

    componentDidUpdate(prevProps) {
      if (this.props[loadingPropName] !== prevProps[loadingPropName]) {
        clearTimeout(this.state.timer);
        this.tryStartTimer();
      }
    }

    render() {
      const { isDelayed } = this.state;

      if (isDelayed) {
        return <div>loading has being delayed</div>
      }

      if (this.props[loadingPropName]) {
        return <div>Loading</div>
      }

      return <ComponentIn {...this.props} isDelayed={isDelayed} />;
    }
  };

  ComponentOut.displayName = `withDelayHint(${ComponentIn.displayName || ComponentIn.name})`;

  return ComponentOut;
};
