import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // tool: https://www.google.com/search?q=why+did+you+update&rlz=1C5CHFA_enUS877US877&oq=why+did+you+update+&aqs=chrome.0.0l8.4905j0j1&sourceid=chrome&ie=UTF-8
    // the way to not re-render the component
    return false;
  }

  render() {
    return <h1 className="f1">RoboBuddies</h1>;
  }
}

export default Header;
