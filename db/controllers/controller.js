// const User = require('../models/User.js');
const User = require('../models/savedJobs.js');
const savedJobs = require('../models/savedJobs.js');

exports.getUserJobs = (req, res) => {
  const userId = req.user.id;
  savedJobs.findAll({ where: { user_id: userId } })
    .then((jobs) => {
      if (jobs) {
        res.status(200).send(jobs);
        return;
      }
      throw new Error('User Not Found');
    })
    .catch(err => res.status(400).send(err));
};


exports.deleteJob = (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.id;
  savedJobs.findById(jobId)
    .then((job) => {
      if (job && job.user_id === userId) {
        return job.destroy();
      }
      throw new Error('Job Not Found');
    })
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send(err));
};

exports.updateJobStatus = (req, res) => {
  const jobId = req.params.id;
  const { status } = req.body;
  savedJobs.findById(jobId)
    .then((job) => {
      if (job) {
        return job.update({ status });
      }
      throw new Error('Job Not Found');
    })
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send(err));
};

exports.addJobtoUser = (req, res) => {
  const userId = req.session.passport.user;
  savedJobs.findOrCreate({
    where:
      {
        user_id: userId,
        job_url: req.body.data.job_url,
      },
    defaults: {
      position: req.body.data.position,
      company: req.body.data.company,
      location: req.body.data.location,
      post_date: req.body.data.post_date,
    },
  })
    .then((data) => {
      res.json(data);
    });
};
