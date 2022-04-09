import React from 'react'
import './Plans.css'
import plans from '../util/data'
const Plans = () => {
  return (
    <>
        <div className='mainSection'>
        {
            plans.map((item, index) => {
                return <div className='planMainSection' key={index}>
        <div className='uppersectionhead'>
            <h1>{item.planName}</h1>
        </div>
        <div className='lowersectionbody'>
           {
               item.plan.map((innerItem, i) => {
                   return  <div key={i}>
                <img src={innerItem.icon} alt="clearEBilling" />
                <p><a href='#'>{innerItem.name}</a></p>
            </div>
               })
           }
        </div>
    </div>
            })
        }
        </div>
    </>
  )
}

export default Plans