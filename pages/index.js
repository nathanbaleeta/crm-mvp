import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../src/components/Layout/HeaderComponent';

import RoadmapParticipantJourneyForm from '../src/components/Roadmap/RoadmapParticipantJourneyForm';

import MembershipJourneyForm  from '../src/components/Membership/MembershipJourneyForm';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="sm">
      {/* <RoadmapParticipantJourneyForm/>   */}
        <MembershipJourneyForm/>  
    
      </Container>
    </React.Fragment>
  );
}