import React, { Component } from 'react';

//stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav> //react element//inja this hazf mishe va props be onvane ye parametr be in fn ezafe mishe
  );
};

/*class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{' '}
          <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>//props just work in class component
        </a>
      </nav>
    );
  }
}*/

export default NavBar;
