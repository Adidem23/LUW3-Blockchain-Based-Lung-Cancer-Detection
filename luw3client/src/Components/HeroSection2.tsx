import '../CSS/HeroSection2.css'
import Spline from '@splinetool/react-spline'
import Swing from 'react-reveal/Swing';
import RubberBand from 'react-reveal/RubberBand';
import Tada from 'react-reveal/Tada'
import { useState } from 'react'

const HeroSection2 = () => {

    const [Hovered, setHovered] = useState<boolean>(false);
    const [DIvsHovered, setDIvsHovered] = useState<boolean>(false);
    const [DIvs1Hovered, setDIvs1Hovered] = useState<boolean>(false);



    return (
        <>
            <div className='section_protocol' style={{ marginTop: "20px" }}>

                <div className="padding-global">

                    <div className="container-large">

                        <div className="padding-section-large">

                            <div className="padding-bottom padding-xxhuge"></div>
                            <div className="protocol-heading-content" id="lvdu">
                                <div className="feature-headers-wrapper">
                                    <Swing when={Hovered}><h2 className="heading-style-h1" onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>Come With Us In <span className="gradient-orange-yellow">Revolutionizing </span>Health!!!</h2></Swing></div>
                                <div className="padding-bottom padding-xxhuge"></div>
                                <div className="protocol-bg-blur"></div></div>
                            <div className="protocol-wrapper">

                                <div className="big-planet-wrapper">
                                    <Spline scene="https://prod.spline.design/Qcbtk9Lc2kVVu33B/scene.splinecode" />
                                </div>
                                <div className="protocol-perks-content" >

                                    <RubberBand  when={DIvsHovered}><div id="w-node-_24c91334-8610-6c2c-7f1f-ac870cf8689c-493d175c" className="cards_protocol-perk space" onMouseEnter={()=>{setDIvsHovered(true)} } onMouseLeave={()=>{setDIvsHovered(false)}}>

                                        <h2 className="heading-style-h4">Decentralized<br />Data Storage 😎😎</h2>
                                        <p className="text-size-regular">Decentralized data storage in health websites is a groundbreaking approach that prioritizes security, privacy, and accessibility.</p>
                                        <button className="buttonity">Check It </button>
                                    </div></RubberBand>


                                    <Tada when={DIvs1Hovered}>
                                        <div id="w-node-_29086620-38fb-fea9-6ab8-8cebe4d75493-493d175c" className="cards_protocol-perk mobile-right" onMouseEnter={()=>{setDIvs1Hovered(true)} } onMouseLeave={()=>{setDIvs1Hovered(false)}} ><h2 className="heading-style-h4">Diseases  🫥&amp; Predictions 🤐</h2><p className="text-size-regular">Disease prevention is a cornerstone of public health, encompassing a range of strategies to safeguard individuals and communities.</p>
                                        <button className="buttonity">Check It </button>

                                    </div></Tada>

                                    <div id="w-node-_9bf4508f-53c3-41b0-7dfb-bc46e5ef7f5c-493d175c" className="cards_protocol-perk"><h2 className="heading-style-h4">Rewards 🤑🤑🤑 </h2><p className="text-size-regular">Rewards will Decided On How Much Time You are on LUW3 and How Active Are You On LUW3</p>
                                        <button className="buttonity">Check It </button>
                                    </div>

                                    <div id="w-node-_5ddcac2a-ea9f-db39-0928-7a14754e6731-493d175c" className="cards_protocol-perk space mobile-right">
                                        <h2 className="heading-style-h4">Security 😈😈</h2>
                                        <p className="text-size-regular">Security in blockchain is a paramount concern, underpinning its reputation as a robust and trustworthy technology.&nbsp;</p>
                                        <button className="buttonity">Check It </button>
                                    </div>

                                </div></div></div></div></div>

            </div>

        </>
    )
}

export default HeroSection2