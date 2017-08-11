import React from "react";
import styled from "styled-components";
import MobileHelp from "./MobileHelp";
import Navigation from "./Navigation";

const Footer = styled.footer`
  padding: 2rem 0.5rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 48rem) {
    padding: 2rem 0;
  }
`;

const TextOnlyButton = styled.button`
  padding: 0;
  border: none;
  background-color: #f3f3f3;
  color: #999999;
  text-align: left;
  font-size: 12px;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  line-height: 1rem;

  & + & {
    margin-top: 1rem;    
  }

  @media screen and (min-width: 48rem) {
    & + & {
      margin-top: 0;
      margin-left: 1.5rem;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 48rem) {
    flex-direction: row;
  }
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Navigation />
        <Controls>
          <TextOnlyButton type="button">Shipping country: Russian Federation</TextOnlyButton>
          <TextOnlyButton type="button">Language: English</TextOnlyButton>
        </Controls>
        <MobileHelp />
      </div>
    </Footer>
  );
}