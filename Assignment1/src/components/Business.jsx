import React from 'react'
import "./Styles.css"

function Business() {
    return (
        <>

            <div id='bsnmaindiv'>

                <h1 className='presence'>Presence That Has an Impact <p className='prearrows'><i className="arrow "></i> <i className="arrow1 "></i> <i className="arrow2 "></i></p></h1>

                <p className='presence1'>
                    We work in industries that are essential to the economy . <br />
                    The Redhantom flag is raised in all fields, including technology and agriculture
                </p>

                <div id='carddiv'>
                    <div className='card1'>
                        <h5>Technology</h5>
                        <h1 className='num'>#1</h1>
                    </div>

                    <div className='card2'>
                        <h5>Transport</h5>
                        <h1 className='num'>#2</h1>
                    </div>

                    <div className='card3'>
                        <h1 className='conspan2'>
                            RedPhantom <br />Transortation <br />Services
                        </h1>
                        <div className='conspan1'>
                            <span> For more than 40 years, RP Transportation provided safe,reliable<br />
                                reliable, affordable transportation services to cities, countries, <br />
                                municipalies, and other juridictiona entities, as well <br />
                                as private corporations, non-profit agencies,<br />
                                and community organizations.</span> <br />
                            <span className='conspan1tt'> For more than 40 years, RP Transportation provided safe,reliable<br />
                                reliable, affordable transportation services to cities, countries, <br />
                                municipalies, and other juridictiona entities, as well <br />
                                as private corporations, non-profit agencies,<br />
                                and community organizations.</span>
                        </div>
                        <h1 className='conspan2'># redport</h1>
                    </div>

                    <div className='card4'>
                        <h5>Finance</h5>
                        <h1 className='num'>#3</h1>
                    </div>

                    <div className='card5'>
                        <h5>E-Commerce</h5>
                        <h1 className='num'>#4</h1>
                    </div>
                </div>

                <div className='circles2'>
                    <div className='subcir1'>  </div>
                    <div className='subciroff1'></div>
                    <div className='subcir2'></div>
                    <div className='home1'>Business</div>
                    <div className='subcir3'></div>
                    <div className='subcir4'></div>
                    <div className='subcir5'></div>
                </div>



            </div>

        </>
    )
}

export default Business