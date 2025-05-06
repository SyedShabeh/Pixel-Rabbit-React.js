import React from 'react'



export default function Home() {

  return (
    <div
      className='home d-flex align-items-center ig-fluid'
      style={{
        background: 'url(/images/hero.png) no-repeat center center/cover',
        position: 'relative',
      }}
    >
      <div className='container text-left text'>
        <p className='content'>ORDINAL RABBITS</p>
        <p className='secondP content'>420 RABBITS</p>
        <p className='thirdP content'>ON BTC!</p>
        <p className="para">A members only community for web3 natives, early adopters and absolutely everyone </p>
        <div className='btns-home'>
        <button className='mint-btn'>MINT NOW</button>
        <button className='discord-btn ms-2'>JOIN DISCORD</button>
        </div>
        <div className='d-flex'>
          <img className='carrot' src="/images/carrot.png" alt="" />
        </div>
        <div className='d-flex'>
          <img className='rabbits' src="/images/rabbits.png" alt="" />
        </div>
      </div>
    </div>
  )
}
