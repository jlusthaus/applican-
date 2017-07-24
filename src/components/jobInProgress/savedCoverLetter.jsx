import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserJobs } from '../../actions/actions';
import FileUploader from '../shared/fileUploader';

class SavedCoverLetter extends Component {
  constructor(props) {
    super(props);
    this.state = { showUploadForm: false };
    this.toggleUploadForm = this.toggleUploadForm.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  toggleUploadForm() {
    this.setState({ showUploadForm: true });
  }
  handleUpload() {
    this.props.fetchJobs();
    this.setState({ showUploadForm: false });
  }
  render() {
    const { jobId, coverLetterKey } = this.props;
    const { showUploadForm } = this.state;
    const endpointUrl = `/coverletter/${jobId}`;
    const render = (coverLetterKey && !showUploadForm) ?
      (<div>
        <a href={endpointUrl} download>Cover Letter</a>
        <button onClick={this.toggleUploadForm}>Update</button>
      </div>)
      : (<FileUploader endpointUrl={endpointUrl} onSubmit={this.handleUpload} />);
    return render;
  }
}
const mapDispatchToProps = dispatch => ({
  fetchJobs() {
    dispatch(fetchUserJobs());
  },
});
export default connect(null, mapDispatchToProps)(SavedCoverLetter);
