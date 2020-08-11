import React from "react";
import styled from "styled-components";
import {
  FlexRowCenter,
  FlexRowSpaceBetweenHorizontal,
  FlexCol,
  HideMobile,
  StyledLink,
} from "../../Default/Default";
import { theme } from "../../Theme";
import { Button } from "../../Default/Buttons/Button";

export class Intro extends React.Component {
  render() {
    return (
      <Wrap>
        <ContentDiv>
          <InnerDiv>
            <HideMobile breakpoint="900px">
              <Logo src="assets/barny-logo.png" alt="logo" />
            </HideMobile>
            <InnerText>
              <Title>Minecraft Server</Title>
              <SubTitle>Twitch subscriber only whitelist</SubTitle>
              <StyledLink to="/dashboard">
                <Button
                  width="250px"
                  height="50px"
                  gradient="linear-gradient(to bottom, rgba(255, 122, 157, 1), rgba(242, 212, 147, 1))"
                  fontSize={theme.font.size.L}
                  bold
                >
                  OPEN DASHBOARD
                </Button>
              </StyledLink>
            </InnerText>
          </InnerDiv>
        </ContentDiv>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  overflow: hidden;
`;

const ContentDiv = styled(FlexRowCenter)`
  height: 100vh;

  &::before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    background: linear-gradient(rgba(52, 73, 94, 0.6), rgba(52, 73, 94, 0.6)),
      url("/assets/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    filter: blur(5px);
    width: 100%;
    height: 100%;
    transform: scale(1.3);

    @media only screen and (max-width: 1366px) {
      .parallax {
        background-attachment: scroll;
      }
    }
  }
`;

const InnerDiv = styled(FlexRowSpaceBetweenHorizontal)`
  width: 100%;
  max-width: 900px;
  margin: ${theme.contentMargin};

  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 300px;
  z-index: 5;

  @media only screen and (min-width: 901px) {
    animation: fade-in-left 1s forwards 1 ease-out;
  }

  @keyframes fade-in-left {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const InnerText = styled(FlexCol)`
  max-width: 510px;

  @media only screen and (max-width: 900px) {
    align-items: center;

    & > span {
      text-align: center;
    }
  }

  & > span {
    padding-bottom: 20px;
    white-space: pre-wrap;
  }

  & > * {
    @media only screen and (min-width: 901px) {
      animation: fade-in 2s forwards 1 ease-out;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  color: ${theme.font.color.title};
  font-weight: bold;
  font-size: ${theme.font.size.title};

  @media only screen and (max-width: 550px) {
    font-size: ${theme.font.size.XXXL};
  }
`;

const SubTitle = styled.span`
  color: ${theme.font.color.subtitle};
  font-size: ${theme.font.size.subtitle};
  @media only screen and (max-width: 550px) {
    font-size: ${theme.font.size.XL};
  }
`;
