import React from 'react';
import './App.css';
import Row from './Row'
import request from './request';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">



      <Nav></Nav>

      <Banner></Banner>

      <Row title="Netflix Originals"
        fetchURL={request.fetchnetflixoriginals}
        isLargeRow={true}>
      </Row>
      <Row title="Trending" fetchURL={request.fetchtrending}></Row>
      <Row title="Popular" fetchURL={request.fetchpopular}></Row>
      <Row title="Now Playing" fetchURL={request.fetchnowplaying}></Row>
      <Row title="Upcoming" fetchURL={request.fetchupcoming}></Row>
    </div>
  );
}

export default App;
