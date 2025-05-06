import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'><img src="/images/logo.png" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-4">
        <li className="nav-item"> 
          <a className="nav-link" aria-current="page" href="/">NFTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">MARKETPLACE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">AUCTION HOUSE</a>
        </li>
      </ul>
      <div className='right rounded-start-0'>
      <img src="/images/wallet.png" alt="wallet" />
        <button className="btn " type="submit">Connect Wallet</button>
      </div>
    </div>
  </div>
</nav>
    )
}
