import React from 'react'
import possibleimg from "./Images/possible.png"

function LatestNews() {
    return (
        <>
            <div id='mainlatestdiv'>
                <h1 className='latest'> Latest News   <p className='latarrows'><i class="arrow"></i> <i class="arrow1"></i> <i class="arrow2"></i></p></h1>

                <div className='newscard'>
                    <div className='subnewscard'>
                        <img className='pic1' alt='' src='https://th.bing.com/th/id/OIP.3mCk8SWOf0hCWMgYyfmkDwAAAA?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                        <h3 className='headings'> Facebook</h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                    </div>

                    <div className='subnewscard'>
                        <h3 className='headings'> Twitter</h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                        <img className='pic2' src='https://th.bing.com/th/id/OIP.zkiGD8fl-257bEqnk-cXgQHaFj?pid=ImgDet&rs=1' alt='' />
                    </div>

                    <div className='subnewscard'>
                        <img className='pic3' src='https://th.bing.com/th/id/OIP.HYXITCzqUz6CKMtOJ1dVPAHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
                        <h3 className='headings'> Linkdin</h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                    </div>

                    <div className='subnewscard'>
                        <h3 className='headings'> Instagram</h3>
                        <div className='subcolorcardtext2'>
                            For more than 40 years, RP Transportation provided safe,reliable
                            reliable, affordable transportation services to cities, countries,
                            municipalies, and other juridictiona entities, as well
                            as private corporations, non-profit agencies,
                            and community organizations.
                        </div>
                        <img className='pic4' src='https://th.bing.com/th/id/OIP.Y_t6vvCFLgl54y-R1yL7fAHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
                    </div>
                </div>

                <div className='anything'>
                    <div><img className='anyimg' src={possibleimg} /></div>
                    <div className='subanything'>
                        <h2>Nothing is impossible, the world itself says ' I'am possible '! ...</h2>
                        <p >The RedPhantom flag is raised in all fields, including technology and agriculture.</p>
                    </div>
                </div>


                <div className='circles4'>
                    <div className='subcir1'>  </div>
                    <div className='subciroff3'></div>
                    <div className='subcir2'></div>
                    <div className='subcir3'></div>
                    <div className='home3'>News</div>
                    <div className='subcir4'></div>
                    <div className='subcir5'></div>
                </div>

            </div>
        </>
    )
}

export default LatestNews