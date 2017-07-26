import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobListEntry from './jobListEntry';
import Button from 'muicss/lib/react/button';


class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelect: 0,
    };
    this.fetchJobsPage.bind(this);
    this.divide.bind(this);
  }

  fetchJobsPage(e) {
    e.preventDefault();
    this.setState({ pageSelect: e.target.value - 1 });
  }

  divide(arr, num) {
	  const pages = Math.floor(arr.length / num) + 1;
	  const result = [];
	  let start = 0;
	  while (start < arr.length) {
	    result.push(arr.slice(start, start + num));
	    start += num;
	  }
	  return result;
  }

  pagesArr(num) {
    const result = [];
    let count = 1;
    while (count <= num) { result.push(count); count++; }
    return result;
  }

  render() {
    return (
      <div>
        <div>
          {this.pagesArr(this.divide(this.props.jobAPIData.data, 10).length).map(num =>
            (<Button size="small" color="primary" variant="raised" value={num} onClick={e => this.fetchJobsPage(e)}>Page {num}</Button>))}
        </div><br />
        {this.divide(this.props.jobAPIData.data, 10)[this.state.pageSelect].map((job, idx) => (<JobListEntry job={job} key={idx} history={this.props.history} />))}

      </div>
    );
  }
}

const mapStateToProps = state => ({ jobAPIData: state.jobAPIData });

export default connect(mapStateToProps)(JobList);
