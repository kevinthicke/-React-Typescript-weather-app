import * as React from 'react';
import { Grid, Button } from 'react-bootstrap';
import Header from './components/Header';
import { titleApp, linkToRepository } from './utils/url';
import { fetchCurrentWeather } from './utils/fetchCurrentWeather';

export default class App extends React.Component <{}, {}> {
  getCurrentData() {
    fetchCurrentWeather('London');
  }

  render() {
    return (
      <Grid>
        <Header title={titleApp} link={linkToRepository}/>
        <Button onClick={this.getCurrentData}></Button>
      </Grid>
    );
  }
}
