import React from 'react'
import scss from "./WelcomePage.module.scss"

const WelcomePage = () => {
return (
    <section className={scss.WelcomePage}>
        <div className="container">
            <div className={scss.content}>
                <div className={scss.content_text}>
                    <div className={scss.text_line}>
                        <h5>Featured Course</h5>
                        <div className={scss.underline}></div>
                    </div>

                    <h1>Run your own online <br /> learning platform</h1>

                    <p>A deep-dive on the Instagram algorythm, hashtags, content <br /> strategy, and branding.</p>

                    <h6>Kathryn Murphy</h6>

                    <button>LEARN MORE</button>
                </div>


                <div className={scss.content_img}></div>
            </div>
        </div>
    </section>
)
}

export default WelcomePage;