import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/*
          Passes down props to all children components with react-router
          Usually you could do <ChildComponent ...this.props />
        */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
