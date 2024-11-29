import React from 'react'
import s from './Email.module.scss'
const Email = () => {
  return (
   <>
   <section className={s.Email}>
      <div className="container">
         <div className={s.wrapper}>
            <div className={s.mal}>
               <b>STAY UPTO DATE ABOUT OUR LATEST OFFERS</b>
               <input placeholder='Enter your email address'  type="text" />
               <button>Subscribe to Newsletter</button>
            </div>
         </div>
      </div>
   </section>
   </>
  )
}

export default Email