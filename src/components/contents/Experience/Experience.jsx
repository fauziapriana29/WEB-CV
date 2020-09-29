import React from 'react' 
import './Experience.css'

const Experience = () => {
    return (
        <div id="3" className="cont-experience">
            <div className="title-experience"><h1>EXPERIENCE</h1></div>
            <div className="title-content">
                <div className="cont-content cont-year">
                    <div className="year1 wow slideInUp">
                        <h3 className="head-title">2019-2020</h3>
                        <p className="p-title">Material Handler</p>
                    </div>
                    <div className="year2">
                        <h3 className="head-title p-year">2017-2018</h3>
                        <p className="p-title">SetUp Man</p>
                    </div>
                </div>
                <div className="cont-content cont-company">
                    <div className="company1">
                        <h3 className="head-title">Pt. PCI Electronic Internasional</h3>
                        <p className="p-title">At this company, i get a job for recived and cheked material, what the material has been recived is true the type and quantity or not</p>
                    </div>
                    <div className="company2">
                        <h3 className="head-title">Pt. NOK Precision Company Batam</h3>
                        <p className="p-title">And at this company, i get a job for mentoring some employees and prepare materials when they need it</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience