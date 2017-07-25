import axios from 'axios';
import { SET_SEARCH_TERM, SEE_JOB_DETAILS, SET_JOB_DESC, ADD_CONTACT, SET_USER_NOTES, REMOVE_CONTACT, SET_CONTACTS } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function selectJobDetails(jobDetail) {
  return { type: SEE_JOB_DETAILS, payload: jobDetail };
}

export function setJobDesc(jobDesc) {
  return { type: SET_JOB_DESC, payload: jobDesc };
}

export function addContact(name, position, Email, FollowUp, jobId, id) {
  return { type: ADD_CONTACT, payload: { name, position, Email, FollowUp, jobId, id } };
}

export function addContactApi(name, position, Email, FollowUp, jobId) {
  return (dispatch) => {
    axios.post('/api/contacts', { name, position, Email, FollowUp, jobId })
      .then((res) => {
        return dispatch(addContact(name, position, Email, FollowUp, jobId, res.data.id));
      })
      .catch(err => console.error(err));
  };
}

export function setUserNotes(notes) {
  return { type: SET_USER_NOTES, payload: notes };
}

export function removeContact(id) {
  return { type: REMOVE_CONTACT, payload: id };
}

export function removeContactApi(id) {
  return (dispatch) => {
    axios.delete(`/api/contacts/${id}`)
      .then((res) => {
        return dispatch(removeContact(id));
      })
      .catch(err => console.error(err));
  };
}

export function setContacts(contacts) {
  return { type: SET_CONTACTS, payload: contacts };
}

export function fetchContactsApi(id) {
  return (dispatch) => {
    axios.get(`/api/contacts/${id}`)
      .then((res) => {
        return dispatch(setContacts(res.data));
      })
      .catch(err => console.error(err));
  };
}
