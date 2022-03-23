//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../src/components/Layout/HeaderComponent';

import RoadmapParticipantJourneyForm from '../src/components/Roadmap/RoadmapParticipantJourneyForm';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="sm">
      <RoadmapParticipantJourneyForm/>
    
      </Container>
    </React.Fragment>
  );
}