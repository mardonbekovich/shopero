import React from 'react';
import s from './Coments.module.scss';
const Coments = () => {
  return (
    <>
      <section className={s.Coments}>
        <div className="container">
          <div className={s.wrapper}>
            <h1>
              <b>OUR HAPPY CUSTOMERS</b>
            </h1>
            <div className={s.coment}>
              <div className={s.com}>
                <h2>⭐⭐⭐⭐⭐</h2>
                <h3>Sarah M.✅</h3>
                <p>
                  "I'm blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I've bought has exceeded my expectations.”
                </p>
              </div>
              <div className={s.com}>
              <h2>⭐⭐⭐⭐⭐</h2>
                <h3>Alex K.✅</h3>
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
              <div className={s.com}>
              <h2>⭐⭐⭐⭐⭐</h2>
                <h3>James L.✅</h3>
                <p>
                  "As someone who's always on the lookout for unique fashion
                  pieces, I'm thrilled to have stumbled upon Shop.co. The
                  selection of clothes is not only diverse but also on-point
                  with the latest trends.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coments;
