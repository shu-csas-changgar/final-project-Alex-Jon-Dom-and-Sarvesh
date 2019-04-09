import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import people from '../assets/people.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${people}) no-repeat top;
    background-size: cover;
    color: #efefef;
    height: 750px;
    position: relative;
    z-index: -2;
    margin-bottom:0;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 class="text-center">Welcome</h1>
        <p class="text-center">to the ABC Group Website</p>
      </Container>
    </Jumbo>
  </Styles>
)