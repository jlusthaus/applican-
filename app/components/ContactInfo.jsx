import React from 'react';

export default class ContactInfo extends React.Component {
  constructor(props) {
    super (props);
  }

//makes 1 per company but you might have more than 1 contact at the same company
  render() {
    return (
      <div>
        <ul>
          <li>Name:     {this.props.name}</li>
          <li>Position: {this.props.position}</li>
          <li>Email;    {this.props.email}</li>
          <li>Follow Up:{this.props.followUpDate}</li>
        </ul>
      </div>
    );
  }
}
