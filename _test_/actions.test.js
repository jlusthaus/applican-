const actionTypes = require ('../app/actions/actionTypes');
const actions = require ('../app/actions/actions');

test('should create action to set search term', () => {
  const searchTerm = 'programmer';
  const expectedAction = {
    type: actionTypes.SET_SEARCH_TERM,
    payload: searchTerm
  };
  expect (actions.setSearchTerm(searchTerm)).toEqual(expectedAction);
});