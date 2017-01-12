import React, {Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav nav-pills">
            <li role="presentation" className="active"><Link to={"/"}>File List</Link></li>
            <li role="presentation"><Link to={"/newfile"}>New File</Link></li>
          </ul>
        </div>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}
