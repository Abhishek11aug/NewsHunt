import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchQuery);
    this.setState({ searchQuery: ""});
  };

  render() {
    return (
      <div>
      
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark border-5 p-1 mb-4">
            <div className="container-fluid">
                <span> <img src='./Logo.jpg' alt='logo'></img> </span>
                <a className="navbar-brand fs-1" href="/">PandaNews</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/Business">Business</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/Entertainment">Entertainment</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/General">General</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/Health">Health</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/Science">Science</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/Sports">Sports</Link></li>
                    <li className="nav-item">
                    <Link className="nav-link active fs-5" aria-current="page" to="/Technology">Technology</Link></li>
              </ul>
                <form className="d-flex" role="search" onSubmit={this.handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="genre"
                  value={this.state.searchQuery}
                  onChange={this.handleSearchInputChange}
                />
                </form>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}
