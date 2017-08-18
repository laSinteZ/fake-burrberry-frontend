import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;    
  }

  & + &{
    border-top: 1px solid #c6c6c6;
    padding-top: 3rem;    

    @media screen and (min-width: 62rem) {
      padding-top: 4rem;    
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-family: Lora, serif;
  font-weight: normal;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #171717;
  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    margin-bottom: 2rem;    
  }
`;

export default function Group(props) {
  const allCards = props.cards.map(card =>
    (<div className="col-xs-6 col-md-3" key={card.image.toString()}>
      <Card
        title={card.title}
        price={card.price}
        currency={card.currency}
        image={card.image}
        colours={card.colours}
        promoLabel={card.promoLabel}
      />
    </div>),
  );

  return (
    <Wrapper>
      <Title>
        {props.title}
      </Title>
      <div className="row">
        {allCards}
      </div>
    </Wrapper>
  );
}

Group.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
