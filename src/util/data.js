import itr from '../assets/images/1603968068_ic_itr.png'
import einvoice from '../assets/images/1606372771_einvoicing3.png'
import cleargst from '../assets/images/1603967824_ic_clear_gst.png'
import ewaybill from '../assets/images/1603967983_ic_ewayb.png'
import clearmax from '../assets/images/1623152598_taxsavings.png'
import taxcloud from '../assets/images/1603968183_ic_taxcloud.png'
import cleartds from '../assets/images/1606218204_cleartds.png'
import clearproapp from '../assets/images/1614344289_clearproapp.png'
import clearinvest from '../assets/images/1606217655_clearinvest.png'
import clearservice from '../assets/images/1606217684_clearservices.png'
import blackapp from '../assets/images/1603967633_ic_black_app.png'
import clearapp from '../assets/images/1606369221_clearapp.png'
import clearone from '../assets/images/1618557796_clearone.png'


const Plans = [
    {
        planName: "For Enterprises",
        plan: [
            {
                icon: einvoice,
                name: "Clear E-invoicing"
            },
            {
                icon: cleargst,
                name: "Clear GST"
            },
            {
                icon: ewaybill,
                name: "ClearE-Waybill"
            },
            {
                icon: clearmax,
                name: "ClearMax ITC"
            },
        ]
    },
    {
        planName: "For Tax Experts",
        plan: [
            {
                icon: cleargst,
                name: "Clear GST"
            },
            {
                icon: taxcloud,
                name: "ClearTaxCloud"
            },
            {
                icon: cleartds,
                name: "ClearTDS"
            },
            {
                icon: clearproapp,
                name: "ClearPro App"
            },
        ]
    },
    {
        planName: "For Individuals",
        plan: [
            {
                icon: itr,
                name: "File ITR"
            },
            {
                icon: clearinvest,
                name: "ClearInvest"
            },
            {
                icon: clearservice,
                name: "ClearServices"
            },
            {
                icon: blackapp,
                name: "Black App"
            },
        ]
    },
    {
        planName: "For SMEs",
        plan: [
            {
                icon: cleargst,
                name: "Clear GST"
            },
            {
                icon: clearapp,
                name: "Clear App"
            },
            {
                icon: clearone,
                name: "Clear One"
            }
        ]
    }
]

export default Plans