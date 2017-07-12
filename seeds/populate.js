const Sequelize = require('sequelize');
const db = require('../db/db.js');
const User = require('../db/models/User.js');
const SavedJobs = require('../db/models/savedJobs.js');
const Contacts = require('../db/models/contacts.js');

User.bulkCreate([
  { name: 'Jason Lovehouse', googleId: '1111111111111111111', email: 'Json@gmail.com', password: 'pazwerd1' },
  { name: 'Henrieta Han', googleId: '22222222222222222222', email: 'hh88@gmail.com', password: 'frisbee88' },
  { name: 'Christine', googleId: '333333333333333333333', email: 'czhao@gmail.com', password: '<3jp' },
]).then(() => {
  console.log('seeded users');
});

SavedJobs.bulkCreate([
  { company: 'Hack Reactor', contact_name: 'Jeff Harrison', status: 1, applied_date: new Date('June 30, 2017 10:15:00'), position: 'HiR', notes: 'looks like a cool place :)', user_id: 2 },
  { company: 'Shake Shack', contact_name: 'Senor Shake', status: -1, applied_date: new Date('July 10, 2017 12:00:00'), position: 'Junior Burger api engineer', notes: 'delicious burger api', user_id: 1 },
  { company: 'CyberCoders', contact_name: '', status: 3, applied_date: new Date(), notes: '' },
]).then(() => {
  console.log('seeded jobs');
});

Contacts.bulkCreate([
  { name: 'Senor Shake', position: 'shake master', Email: 'shackattack@gmail.com', FollowUp: new Date('July 11, 2017 12:30:00'), job_id: 2 },
  { name: 'Jeff Harrison', position: 'consulor', Email: 'jeff.harrison@hackreactor.com', FollowUp: new Date('July 3, 2017 1:13:00'), job_id: 1 },
]).then(() => {
  console.log('seeded contacts');
});
