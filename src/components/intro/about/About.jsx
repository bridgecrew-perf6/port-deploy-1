import intro from "../intro"
import "./about.css"
import Award from "../../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://i.ibb.co/fSxfS5s/Created-with-RNI-Films-app-Preset-Agfa-Optima-200-Faded.jpg"
                     alt="" 
                     className="a-img" />
                    </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am a UI Designer and Front End Developer from Garland, Texas.
                </p>
                <p className="a-desc">
                    I am 22 years old and have been doing HTML, CSS, JavaScript and ReactJS for the past 3 years. Creating responsive websites has always been one of my favorite hobbies. Below are some screenshots of personal favorite projects.
                </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Associate of Applied Science Multimedia Technology -  Multimedia Web Design</h4>
                    <p className="a-award-desc">
                    August 2018 - Graduated 08/2021
                    </p>
                </div>
            </div>
            </div>
    
        </div>
    )
}

export default About
