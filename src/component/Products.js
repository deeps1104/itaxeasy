import React from 'react'
import './product.css'
import itr from '../assets/images/ITRE-filing.png'
import taxconsultant from '../assets/images/taxConsultant.png'
import invoicing from '../assets/images/Invoicing.png'
import gst from '../assets/images/1603967824_ic_clear_gst.png'

const Products = () => {
  return (
    <div className='productMain'>
        <div className='productMainSection'>
            <h1>Popular products</h1>
            <div className='card-1'>
                <img src={itr} alt="itr" />
                <h4>ITR e-filing</h4>
                <p>File tax returns in under 7 minutes</p>
            </div>

            <div className='card-2'>
                <img src={taxconsultant} alt='taxco nsultant' />
                <h4>Tax Consultants</h4>
                <p>ITR & GST filing, business & legal compliance</p>
            </div>

            <div className='card-3'>
                <img src={invoicing} alt="invoice" />
                <h4>E-invoicing</h4>
                <p>Bulk invoice in Tally or any ERP</p>
            </div>

            <div className='card-4'>
                <img src={gst} alt="gst" />
                <h4>GST Software</h4>
                <p>G1-G9 filings made 3x faster</p>
            </div>
        </div>
    </div>
  )
}

export default Products