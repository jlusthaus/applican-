import React from 'react';
import { connect } from 'react-redux';

const JobDetails = (props) => {
  let renderThis;
  const jobDescription = props.jobDesc ? <p>{props.jobDesc.data}</p> : <h3>loading</h3>;
  renderThis = props.selectJob.data ?
    (<div>
      <h2>{props.selectJob.data.jobTitle}</h2>
      <h2>{props.selectJob.data.company}</h2>
      <h4>{props.selectJob.data.location}</h4>
      <h4>{props.selectJob.data.date}</h4>
      {jobDescription}
    </div>)
    :
    renderThis = <div className="mui--text-center"><h1>Select a job</h1></div>;

  return (
    renderThis
  );
};

const mapStateToProps = state => ({ selectJob: state.jobDetailsDisplay, jobDesc: state.jobDesc });

export default connect(mapStateToProps)(JobDetails);
