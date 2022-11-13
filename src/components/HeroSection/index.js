import video from "../../videos/video.mp4";
import { HeroContainer, HeroBg, VedioBg } from "./HeroElemnt";
import {
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElemnt";
import { Buton } from "../BtnElemnet";
import { useState } from "react";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VedioBg autoPlay loop muted src={video} type="vedioo/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual banking</HeroH1>
        <HeroP>Sign up for new account</HeroP>
        <HeroBtnWrapper>
          <Buton
            to="SignUp"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Buton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
