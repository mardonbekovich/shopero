import React from 'react';
import s from './SectionTitle.module.scss';
const SectionTitle = ({ children="coming soon...",orient }) => {
  return (
    <>
      <h2 style={{ textAlign: orient }} className={s.title}>
        {children}
      </h2>
    </>
  );
};

export default SectionTitle;
