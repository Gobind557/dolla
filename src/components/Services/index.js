import {ServicesContainer,ServicesH1,ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon,ServicesP,}from './ServicesElemnt'
import Icon1 from'../../images/svg-1.svg'
import Icon2 from'../../images/svg-2.svg'
import Icon3 from'../../images/svg-3.svg'

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>grow business</ServicesH2>
            <ServicesP>help us make a better you</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Our offers</ServicesH2>
            <ServicesP>Web designing, app developemnt</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>efficient solutions</ServicesH2>
            <ServicesP>effective solutions</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
