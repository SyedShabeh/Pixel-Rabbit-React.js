import React from 'react';
import { useRef, useState } from 'react';

export default function Wanted() {
    const sliderRef = useRef(null);
    const scrollAmount = 390;
    const [images] = useState([
        { id: 1, imageUrl: "/images/rabbit1.png" },
        { id: 2, imageUrl: "/images/rabbit2.png" },
        { id: 3, imageUrl: "/images/rabbit3.png" },
        { id: 4, imageUrl: "/images/rabbit4.png" },
        { id: 5, imageUrl: "/images/rabbit1.png" },
        { id: 6, imageUrl: "/images/rabbit2.png" },
        { id: 7, imageUrl: "/images/rabbit3.png" },
        { id: 8, imageUrl: "/images/rabbit4.png" },
    ]);

    return (
        <div>
            <div className="wanted text-center text-white">
                <h1>YOU ARE WANTED</h1>
                <p>MEET OUR 420 ORDINAL RABBITS COLLECTION</p>
                <p>AND THEIR DIFFERENT ELEMENTS</p>
                <button className="marketplace-btn">MARKETPLACE</button>
            </div>

            <div className="App">
                <button
                    className="scroll-left"
                    onClick={() => {
                        const container = sliderRef.current;
                        container.scrollLeft -= scrollAmount;
                    }}
                >
                    <img src="/images/left-arrow.png" alt="Scroll left" />
                </button>
                <div
                    className="images-container"
                    ref={sliderRef}
                    style={{
                        overflow: "auto",
                        scrollBehavior: "smooth",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                >
                    {images.map((image) => (
                        <div key={image.id} className="image-item">
                            <img src={image.imageUrl} alt={`Rabbit ${image.id}`} />
                        </div>
                    ))}
                </div>
                <button
                    className="scroll-right"
                    onClick={() => {
                        const container = sliderRef.current;
                        container.scrollLeft += scrollAmount;
                    }}
                >
                    <img src="/images/right-arrow.png" alt="Scroll right" />
                </button>
            </div>

            <div className="container conatiner1 my-5">
                <div className="row">

                    <div className="col-md-5 mb-4 mb-md-0 my-5">
                        <img src="/images/img1.png" alt="Description" className="img-fluid rounded image1" />
                    </div>


                    <div className="col-md-7 text-white my-5">
                        <h1 className="mb-3">TEXT FOR UTILITIES HERE</h1>
                        <p className="mb-3">Ordinal RABBITS, a gamified, interoperable metaverse currently
                            under development. The game blends mechanics from massively multiplayer online role playing games (MMORPGs) and web3-enabled virtual worlds. Think of it as a metaRPG where the players own the world, your NFTs can become playable characters, and thousands can play together in real time. PIXEL RABBITS, a gamified, interoperable metaverse currently
                            under development. The game blends mechanics from massively multiplayer online role playing games (MMORPGs) and web3-enabled virtual worlds. Think of it as a metaRPG where the players own the world, your NFTs can become playable characters, and thousands can play together in real time.</p>

                    </div>
                </div>
            </div>

            <div className="container conatiner2 my-5">
                <div className="row">
                    <div className="col-md-7 text-white my-5 order-2 order-md-1">
                        <h1 className="mb-3">TEXT FOR UTILITIES HERE</h1>
                        <p className="mb-3">Ordinal RABBITS, a gamified, interoperable metaverse currently
                            under development. The game blends mechanics from massively multiplayer online role playing games (MMORPGs) and web3-enabled virtual worlds. Think of it as a metaRPG where the players own the world, your NFTs can become playable characters, and thousands can play together in real time. PIXEL RABBITS, a gamified, interoperable metaverse currently
                            under development. The game blends mechanics from massively multiplayer online role playing games (MMORPGs) and web3-enabled virtual worlds. Think of it as a metaRPG where the players own the world, your NFTs can become playable characters, and thousands can play together in real time.</p>

                    </div>

                    <div className="col-md-5 mb-4 mb-md-0 my-5 order-1 order-md-2">
                        <img src="/images/img2.png" alt="Description" className="img-fluid rounded image2" />
                    </div>


                </div>
            </div>
        </div>
    );
}
