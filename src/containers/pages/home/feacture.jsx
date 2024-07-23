import F1 from "assets/images/all-icon/f-1.png";
import F2 from "assets/images/all-icon/f-2.png";
import F3 from "assets/images/all-icon/f-3.png";
import Bg1 from "assets/images/bg-1.jpg";

function Feacture() {
    return (
        <section id="video-feature" className="bg_cover pt-60 pb-110" style={{backgroundImage: `url(${Bg1})`}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-last order-lg-first">
                    <div className="video text-lg-left text-center pt-50">
                        <a className="Video-popup" href="https://www.youtube.com/watch?v=bRRtdzJH1oE"><i className="fa fa-play"></i></a>
                    </div>
                </div>
                <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
                    <div className="feature pt-50">
                        <div className="feature-title">
                            <h3>Our Facilities</h3>
                        </div>
                        <ul>
                            <li>
                                <div className="singel-feature">
                                    <div className="icon">
                                        <img src={F1} alt="icon"/>
                                    </div>
                                    <div className="cont">
                                        <h4>Global Certificate</h4>
                                        <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="singel-feature">
                                    <div className="icon">
                                        <img src={F2} alt="icon"/>
                                    </div>
                                    <div className="cont">
                                        <h4>Alumni Support</h4>
                                        <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="singel-feature">
                                    <div className="icon">
                                        <img src={F3} alt="icon"/>
                                    </div>
                                    <div className="cont">
                                        <h4>Books & Library</h4>
                                        <p>Gravida nibh vel velit auctor aliquetn auci elit cons solliazcitudirem sem quibibendum sem nibhutis.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="feature-bg"></div>
    </section>
    )
}

export default Feacture;