import React from 'react';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <tr>
          <td>Name: {this.props.name}</td>
          <td>Position: {this.props.position}</td>
          <td>Email: {this.props.Email}</td>
          <td>Follow Up:{this.props.FollowUp}</td>
        </tr>
      </div>
    );
  }
}
