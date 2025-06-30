// Create your About component here
import IMG from "../assets/Detective.png";

const About = () => {
    return(
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Hello I am a second year student at Strathmore University studying Computer Science
                    and I am passionate about software development, particularly in the areas of web and mobile applications. 
                    I enjoy solving complex problems and continuously learning new technologies to enhance my skills.
                </p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;