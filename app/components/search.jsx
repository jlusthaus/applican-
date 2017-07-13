import React from 'react';
import JobDetails from './jobDetailsComponent';
import JobList from './jobList';

const Search = () => (
  <div>
    <div className="mui-row">
      <div className="mui-col-md-5 mui-col-md-offset-1">
        <JobList />
      </div>
      <div className="mui-col-md-5">
        <JobDetails />
      </div>
    </div>
  </div>
);

export default Search;
