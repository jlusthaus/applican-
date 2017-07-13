import React from 'react';

const JobTable = props => (
  <table className="mui-table">
    <thead>
      <tr>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.userJobs.filter(job => job.status < 0).map(job =>
        (<tr key={job.id}>
          <td width={50}>
            <span>
              <button
                className="mui-btn mui-btn--fab mui-btn--danger mui-btn--small"
                onClick={() => props.handleAddJobToQueue(job)}
              >+
              </button>
            </span>
          </td>
          <td>{job.position}</td>
          <td>{job.company}</td>
          <td>{job.updatedAt}</td>
        </tr>))
      }
    </tbody>
  </table>
);

export default JobTable;
