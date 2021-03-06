import React from 'react'
import './Header2.css'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'

const Header2 = () => {
    return (
        <div className="header-cont" id="1">
            <div className="main-cont">
                <div className="cont-1 wow slideInLeft"></div>
                <div className="cont-2 wow slideInRight">
                        <h3 className="title-name">Fauzi Apriana Basri</h3>
                        <p className="title-programmer">Programmer JavaScript</p>
                        <h4 className="phone">Phone:</h4>
                        <p className="title-phone">0852-7436-8010</p>
                        <h4 className="phone sect2">Email:</h4>
                        <p className="title-phone">fauzicoding@gmail.com</p>
                        <h4 className="phone sect2">Address:</h4>
                        <p className="title-phone">Ruko Mall Botania2 A2 No.8</p>
                        <h4 className="phone sect2">Date of Birth:</h4>
                        <p className="title-phone">29th April 1999</p>
                </div>
                <div className="cont-3 wow slideInUp">
                <a href="https://www.instagram.com/fauziaprianapnb/?hl=id" ><img src={instagram} alt="" srcSet="" className="logo wow slideInUp" data-wow-delay=".3s"/></a>
                    <a href="https://twitter.com/AprianaFauzi" ><img src={twitter} alt="" srcSet=""  className="logo wow slideInUp" data-wow-delay=".4s"/></a>
                    <a href="https://www.facebook.com/fauzi.apriana.5/" ><img src={facebook} alt="" srcSet=""  className="logo wow slideInUp" data-wow-delay=".5s"/></a>
                    <a href="https://www.linkedin.com/in/fauzi-apriana-01541a1b8/" ><img src={linkedin} alt="" srcSet="" className="logo wow slideInUp" data-wow-delay=".6s"/></a>
                </div>
            </div>
        </div>
    )
}

export default Header2