import { AboutContainer, InfoContainer, StyledImage } from "./About.style";

import codingSvg from "../../assets/coding.svg";

const About = () => {
    return (
        <AboutContainer wrap="wrap">
            <StyledImage src={codingSvg} />
            <div>
                <h1>
                    About Software Developer <span>Mustafa Karakas</span>
                </h1>
            </div>
            <InfoContainer>
                <h2>Hi, I'am Mustafa</h2>
                <h3>I'm currently learning Front-End Development Languages.</h3>
                <h4>
                    I'm particularly interested in Front-end/Web Development, HTML, CSS,
          JS, React.
                </h4>
                <h2>
                    <a href="mailto:mustafakarakas_09@hotmail.com">Send email</a> :
                    mustafakarakas_09@hotmail.com
                </h2>
            </InfoContainer>
        </AboutContainer>
    );
};

export default About;
