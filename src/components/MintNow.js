import React from 'react'

export default function MintNow() {
    return (
        <>
            <div class="cloud-container text-center">
                <img className='img img-fluid' src="/images/mintMain.png" alt="" />
                <img src="/images/leftCloud.png" class="cloud-left" alt="Decorative cloud" />
                <div class="breaking-news-content pt-3">
                    <p>YOU GOT HERE JUST IN TIME.</p>
                    <p className='mint-para'>Ordinal RABBITS, here goes the description text for the entire project. ere goes the description text for the entire project. ere goes the description text for the entire project.ere goes the description text for the entire project. Here goes the description text for the entire project.</p>
                </div>
                <img src="/images/rightCloud.png" class="cloud-right" alt="Decorative cloud" />
            </div>
            <div className='text-center'>
                <button className='mint-button'>Mint Now</button>
            </div>
            <footer class="custom-footer">
                <div class="footer-content">
                    <div class="footer-text">
                        <p>BREAKING NEWS  <img src="/images/coin.png" alt="" /> 420 Ordinal rabbits <img src="/images/coin.png" alt="" />  breaking news</p>
                    </div>
                </div>
            </footer>
            <div class="footer-coin">
                <img src="/images/bitcoin.png" alt="Decorative coin" class="coin-image" />
            </div>
        </>
    )
}
