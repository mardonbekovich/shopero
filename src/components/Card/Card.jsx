import React from 'react';
import s from './Card.module.scss';
const Card = ({
  image,
  name = 'coming soon...',
  rate = '20',
  price = 'no',
}) => {
  return (
    <div className={s.card}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <img src="" alt="" />
      <b>{price}</b>
    </div>
  );
};

export default Card;
