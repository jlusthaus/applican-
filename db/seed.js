const Jobs = require('./models/savedJobs');

Jobs.bulkCreate([{ status: 0, position: 'Hired Killer' }, { status: 0, position: 'Hired Killer' }])
  .then(res => console.log(res));
