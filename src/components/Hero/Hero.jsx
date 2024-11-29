import React from 'react';
import s from './Hero.module.scss'
const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.box}>
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p> Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <button>Shop now</button>

              <div className={s.row}>
              <div className={s.info}>
                  <h3>200+</h3>
                  <p>International Brands</p>
              </div>
              <div className={s.info}>
                  <h3>2,000+</h3>
                  <p>High-Quality Products</p>
              </div>
              <div className={s.info}>
                  <h3>30,000+</h3>
                  <p>Happy Customers</p>
              </div>
            </div>
            </div>
           
            <img src="/hero-img.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
