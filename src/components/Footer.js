import React from 'react'

export default function Footer() {
  return (
    <div>
        <img src="/images/footerleft.png" alt="" className='footer-left'/>
      <div className="footer text-center mt-5">
        <img src="/images/logo.png" alt="" className='footer-alien'/>
        <p className='copyright mt-3 text-white'>© 2023 ALL RIGHTS RESERVED</p>
        <img src="/images/discord.png" alt="" className='f-discord mt-2 ms-2'/>
        <img src="/images/rat.png" alt="" className='f-rat mt-2 ms-2'/>
        <img src="/images/twitter.png" alt="" className='f-twitter mt-2 ms-2'/>
        <img src="/images/youtube.png" alt="" className='f-youtube mt-2 ms-2'/>
        <img src="/images/twitterbird.png" alt="" className='f-twitterbird mt-2 ms-2' />
        <p className=' footers-text text-white mb-0 mt-4'>COPYRIGHT RESERVED TO ORDINAL RABBITS.</p>
        <p className='footers-text text-white mb-5'>TERMS & CONDITIONS - PRIVACY POLICY</p>
      </div>
        <img src="/images/footerright.png" alt="" className='footer-right'/>
      <div className='footer-bottom mt-5'>
            <img src="/images/footerbottom.png" alt="" className='mt-5'/>
      </div>
    </div>
  )
}
