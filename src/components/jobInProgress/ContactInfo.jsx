import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import MDDelete from 'react-icons/md/delete';
import { removeContactApi, fetchContactsApi } from '../../actions/actions';

export class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchContacts(this.props.jobId);
  }

  render() {
    return (
      <div>
        <table style={{ border: '1px solid' }} >
          <thead style={{ border: '1px solid' }}>
            <tr>
              <th style={{ border: '1px solid' }}>Name</th>
              <th style={{ border: '1px solid' }}>Position</th>
              <th style={{ border: '1px solid' }}>Email</th>
              <th style={{ border: '1px solid' }}>FollowUp Date</th>
              <th style={{ border: '1px solid' }}>Remove</th>
            </tr>
          </thead>
          <tbody style={{ border: '1px solid' }}>
            { Array.isArray(this.props.contacts) && this.props.contacts.map((el) => {
              return (
                <tr key={el.id} style={{ border: '1px solid' }}>
                  <td style={{ border: '1px solid' }}>{el.name}</td>
                  <td style={{ border: '1px solid' }}>{el.position}</td>
                  <td style={{ border: '1px solid' }}>{el.Email}</td>
                  <td style={{ border: '1px solid' }}>{el.FollowUp.toString()}</td>
                  <td>
                    <button onClick={() => this.props.removeContactApi(el.id)}>
                      <MDDelete size={15} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isUserAuth: state.user, contacts: state.contacts });
const mapDispatchToProps = dispatch => ({
  fetchContacts(id) {
    dispatch(fetchContactsApi(id));
  },
  removeContactApi(id) {
    dispatch(removeContactApi(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
