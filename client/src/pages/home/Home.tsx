import './Home.scss'
import cursorgif from '../../assets/cursor.gif'
import arrowgif from '../../assets/arrow.gif'

function Home() {

    return (
        <div className="homePage">
            <div className="photos">


                <div className="img1">

                </div>
                <div className="img2">

                </div>
                <div className="arrow">
                    <img src={arrowgif} style={{width:"100%",height:"100%"}} />
                </div>
            </div>
            <div className="text">
               <div className="heading">Generate Professional Headshots in Seconds</div>
                <div>Transform your photos into professional headshots effortlessly! Simply upload your picture, and our
                    cutting-edge platform uses AI to generate stunning, polished headshots in seconds. Perfect for
                    LinkedIn profiles, resumes, or business websites—no professional photography needed.
                </div>
                <div className="animatedButton">
                    <div className="button">Generate</div>
                    <div className="cursorGIF">
                        <img src={cursorgif} style={{width:"100%",height:"100%"}} />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Home