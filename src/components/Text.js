import React from "react";
import logo1 from'../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo7.png'
import logo8 from '../images/logo8.png'
import logo9 from '../images/logo9.png'
import logo10 from '../images/logo10.png'
import logo11 from '../images/logo11.png'
import logo12 from '../images/logo12.png'
import '../styles/Text.scss'


function Text() {
  return <div>

    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <div className="text-center">
                    <img src={logo1} alt="" />
                    <h6>ML & AI</h6>
                </div>
            </div>
            <div className="col-md-2">
                <div className="text-center">
                    <img src={logo2} alt="" />
                    <h6>Block chain</h6>
                </div>
            </div>
            <div className="col-md-2">
                <div className="text-center">
                    <img src={logo3} alt="" />
                    <h6>Amazon</h6>
                </div>
            </div>
            <div className="col-md-2">
                <div className="text-center">
                    <img src={logo4} alt="" />
                    <h6>Cyber Security</h6>
                </div>
            </div>
            <div className="col-md-2">
                <div className="text-center">
                    <img src={logo5} alt="" />
                    <h6>Development</h6>
                </div>
            </div>
            <div className="col-md-2">
                <div className="text-center">
                    <img src={logo6} alt="" />
                    <h6>Designing</h6>
                </div>
            </div>
            </div>
            
       
            {/* secondrow */}
            <div className="row">
            <div className="col-md-2 my-4">
                <div className="text-center">
                    <img src={logo7} alt="" />
                    <h6>Gaming</h6>
                </div>
            </div>
            <div className="col-md-2 my-4">
                <div className="text-center">
                    <img src={logo8} alt="" />
                    <h6>Architecture</h6>
                </div>
            </div>
            <div className="col-md-2 my-4">
                <div className="text-center">
                    <img src={logo9} alt="" />
                    <h6>IOS & AND</h6>
                </div>
            </div>
            <div className="col-md-2 my-4">
                <div className="text-center">
                    <img src={logo10} alt="" />
                    <h6>Marketing</h6>
                </div>
            </div>
            <div className="col-md-2 my-4">
                <div className="text-center">
                    <img src={logo11} alt="" />
                    <h6>3D</h6>
                </div>
            </div>
            <div className="col-md-2 my-4">
                <div className="text-center">
                    <img src={logo12} alt="" />
                    <h6>Animation</h6>
                </div>
            </div>
           
    </div>
        </div>
    
  </div>;
}

export default Text;
