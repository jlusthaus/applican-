import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addContactApi } from '../../actions/jobActions';

 class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({  name: 'name', position: 'position', Email: 'email', FollowUp: new Date() });
    this.jobId = -1
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFollowUpChange = this.handleFollowUpChange.bind(this);
  }

  handleNameChange(evt) {
    this.setState({ name: evt.target.value });
  }
  handlePositionChange(evt) {
    this.setState({ position: evt.target.value });
  }
  handleEmailChange(evt) {
    this.setState({ Email: evt.target.value });
  }
  handleFollowUpChange(evt) {
    this.setState({ FollowUp: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
            this.props.addContact(this.state.name, this.state.position, this.state.Email, this.state.FollowUp, this.props.jobId);
          }}
        >
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
          <input type="text" name="position" value={this.state.position} onChange={this.handlePositionChange} />
          <input type="text" name="Email" value={this.state.Email} onChange={this.handleEmailChange} />
          <input type="date" name="FollowUp" value={this.state.FollowUp} onChange={this.handleFollowUpChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addContact(name, position, Email, FollowUp, id) {
    dispatch(addContactApi(name, position, Email, FollowUp, id));
  },
});

export default connect(null, mapDispatchToProps)(AddContact);
