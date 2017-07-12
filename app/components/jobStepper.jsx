import React from 'react';
import Stepper from 'react-stepper-horizontal';

const stepsTitles = [{ title: 'Start' }, { title: 'Application' }, { title: 'Submit' }, { title: 'Interview' }, { title: 'Offer' }];


const JobStepper = (props) => {
  const steps = stepsTitles.map(step => Object.assign({}, step,
    { onClick: event => props.handleProgressClick (event.target.innerText, props.job) }));
  return (
    <Stepper steps={steps} activeStep={props.job.status} />
  );
};


export default JobStepper;
