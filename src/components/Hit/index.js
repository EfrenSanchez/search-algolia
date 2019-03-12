//Dependencies 
import React from 'react';

//Algolia
import { Highlight } from 'react-instantsearch-dom';

//Bootstrap
import { Jumbotron } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';


const Hit = ({hit}) =>
  <div>
      <img src={hit.image_path} align="left" alt={hit.name} />
      <a href={hit.image_path}>ENLACE AQUI</a>
      <h1 className="display-5"> <Highlight attribute="name" hit={hit} /> </h1>
      <p className="lead"> <Highlight attribute="description" hit={hit} /> </p>
      <hr className="my-2" />
      {/* <p>${hit.price}</p> */}
  </div>

export default Hit;