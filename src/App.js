//Dependencies
import React, { Component } from 'react';

//Styles
import './App.css';

//Bootstrap
import { Container, Row, Col } from 'reactstrap';

//Components
import Hit from './components/Hit';

//Algolia
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch('S60U2YE690', 'faebbae7cd576634e2f364a75474c2f2');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container >
          <h1>Actors</h1>
          <InstantSearch indexName="getstarted_actors" searchClient={searchClient}>
          <Row>
            <Col sm="3">
              <ClearRefinements />
              <h2>Brands</h2>
              <RefinementList attribute="brand" />
              <Configure hitsPerPage={8} />
            </Col>
            <Col>
              <SearchBox />
              <Hits hitComponent={Hit} />
              <Pagination />
            </Col>
          </Row>
          </InstantSearch>
        </Container>
      </div>
    );
  }
}

export default App;
