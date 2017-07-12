import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { selectJobDetails, setJobDesc } from '../actions/actions';

class JobListEntry extends Component {
  constructor(props) {
    super(props);

    this.selectJobHandle = this.selectJobHandle.bind(this);
  }

  selectJobHandle(e) {
    e.preventDefault();
    this.props.selectJob(this.props.job);

    axios({
      method: 'POST',
      url: '/api/dice',
      data: {
        url: this.props.job.detailUrl,
      },
    })
      .then((data) => {
        this.props.setJobDesc(data.data);
      });
  }

  render() {
    return (
      <div className="mui--divider-bottom">
        <a onClick={e => this.selectJobHandle(e, this.props.job)}>
          <h3>{this.props.job.jobTitle}</h3>
          <p>{this.props.job.company}: {this.props.job.location}</p>
        </a>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  selectJob(job) {
    dispatch(selectJobDetails(job));
  },
  setJobDesc(jobDesc) {
    dispatch(setJobDesc(jobDesc));
  },
});

export default connect(null, mapDispatchToProps)(JobListEntry);
