import React from 'react';
import s from './Cards.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import Products from '/public/products.json';
import { Link } from 'react-router-dom';
const Cards = () => {
  return (
    <>
      <section className={s.Cards}>
        <div className="container">
          <SectionTitle orient="center">New Arrivals</SectionTitle>
          <div className={s.wrapper}>
            {Products.map((card) => (
             <Link to={`/product/${card.id}`}>
              <Card
                key={card.id}
                image={card.image}
                name={card.name}
                price={card.price}
              />
             </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
