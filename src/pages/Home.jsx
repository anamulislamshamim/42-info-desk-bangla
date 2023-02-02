import React from 'react'
import About42 from './allAbout42/About42';
import AdditionalBenifities from './allAbout42/AdditionalBenifities';
import AdmissionProcess42 from './allAbout42/AdmissionProcess42';
import CostAndWork from './allAbout42/CostAndWork';
import DoAlone from './allAbout42/DoAlone';
import Visa from './allAbout42/Visa';
import WhatIsPiscine from './allAbout42/WhatIsPiscine';
import WhoStudyAt42 from './allAbout42/WhoStudyAt42';
import Why42 from './allAbout42/Why42';
import Banner from './Banner';

export const Home = () => {
  return (
    <>
      <Banner />
      <About42 />
      <Why42 />
      <WhoStudyAt42 />
      <AdmissionProcess42 />
      <WhatIsPiscine />
      <DoAlone />
      <CostAndWork />
      <AdditionalBenifities />
      <Visa />
    </>
  );
};

export default Home