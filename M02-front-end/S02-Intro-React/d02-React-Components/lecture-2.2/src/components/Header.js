import React from  'react';

class Header extends React.Component {

  render () {
    const { title, year } = this.props
    return (
      <header>
        <h1>{ title }</h1>
        <span>{ year }</span>
      </header>
    )
  }
}

export default Header;
