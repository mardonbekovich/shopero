import React from 'react';
import s from './ShopWrap.module.scss'
const ShopWrap = () => {
  return (
    <>
      <section className={s.shopwrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.card}>
              <h2>Casual </h2>
              <div className={s.card}></div>
              <h2> Casual </h2>
              <div className={s.card}></div>
              <h2>Casual</h2>
              <div className={s.card}></div>
              <h2>Casual</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopWrap;
